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
  gap: 10px;
  color: ${Dark};
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  background-color: ${LightBg};
  min-height: 100vh;
`;

const HeaderBanner = styled.div`
  background: ${ThemeGradient};
  color: ${White};
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
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

const TicketsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  box-sizing: border-box;
  max-width: 800px;
  margin: 0 auto;
`;

// 🎫 Authentic Ticket Card Styling
const TicketCard = styled.div`
  background: ${White};
  border-radius: 12px;
  border: 1px solid ${Border};
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04);
  display: flex;
  position: relative;
  overflow: hidden;
  transition: all 0.25s ease;
  width: 100%;
  box-sizing: border-box;
  opacity: ${({ isActive }) => (isActive ? "1" : "0.65")};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(115, 23, 28, 0.12);
    border-color: rgba(115, 23, 28, 0.4);
  }

  &::after {
    content: "";
    position: absolute;
    right: 220px;
    top: 0;
    bottom: 0;
    border-right: 2px dashed ${Border};
    @media (max-width: 640px) {
      display: none;
    }
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const TicketMainBody = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  box-sizing: border-box;
`;

const TicketStubBody = styled.div`
  background: #f8fafc;
  padding: 12px;
  width: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  box-sizing: border-box;
  border-left: 1px dashed ${Border};

  @media (max-width: 640px) {
    width: 100%;
    border-left: none;
    border-top: 1px dashed ${Border};
  }
`;

const TicketName = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 800;
  color: ${Dark};
`;

const TicketDesc = styled.p`
  margin: 0;
  font-size: 0.85rem;
  color: ${TextMuted};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const TicketMetaRow = styled.div`
  display: flex;
  gap: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  color: ${TextMuted};
  flex-wrap: wrap;
`;

const TicketReferenceBadge = styled.span`
  font-family: monospace;
  font-size: 0.8rem;
  font-weight: 700;
  color: ${PrimaryNavy};
  background: rgba(115, 23, 28, 0.08);
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px dashed rgba(115, 23, 28, 0.3);
  letter-spacing: 1px;
  width: fit-content;
`;

const TiersListPreview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 0.8rem;
  color: ${Dark};
  font-weight: 700;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 6px;
  justify-content: flex-end;
  align-items: center;
`;

const EditButton = styled.button`
  background: rgba(115, 23, 28, 0.1);
  color: ${PrimaryNavy};
  border: none;
  border-radius: 6px;
  padding: 6px 10px;
  font-size: 0.75rem;
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
  padding: 6px 10px;
  font-size: 0.75rem;
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
  font-size: 0.75rem;
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
  padding: 10px;
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
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  max-width: 480px;
  max-height: 90vh;
  overflow-y: auto;
  border: 1px solid ${Border};
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.15);
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ModalTitle = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 800;
  background: ${ThemeGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledInput = styled.input`
  border: 1px solid ${Border};
  border-radius: 6px;
  padding: 8px 10px;
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
  border-radius: 6px;
  padding: 8px 10px;
  font-size: 0.9rem;
  outline: none;
  color: ${Dark};
  width: 100%;
  box-sizing: border-box;
  resize: vertical;
  min-height: 60px;
  margin: 0;
  background: ${White};

  &:focus {
    border-color: ${PrimaryNavy};
    box-shadow: 0 0 0 3px rgba(115, 23, 28, 0.15);
  }
`;

const TierRow = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const RemoveTierButton = styled.button`
  background: rgba(239, 68, 68, 0.1);
  color: ${Danger};
  border: none;
  border-radius: 6px;
  padding: 8px 10px;
  font-size: 0.8rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: rgba(239, 68, 68, 0.2);
  }
