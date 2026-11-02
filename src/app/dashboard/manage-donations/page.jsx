"use client";

import { useEffect, useState } from "react";
import { db } from "@/firebaseConfig";
import { 
  collection, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  serverTimestamp 
} from "firebase/firestore";
import styled from "styled-components";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

// 🎨 THEME COLORS
const PrimaryNavy = "rgba(115, 23, 28, 0.95)";
const PrimaryCyan = "rgba(85, 15, 18, 0.95)";
const ThemeGradient = "linear-gradient(135deg, rgba(115, 23, 28, 0.95) 0%, rgba(85, 15, 18, 0.95) 100%)";

const Dark = "#0f172a";
const Border = "#cbd5e1";
const White = "#ffffff";
const TextMuted = "#475569";
const LightBg = "#f8fafc";
const Danger = "#ef4444";
const Success = "#22c55e";

// 🌟 Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: ${Dark};
  width: 100%;
  padding: 12px;
  box-sizing: border-box;
  background-color: ${LightBg};
  min-height: 100vh;
`;

const HeaderBanner = styled.div`
  background: ${ThemeGradient};
  color: ${White};
  padding: 14px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  box-shadow: 0 10px 25px rgba(115, 23, 28, 0.15);
`;

const ColorfulTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 900;
  margin: 0;
  color: ${White};
  letter-spacing: -0.5px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ColorfulSub = styled.p`
  font-size: 0.95rem;
  margin: 0;
  color: #f8fafc;
  opacity: 0.95;
  font-weight: 500;
`;

const ActionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin: 10px 0 0 0;
  flex-wrap: wrap;
`;

const ColorfulSectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 800;
  margin: 0;
  background: ${ThemeGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SearchInput = styled.input`
  border: 1px solid ${Border};
  border-radius: 8px;
  padding: 8px 10px;
  font-size: 0.9rem;
  outline: none;
  color: ${Dark};
  width: 240px;
  max-width: 100%;
  box-sizing: border-box;
  margin: 0;
  background: ${White};
  box-shadow: 0 2px 6px rgba(15, 23, 42, 0.02);

  &:focus {
    border-color: ${PrimaryNavy};
    box-shadow: 0 0 0 3px rgba(115, 23, 28, 0.15);
  }
`;

const PrimaryButton = styled.button`
  background: ${ThemeGradient};
  color: ${White};
  border: none;
  border-radius: 8px;
  padding: 8px 12px;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0 4px 15px rgba(115, 23, 28, 0.3);
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(115, 23, 28, 0.45);
  }
`;

const CampaignsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 16px;
  width: 100%;
  box-sizing: border-box;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

// 💝 Distinct Campaign Card Styling (Modern Box Layout)
const CampaignCard = styled.div`
  background: ${White};
  border-radius: 14px;
  border: 1px solid ${Border};
  box-shadow: 0 6px 20px rgba(15, 23, 42, 0.06);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  width: 100%;
  box-sizing: border-box;
  opacity: ${({ isActive }) => (isActive ? "1" : "0.7")};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(115, 23, 28, 0.15);
    border-color: rgba(115, 23, 28, 0.3);
  }
`;

const CampaignHeader = styled.div`
  padding: 16px 16px 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-bottom: 1px solid #f1f5f9;
`;

const CampaignTopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
`;

const CampaignTitle = styled.h3`
  margin: 0;
  font-size: 1.15rem;
  font-weight: 800;
  color: ${Dark};
  line-height: 1.4;
`;

const CampaignReferenceBadge = styled.span`
  font-family: monospace;
  font-size: 0.75rem;
  font-weight: 700;
  color: ${PrimaryNavy};
  background: rgba(115, 23, 28, 0.08);
  padding: 4px 8px;
  border-radius: 6px;
  border: 1px solid rgba(115, 23, 28, 0.15);
  letter-spacing: 0.5px;
  white-space: nowrap;
`;

const CampaignDesc = styled.p`
  margin: 0;
  font-size: 0.88rem;
  color: ${TextMuted};
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CampaignBody = styled.div`
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: #fafafc;
  flex: 1;
`;

const GoalBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  font-weight: 700;
  color: ${Dark};
`;

const GoalAmount = styled.span`
  font-size: 1.05rem;
  font-weight: 900;
  color: ${PrimaryNavy};
`;

const CampaignMetaRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 600;
  color: ${TextMuted};
  padding-top: 4px;
  border-top: 1px dashed ${Border};
`;

const CampaignFooter = styled.div`
  padding: 12px 16px;
  background: ${White};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #f1f5f9;
  gap: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;

const EditButton = styled.button`
  background: rgba(115, 23, 28, 0.1);
  color: ${PrimaryNavy};
  border: none;
  border-radius: 6px;
  padding: 6px 12px;
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(115, 23, 28, 0.2);
  }
