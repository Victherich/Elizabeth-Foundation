"use client";

import { createContext, useContext, useMemo, useState, useEffect } from "react";
import Swal from "sweetalert2";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { db, paymentDb } from "@/firebaseConfig";

export const CharityShopContext = createContext(null);

export function CharityShopContextProvider({ children }) {
  const [charityShopPaymentSession, setPaymentSession] = useState(false);

  // Load from localStorage only after client-side mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedSession = localStorage.getItem("charityShopPaymentSession");
      if (savedSession) {
        setPaymentSession(JSON.parse(savedSession));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("charityShopPaymentSession", JSON.stringify(charityShopPaymentSession));
    }
  }, [charityShopPaymentSession]);

  // ============================================
  // 🛍️ Finalize Online Charity Shop Order
  // ============================================
  async function finalizeCharityShopOrder(paymentData, verificationNumber) {
    try {
      // 1. IDEMPOTENCY CHECK: Prevent duplicate orders if triggered multiple times
      const ordersRef = collection(db, "charityShopOrders");
      const qCheck = query(ordersRef, where("paymentVerificationNumber", "==", verificationNumber));
      const existingOrders = await getDocs(qCheck);

      if (!existingOrders.empty) {
        console.warn("Charity shop order already finalized for verification number:", verificationNumber);
        return; 
      }

      const storedOrder = localStorage.getItem('pendingOrder');
      if (!storedOrder) {
        console.warn("No pending charity shop order found in localStorage.");
        return;
      }

      const orderPayload = JSON.parse(storedOrder);

      orderPayload.paymentData = paymentData;
      orderPayload.paymentVerificationNumber = verificationNumber;

      // 2. Save order to Firestore
      const docRef = await addDoc(collection(db, "charityShopOrders"), orderPayload);

      const buyerEmail = orderPayload.accountInfo?.email || '';
      const sellerEmail = 'elizabethfoundationss21@gmail.com'; // Support / Admin email

      // 3. ISOLATED EMAIL BLOCK
      try {
        await fetch('/api/send-charity-shop-order-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            orderId: docRef.id,
            payload: orderPayload,
            recipients: [buyerEmail, sellerEmail].filter(Boolean)
          })
        });
      } catch (emailErr) {
        console.error("Error triggering charity shop email notification (non-fatal):", emailErr);
      }

      // 4. Cleanup localStorage
      localStorage.removeItem('pendingOrder');

    } catch (error) {
      console.error("Error finalizing online charity shop order:", error);
      Swal.fire('Error', 'Failed to save your purchase record. Please contact support.', 'error');
      throw error; 
    }
  }

  // ============================================
  // 🔁 Poll Firestore for Charity Shop Payment Verification
  // ============================================
  const startCharityShopPolling = (verificationNumber) => {
    if (typeof window === "undefined") return;

    let email = null;
    try {
      const pending = localStorage.getItem("pendingCharityTransaction");
      if (pending) {
        const parsed = JSON.parse(pending);
        email = parsed?.transaction?.email;
      }
    } catch (err) {
      console.error("Failed to parse email from pendingCharityTransaction:", err);
    }

    if (!verificationNumber || !email) {
      console.warn("⚠️ Missing verification number or email for charity shop polling");
      return;
    }

    let pollingActive = true;
    let intervalId;

    const fetchPayment = async () => {
      if (!pollingActive) return;

      try {
        const paymentsRef = collection(paymentDb, "paystack_webhooks");
        const q = query(
          paymentsRef,
          where("data.customer.email", "==", email),
          where("data.metadata.custom_payment_verification_number", "==", verificationNumber)
        );

        const snapshot = await getDocs(q);

        if (!snapshot.empty) {
          const successfulDoc = snapshot.docs.find(
            (doc) => doc.data()?.data?.status === "success"
          );

          if (successfulDoc) {
            pollingActive = false;
            clearInterval(intervalId);

            const paymentData = successfulDoc.data();

            Swal.fire({
              text: "...Please wait...",
              allowOutsideClick: false,
            });
            Swal.showLoading();
      
            await finalizeCharityShopOrder(paymentData, verificationNumber);
            localStorage.removeItem("pendingCharityTransaction");
            setPaymentSession(false);
            
            Swal.fire({
              icon: "success",
              title: "Purchase Successful!",
              text: "Thank you for supporting our charity store! Check your email inbox or spam folder for details.",
              allowOutsideClick: false
            });
          }
        }
      } catch (err) {
        console.error("🔥 Firestore charity shop polling error:", err);
      }
    };

    fetchPayment();
    intervalId = setInterval(fetchPayment, 10000);

    return () => {
      pollingActive = false;
      clearInterval(intervalId);
    };
  };

  // ============================================
  // 💳 Paystack Payment Gateway Integration for Charity Shop
  // ============================================
  const payWithPaystack = async (amount, currency = "NGN", subaccountCode, buyerEmail, buyerName) => {
    const email = buyerEmail;
    const name = buyerName;

    console.log("Charity Shop Payment Details:", { email, name, amount, currency, subaccountCode });

    if (!email || !amount || !currency || !subaccountCode || !name) {
      Swal.fire({
        icon: "warning",
        title: "Missing Information",
        text: "Please provide a valid email, name, currency, subaccount and amount before proceeding with checkout.",
      });
      return;
    }

    const confirmation = await Swal.fire({
      title: "Start Charity Shop Checkout",
      text: `You are about to pay ${currency} ${Number(amount).toLocaleString()}. Do you wish to proceed Now?`,
      showCancelButton: true,
      confirmButtonText: "Proceed Now",
      cancelButtonText: "Cancel",
    });

    if (!confirmation.isConfirmed) {
      return;
    }

    const verificationNumber = `${Date.now()}S${Math.floor(Math.random() * 1000000000)}`;
    const source = "Foundation Website - Charity Shop";
    const purpose = "Charity Store Merchandise Purchase";

    const initialTransaction = {
      status: "initialized",
      amount: amount,
      email,
      firstname: name,
      lastname: '',
      createdAt: new Date().toISOString(),
      paymentMethod: "Paystack",
      currency: currency,
      subaccount: subaccountCode,
      bearer: "subaccount",
      metadata: {
        custom_payment_verification_number: verificationNumber,
        source,
        purpose,
      },
    };

    try {
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "pendingCharityTransaction",
          JSON.stringify({ transaction: initialTransaction })
        );
      }
    } catch (err) {
      console.error("Failed to save pending charity transaction to localStorage:", err);
    }

    setPaymentSession(true);

    try {
      const PaystackPopModule = (await import("@paystack/inline-js")).default;
      const paystack = new PaystackPopModule();
      
      paystack.newTransaction({
        key: "pk_live_afb3375b9a770a5a332904dcf1a26e77c2a5f170",
        amount: amount * 100,
        email,
        firstname: name,
        lastname: '',
        subaccount: subaccountCode,
        bearer: "subaccount",
        metadata: {
          custom_payment_verification_number: verificationNumber,
          source,
          purpose,
        },
        onSuccess: () => {
          Swal.fire({ text: "Payment processing... Please wait", showConfirmButton: false });
          Swal.showLoading();

          if (typeof startCharityShopPolling === "function") {
            startCharityShopPolling(verificationNumber);
          }
        },
        onCancel: () => {
          setPaymentSession(false);
          if (typeof window !== "undefined") {
            localStorage.removeItem("pendingCharityTransaction");
          }
          Swal.fire({ icon: "error", text: "Checkout payment cancelled." });
        },
        onError: (error) => {
          setPaymentSession(false);
          if (typeof window !== "undefined") {
            localStorage.removeItem("pendingCharityTransaction");
          }
          Swal.fire({ icon: "error", text: `Checkout payment failed: ${error.message}` });
        },
      });
    } catch (error) {
      setPaymentSession(false);
      Swal.fire({ icon: "error", text: `Could not load Paystack: ${error.message}` });
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    let savedVerificationNumber = null;
    try {
      const pending = localStorage.getItem("pendingCharityTransaction");
      if (pending) {
        const parsed = JSON.parse(pending);
        savedVerificationNumber = parsed?.transaction?.metadata?.custom_payment_verification_number;
      }
    } catch (err) {
      console.error("Failed to parse verification number from pendingCharityTransaction:", err);
    }

    const stopPolling = startCharityShopPolling(savedVerificationNumber);

    return () => {
      if (stopPolling) stopPolling();
    };
  }, []);

  const value = useMemo(
    () => ({
      charityShopPaymentSession,
      setPaymentSession,
      payWithPaystack,
      startCharityShopPolling
    }),
    [charityShopPaymentSession]
  );

  return <CharityShopContext.Provider value={value}>{children}</CharityShopContext.Provider>;
}

export function useCharityShopContext() {
  const context = useContext(CharityShopContext);

  if (context === null) {
    throw new Error("useCharityShopContext must be used within CharityShopContextProvider");
  }

  return context;
}