`;

const AddTierButton = styled.button`
  background: rgba(115, 23, 28, 0.1);
  color: ${PrimaryNavy};
  border: 1px dashed ${PrimaryNavy};
  border-radius: 6px;
  padding: 6px;
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;
  width: 100%;
  text-align: center;

  &:hover {
    background: rgba(115, 23, 28, 0.15);
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
  border-radius: 6px;
  padding: 6px 10px;
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
  border-radius: 6px;
  padding: 6px 12px;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(115, 23, 28, 0.3);

  &:hover {
    opacity: 0.9;
  }
`;

export default function ManageTicketsPage() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const router = useRouter();

  // Modal State Controls
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  
  // Ticket Form States
  const [form, setForm] = useState({
    name: "",
    description: "",
    eventDate: "",
    venue: "",
    ticketReference: "",
    isActive: true,
    pricingTiers: [{ level: "STANDARD", amount: "" }],
  });

  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, "tickets"));
      const list = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTickets(list);
    } catch (error) {
      Swal.fire("Error", "Failed to fetch event tickets.", "error");
    } finally {
      setLoading(false);
    }
  };

  const generateRandomReference = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let ref = "REF-";
    for (let i = 0; i < 6; i++) {
      ref += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return ref;
  };

  const handleAddTier = () => {
    setForm({
      ...form,
      pricingTiers: [...form.pricingTiers, { level: "", amount: "" }]
    });
  };

  const handleTierChange = (index, field, value) => {
    const updatedTiers = [...form.pricingTiers];
    updatedTiers[index][field] = field === "level" ? value.toUpperCase() : value;
    setForm({ ...form, pricingTiers: updatedTiers });
  };

  const handleRemoveTier = (index) => {
    const updatedTiers = form.pricingTiers.filter((_, i) => i !== index);
    setForm({ ...form, pricingTiers: updatedTiers });
  };

  const handleToggleActive = async (item, e) => {
    e.stopPropagation();
    try {
      const newStatus = !item.isActive;
      await updateDoc(doc(db, "tickets", item.id), { isActive: newStatus });
      setTickets(tickets.map(t => t.id === item.id ? { ...t, isActive: newStatus } : t));
    } catch (error) {
      Swal.fire("Error", "Could not update ticket status.", "error");
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      if (!form.name || !form.eventDate || form.pricingTiers.length === 0) {
        return Swal.fire({
          icon: "warning",
          text: "Please provide event name, date, and at least one pricing tier.",
        });
      }

      for (let tier of form.pricingTiers) {
        if (!tier.level || tier.amount === "") {
          return Swal.fire({
            icon: "warning",
            text: "All pricing tiers must have a level name and amount.",
          });
        }
      }

      Swal.fire({
        text: "Saving ticket...",
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
      });

      const payload = {
        name: form.name,
        description: form.description,
        eventDate: form.eventDate,
        venue: form.venue,
        ticketReference: form.ticketReference || generateRandomReference(),
        isActive: form.isActive,
        pricingTiers: form.pricingTiers.map(t => ({ level: t.level, amount: Number(t.amount) })),
      };

      if (editingId) {
        await updateDoc(doc(db, "tickets", editingId), payload);
      } else {
        await addDoc(collection(db, "tickets"), {
          ...payload,
          createdAt: serverTimestamp(),
        });
      }

      Swal.close();
      Swal.fire({
        icon: "success",
        text: "Ticket Saved Successfully!",
        timer: 1500,
        showConfirmButton: false,
      });

      setShowModal(false);
      setForm({ name: "", description: "", eventDate: "", venue: "", ticketReference: "", isActive: true, pricingTiers: [{ level: "STANDARD", amount: "" }] });
      setEditingId(null);
      fetchTickets();
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
      name: item.name || "",
      description: item.description || "",
      eventDate: item.eventDate || "",
      venue: item.venue || "",
      ticketReference: item.ticketReference || generateRandomReference(),
      isActive: item.isActive ?? true,
      pricingTiers: item.pricingTiers || [{ level: "STANDARD", amount: item.amount || 0 }],
    });
    setEditingId(item.id);
    setShowModal(true);
  };

  const handleDelete = async (id, e) => {
    e.stopPropagation();
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This event ticket will be deleted permanently.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: Danger,
      cancelButtonColor: TextMuted,
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    try {
      await deleteDoc(doc(db, "tickets", id));
      Swal.fire("Deleted!", "", "success");
      fetchTickets();
    } catch (error) {
      Swal.fire("Error", "Could not delete ticket.", "error");
    }
  };

  const filteredData = tickets
    .filter((item) => {
      const matchesSearch = item.name?.toLowerCase().includes(search.toLowerCase()) || 
                            item.ticketReference?.toLowerCase().includes(search.toLowerCase());
      return matchesSearch;
    })
    .sort((a, b) => {
      const minPriceA = Math.min(...(a.pricingTiers?.map(t => Number(t.amount)) || [0]));
      const minPriceB = Math.min(...(b.pricingTiers?.map(t => Number(t.amount)) || [0]));
      if (sortOrder === "low-high") return minPriceA - minPriceB;
      if (sortOrder === "high-low") return minPriceB - minPriceA;
      return 0;
    });

  if (loading) {
    return <LoadingContainer>Loading event tickets...</LoadingContainer>;
  }

  return (
    <Container>
      <HeaderBanner>
        <ColorfulTitle>Ticket Management 🎫</ColorfulTitle>
        <ColorfulSub>Create multi-tier event passes, toggle active status for the public page, and manage pricing.</ColorfulSub>
      </HeaderBanner>

      <ActionRow>
        <ColorfulSectionTitle>Tickets ({filteredData.length})</ColorfulSectionTitle>
        <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
          <SearchInput
            type="text"
            placeholder="Search by event or ticket reference..."
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
            <option value="">Sort by Price</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
          <PrimaryButton onClick={() => {
            setEditingId(null);
            setForm({ 
              name: "", 
              description: "", 
              eventDate: "", 
              venue: "", 
              ticketReference: generateRandomReference(),
              isActive: true,
              pricingTiers: [{ level: "STANDARD", amount: "" }]
            });
            setShowModal(true);
          }}>
            <span>+ Create Ticket</span>
          </PrimaryButton>
        </div>
      </ActionRow>

      {filteredData.length === 0 ? (
        <LoadingContainer>No tickets found.</LoadingContainer>
      ) : (
        <TicketsGrid>
          {filteredData.map((item) => {
            const isActive = item.isActive ?? true;
            return (
              <TicketCard key={item.id} isActive={isActive}>
                <TicketMainBody>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px" }}>
                    <TicketName>
                      {item.name ? item.name.charAt(0).toUpperCase() + item.name.slice(1) : ""}
                    </TicketName>
                    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                      <TicketReferenceBadge>{item.ticketReference || "REF-XXXXXX"}</TicketReferenceBadge>
                    </div>
                  </div>
                  <TicketDesc>{item.description || "No description provided."}</TicketDesc>
                  <TicketMetaRow>
                    <span>📅 {item.eventDate || "TBA"}</span>
                    <span>📍 {item.venue || "Venue TBA"}</span>
                  </TicketMetaRow>
                </TicketMainBody>
                
                <TicketStubBody>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ fontSize: "0.7rem", fontWeight: "700", color: TextMuted, textTransform: "uppercase" }}>Pricing Tiers</span>
                    <TiersListPreview>
                      {item.pricingTiers && item.pricingTiers.length > 0 ? (
                        item.pricingTiers.map((tier, idx) => (
                          <span key={idx}>
                            {tier.level}: ₦{Number(tier.amount || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </span>
                        ))
                      ) : (
                        <span>₦{Number(item.amount || 0).toLocaleString()}</span>
                      )}
                    </TiersListPreview>
                  </div>
                  
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <ToggleWrapper onClick={(e) => e.stopPropagation()}>
                      <ToggleInput 
                        type="checkbox" 
                        checked={isActive} 
                        onChange={(e) => handleToggleActive(item, e)} 
                      />
                      <ToggleSlider />
                      <span>{isActive ? "Active" : "Inactive"}</span>
                    </ToggleWrapper>
                    
                    <ButtonGroup >
                       <EditButton
                       style={{color:"white", background:PrimaryCyan}}
                       onClick={() => router.push(`/dashboard/ticket-participants/${item.id}`)}
                       >View Participants</EditButton>
                      <EditButton onClick={(e) => handleEdit(item, e)}>Edit</EditButton>
                      <DeleteButton onClick={(e) => handleDelete(item.id, e)}>Delete</DeleteButton>
                    </ButtonGroup>
                  </div>
                </TicketStubBody>
              </TicketCard>
            );
          })}
        </TicketsGrid>
      )}

      {/* Create / Edit Modal */}
      {showModal && (
        <ModalOverlay onClick={() => setShowModal(false)}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <ModalTitle>{editingId ? "Edit Event Ticket" : "Create Event Ticket"}</ModalTitle>
            <form onSubmit={handleSave} style={{ display: "flex", flexDirection: "column", gap: "10px", margin: 0 }}>
              <StyledInput
                type="text"
                placeholder="Ticket Reference (Auto-generated)"
                value={form.ticketReference}
                onChange={(e) => setForm({ ...form, ticketReference: e.target.value })}
                required
                disabled
              />
             
              <StyledInput
                type="text"
                placeholder="Event Name (e.g., Annual Music Fest)"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />

              <StyledTextarea
                placeholder="Event Description & Details"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
              />

              <div style={{ display: "flex", gap: "10px" }}>
                <StyledInput
                  type="date"
                  value={form.eventDate}
                  onChange={(e) => setForm({ ...form, eventDate: e.target.value })}
                  required
                />
                <StyledInput
                  type="text"
                  placeholder="Venue (e.g., Eko Hotel, Lagos)"
                  value={form.venue}
                  onChange={(e) => setForm({ ...form, venue: e.target.value })}
                />
              </div>

              {/* Dynamic Pricing Tiers */}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label style={{ fontSize: "0.85rem", fontWeight: "700", color: Dark }}>
                  Pricing Tiers (Level & Amount)
                </label>
                {form.pricingTiers.map((tier, index) => (
                  <TierRow key={index}>
                    <StyledInput
                      type="text"
                      placeholder="Level (e.g. STANDARD, VIP)"
                      value={tier.level}
                      onChange={(e) => handleTierChange(index, "level", e.target.value)}
                      required
                    />
                    <StyledInput
                      type="number"
                      placeholder="Price (₦)"
                      value={tier.amount}
                      onChange={(e) => handleTierChange(index, "amount", e.target.value)}
                      required
                    />
                    {form.pricingTiers.length > 1 && (
                      <RemoveTierButton type="button" onClick={() => handleRemoveTier(index)}>
                        ✕
                      </RemoveTierButton>
                    )}
                  </TierRow>
                ))}
                <AddTierButton type="button" onClick={handleAddTier}>
                  + Add Another Pricing Tier
                </AddTierButton>
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
                <SaveButton type="submit">{editingId ? "Save Changes" : "Create Ticket"}</SaveButton>
              </ModalActions>
            </form>
          </ModalContainer>
        </ModalOverlay>
      )}
    </Container>
  );
}