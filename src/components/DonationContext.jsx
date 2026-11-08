"use client";

import { createContext, useContext, useMemo, useState, useEffect } from "react";
import Swal from "sweetalert2";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { db, paymentDb } from "@/firebaseConfig";

export const DonationContext = createContext(null);

export function DonationContextProvider({ children }) {
  const [donationPaymentSession, setPaymentSession] = useState(false);

  // Load from localStorage only after client-side mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedSession = localStorage.getItem("donationPaymentSession");
      if (savedSession) {
        setPaymentSession(JSON.parse(savedSession));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("donationPaymentSession", JSON.stringify(donationPaymentSession));
    }
  }, [donationPaymentSession]);

  // ============================================
  // 💸 Finalize Online Donation Order
  // ============================================
  async function finalizeDonationOrder(paymentData, verificationNumber) {
    try {
      // 1. IDEMPOTENCY CHECK: Prevent duplicate orders if triggered multiple times
      const ordersRef = collection(db, "donationOrders");
      const qCheck = query(ordersRef, where("paymentVerificationNumber", "==", verificationNumber));
      const existingOrders = await getDocs(qCheck);

      if (!existingOrders.empty) {
        console.warn("Donation order already finalized for verification number:", verificationNumber);
        return; 
      }

      const storedDonation = localStorage.getItem('pendingDonation');
      if (!storedDonation) {
        console.warn("No pending donation found in localStorage.");
        return;
      }

      const donationPayload = JSON.parse(storedDonation);

      donationPayload.paymentData = paymentData;
      donationPayload.paymentVerificationNumber = verificationNumber;

      // 2. Save order to Firestore
      const docRef = await addDoc(collection(db, "donationOrders"), donationPayload);

      const donorEmail = donationPayload.accountInfo?.email || '';
      const sellerEmail = 'elizabethfoundationss21@gmail.com'; // Configuration or support email

      // 3. ISOLATED EMAIL BLOCK
      try {
        await fetch('/api/send-donation-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            orderId: docRef.id,
            payload: donationPayload,
            recipients: [donorEmail, sellerEmail].filter(Boolean)
          })
        });
      } catch (emailErr) {
        console.error("Error triggering donation email notification (non-fatal):", emailErr);
      }

      // 4. Cleanup localStorage
      localStorage.removeItem('pendingDonation');

    } catch (error) {
      console.error("Error finalizing online donation order:", error);
      Swal.fire('Error', 'Failed to save your donation record. Please contact support.', 'error');
      throw error; 
    }
  }

  // ============================================
  // 🔁 Poll Firestore for Donation Payment Verification
  // ============================================
  const startDonationPolling = (verificationNumber) => {
    if (typeof window === "undefined") return;

    let email = null;
    try {
      const pending = localStorage.getItem("pendingDonationTransaction");
      if (pending) {
        const parsed = JSON.parse(pending);
        email = parsed?.transaction?.email;
      }
    } catch (err) {
          console.error("Failed to parse email from pendingDonationTransaction:", err);
    }

    if (!verificationNumber || !email) {
      console.warn("⚠️ Missing verification number or email for donation polling");
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
      
            await finalizeDonationOrder(paymentData, verificationNumber);
            localStorage.removeItem("pendingDonationTransaction");
            setPaymentSession(false);
            
            Swal.fire({
       
                icon: "success",
              title: "Donation Successful!",
              text: "Thank you for your generous contribution! Check your email inbox or spam folder for details.",
              allowOutsideClick: false
            });
          }
        }
      } catch (err) {
        console.error("🔥 Firestore donation polling error:", err);
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
  // 💳 Paystack Payment Gateway Integration for Donations
  // ============================================
  const payWithPaystack = async (amount, currency = "NGN", subaccountCode, donorEmail, donorName) => {
    const email = donorEmail;
    const name = donorName;

    console.log("Donation Payment Details:", { email, name, amount, currency, subaccountCode });

    if (!email || !amount || !currency || !subaccountCode || !name) {
      Swal.fire({
        icon: "warning",
        title: "Missing Information",
        text: "Please provide a valid email, name, currency, subaccount and amount before proceeding with the donation.",
      });
      return;
    }

    const confirmation = await Swal.fire({
      title: "Start Donation Payment",
      text: `You are about to start a donation process of ${currency} ${Number(amount).toLocaleString()}. Do you wish to proceed Now?`,
      showCancelButton: true,
      confirmButtonText: "Proceed Now",
      cancelButtonText: "Cancel",
    });

    if (!confirmation.isConfirmed) {
      return;
    }

    const verificationNumber = `${Date.now()}D${Math.floor(Math.random() * 1000000000)}`;
    const source = "Foundation Website - Donations";
    const purpose = "Fundraising Campaign Contribution";

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
          "pendingDonationTransaction",
          JSON.stringify({ transaction: initialTransaction })
        );
      }
    } catch (err) {
      console.error("Failed to save pending donation transaction to localStorage:", err);
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
          Swal.fire({ text: "Donation processing... Please wait", showConfirmButton: false });
          Swal.showLoading();

          if (typeof startDonationPolling === "function") {
            startDonationPolling(verificationNumber);
          }
        },
        onCancel: () => {
          setPaymentSession(false);
          if (typeof window !== "undefined") {
            localStorage.removeItem("pendingDonationTransaction");
          }
          Swal.fire({ icon: "error", text: "Donation payment cancelled." });
        },
        onError: (error) => {
          setPaymentSession(false);
          if (typeof window !== "undefined") {
            localStorage.removeItem("pendingDonationTransaction");
          }
          Swal.fire({ icon: "error", text: `Donation payment failed: ${error.message}` });
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
      const pending = localStorage.getItem("pendingDonationTransaction");
      if (pending) {
        const parsed = JSON.parse(pending);
        savedVerificationNumber = parsed?.transaction?.metadata?.custom_payment_verification_number;
      }
    } catch (err) {
      console.error("Failed to parse verification number from pendingDonationTransaction:", err);
    }

    const stopPolling = startDonationPolling(savedVerificationNumber);

    return () => {
      if (stopPolling) stopPolling();
    };
  }, []);

  const value = useMemo(
    () => ({
      donationPaymentSession,
      setPaymentSession,
      payWithPaystack,
      startDonationPolling
    }),
    [donationPaymentSession]
  );

  return <DonationContext.Provider value={value}>{children}</DonationContext.Provider>;
}

export function useDonationContext() {
  const context = useContext(DonationContext);

  if (context === null) {
    throw new Error("useDonationContext must be used within DonationContextProvider");
  }

  return context;
}