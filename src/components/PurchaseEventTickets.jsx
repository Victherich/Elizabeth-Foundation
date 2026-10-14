"use client";

import { useEffect, useState } from "react";
import { db } from "@/firebaseConfig";
import { 
  collection, 
  getDocs, 
  query, 
  where, 
  addDoc, 
   onSnapshot ,
  serverTimestamp 
} from "firebase/firestore";

import styled from "styled-components";
import Swal from "sweetalert2";
import { useAppContext } from "@/components/Context";

// 🎨 THEME COLORS
const PrimaryNavy = "rgba(115, 23, 28, 0.95)";
const ThemeGradient = "linear-gradient(135deg, rgba(115, 23, 28, 0.95) 0%, rgba(85, 15, 18, 0.95) 100%)";

const Dark = "#0f172a";
const Border = "#cbd5e1";
const White = "#ffffff";
const TextMuted = "#475569";
const LightBg = "#f8fafc";
const AccentGold = "#d97706";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: ${Dark};
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px 10px;
  box-sizing: border-box;
  background-color: ${LightBg};
  // min-height: 100vh;
`;

const HeaderBanner = styled.div`
  background: ${ThemeGradient};
  color: ${White};
  padding: 20px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-shadow: 0 10px 25px rgba(115, 23, 28, 0.15);
  text-align: center;
`;

const ColorfulTitle = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  margin: 0;
  color: ${White};
  letter-spacing: -0.5px;
`;

const ColorfulSub = styled.p`
  font-size: 1rem;
  margin: 0;
  color: #f8fafc;
  opacity: 0.95;
`;

const TicketsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  box-sizing: border-box;
`;

// Ticket Pass Design
const TicketPass = styled.div`
  background: ${White};
  border-radius: 14px;
  border: 1px solid ${Border};
  box-shadow: 0 6px 20px rgba(15, 23, 42, 0.06);
  display: flex;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(115, 23, 28, 0.15);
    border-color: rgba(115, 23, 28, 0.4);
  }

  &::after {
    content: "";
    position: absolute;
    right: 260px;
    top: 0;
    bottom: 0;
    border-right: 2px dashed ${Border};
    @media (max-width: 768px) {
      display: none;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TicketMainBody = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
  box-sizing: border-box;
`;

const TicketStubBody = styled.div`
  background: #f8fafc;
  padding: 16px;
  width: 260px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  box-sizing: border-box;
  border-left: 1px dashed ${Border};

  @media (max-width: 768px) {
    width: 100%;
    border-left: none;
    border-top: 1px dashed ${Border};
  }
`;

const TicketName = styled.h3`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 800;
  color: ${Dark};
`;

const TicketDesc = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: ${TextMuted};
  line-height: 1.4;
`;

const TicketMetaRow = styled.div`
  display: flex;
  gap: 16px;
  font-size: 0.85rem;
  font-weight: 600;
  color: ${TextMuted};
  flex-wrap: wrap;
`;

const TiersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const TierItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${White};
  padding: 6px 10px;
  border-radius: 6px;
  border: 1px solid ${Border};
  font-size: 0.85rem;
`;

const TierName = styled.span`
  font-weight: 700;
  color: ${PrimaryNavy};
`;

const TierPrice = styled.span`
  font-weight: 800;
  color: ${Dark};
`;

const BuyButton = styled.button`
  background: ${ThemeGradient};
  color: ${White};
  border: none;
  border-radius: 8px;
  padding: 10px 14px;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  width: 100%;
  box-shadow: 0 4px 12px rgba(115, 23, 28, 0.25);
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.92;
    transform: translateY(-1px);
  }
`;

const LoadingContainer = styled.div`
  padding: 30px;
  text-align: center;
  color: ${TextMuted};
  font-weight: 600;
`;

// Modal Components
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 10px;
  box-sizing: border-box;
`;

const ModalContainer = styled.div`
  background: ${White};
  border-radius: 12px;
  padding: 20px;
  width: 100%;
  max-width: 440px;
  border: 1px solid ${Border};
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.2);
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ModalTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 800;
  color: ${Dark};
`;

const StyledInput = styled.input`
  border: 1px solid ${Border};
  border-radius: 8px;
  padding: 10px 12px;
  font-size: 0.95rem;
  outline: none;
  color: ${Dark};
  width: 100%;
  box-sizing: border-box;
  background: ${White};

  &:focus {
    border-color: ${PrimaryNavy};
    box-shadow: 0 0 0 3px rgba(115, 23, 28, 0.15);
  }
`;

const StyledSelect = styled.select`
  border: 1px solid ${Border};
  border-radius: 8px;
  padding: 10px 12px;
  font-size: 0.95rem;
  outline: none;
  color: ${Dark};
  width: 100%;
  box-sizing: border-box;
  background: ${White};

  &:focus {
    border-color: ${PrimaryNavy};
    box-shadow: 0 0 0 3px rgba(115, 23, 28, 0.15);
  }
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 10px;
`;

const CancelButton = styled.button`
  background: ${Border};
  color: ${TextMuted};
  border: none;
  border-radius: 8px;
  padding: 8px 14px;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background: #cbd5e1;
  }
`;

export default function PurchaseEventTickets() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [subaccountCode, setSubaccountCode] = useState(null);
  const { payWithPaystack } = useAppContext();

  // Purchase Modal State
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [selectedTier, setSelectedTier] = useState(null);
  const [buyerName, setBuyerName] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");
  const [buyerPhone, setBuyerPhone] = useState("");


useEffect(() => {
  // Real-time listener for active tickets
  const q = query(collection(db, "tickets"), where("isActive", "==", true));

  const unsubscribe = onSnapshot(
    q,
    (querySnapshot) => {
      const list = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTickets(list);
      setLoading(false);
    },
    (error) => {
      console.error("Real-time listener error:", error);
      setLoading(false);
    }
  );

  fetchSubaccount();

  // Clean up real-time listener on unmount
  return () => unsubscribe();
}, []);


  const fetchSubaccount = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "subaccounts"));
      if (!querySnapshot.empty) {
        const data = querySnapshot.docs[0].data();
        if (data.subaccount_code) {
          setSubaccountCode(data.subaccount_code);
        }
      }
    } catch (error) {
      console.error("Error fetching subaccount:", error);
    }
  };

