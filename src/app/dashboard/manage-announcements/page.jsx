// "use client";

// import { useEffect, useState } from "react";
// import { db } from "@/firebaseConfig";
// import { 
//   collection, 
//   getDocs, 
//   addDoc, 
//   updateDoc, 
//   deleteDoc, 
//   doc, 
//   serverTimestamp
// } from "firebase/firestore";
// import styled from "styled-components";
// import Swal from "sweetalert2";
// // 🎨 ENITZ GLOBAL BRAND THEME COLORS
// const PrimaryNavy ="rgba(115, 23, 28, 0.95) ";
// const PrimaryCyan = "rgba(85, 15, 18, 0.95)";
// const ThemeGradient = "linear-gradient(135deg, rgba(115, 23, 28, 0.95) 0%, rgba(85, 15, 18, 0.95) 100%)";

// const Dark = "#0f172a";
// const Border = "#cbd5e1";
// const White = "#ffffff";
// const TextMuted = "#475569";
// const LightBg = "#f8fafc";
// const Danger = "#ef4444";

// // 🌟 Styled Components (Strict max 10px spacing/gaps/margins/padding rule)
// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
//   color: ${Dark};
//   width: 100%;
//   padding: 10px;
//   box-sizing: border-box;
//   font-family: inherit;
// `;

// const HeaderBanner = styled.div`
//   background: ${ThemeGradient};
//   color: ${White};
//   padding: 10px;
//   border-radius: 10px;
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
//   box-shadow: 0 15px 35px rgba(11, 27, 72, 0.2);
//   position: relative;
//   overflow: hidden;

//   &::after {
//     content: '';
//     position: absolute;
//     top: -30px;
//     right: -30px;
//     width: 120px;
//     height: 120px;
//     background: rgba(255, 255, 255, 0.1);
//     border-radius: 50%;
//     pointer-events: none;
//   }
// `;

// const ColorfulTitle = styled.h1`
//   font-size: 1.6rem;
//   font-weight: 900;
//   margin: 0;
//   color: ${White};
//   letter-spacing: -0.02em;
// `;

// const ColorfulSub = styled.p`
//   font-size: 0.95rem;
//   margin: 0;
//   color: rgba(255, 255, 255, 0.95);
//   font-weight: 500;
// `;

// const ActionRow = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin: 10px 0 0 0;
//   @media (max-width: 768px) {
//     flex-direction: column;
//     align-items: flex-start;
//     gap: 10px;
//   }
// `;

// const ColorfulSectionTitle = styled.h2`
//   font-size: 1.25rem;
//   font-weight: 900;
//   margin: 0;
//   background: ${ThemeGradient};
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
// `;

// const PrimaryButton = styled.button`
//   background: ${ThemeGradient};
//   color: ${White};
//   border: none;
//   border-radius: 8px;
//   padding: 8px 10px;
//   font-weight: 800;
//   font-size: 0.9rem;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   gap: 6px;
//   box-shadow: 0 4px 15px rgba(0, 174, 239, 0.3);
//   transition: all 0.2s ease;

//   &:hover {
//     transform: translateY(-2px);
//     box-shadow: 0 6px 20px rgba(0, 174, 239, 0.4);
//   }
// `;

// const AnnouncementsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
//   gap: 10px;
// `;

// const AnnouncementCard = styled.div`
//   background: ${White};
//   border-radius: 10px;
//   padding: 10px;
//   border: 1px solid ${Border};
//   border-left: 4px solid ${PrimaryCyan};
//   box-shadow: 0 4px 15px rgba(15, 23, 42, 0.03);
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
//   transition: all 0.25s ease;

//   &:hover {
//     border-color: rgba(0, 174, 239, 0.3);
//     box-shadow: 0 8px 25px rgba(15, 23, 42, 0.06);
//     transform: translateY(-2px);
//   }
// `;

// const CardHeader = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// const AnnouncementName = styled.h3`
//   margin: 0;
//   font-size: 1rem;
//   font-weight: 800;
//   color: ${Dark};
// `;

