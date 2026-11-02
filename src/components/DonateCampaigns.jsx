"use client";

import { useEffect, useState } from "react";
import { db } from "@/firebaseConfig";
import { 
  collection, 
  getDocs, 
  query, 
  where, 
  onSnapshot,
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

const CampaignsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  box-sizing: border-box;
`;

// Campaign Card Design (Matching TicketPass Style)
const CampaignPass = styled.div`
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

const CampaignMainBody = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
  box-sizing: border-box;
`;

const CampaignStubBody = styled.div`
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

const CampaignName = styled.h3`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 800;
  color: ${Dark};
`;

const CampaignDesc = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: ${TextMuted};
  line-height: 1.4;
`;

const CampaignMetaRow = styled.div`
  display: flex;
  gap: 16px;
  font-size: 0.85rem;
  font-weight: 600;
  color: ${TextMuted};
  flex-wrap: wrap;
`;

const GoalBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  background: ${White};
  padding: 8px 10px;
  border-radius: 6px;
  border: 1px solid ${Border};
  font-size: 0.85rem;
`;

const GoalLabel = styled.span`
  font-weight: 700;
  color: ${TextMuted};
  font-size: 0.75rem;
  text-transform: uppercase;
`;

const GoalAmount = styled.span`
  font-weight: 800;
  color: ${Dark};
`;

const DonateButton = styled.button`
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

export default function DonateCampaigns() {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [subaccountCode, setSubaccountCode] = useState(null);
  const { payWithPaystack } = useAppContext();

  // Donation Modal State
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [donationAmount, setDonationAmount] = useState("");
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [donorPhone, setDonorPhone] = useState("");

  useEffect(() => {
    // Real-time listener for active donation campaigns
    const q = query(collection(db, "donationCampaigns"), where("isActive", "==", true));

    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const list = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCampaigns(list);
        setLoading(false);
      },
      (error) => {
        console.error("Real-time listener error:", error);
        setLoading(false);
      }
    );

    fetchSubaccount();

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

  const handleOpenDonateModal = (campaign) => {
    setSelectedCampaign(campaign);
    setDonationAmount("");
    setDonorName("");
    setDonorEmail("");
    setDonorPhone("");
  };

  const generateDonationCode = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "DON-";
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  };

  const handleCheckout = async (e) => {
    e.preventDefault();

    if (!donorName || !donorEmail || !donorPhone || !donationAmount) {
      return Swal.fire("Missing Information", "Please enter your name, email, phone number, and donation amount.", "warning");
    }

    if (Number(donationAmount) <= 0) {
      return Swal.fire("Invalid Amount", "Please enter a valid donation amount greater than zero.", "warning");
    }

    if (!subaccountCode) {
      return Swal.fire("Setup Error", "Seller payment routing is not configured yet. Please try again later.", "error");
    }

    if (!selectedCampaign) {
      return Swal.fire("Error", "No campaign selected.", "error");
    }

    const donationUniqueCode = generateDonationCode();
    const uniqueOrderNumber = `DONORDER-${Date.now().toString().slice(-6)}${Math.floor(Math.random() * 900 + 100)}`;

    const orderPayload = {
      orderNumber: uniqueOrderNumber,
      campaignId: selectedCampaign.id,
      campaignTitle: selectedCampaign.title,
      campaignReference: selectedCampaign.campaignReference,
      assignedDonationCode: donationUniqueCode,
      amount: Number(donationAmount),
      currency: "NGN",
      accountInfo: {
        name: donorName,
        email: donorEmail,
        phone: donorPhone
      },
      paymentType: "ONLINE PAYMENT",
      paymentStatus: "Paid",
      orderStatus: "Confirmed",
      createdAt: serverTimestamp()
    };

    try {
      localStorage.setItem("pendingOrder", JSON.stringify(orderPayload));
      setSelectedCampaign(null);

      // Trigger Paystack popup
      payWithPaystack(Number(donationAmount), "NGN", subaccountCode, donorEmail, donorName);

    } catch (error) {
      console.error("Checkout setup error:", error);
      Swal.fire("Error", "Could not initialize donation payment. Please try again.", "error");
    }
  };

  if (loading) {
    return <LoadingContainer>Loading active donation campaigns...</LoadingContainer>;
  }

  if (campaigns.length === 0) {
    return null;
  }

  return (
    <Container>
      <HeaderBanner>
        <ColorfulTitle>Make Donatations 💝</ColorfulTitle>
        <ColorfulSub>Choose a campaign below, contribute any amount of your choice, and help us make a lasting impact.</ColorfulSub>
      </HeaderBanner>

      <CampaignsGrid>
        {campaigns.map((item) => {
          return (
            <CampaignPass key={item.id}>
              <CampaignMainBody>
                <CampaignName>{item.title}</CampaignName>
                <CampaignDesc>{item.description || "No description provided."}</CampaignDesc>
                <CampaignMetaRow>
                  <span>📅 Target Date: {item.targetDate || "Ongoing"}</span>
                  <span>🏷️ Ref: {item.campaignReference || "CAMP-XXXXXX"}</span>
                </CampaignMetaRow>
              </CampaignMainBody>

              <CampaignStubBody>
                <GoalBox>
                  <GoalLabel>Target Goal</GoalLabel>
                  <GoalAmount>₦{Number(item.targetGoal || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</GoalAmount>
                </GoalBox>

                <DonateButton onClick={() => handleOpenDonateModal(item)}>
                  Donate Now 💖
                </DonateButton>
              </CampaignStubBody>
            </CampaignPass>
          );
        })}
      </CampaignsGrid>

      {/* Donation Modal */}
      {selectedCampaign && (
        <ModalOverlay onClick={() => setSelectedCampaign(null)}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <ModalTitle>Donate to: {selectedCampaign.title}</ModalTitle>
            <form onSubmit={handleCheckout} style={{ display: "flex", flexDirection: "column", gap: "10px", margin: 0 }}>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <label style={{ fontSize: "0.85rem", fontWeight: "700", color: Dark }}>Donation Amount (₦)</label>
                <StyledInput
                  type="number"
                  placeholder="Enter amount (e.g. 5000)"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  min="1"
                  required
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <label style={{ fontSize: "0.85rem", fontWeight: "700", color: Dark }}>Full Name</label>
                <StyledInput
                  type="text"
                  placeholder="e.g. John Doe"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  required
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <label style={{ fontSize: "0.85rem", fontWeight: "700", color: Dark }}>Email Address</label>
                <StyledInput
                  type="email"
                  placeholder="e.g. john@example.com"
                  value={donorEmail}
                  onChange={(e) => setDonorEmail(e.target.value)}
                  required
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <label style={{ fontSize: "0.85rem", fontWeight: "700", color: Dark }}>Phone Number</label>
                <StyledInput
                  type="tel"
                  placeholder="e.g. 08012345678"
                  value={donorPhone}
                  onChange={(e) => setDonorPhone(e.target.value)}
                  required
                />
              </div>

              <ModalActions>
                <CancelButton type="button" onClick={() => setSelectedCampaign(null)}>Cancel</CancelButton>
                <DonateButton type="submit" style={{ width: "auto", padding: "8px 16px" }}>Proceed to Payment</DonateButton>
              </ModalActions>
            </form>
          </ModalContainer>
        </ModalOverlay>
      )}
    </Container>
  );
}