`;

const DeleteButton = styled.button`
  background: rgba(239, 68, 68, 0.1);
  color: ${Danger};
  border: none;
  border-radius: 6px;
  padding: 6px 12px;
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(239, 68, 68, 0.2);
  }
`;

// Toggle Switch Styles
const ToggleWrapper = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 700;
  color: ${TextMuted};
`;

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: ${Success};
  }

  &:checked + span:before {
    transform: translateX(14px);
  }
`;

const ToggleSlider = styled.span`
  position: relative;
  display: inline-block;
  width: 32px;
  height: 18px;
  background-color: ${Border};
  border-radius: 18px;
  transition: 0.3s;

  &:before {
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    border-radius: 50%;
    transition: 0.3s;
  }
`;

const LoadingContainer = styled.div`
  padding: 20px;
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
  padding: 16px;
  width: 100%;
  max-width: 480px;
  max-height: 90vh;
  overflow-y: auto;
  border: 1px solid ${Border};
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.15);
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ModalTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 800;
  background: ${ThemeGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledInput = styled.input`
  border: 1px solid ${Border};
  border-radius: 8px;
  padding: 9px 12px;
  font-size: 0.9rem;
  outline: none;
  color: ${Dark};
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  background: ${White};

  &:focus {
    border-color: ${PrimaryNavy};
    box-shadow: 0 0 0 3px rgba(115, 23, 28, 0.15);
  }
`;

const StyledTextarea = styled.textarea`
  border: 1px solid ${Border};
  border-radius: 8px;
  padding: 9px 12px;
  font-size: 0.9rem;
  outline: none;
  color: ${Dark};
  width: 100%;
  box-sizing: border-box;
  resize: vertical;
  min-height: 80px;
  margin: 0;
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
  margin-top: 5px;
`;

const CancelButton = styled.button`
  background: ${Border};
  color: ${TextMuted};
  border: none;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background: #cbd5e1;
  }
`;

const SaveButton = styled.button`
  background: ${ThemeGradient};
  color: ${White};
  border: none;
  border-radius: 8px;
  padding: 8px 14px;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(115, 23, 28, 0.3);

  &:hover {
    opacity: 0.9;
  }
`;

export default function ManageDonationCampaignsPage() {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const router = useRouter();

  // Modal State Controls
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  
  // Campaign Form States
  const [form, setForm] = useState({
    title: "",
    description: "",
    targetGoal: "",
    targetDate: "",
    campaignReference: "",
    isActive: true,
  });

  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const fetchCampaigns = async () => {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, "donationCampaigns"));
      const list = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCampaigns(list);
    } catch (error) {
      Swal.fire("Error", "Failed to fetch donation campaigns.", "error");
    } finally {
      setLoading(false);
    }
  };

  const generateRandomReference = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let ref = "CAMP-";
    for (let i = 0; i < 6; i++) {
      ref += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return ref;
  };

  const handleToggleActive = async (item, e) => {
    e.stopPropagation();
    try {
      const newStatus = !item.isActive;
      await updateDoc(doc(db, "donationCampaigns", item.id), { isActive: newStatus });
      setCampaigns(campaigns.map(c => c.id === item.id ? { ...c, isActive: newStatus } : c));
    } catch (error) {
      Swal.fire("Error", "Could not update campaign status.", "error");
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      if (!form.title || !form.targetGoal) {
        return Swal.fire({
          icon: "warning",
          text: "Please provide a campaign title and target goal amount.",
        });
      }

      Swal.fire({
        text: "Saving campaign...",
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
      });

      const payload = {
        title: form.title,
        description: form.description,
        targetGoal: Number(form.targetGoal),
        targetDate: form.targetDate,
        campaignReference: form.campaignReference || generateRandomReference(),
        isActive: form.isActive,
      };

      if (editingId) {
        await updateDoc(doc(db, "donationCampaigns", editingId), payload);
      } else {
        await addDoc(collection(db, "donationCampaigns"), {
          ...payload,
          createdAt: serverTimestamp(),
        });
      }

      Swal.close();
      Swal.fire({
        icon: "success",
        text: "Campaign Saved Successfully!",
        timer: 1500,
        showConfirmButton: false,
      });

      setShowModal(false);
      setForm({ title: "", description: "", targetGoal: "", targetDate: "", campaignReference: generateRandomReference(), isActive: true });
      setEditingId(null);
      fetchCampaigns();
    } catch (error) {
      Swal.close();
      Swal.fire({
        icon: "error",
        title: "Save Failed",
        text: error.message || "Please try again.",
      });
    }
  };

  const handleEdit = (item, e) => {
    e.stopPropagation();
    setForm({
      title: item.title || "",
      description: item.description || "",
      targetGoal: item.targetGoal || "",
      targetDate: item.targetDate || "",
      campaignReference: item.campaignReference || generateRandomReference(),
      isActive: item.isActive ?? true,
    });
    setEditingId(item.id);
    setShowModal(true);
  };

  const handleDelete = async (id, e) => {
    e.stopPropagation();
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This donation campaign will be deleted permanently.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: Danger,
      cancelButtonColor: TextMuted,
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    try {
      await deleteDoc(doc(db, "donationCampaigns", id));
      Swal.fire("Deleted!", "", "success");
      fetchCampaigns();
    } catch (error) {
      Swal.fire("Error", "Could not delete campaign.", "error");
    }
  };

  const filteredData = campaigns
    .filter((item) => {
      const matchesSearch = item.title?.toLowerCase().includes(search.toLowerCase()) || 
                            item.campaignReference?.toLowerCase().includes(search.toLowerCase());
      return matchesSearch;
    })
    .sort((a, b) => {
      const goalA = Number(a.targetGoal || 0);
      const goalB = Number(b.targetGoal || 0);
      if (sortOrder === "low-high") return goalA - goalB;
      if (sortOrder === "high-low") return goalB - goalA;
      return 0;
    });

  if (loading) {
    return <LoadingContainer>Loading donation campaigns...</LoadingContainer>;
  }

  return (
    <Container>
      <HeaderBanner>
        <ColorfulTitle>Donation Campaigns Management 💝</ColorfulTitle>
        <ColorfulSub>Create and manage foundation fundraising causes, target goals, and active public campaigns.</ColorfulSub>
      </HeaderBanner>

      <ActionRow>
        <ColorfulSectionTitle>Campaigns ({filteredData.length})</ColorfulSectionTitle>
        <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
          <SearchInput
            type="text"
            placeholder="Search campaign or reference..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            style={{
              border: `1px solid ${Border}`,
              borderRadius: "8px",
              padding: "8px 10px",
              fontSize: "0.9rem",
              outline: "none",
              color: Dark,
              background: White,
              boxSizing: "border-box",
              margin: 0,
            }}
          >
            <option value="">Sort by Target Goal</option>
            <option value="low-high">Goal: Low to High</option>
            <option value="high-low">Goal: High to Low</option>
          </select>
          <PrimaryButton onClick={() => {
            setEditingId(null);
            setForm({ 
              title: "", 
              description: "", 
              targetGoal: "", 
              targetDate: "", 
              campaignReference: generateRandomReference(),
              isActive: true
            });
            setShowModal(true);
          }}>
            <span>+ Create Campaign</span>
          </PrimaryButton>
        </div>
      </ActionRow>

      {filteredData.length === 0 ? (
        <LoadingContainer>No donation campaigns found.</LoadingContainer>
      ) : (
        <CampaignsGrid>
          {filteredData.map((item) => {
            const isActive = item.isActive ?? true;
            return (
              <CampaignCard key={item.id} isActive={isActive}>
                <CampaignHeader>
                  <CampaignTopRow>
                    <CampaignTitle>
                      {item.title ? item.title.charAt(0).toUpperCase() + item.title.slice(1) : ""}
                    </CampaignTitle>
                    <CampaignReferenceBadge>{item.campaignReference || "CAMP-XXXXXX"}</CampaignReferenceBadge>
                  </CampaignTopRow>
                  <CampaignDesc>{item.description || "No description provided."}</CampaignDesc>
                </CampaignHeader>

                <CampaignBody>
                  <GoalBox>
                    <span>Target Goal:</span>
                    <GoalAmount>₦{Number(item.targetGoal || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</GoalAmount>
                  </GoalBox>
                  <CampaignMetaRow>
                    <span>📅 Deadline: {item.targetDate || "Ongoing"}</span>
                    <span>{isActive ? "🟢 Publicly Active" : "🔴 Hidden"}</span>
                  </CampaignMetaRow>
                </CampaignBody>
                
                <CampaignFooter>
                  <ToggleWrapper onClick={(e) => e.stopPropagation()}>
                    <ToggleInput 
                      type="checkbox" 
                      checked={isActive} 
                      onChange={(e) => handleToggleActive(item, e)} 
                    />
                    <ToggleSlider />
                    <span>{isActive ? "Active" : "Inactive"}</span>
                  </ToggleWrapper>
                  
                  <ButtonGroup>
                    <EditButton onClick={(e) => handleEdit(item, e)}>Edit</EditButton>
                    <DeleteButton onClick={(e) => handleDelete(item.id, e)}>Delete</DeleteButton>
                  </ButtonGroup>
                </CampaignFooter>
              </CampaignCard>
            );
          })}
        </CampaignsGrid>
      )}

      {/* Create / Edit Modal */}
      {showModal && (
        <ModalOverlay onClick={() => setShowModal(false)}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <ModalTitle>{editingId ? "Edit Donation Campaign" : "Create Donation Campaign"}</ModalTitle>
            <form onSubmit={handleSave} style={{ display: "flex", flexDirection: "column", gap: "10px", margin: 0 }}>
              <StyledInput
                type="text"
                placeholder="Campaign Reference (Auto-generated)"
                value={form.campaignReference}
                onChange={(e) => setForm({ ...form, campaignReference: e.target.value })}
                required
                disabled
              />
             
              <StyledInput
                type="text"
                placeholder="Campaign Title (e.g., Biogas Clean Energy Project)"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                required
              />

              <StyledTextarea
                placeholder="Campaign Description & Details"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
              />

              <div style={{ display: "flex", gap: "10px" }}>
                <StyledInput
                  type="number"
                  placeholder="Target Goal Amount (₦)"
                  value={form.targetGoal}
                  onChange={(e) => setForm({ ...form, targetGoal: e.target.value })}
                  required
                />
                <StyledInput
                  type="date"
                  placeholder="Target Date"
                  value={form.targetDate}
                  onChange={(e) => setForm({ ...form, targetDate: e.target.value })}
                />
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "4px" }}>
                <input
                  type="checkbox"
                  id="isActiveToggle"
                  checked={form.isActive}
                  onChange={(e) => setForm({ ...form, isActive: e.target.checked })}
                  style={{ width: "16px", height: "16px", cursor: "pointer" }}
                />
                <label htmlFor="isActiveToggle" style={{ fontSize: "0.85rem", fontWeight: "600", cursor: "pointer" }}>
                  Display on public page (Active)
                </label>
              </div>

              <ModalActions>
                <CancelButton type="button" onClick={() => setShowModal(false)}>Cancel</CancelButton>
                <SaveButton type="submit">{editingId ? "Save Changes" : "Create Campaign"}</SaveButton>
              </ModalActions>
            </form>
          </ModalContainer>
        </ModalOverlay>
      )}
    </Container>
  );
}