// const AnnouncementDesc = styled.p`
//   margin: 0;
//   font-size: 0.85rem;
//   color: ${TextMuted};
//   word-break: break-word;
//   font-weight: 500;
// `;

// const ButtonGroup = styled.div`
//   display: flex;
//   gap: 10px;
//   justify-content: flex-end;
//   margin-top: 5px;
// `;

// const EditButton = styled.button`
//   background: rgba(0, 174, 239, 0.1);
//   color: ${PrimaryCyan};
//   border: 1px solid rgba(0, 174, 239, 0.2);
//   border-radius: 6px;
//   padding: 6px 10px;
//   font-size: 0.8rem;
//   font-weight: 800;
//   cursor: pointer;
//   transition: all 0.2s ease;

//   &:hover {
//     background: rgba(0, 174, 239, 0.2);
//   }
// `;

// const DeleteButton = styled.button`
//   background: rgba(239, 68, 68, 0.1);
//   color: ${Danger};
//   border: 1px solid rgba(239, 68, 68, 0.2);
//   border-radius: 6px;
//   padding: 6px 10px;
//   font-size: 0.8rem;
//   font-weight: 800;
//   cursor: pointer;
//   transition: all 0.2s ease;

//   &:hover {
//     background: rgba(239, 68, 68, 0.2);
//   }
// `;

// const LoadingContainer = styled.div`
//   padding: 20px;
//   text-align: center;
//   color: ${Dark};
//   font-weight: 700;
//   background: ${White};
//   border-radius: 10px;
//   border: 1px solid ${Border};
// `;

// const ModalOverlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(15, 23, 42, 0.6);
//   backdrop-filter: blur(4px);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 1000;
//   padding: 10px;
//   box-sizing: border-box;
// `;

// const ModalContainer = styled.div`
//   background: ${White};
//   border-radius: 10px;
//   padding: 10px;
//   width: 100%;
//   max-width: 400px;
//   border: 1px solid ${Border};
//   box-shadow: 0 15px 35px rgba(15, 23, 42, 0.15);
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
// `;

// const ModalTitle = styled.h3`
//   margin: 0;
//   font-size: 1.1rem;
//   font-weight: 900;
//   background: ${ThemeGradient};
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
// `;

// const StyledInput = styled.input`
//   border: 1px solid ${Border};
//   border-radius: 6px;
//   padding: 8px 10px;
//   font-size: 0.9rem;
//   outline: none;
//   color: ${Dark};
//   width: 100%;
//   box-sizing: border-box;
//   margin: 0;
//   font-weight: 600;

//   &:focus {
//     border-color: ${PrimaryCyan};
//     box-shadow: 0 0 0 3px rgba(0, 174, 239, 0.15);
//   }
// `;

// const StyledTextarea = styled.textarea`
//   border: 1px solid ${Border};
//   border-radius: 6px;
//   padding: 8px 10px;
//   font-size: 0.9rem;
//   outline: none;
//   color: ${Dark};
//   width: 100%;
//   box-sizing: border-box;
//   resize: vertical;
//   min-height: 70px;
//   margin: 0;
//   font-weight: 600;

//   &:focus {
//     border-color: ${PrimaryCyan};
//     box-shadow: 0 0 0 3px rgba(0, 174, 239, 0.15);
//   }
// `;

// const ModalActions = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   gap: 10px;
//   margin-top: 5px;
// `;

// const CancelButton = styled.button`
//   background: ${LightBg};
//   color: ${TextMuted};
//   border: 1px solid ${Border};
//   border-radius: 6px;
//   padding: 6px 10px;
//   font-size: 0.85rem;
//   font-weight: 800;
//   cursor: pointer;

//   &:hover {
//     background: #cbd5e1;
//     color: ${Dark};
//   }
// `;

// const SaveButton = styled.button`
//   background: ${ThemeGradient};
//   color: ${White};
//   border: none;
//   border-radius: 6px;
//   padding: 6px 10px;
//   font-size: 0.85rem;
//   font-weight: 800;
//   cursor: pointer;
//   box-shadow: 0 4px 10px rgba(0, 174, 239, 0.2);