const handleOpenPurchaseModal = (ticket) => {
  if (ticket.eventDate) {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time part for accurate date comparison

    const eventDate = new Date(ticket.eventDate);
    eventDate.setHours(0, 0, 0, 0);

    // If event date has passed, alert the user and stop execution
    if (eventDate < today) {
      return Swal.fire({
        icon: "warning",
        title: "Event Passed ⏳",
        text: "Sorry, this event has already taken place and ticket sales are closed.",
        confirmButtonColor: "rgba(115, 23, 28, 0.95)",
      });
    }
  }

  // Proceed normally if event date is today or in the future
  setSelectedTicket(ticket);
  setSelectedTier(
    null
  );
  setBuyerName("");
  setBuyerEmail("");
  setBuyerPhone("");
};

  const generateTicketCode = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "PASS-";
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  };

  const handleCheckout = async (e) => {
    e.preventDefault();

    if (!buyerName || !buyerEmail || !buyerPhone) {
      return Swal.fire("Missing Information", "Please enter your name, email, and phone number.", "warning");
    }

    // 👈 Add this check at the very top of handleCheckout
  if (!selectedTier) {
    return Swal.fire("Select Pricing Tier", "Please select a pricing tier before proceeding.", "warning");
  }

    if (!subaccountCode) {
      return Swal.fire("Setup Error", "Seller payment routing is not configured yet. Please try again later.", "error");
    }

    if (!selectedTicket || !selectedTier) {
      return Swal.fire("Error", "No ticket or pricing tier selected.", "error");
    }

    const ticketUniqueCode = generateTicketCode();
    const uniqueOrderNumber = `TIXORDER-${Date.now().toString().slice(-6)}${Math.floor(Math.random() * 900 + 100)}`;

    const orderPayload = {
      orderNumber: uniqueOrderNumber,
      ticketId: selectedTicket.id,
      eventName: selectedTicket.name,
      eventDate: selectedTicket.eventDate,
      venue: selectedTicket.venue,
      ticketReference: selectedTicket.ticketReference,
      assignedTicketCode: ticketUniqueCode,
      tierLevel: selectedTier.level,
      amount: Number(selectedTier.amount),
      currency: "NGN",
      accountInfo: {
        name: buyerName,
        email: buyerEmail,
        phone: buyerPhone
      },
      paymentType: "ONLINE PAYMENT",
      paymentStatus: "Paid",
      orderStatus: "Confirmed",
      createdAt: serverTimestamp()
    };

    try {
      localStorage.setItem("pendingOrder", JSON.stringify(orderPayload));
      setSelectedTicket(null);

      // Trigger Paystack popup
      payWithPaystack(Number(selectedTier.amount), "NGN", subaccountCode, buyerEmail, buyerName);

    } catch (error) {
      console.error("Checkout setup error:", error);
      Swal.fire("Error", "Could not initialize ticket purchase. Please try again.", "error");
    }
  };

  

  if (loading) {
    return <LoadingContainer>Loading available event passes...</LoadingContainer>;
  }

  if(tickets.length===0){
    return;
  }

  return (
    <Container>
      <HeaderBanner>
        <ColorfulTitle>Upcoming Event Tickets / Passes 🎫</ColorfulTitle>
        <ColorfulSub>Explore our foundation's upcoming events, select your preferred seating tier, and secure your pass instantly.</ColorfulSub>
      </HeaderBanner>

      {tickets.length === 0 ? (
        <LoadingContainer>No active event tickets available at the moment. Please check back soon!</LoadingContainer>
      ) : (
        <TicketsGrid>
          {tickets.map((item) => {
            const tiers = item.pricingTiers || [{ level: "STANDARD", amount: item.amount || 0 }];
            return (
              <TicketPass key={item.id}>
                <TicketMainBody>
                  <TicketName>{item.name}</TicketName>
                  <TicketDesc>{item.description || "No description provided."}</TicketDesc>
                  <TicketMetaRow>
                    <span>📅 Date: {item.eventDate || "TBA"}</span>
                    <span>📍 Venue: {item.venue || "Venue TBA"}</span>
                  </TicketMetaRow>
                </TicketMainBody>

                <TicketStubBody>
                  <TiersContainer>
                    <span style={{ fontSize: "0.75rem", fontWeight: "700", color: TextMuted, textTransform: "uppercase" }}>Available Tiers</span>
                    {tiers.map((tier, idx) => (
                      <TierItem key={idx}>
                        <TierName>{tier.level}</TierName>
                        <TierPrice>₦{Number(tier.amount || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</TierPrice>
                      </TierItem>
                    ))}
                  </TiersContainer>

                  <BuyButton onClick={() => handleOpenPurchaseModal(item)}>
                    Get Ticket Pass 🎟️
                  </BuyButton>
                </TicketStubBody>
              </TicketPass>
            );
          })}
        </TicketsGrid>
      )}

      {/* Purchase Details Modal */}
      {selectedTicket && (
        <ModalOverlay onClick={() => setSelectedTicket(null)}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <ModalTitle>Secure Ticket: {selectedTicket.name}</ModalTitle>
            <form onSubmit={handleCheckout} style={{ display: "flex", flexDirection: "column", gap: "10px", margin: 0 }}>
              
              {/* <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <label style={{ fontSize: "0.85rem", fontWeight: "700", color: Dark }}>Select Pricing Tier</label>
                <StyledSelect
                  value={JSON.stringify(selectedTier)}
                  onChange={(e) => setSelectedTier(JSON.parse(e.target.value))}
                  required
                >
             <option value="" disabled>--SELECT--</option>
                  {(selectedTicket.pricingTiers || [{ level: "STANDARD", amount: selectedTicket.amount || 0 }]).map((tier, idx) => (
                    <option key={idx} value={JSON.stringify(tier)}>
                      {tier.level} - ₦{Number(tier.amount || 0).toLocaleString()}
                    </option>
                  ))}
                </StyledSelect>
              </div> */}

              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
  <label style={{ fontSize: "0.85rem", fontWeight: "700", color: Dark }}>Select Pricing Tier</label>
  <StyledSelect
    value={selectedTier ? JSON.stringify(selectedTier) : ""}
    onChange={(e) => setSelectedTier(e.target.value ? JSON.parse(e.target.value) : null)}
    required
  >
    <option value="" disabled>--SELECT--</option>
    {(selectedTicket.pricingTiers || [{ level: "STANDARD", amount: selectedTicket.amount || 0 }]).map((tier, idx) => (
      <option key={idx} value={JSON.stringify(tier)}>
        {tier.level} - ₦{Number(tier.amount || 0).toLocaleString()}
      </option>
    ))}
  </StyledSelect>
</div>

              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <label style={{ fontSize: "0.85rem", fontWeight: "700", color: Dark }}>Full Name</label>
                <StyledInput
                  type="text"
                  placeholder="e.g. John Doe"
                  value={buyerName}
                  onChange={(e) => setBuyerName(e.target.value)}
                  required
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <label style={{ fontSize: "0.85rem", fontWeight: "700", color: Dark }}>Email Address</label>
                <StyledInput
                  type="email"
                  placeholder="e.g. john@example.com"
                  value={buyerEmail}
                  onChange={(e) => setBuyerEmail(e.target.value)}
                  required
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <label style={{ fontSize: "0.85rem", fontWeight: "700", color: Dark }}>Phone Number</label>
                <StyledInput
                  type="tel"
                  placeholder="e.g. 08012345678"
                  value={buyerPhone}
                  onChange={(e) => setBuyerPhone(e.target.value)}
                  required
                />
              </div>

              <ModalActions>
                <CancelButton type="button" onClick={() => setSelectedTicket(null)}>Cancel</CancelButton>
                <BuyButton type="submit" style={{ width: "auto", padding: "8px 16px" }}>Proceed to Payment</BuyButton>
              </ModalActions>
            </form>
          </ModalContainer>
        </ModalOverlay>
      )}
    </Container>
  );
}