//   &:hover {
//     opacity: 0.95;
//   }
// `;

// export default function AnnouncementsCrudPage() {
//   const [announcements, setAnnouncements] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Modal State Controls
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editingId, setEditingId] = useState(null);
//   const [titleInput, setTitleInput] = useState("");
//   const [messageInput, setMessageInput] = useState("");
//   const [linkInput, setLinkInput] = useState("");
//   const [searchQuery, setSearchQuery] = useState("");

//   const fetchAnnouncements = async () => {
//     try {
//       setLoading(true);
//       const querySnapshot = await getDocs(collection(db, "announcements"));
//       const list = querySnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setAnnouncements(list);
//     } catch (error) {
//       Swal.fire("Error", "Failed to fetch announcements.", "error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAnnouncements();
//   }, []);

//   const openAddModal = () => {
//     setEditingId(null);
//     setTitleInput("");
//     setMessageInput("");
//     setLinkInput("");
//     setIsModalOpen(true);
//   };

//   const openEditModal = (item) => {
//     setEditingId(item.id);
//     setTitleInput(item.title);
//     setMessageInput(item.message || "");
//     setLinkInput(item.link || "");
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setTitleInput("");
//     setMessageInput("");
//     setLinkInput("");
//     setEditingId(null);
//   };

//   const handleSaveAnnouncement = async (e) => {
//     e.preventDefault();
//     if (!titleInput.trim()) {
//       Swal.fire("Validation", "Please enter an announcement title.", "warning");
//       return;
//     }

//     try {
//       if (editingId) {
//         const docRef = doc(db, "announcements", editingId);
//         await updateDoc(docRef, {
//           title: titleInput,
//           message: messageInput,
//           link: linkInput,
//         });
//         Swal.fire("Updated!", "Announcement updated successfully.", "success");
//       } else {
//         await addDoc(collection(db, "announcements"), {
//           title: titleInput,
//           message: messageInput,
//           link: linkInput,
//           createdAt: serverTimestamp(),
//         });
//         Swal.fire("Success!", "Announcement posted successfully.", "success");
//       }
//       closeModal();
//       fetchAnnouncements();
//     } catch (error) {
//       Swal.fire("Error", "Could not save announcement.", "error");
//     }
//   };

//   const handleDeleteAnnouncement = async (announcementToDelete) => {
//     const result = await Swal.fire({
//       title: "Are you sure?",
//       text: "This announcement will be removed permanently!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: Danger,
//       cancelButtonColor: TextMuted,
//       confirmButtonText: "Yes, delete it!",
//     });

//     if (result.isConfirmed) {
//       try {
//         await deleteDoc(doc(db, "announcements", announcementToDelete.id));
//         Swal.fire("Deleted!", "Announcement has been removed.", "success");
//         fetchAnnouncements();
//       } catch (error) {
//         Swal.fire("Error", "Could not delete announcement.", "error");
//       }
//     }
//   };

//   const filteredAnnouncements = announcements.filter((item) =>
//     item.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   if (loading) {
//     return <LoadingContainer>Loading announcements...</LoadingContainer>;
//   }

//   return (
//     <Container>
//       <HeaderBanner>
//         <ColorfulTitle>Announcements Management 📢</ColorfulTitle>
//         <ColorfulSub>Broadcast store-wide updates, flash sales, and important notices to your customers.</ColorfulSub>
//       </HeaderBanner>

//       <ActionRow>
//         <ColorfulSectionTitle>All Announcements ({announcements.length})</ColorfulSectionTitle>
     
//         <StyledInput 
//           type="text" 
//           placeholder="Search announcements..." 
//           value={searchQuery} 
//           onChange={(e) => setSearchQuery(e.target.value)} 
//           style={{ maxWidth: "250px", marginRight: "10px" }}
//         />

//         <PrimaryButton onClick={openAddModal}>
//           <span>+ Add Announcement</span>
//         </PrimaryButton>
//       </ActionRow>

//       {filteredAnnouncements.length === 0 ? (
//         <LoadingContainer>No announcements found. Click "+ Add Announcement" to create one.</LoadingContainer>
//       ) : (
//         <AnnouncementsGrid>
//           {filteredAnnouncements.map((item) => (
//             <AnnouncementCard key={item.id}>
//               <CardHeader>
//                 <AnnouncementName>
//                   {item.title ? item.title.charAt(0).toUpperCase() + item.title.slice(1) : ""}
//                 </AnnouncementName>
//               </CardHeader>
//               <AnnouncementDesc>
//                 {(() => {
//                   const msg = item.message || "No message content.";
//                   return msg ? msg.charAt(0).toUpperCase() + msg.slice(1) : "";
//                 })()}
//               </AnnouncementDesc>
//               {item.link && (
//                 <AnnouncementDesc style={{ color: PrimaryCyan, fontSize: "0.8rem", wordBreak: "break-all" }}>
//                   Link: {item.link}
//                 </AnnouncementDesc>
//               )}
//               <ButtonGroup>
//                 <EditButton onClick={() => openEditModal(item)}>Edit</EditButton>
//                 <DeleteButton onClick={() => handleDeleteAnnouncement(item)}>Delete</DeleteButton>
//               </ButtonGroup>
//             </AnnouncementCard>
//           ))}
//         </AnnouncementsGrid>
//       )}

//       {/* 🌟 Custom Form Modal */}
//       {isModalOpen && (
//         <ModalOverlay onClick={closeModal}>
//           <ModalContainer onClick={(e) => e.stopPropagation()}>
//             <ModalTitle>{editingId ? "Edit Announcement" : "Create New Announcement"}</ModalTitle>
//             <form onSubmit={handleSaveAnnouncement} style={{ display: "flex", flexDirection: "column", gap: "10px", margin: 0 }}>
//               <StyledInput 
//                 type="text" 
//                 placeholder="Announcement Title" 
//                 value={titleInput} 
//                 onChange={(e) => setTitleInput(e.target.value)} 
//                 required 
//               />
//               <StyledTextarea 
//                 placeholder="Announcement Message" 
//                 value={messageInput} 
//                 onChange={(e) => setMessageInput(e.target.value)} 
//               />
//               <StyledInput 
//                 type="text" 
//                 placeholder="Optional Target URL / Link (e.g. /shop)" 
//                 value={linkInput} 
//                 onChange={(e) => setLinkInput(e.target.value)} 
//               />
//               <ModalActions>
//                 <CancelButton type="button" onClick={closeModal}>Cancel</CancelButton>
//                 <SaveButton type="submit">{editingId ? "Save Changes" : "Post Announcement"}</SaveButton>
//               </ModalActions>
//             </form>
//           </ModalContainer>
//         </ModalOverlay>
//       )}
//     </Container>
//   );
// }






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

// 🎨 ENITZ GLOBAL BRAND THEME COLORS
const PrimaryNavy = "rgba(115, 23, 28, 0.95)";
const PrimaryCyan = "rgba(85, 15, 18, 0.95)";
const ThemeGradient = "linear-gradient(135deg, rgba(115, 23, 28, 0.95) 0%, rgba(85, 15, 18, 0.95) 100%)";

const Dark = "#0f172a";
const Border = "#cbd5e1";
const White = "#ffffff";
const TextMuted = "#475569";
const LightBg = "#f8fafc";
const Danger = "#ef4444";

// 🌟 Styled Components (Strict max 10px spacing/gaps/margins/padding rule)
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${Dark};
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  font-family: inherit;
`;

const HeaderBanner = styled.div`
  background: ${ThemeGradient};
  color: ${White};
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0 15px 35px rgba(11, 27, 72, 0.2);
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: -30px;
    right: -30px;
    width: 120px;
    height: 120px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    pointer-events: none;
  }
`;

const ColorfulTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 900;
  margin: 0;
  color: ${White};
  letter-spacing: -0.02em;
`;

const ColorfulSub = styled.p`
  font-size: 0.95rem;
  margin: 0;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 500;
`;

const ActionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 0 0;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

const ColorfulSectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 900;
  margin: 0;
  background: ${ThemeGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const PrimaryButton = styled.button`
  background: ${ThemeGradient};
  color: ${White};
  border: none;
  border-radius: 8px;
  padding: 8px 10px;
  font-weight: 800;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0 4px 15px rgba(0, 174, 239, 0.3);
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 174, 239, 0.4);
  }
`;

const AnnouncementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 10px;
`;

const AnnouncementCard = styled.div`
  background: ${White};
  border-radius: 10px;
  padding: 10px;
  border: 1px solid ${Border};
  border-left: 4px solid ${PrimaryCyan};
  box-shadow: 0 4px 15px rgba(15, 23, 42, 0.03);
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: all 0.25s ease;

  &:hover {
    border-color: rgba(0, 174, 239, 0.3);
    box-shadow: 0 8px 25px rgba(15, 23, 42, 0.06);
    transform: translateY(-2px);
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AnnouncementName = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 800;
  color: ${Dark};
`;

const AnnouncementDesc = styled.p`
  margin: 0;
  font-size: 0.85rem;
  color: ${TextMuted};
  word-break: break-word;
  font-weight: 500;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: 5px;
`;

const EditButton = styled.button`
  background: rgba(0, 174, 239, 0.1);
  color: ${PrimaryCyan};
  border: 1px solid rgba(0, 174, 239, 0.2);
  border-radius: 6px;
  padding: 6px 10px;
  font-size: 0.8rem;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 174, 239, 0.2);
  }
`;

const DeleteButton = styled.button`
  background: rgba(239, 68, 68, 0.1);
  color: ${Danger};
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: 6px;
  padding: 6px 10px;
  font-size: 0.8rem;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(239, 68, 68, 0.2);
  }
`;

const LoadingContainer = styled.div`
  padding: 20px;
  text-align: center;
  color: ${Dark};
  font-weight: 700;
  background: ${White};
  border-radius: 10px;
  border: 1px solid ${Border};
`;

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
  max-width: 400px;
  border: 1px solid ${Border};
  box-shadow: 0 15px 35px rgba(15, 23, 42, 0.15);
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ModalTitle = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 900;
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
  font-weight: 600;

  &:focus {
    border-color: ${PrimaryCyan};
    box-shadow: 0 0 0 3px rgba(0, 174, 239, 0.15);
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
  min-height: 70px;
  margin: 0;
  font-weight: 600;

  &:focus {
    border-color: ${PrimaryCyan};
    box-shadow: 0 0 0 3px rgba(0, 174, 239, 0.15);
  }
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 5px;
`;

const CancelButton = styled.button`
  background: ${LightBg};
  color: ${TextMuted};
  border: 1px solid ${Border};
  border-radius: 6px;
  padding: 6px 10px;
  font-size: 0.85rem;
  font-weight: 800;
  cursor: pointer;

  &:hover {
    background: #cbd5e1;
    color: ${Dark};
  }
`;

const SaveButton = styled.button`
  background: ${ThemeGradient};
  color: ${White};
  border: none;
  border-radius: 6px;
  padding: 6px 10px;
  font-size: 0.85rem;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 174, 239, 0.2);

  &:hover {
    opacity: 0.95;
  }
`;

// 🔹 Compression utility function
const compressImage = (file, maxSizeKB = 100) => {
  return new Promise((resolve, reject) => {
    if (!file) return reject(new Error("No file provided"));

    const reader = new FileReader();

    reader.onload = (e) => {
      const img = document.createElement("img");
      img.src = e.target.result;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const MAX_WIDTH = 800;
        const scaleSize = img.width > MAX_WIDTH ? MAX_WIDTH / img.width : 1;

        canvas.width = img.width * scaleSize;
        canvas.height = img.height * scaleSize;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        let quality = 0.7;

        const compressLoop = () => {
          canvas.toBlob(
            (blob) => {
              if (!blob) return reject(new Error("Compression failed"));

              const sizeKB = blob.size / 1024;
              if (sizeKB <= maxSizeKB || quality <= 0.1) {
                resolve(blob);
              } else {
                quality -= 0.1;
                compressLoop();
              }
            },
            "image/jpeg",
            quality
          );
        };

        compressLoop();
      };

      img.onerror = () => reject(new Error("Image load failed"));
    };

    reader.onerror = () => reject(new Error("File reading failed"));
    reader.readAsDataURL(file);
  });
};

export default function AnnouncementsCrudPage() {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modal State Controls
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [titleInput, setTitleInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [linkInput, setLinkInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Image States for Announcement
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [existingImageUrl, setExistingImageUrl] = useState("");

  const fetchAnnouncements = async () => {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, "announcements"));
      const list = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAnnouncements(list);
    } catch (error) {
      Swal.fire("Error", "Failed to fetch announcements.", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const openAddModal = () => {
    setEditingId(null);
    setTitleInput("");
    setMessageInput("");
    setLinkInput("");
    setImageFile(null);
    setImagePreview("");
    setExistingImageUrl("");
    setIsModalOpen(true);
  };

  const openEditModal = (item) => {
    setEditingId(item.id);
    setTitleInput(item.title);
    setMessageInput(item.message || "");
    setLinkInput(item.link || "");
    setExistingImageUrl(item.image || "");
    setImagePreview(item.image || "");
    setImageFile(null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTitleInput("");
    setMessageInput("");
    setLinkInput("");
    setImageFile(null);
    setImagePreview("");
    setExistingImageUrl("");
    setEditingId(null);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
    setExistingImageUrl("");
    e.target.value = "";
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setImagePreview("");
    setExistingImageUrl("");
  };

  const handleSaveAnnouncement = async (e) => {
    e.preventDefault();
    if (!titleInput.trim()) {
      return Swal.fire("Validation", "Please enter an announcement title.", "warning");
    }

    try {
      Swal.fire({
        text: "Processing...",
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
      });

      let finalImageUrl = existingImageUrl;

      if (imageFile) {
        const compressedBlob = await compressImage(imageFile, 100);

        const data = new FormData();
        data.append("file", compressedBlob, "announcement.jpg");
        data.append("upload_preset", "bees_interior");
        data.append("folder", "announcements_elizabeth_foundation");

        const res = await fetch(
          "https://api.cloudinary.com/v1_1/aqxyleoh/image/upload",
          {
            method: "POST",
            body: data,
          }
        );

        const result = await res.json();

        if (!res.ok) {
          throw new Error(result.error?.message || "Image upload failed");
        }

        finalImageUrl = result.secure_url;
      }

      const payload = {
        title: titleInput,
        message: messageInput,
        link: linkInput,
        image: finalImageUrl,
      };

      if (editingId) {
        const docRef = doc(db, "announcements", editingId);
        await updateDoc(docRef, payload);
        Swal.close();
        Swal.fire("Updated!", "Announcement updated successfully.", "success");
      } else {
        await addDoc(collection(db, "announcements"), {
          ...payload,
          createdAt: serverTimestamp(),
        });
        Swal.close();
        Swal.fire("Success!", "Announcement posted successfully.", "success");
      }
      closeModal();
      fetchAnnouncements();
    } catch (error) {
      Swal.close();
      Swal.fire("Error", error.message || "Could not save announcement.", "error");
    }
  };

  const handleDeleteAnnouncement = async (announcementToDelete) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This announcement will be removed permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: Danger,
      cancelButtonColor: TextMuted,
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await deleteDoc(doc(db, "announcements", announcementToDelete.id));
        Swal.fire("Deleted!", "Announcement has been removed.", "success");
        fetchAnnouncements();
      } catch (error) {
        Swal.fire("Error", "Could not delete announcement.", "error");
      }
    }
  };

  const filteredAnnouncements = announcements.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <LoadingContainer>Loading announcements...</LoadingContainer>;
  }

  return (
    <Container>
      <HeaderBanner>
        <ColorfulTitle>Announcements Management 📢</ColorfulTitle>
        <ColorfulSub>Broadcast store-wide updates, flash sales, and important notices to your customers.</ColorfulSub>
      </HeaderBanner>

      <ActionRow>
        <ColorfulSectionTitle>All Announcements ({announcements.length})</ColorfulSectionTitle>
     
        <StyledInput 
          type="text" 
          placeholder="Search announcements..." 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
          style={{ maxWidth: "250px", marginRight: "10px" }}
        />

        <PrimaryButton onClick={openAddModal}>
          <span>+ Add Announcement</span>
        </PrimaryButton>
      </ActionRow>

      {filteredAnnouncements.length === 0 ? (
        <LoadingContainer>No announcements found. Click "+ Add Announcement" to create one.</LoadingContainer>
      ) : (
        <AnnouncementsGrid>
          {filteredAnnouncements.map((item) => (
            <AnnouncementCard key={item.id}>
              {item.image && (
                <div style={{ width: "100%", height: "140px", overflow: "hidden", borderRadius: "8px 8px 0 0" }}>
                  <img src={item.image} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              )}
              <CardHeader>
                <AnnouncementName>
                  {item.title ? item.title.charAt(0).toUpperCase() + item.title.slice(1) : ""}
                </AnnouncementName>
              </CardHeader>
              <AnnouncementDesc>
                {(() => {
                  const msg = item.message || "No message content.";
                  return msg ? msg.charAt(0).toUpperCase() + msg.slice(1) : "";
                })()}
              </AnnouncementDesc>
              {item.link && (
                <AnnouncementDesc style={{ color: PrimaryCyan, fontSize: "0.8rem", wordBreak: "break-all" }}>
                  Link: {item.link}
                </AnnouncementDesc>
              )}
              <ButtonGroup>
                <EditButton onClick={() => openEditModal(item)}>Edit</EditButton>
                <DeleteButton onClick={() => handleDeleteAnnouncement(item)}>Delete</DeleteButton>
              </ButtonGroup>
            </AnnouncementCard>
          ))}
        </AnnouncementsGrid>
      )}

      {/* 🌟 Custom Form Modal */}
      {isModalOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <ModalTitle>{editingId ? "Edit Announcement" : "Create New Announcement"}</ModalTitle>
            <form onSubmit={handleSaveAnnouncement} style={{ display: "flex", flexDirection: "column", gap: "10px", margin: 0 }}>
              <StyledInput 
                type="text" 
                placeholder="Announcement Title" 
                value={titleInput} 
                onChange={(e) => setTitleInput(e.target.value)} 
                required 
              />
              <StyledTextarea 
                placeholder="Announcement Message" 
                value={messageInput} 
                onChange={(e) => setMessageInput(e.target.value)} 
              />
              <StyledInput 
                type="text" 
                placeholder="Optional Target URL / Link (e.g. /shop)" 
                value={linkInput} 
                onChange={(e) => setLinkInput(e.target.value)} 
              />

              {/* 🌟 Announcement Image Upload & Preview Field */}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label style={{ fontSize: "0.85rem", fontWeight: "700", color: "#333" }}>
                  Announcement Image
                </label>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleFileChange} 
                    style={{ fontSize: "0.85rem" }}
                  />
                  {imagePreview && (
                    <div style={{ position: "relative", width: "50px", height: "50px", borderRadius: "6px", overflow: "hidden", border: "1px solid #ccc" }}>
                      <img src={imagePreview} alt="Preview" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      <button 
                        type="button" 
                        onClick={handleRemoveImage}
                        style={{ position: "absolute", top: 0, right: 0, background: "red", color: "white", border: "none", fontSize: "10px", cursor: "pointer", padding: "2px 4px" }}
                      >
                        ✕
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <ModalActions>
                <CancelButton type="button" onClick={closeModal}>Cancel</CancelButton>
                <SaveButton type="submit">{editingId ? "Save Changes" : "Post Announcement"}</SaveButton>
              </ModalActions>
            </form>
          </ModalContainer>
        </ModalOverlay>
      )}
    </Container>
  );
}