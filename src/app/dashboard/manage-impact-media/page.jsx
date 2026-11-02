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
// import imageCompression from "browser-image-compression";

// // 🎨 THEME COLORS (Consistent with your theme)
// const PrimaryNavy = "rgba(115, 23, 28, 0.95)";
// const PrimaryCyan = "rgba(85, 15, 18, 0.95)";
// const ThemeGradient = "linear-gradient(135deg, rgba(115, 23, 28, 0.95) 0%, rgba(85, 15, 18, 0.95) 100%)";

// const Dark = "#0f172a";
// const Border = "#cbd5e1";
// const White = "#ffffff";
// const TextMuted = "#475569";
// const LightBg = "#f8fafc";
// const Danger = "#ef4444";
// const Success = "#22c55e";

// // 🌟 Styled Components
// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
//   color: ${Dark};
//   width: 100%;
//   padding: 16px;
//   box-sizing: border-box;
//   background-color: ${LightBg};
//   min-height: 100vh;
// `;

// const HeaderBanner = styled.div`
//   background: ${ThemeGradient};
//   color: ${White};
//   padding: 16px;
//   border-radius: 12px;
//   display: flex;
//   flex-direction: column;
//   gap: 6px;
//   box-shadow: 0 10px 25px rgba(115, 23, 28, 0.15);
// `;

// const ColorfulTitle = styled.h1`
//   font-size: 1.6rem;
//   font-weight: 900;
//   margin: 0;
//   color: ${White};
//   letter-spacing: -0.5px;
// `;

// const ColorfulSub = styled.p`
//   font-size: 0.95rem;
//   margin: 0;
//   color: #f8fafc;
//   opacity: 0.95;
//   font-weight: 500;
// `;

// const ActionRow = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   gap: 10px;
//   flex-wrap: wrap;
// `;

// const ColorfulSectionTitle = styled.h2`
//   font-size: 1.25rem;
//   font-weight: 800;
//   margin: 0 0 12px 0;
//   background: ${ThemeGradient};
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
// `;

// const PrimaryButton = styled.button`
//   background: ${ThemeGradient};
//   color: ${White};
//   border: none;
//   border-radius: 8px;
//   padding: 8px 14px;
//   font-weight: 700;
//   font-size: 0.9rem;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   gap: 6px;
//   box-shadow: 0 4px 15px rgba(115, 23, 28, 0.3);
//   transition: all 0.25s ease;

//   &:hover {
//     transform: translateY(-2px);
//     box-shadow: 0 6px 20px rgba(115, 23, 28, 0.45);
//   }
// `;

// const SectionContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 12px;
//   margin-top: 10px;
// `;

// const ImpactsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
//   gap: 16px;
//   width: 100%;
//   box-sizing: border-box;
// `;

// const ImpactCard = styled.div`
//   background: ${White};
//   border-radius: 12px;
//   border: 1px solid ${Border};
//   box-shadow: 0 6px 20px rgba(15, 23, 42, 0.04);
//   display: flex;
//   flex-direction: column;
//   overflow: hidden;
//   transition: all 0.3s ease;

//   &:hover {
//     transform: translateY(-3px);
//     box-shadow: 0 10px 25px rgba(115, 23, 28, 0.12);
//     border-color: rgba(115, 23, 28, 0.3);
//   }

//   img, video {
//     width: 100%;
//     height: 180px;
//     object-fit: cover;
//     background: #000;
//   }
// `;

// const CardBody = styled.div`
//   padding: 12px 14px;
//   display: flex;
//   flex-direction: column;
//   gap: 8px;
//   flex: 1;
//   justify-content: space-between;
// `;

// const CardDesc = styled.p`
//   margin: 0;
//   font-size: 0.88rem;
//   color: ${TextMuted};
//   line-height: 1.5;
// `;

// const CardFooter = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   gap: 8px;
//   padding-top: 8px;
//   border-top: 1px dashed ${Border};
// `;

// const EditButton = styled.button`
//   background: rgba(115, 23, 28, 0.1);
//   color: ${PrimaryNavy};
//   border: none;
//   border-radius: 6px;
//   padding: 5px 10px;
//   font-size: 0.75rem;
//   font-weight: 700;
//   cursor: pointer;

//   &:hover {
//     background: rgba(115, 23, 28, 0.2);
//   }
// `;

// const DeleteButton = styled.button`
//   background: rgba(239, 68, 68, 0.1);
//   color: ${Danger};
//   border: none;
//   border-radius: 6px;
//   padding: 5px 10px;
//   font-size: 0.75rem;
//   font-weight: 700;
//   cursor: pointer;

//   &:hover {
//     background: rgba(239, 68, 68, 0.2);
//   }
// `;

// const LoadingContainer = styled.div`
//   padding: 20px;
//   text-align: center;
//   color: ${TextMuted};
//   font-weight: 600;
// `;

// // Modal Components
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
//   border-radius: 12px;
//   padding: 16px;
//   width: 100%;
//   max-width: 440px;
//   max-height: 90vh;
//   overflow-y: auto;
//   border: 1px solid ${Border};
//   box-shadow: 0 20px 40px rgba(15, 23, 42, 0.15);
//   display: flex;
//   flex-direction: column;
//   gap: 12px;
// `;

// const ModalTitle = styled.h3`
//   margin: 0;
//   font-size: 1.2rem;
//   font-weight: 800;
//   background: ${ThemeGradient};
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
// `;

// const StyledSelect = styled.select`
//   border: 1px solid ${Border};
//   border-radius: 8px;
//   padding: 9px 12px;
//   font-size: 0.9rem;
//   outline: none;
//   color: ${Dark};
//   width: 100%;
//   box-sizing: border-box;
//   background: ${White};

//   &:focus {
//     border-color: ${PrimaryNavy};
//   }
// `;

// const StyledTextarea = styled.textarea`
//   border: 1px solid ${Border};
//   border-radius: 8px;
//   padding: 9px 12px;
//   font-size: 0.9rem;
//   outline: none;
//   color: ${Dark};
//   width: 100%;
//   box-sizing: border-box;
//   resize: vertical;
//   min-height: 80px;
//   background: ${White};

//   &:focus {
//     border-color: ${PrimaryNavy};
//   }
// `;

// const ModalActions = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   gap: 10px;
//   margin-top: 5px;
// `;

// const CancelButton = styled.button`
//   background: ${Border};
//   color: ${TextMuted};
//   border: none;
//   border-radius: 8px;
//   padding: 8px 12px;
//   font-size: 0.85rem;
//   font-weight: 700;
//   cursor: pointer;
// `;

// const SaveButton = styled.button`
//   background: ${ThemeGradient};
//   color: ${White};
//   border: none;
//   border-radius: 8px;
//   padding: 8px 14px;
//   font-size: 0.85rem;
//   font-weight: 700;
//   cursor: pointer;
// `;

// const PreviewBtn = styled.span`
//   display: inline-block;
//   cursor: pointer;
//   text-align: center;
//   width: 100%;
//   padding: 10px;
//   background: #f1f5f9;
//   border: 1px dashed ${Border};
//   border-radius: 8px;
//   font-weight: 700;
//   font-size: 0.85rem;
//   color: ${PrimaryNavy};

//   &:hover {
//     background: #e2e8f0;
//   }
// `;

// export default function ManageImpactsPage() {
//   const [impacts, setImpacts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Modal State Controls
//   const [showModal, setShowModal] = useState(false);
//   const [editingId, setEditingId] = useState(null);

//   // Form States
//   const [mediaType, setMediaType] = useState("image"); // "image" or "video"
//   const [description, setDescription] = useState("");
//   const [mediaFile, setMediaFile] = useState(null);
//   const [mediaPreview, setMediaPreview] = useState("");

//   useEffect(() => {
//     fetchImpacts();
//   }, []);

//   const fetchImpacts = async () => {
//     try {
//       setLoading(true);
//       const querySnapshot = await getDocs(collection(db, "foundationImpacts"));
//       const list = querySnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setImpacts(list);
//     } catch (error) {
//       Swal.fire("Error", "Failed to fetch impact posts.", "error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleMediaSelect = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     if (mediaType === "image" && !file.type.startsWith("image/")) {
//       return Swal.fire("Error", "Please select a valid image file.", "error");
//     }
//     if (mediaType === "video" && !file.type.startsWith("video/")) {
//       return Swal.fire("Error", "Please select a valid video file.", "error");
//     }

//     setMediaFile(file);
//     setMediaPreview(URL.createObjectURL(file));
//   };

//   const compressImage = async (file, maxSizeKB = 150) => {
//     if (!file) throw new Error("No file provided");
//     const options = {
//       maxSizeMB: maxSizeKB / 1024,
//       maxWidthOrHeight: 1200,
//       useWebWorker: true,
//       fileType: "image/jpeg",
//     };
//     try {
//       return await imageCompression(file, options);
//     } catch (error) {
//       return file;
//     }
//   };

//   const uploadToCloudinary = async (blobOrFile, type) => {
//     const data = new FormData();
//     data.append("file", blobOrFile);
//     data.append("upload_preset", "bees_interior"); // Replace with your Cloudinary upload preset if different
//     data.append("folder", "EFSS_foundation_impacts");

//     const resourceType = type === "video" ? "video" : "image";
//     const res = await fetch(`https://api.cloudinary.com/v1_1/aqxyleoh/${resourceType}/upload`, {
//       method: "POST",
//       body: data,
//     });

//     const json = await res.json();
//     if (!res.ok) {
//       throw new Error(json.error?.message || "Upload failed");
//     }
//     return json.secure_url;
//   };

//   const handleSave = async (e) => {
//     e.preventDefault();
//     try {
//       if (!description.trim()) {
//         return Swal.fire("Missing Field", "Please provide a description.", "warning");
//       }
//       if (!editingId && !mediaFile) {
//         return Swal.fire("Missing Field", "Please select a media file.", "warning");
//       }

//       Swal.fire({
//         text: editingId ? "Updating post..." : "Uploading and saving post...",
//         allowOutsideClick: false,
//         didOpen: () => Swal.showLoading(),
//       });

//       let mediaUrl = mediaPreview;
//       if (mediaFile) {
//         if (mediaType === "image") {
//           const compressedBlob = await compressImage(mediaFile, 150);
//           mediaUrl = await uploadToCloudinary(compressedBlob, "image");
//         } else {
//           mediaUrl = await uploadToCloudinary(mediaFile, "video");
//         }
//       }

//       const payload = {
//         mediaType,
//         description,
//         url: mediaUrl,
//       };

//       if (editingId) {
//         await updateDoc(doc(db, "foundationImpacts", editingId), payload);
//       } else {
//         await addDoc(collection(db, "foundationImpacts"), {
//           ...payload,
//           createdAt: serverTimestamp(),
//         });
//       }

//       Swal.close();
//       Swal.fire({
//         icon: "success",
//         text: "Impact Post Saved Successfully!",
//         timer: 1500,
//         showConfirmButton: false,
//       });

//       setShowModal(false);
//       resetForm();
//       fetchImpacts();
//     } catch (error) {
//       Swal.close();
//       Swal.fire("Error", error.message || "Something went wrong.", "error");
//     }
//   };

//   const handleEdit = (item) => {
//     setMediaType(item.mediaType || "image");
//     setDescription(item.description || "");
//     setMediaFile(null);
//     setMediaPreview(item.url || "");
//     setEditingId(item.id);
//     setShowModal(true);
//   };

//   const handleDelete = async (id) => {
//     const result = await Swal.fire({
//       title: "Are you sure?",
//       text: "This impact post will be deleted permanently.",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: Danger,
//       cancelButtonColor: TextMuted,
//       confirmButtonText: "Yes, delete it!",
//     });

//     if (!result.isConfirmed) return;

//     try {
//       await deleteDoc(doc(db, "foundationImpacts", id));
//       Swal.fire("Deleted!", "", "success");
//       fetchImpacts();
//     } catch (error) {
//       Swal.fire("Error", "Could not delete post.", "error");
//     }
//   };

//   const resetForm = () => {
//     setMediaType("image");
//     setDescription("");
//     setMediaFile(null);
//     setMediaPreview("");
//     setEditingId(null);
//   };

//   const imageImpacts = impacts.filter((item) => item.mediaType === "image");
//   const videoImpacts = impacts.filter((item) => item.mediaType === "video");

//   if (loading) {
//     return <LoadingContainer>Loading impact posts...</LoadingContainer>;
//   }

//   return (
//     <Container>
//       <HeaderBanner>
//         <ColorfulTitle>Foundation Impacts Management 🌟</ColorfulTitle>
//         <ColorfulSub>Post and manage image and video impact stories for your foundation platform.</ColorfulSub>
//       </HeaderBanner>

//       <ActionRow>
//         <ColorfulSectionTitle>Impact Gallery & Stories</ColorfulSectionTitle>
//         <PrimaryButton onClick={() => { resetForm(); setShowModal(true); }}>
//           <span>+ Create Impact Post</span>
//         </PrimaryButton>
//       </ActionRow>

//       {/* Images Section (Displayed Above) */}
//       <SectionContainer>
//         <ColorfulSectionTitle style={{ fontSize: "1.1rem" }}>📸 Image Impacts ({imageImpacts.length})</ColorfulSectionTitle>
//         {imageImpacts.length === 0 ? (
//           <p style={{ fontSize: "0.85rem", color: TextMuted, fontStyle: "italic" }}>No image impact posts available.</p>
//         ) : (
//           <ImpactsGrid>
//             {imageImpacts.map((item) => (
//               <ImpactCard key={item.id}>
//                 <img src={item.url} alt="Impact" />
//                 <CardBody>
//                   <CardDesc>{item.description}</CardDesc>
//                   <CardFooter>
//                     <EditButton onClick={() => handleEdit(item)}>Edit</EditButton>
//                     <DeleteButton onClick={() => handleDelete(item.id)}>Delete</DeleteButton>
//                   </CardFooter>
//                 </CardBody>
//               </ImpactCard>
//             ))}
//           </ImpactsGrid>
//         )}
//       </SectionContainer>

//       {/* Videos Section (Displayed Below) */}
//       <SectionContainer style={{ marginTop: "2rem" }}>
//         <ColorfulSectionTitle style={{ fontSize: "1.1rem" }}>🎥 Video Impacts ({videoImpacts.length})</ColorfulSectionTitle>
//         {videoImpacts.length === 0 ? (
//           <p style={{ fontSize: "0.85rem", color: TextMuted, fontStyle: "italic" }}>No video impact posts available.</p>
//         ) : (
//           <ImpactsGrid>
//             {videoImpacts.map((item) => (
//               <ImpactCard key={item.id}>
//                 <video src={item.url} controls />
//                 <CardBody>
//                   <CardDesc>{item.description}</CardDesc>
//                   <CardFooter>
//                     <EditButton onClick={() => handleEdit(item)}>Edit</EditButton>
//                     <DeleteButton onClick={() => handleDelete(item.id)}>Delete</DeleteButton>
//                   </CardFooter>
//                 </CardBody>
//               </ImpactCard>
//             ))}
//           </ImpactsGrid>
//         )}
//       </SectionContainer>

//       {/* Create / Edit Modal */}
//       {showModal && (
//         <ModalOverlay onClick={() => setShowModal(false)}>
//           <ModalContainer onClick={(e) => e.stopPropagation()}>
//             <ModalTitle>{editingId ? "Edit Impact Post" : "Create Impact Post"}</ModalTitle>
//             <form onSubmit={handleSave} style={{ display: "flex", flexDirection: "column", gap: "10px", margin: 0 }}>
              
//               <label style={{ fontSize: "0.85rem", fontWeight: 700 }}>Select Media Type</label>
//               <StyledSelect 
//                 value={mediaType} 
//                 onChange={(e) => {
//                   setMediaType(e.target.value);
//                   setMediaFile(null);
//                   setMediaPreview("");
//                 }}
//               >
//                 <option value="image">Image Post</option>
//                 <option value="video">Video Post</option>
//               </StyledSelect>

//               <label style={{ fontSize: "0.85rem", fontWeight: 700 }}>Description</label>
//               <StyledTextarea
//                 placeholder="Write description about this impact..."
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 required
//               />

//               <label style={{ fontSize: "0.85rem", fontWeight: 700 }}>Upload Media File</label>
//               <input
//                 id="impactMediaUpload"
//                 type="file"
//                 accept={mediaType === "image" ? "image/*" : "video/*"}
//                 onChange={handleMediaSelect}
//                 style={{ display: "none" }}
//               />
//               <label htmlFor="impactMediaUpload">
//                 <PreviewBtn as="span">
//                   {mediaFile ? `Selected: ${mediaFile.name}` : "Click to Select File"}
//                 </PreviewBtn>
//               </label>

//               {mediaPreview && (
//                 <div style={{ marginTop: "6px" }}>
//                   {mediaType === "image" ? (
//                     <img src={mediaPreview} alt="Preview" style={{ width: "100%", height: "120px", objectFit: "cover", borderRadius: "8px" }} />
//                   ) : (
//                     <video src={mediaPreview} controls style={{ width: "100%", height: "120px", objectFit: "cover", borderRadius: "8px" }} />
//                   )}
//                 </div>
//               )}

//               <ModalActions>
//                 <CancelButton type="button" onClick={() => setShowModal(false)}>Cancel</CancelButton>
//                 <SaveButton type="submit">{editingId ? "Save Changes" : "Post Impact"}</SaveButton>
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
import imageCompression from "browser-image-compression";

// 🎨 THEME COLORS (Consistent with your theme)
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
  gap: 20px;
  color: ${Dark};
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  background-color: ${LightBg};
  min-height: 100vh;
`;

const HeaderBanner = styled.div`
  background: ${ThemeGradient};
  color: ${White};
  padding: 16px;
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
  flex-wrap: wrap;
`;

const ColorfulSectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 800;
  margin: 0 0 12px 0;
  background: ${ThemeGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const PrimaryButton = styled.button`
  background: ${ThemeGradient};
  color: ${White};
  border: none;
  border-radius: 8px;
  padding: 8px 14px;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0 4px 15px rgba(115, 23, 28, 0.3);
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(115, 23, 28, 0.45);
  }
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 10px;
`;

const ImpactsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
  width: 100%;
  box-sizing: border-box;
`;

const ImpactCard = styled.div`
  background: ${White};
  border-radius: 12px;
  border: 1px solid ${Border};
  box-shadow: 0 6px 20px rgba(15, 23, 42, 0.04);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(115, 23, 28, 0.12);
    border-color: rgba(115, 23, 28, 0.3);
  }

  img, video {
    width: 100%;
    height: 180px;
    object-fit: cover;
    background: #000;
  }
`;

const CardBody = styled.div`
  padding: 12px 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  justify-content: space-between;
`;

const CardDesc = styled.p`
  margin: 0;
  font-size: 0.88rem;
  color: ${TextMuted};
  line-height: 1.5;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding-top: 8px;
  border-top: 1px dashed ${Border};
`;

const EditButton = styled.button`
  background: rgba(115, 23, 28, 0.1);
  color: ${PrimaryNavy};
  border: none;
  border-radius: 6px;
  padding: 5px 10px;
  font-size: 0.75rem;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background: rgba(115, 23, 28, 0.2);
  }
`;

const DeleteButton = styled.button`
  background: rgba(239, 68, 68, 0.1);
  color: ${Danger};
  border: none;
  border-radius: 6px;
  padding: 5px 10px;
  font-size: 0.75rem;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background: rgba(239, 68, 68, 0.2);
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
  max-width: 440px;
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

const StyledSelect = styled.select`
  border: 1px solid ${Border};
  border-radius: 8px;
  padding: 9px 12px;
  font-size: 0.9rem;
  outline: none;
  color: ${Dark};
  width: 100%;
  box-sizing: border-box;
  background: ${White};

  &:focus {
    border-color: ${PrimaryNavy};
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
  background: ${White};

  &:focus {
    border-color: ${PrimaryNavy};
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
`;

const PreviewBtn = styled.span`
  display: inline-block;
  cursor: pointer;
  text-align: center;
  width: 100%;
  padding: 10px;
  background: #f1f5f9;
  border: 1px dashed ${Border};
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.85rem;
  color: ${PrimaryNavy};

  &:hover {
    background: #e2e8f0;
  }
`;

const PreviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-top: 6px;
  max-height: 140px;
  overflow-y: auto;

  img, video {
    width: 100%;
    height: 65px;
    object-fit: cover;
    border-radius: 6px;
    border: 1px solid ${Border};
    background: #000;
  }
`;

export default function ManageImpactsPage() {
  const [impacts, setImpacts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modal State Controls
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Form States (Updated to support arrays/multiple files for creation, single file for edit)
  const [mediaType, setMediaType] = useState("image"); // "image" or "video"
  const [description, setDescription] = useState("");
  const [mediaFiles, setMediaFiles] = useState([]); // Array of files for bulk upload
  const [mediaPreviews, setMediaPreviews] = useState([]); // Array of previews

  useEffect(() => {
    fetchImpacts();
  }, []);

  const fetchImpacts = async () => {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, "foundationImpacts"));
      const list = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setImpacts(list);
    } catch (error) {
      Swal.fire("Error", "Failed to fetch impact posts.", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleMediaSelect = (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    for (let file of files) {
      if (mediaType === "image" && !file.type.startsWith("image/")) {
        return Swal.fire("Error", "Only valid image files are allowed.", "error");
      }
      if (mediaType === "video" && !file.type.startsWith("video/")) {
        return Swal.fire("Error", "Only valid video files are allowed.", "error");
      }
    }

    setMediaFiles(files);
    const previews = files.map((file) => URL.createObjectURL(file));
    setMediaPreviews(previews);
  };

  const compressImage = async (file, maxSizeKB = 150) => {
    if (!file) throw new Error("No file provided");
    const options = {
      maxSizeMB: maxSizeKB / 1024,
      maxWidthOrHeight: 1200,
      useWebWorker: true,
      fileType: "image/jpeg",
    };
    try {
      return await imageCompression(file, options);
    } catch (error) {
      return file;
    }
  };

  const uploadToCloudinary = async (blobOrFile, type) => {
    const data = new FormData();
    data.append("file", blobOrFile);
    data.append("upload_preset", "bees_interior"); // Replace with your Cloudinary upload preset if different
    data.append("folder", "EFSS_foundation_impacts");

    const resourceType = type === "video" ? "video" : "image";
    const res = await fetch(`https://api.cloudinary.com/v1_1/aqxyleoh/${resourceType}/upload`, {
      method: "POST",
      body: data,
    });

    const json = await res.json();
    if (!res.ok) {
      throw new Error(json.error?.message || "Upload failed");
    }
    return json.secure_url;
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      if (!description.trim()) {
        return Swal.fire("Missing Field", "Please provide a description.", "warning");
      }
      if (!editingId && mediaFiles.length === 0) {
        return Swal.fire("Missing Field", "Please select at least one media file.", "warning");
      }

      Swal.fire({
        text: editingId ? "Updating post..." : `Uploading ${mediaFiles.length} media item(s)...`,
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
      });

      if (editingId) {
        // Editing existing post (single item update)
        let mediaUrl = mediaPreviews[0];
        if (mediaFiles.length > 0) {
          const file = mediaFiles[0];
          if (mediaType === "image") {
            const compressedBlob = await compressImage(file, 150);
            mediaUrl = await uploadToCloudinary(compressedBlob, "image");
          } else {
            mediaUrl = await uploadToCloudinary(file, "video");
          }
        }

        const payload = {
          mediaType,
          description,
          url: mediaUrl,
        };

        await updateDoc(doc(db, "foundationImpacts", editingId), payload);
      } else {
        // Creating new posts (Supports bulk upload of multiple selected files)
        for (let i = 0; i < mediaFiles.length; i++) {
          const file = mediaFiles[i];
          let mediaUrl = "";

          if (mediaType === "image") {
            const compressedBlob = await compressImage(file, 150);
            mediaUrl = await uploadToCloudinary(compressedBlob, "image");
          } else {
            mediaUrl = await uploadToCloudinary(file, "video");
          }

          // If multiple items are uploaded, append numbering to descriptions or keep base description
          const itemDescription = mediaFiles.length > 1 ? `${description.trim()} (${i + 1})` : description.trim();

          await addDoc(collection(db, "foundationImpacts"), {
            mediaType,
            description: itemDescription,
            url: mediaUrl,
            createdAt: serverTimestamp(),
          });
        }
      }

      Swal.close();
      Swal.fire({
        icon: "success",
        text: editingId ? "Impact Post Updated Successfully!" : `${mediaFiles.length} Impact Post(s) Saved Successfully!`,
        timer: 1500,
        showConfirmButton: false,
      });

      setShowModal(false);
      resetForm();
      fetchImpacts();
    } catch (error) {
      Swal.close();
      Swal.fire("Error", error.message || "Something went wrong.", "error");
    }
  };

  const handleEdit = (item) => {
    setMediaType(item.mediaType || "image");
    setDescription(item.description || "");
    setMediaFiles([]);
    setMediaPreviews([item.url || ""]);
    setEditingId(item.id);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This impact post will be deleted permanently.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: Danger,
      cancelButtonColor: TextMuted,
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    try {
      await deleteDoc(doc(db, "foundationImpacts", id));
      Swal.fire("Deleted!", "", "success");
      fetchImpacts();
    } catch (error) {
      Swal.fire("Error", "Could not delete post.", "error");
    }
  };

  const resetForm = () => {
    setMediaType("image");
    setDescription("");
    setMediaFiles([]);
    setMediaPreviews([]);
    setEditingId(null);
  };

  const imageImpacts = impacts.filter((item) => item.mediaType === "image");
  const videoImpacts = impacts.filter((item) => item.mediaType === "video");

  if (loading) {
    return <LoadingContainer>Loading impact posts...</LoadingContainer>;
  }

  return (
    <Container>
      <HeaderBanner>
        <ColorfulTitle>Foundation Impacts Management 🌟</ColorfulTitle>
        <ColorfulSub>Post and manage image and video impact stories for your foundation platform.</ColorfulSub>
      </HeaderBanner>

      <ActionRow>
        <ColorfulSectionTitle>Impact Gallery & Stories</ColorfulSectionTitle>
        <PrimaryButton onClick={() => { resetForm(); setShowModal(true); }}>
          <span>+ Create Impact Post</span>
        </PrimaryButton>
      </ActionRow>

      {/* Images Section (Displayed Above) */}
      <SectionContainer>
        <ColorfulSectionTitle style={{ fontSize: "1.1rem" }}>📸 Image Impacts ({imageImpacts.length})</ColorfulSectionTitle>
        {imageImpacts.length === 0 ? (
          <p style={{ fontSize: "0.85rem", color: TextMuted, fontStyle: "italic" }}>No image impact posts available.</p>
        ) : (
          <ImpactsGrid>
            {imageImpacts.map((item) => (
              <ImpactCard key={item.id}>
                <img src={item.url} alt="Impact" />
                <CardBody>
                  <CardDesc>{item.description}</CardDesc>
                  <CardFooter>
                    <EditButton onClick={() => handleEdit(item)}>Edit</EditButton>
                    <DeleteButton onClick={() => handleDelete(item.id)}>Delete</DeleteButton>
                  </CardFooter>
                </CardBody>
              </ImpactCard>
            ))}
          </ImpactsGrid>
        )}
      </SectionContainer>

      {/* Videos Section (Displayed Below) */}
      <SectionContainer style={{ marginTop: "2rem" }}>
        <ColorfulSectionTitle style={{ fontSize: "1.1rem" }}>🎥 Video Impacts ({videoImpacts.length})</ColorfulSectionTitle>
        {videoImpacts.length === 0 ? (
          <p style={{ fontSize: "0.85rem", color: TextMuted, fontStyle: "italic" }}>No video impact posts available.</p>
        ) : (
          <ImpactsGrid>
            {videoImpacts.map((item) => (
              <ImpactCard key={item.id}>
                <video src={item.url} controls />
                <CardBody>
                  <CardDesc>{item.description}</CardDesc>
                  <CardFooter>
                    <EditButton onClick={() => handleEdit(item)}>Edit</EditButton>
                    <DeleteButton onClick={() => handleDelete(item.id)}>Delete</DeleteButton>
                  </CardFooter>
                </CardBody>
              </ImpactCard>
            ))}
          </ImpactsGrid>
        )}
      </SectionContainer>

      {/* Create / Edit Modal */}
      {showModal && (
        <ModalOverlay onClick={() => setShowModal(false)}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <ModalTitle>{editingId ? "Edit Impact Post" : "Create Impact Post (Multiple Allowed)"}</ModalTitle>
            <form onSubmit={handleSave} style={{ display: "flex", flexDirection: "column", gap: "10px", margin: 0 }}>
              
              <label style={{ fontSize: "0.85rem", fontWeight: 700 }}>Select Media Type</label>
              <StyledSelect 
                value={mediaType} 
                onChange={(e) => {
                  setMediaType(e.target.value);
                  setMediaFiles([]);
                  setMediaPreviews([]);
                }}
              >
                <option value="image">Image Post(s)</option>
                <option value="video">Video Post(s)</option>
              </StyledSelect>

              <label style={{ fontSize: "0.85rem", fontWeight: 700 }}>Description</label>
              <StyledTextarea
                placeholder="Write description about this impact..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />

              <label style={{ fontSize: "0.85rem", fontWeight: 700 }}>
                Upload Media Files {editingId ? "" : "(Multiple files allowed)"}
              </label>
              <input
                id="impactMediaUpload"
                type="file"
                accept={mediaType === "image" ? "image/*" : "video/*"}
                multiple={!editingId}
                onChange={handleMediaSelect}
                style={{ display: "none" }}
              />
              <label htmlFor="impactMediaUpload">
                <PreviewBtn as="span">
                  {mediaFiles.length > 0 
                    ? `Selected: ${mediaFiles.length} file(s)` 
                    : mediaPreviews.length > 0 && editingId 
                      ? "Change Media File" 
                      : "Click to Select Files"}
                </PreviewBtn>
              </label>

              {mediaPreviews.length > 0 && (
                <PreviewGrid>
                  {mediaPreviews.map((src, idx) => (
                    mediaType === "image" ? (
                      <img key={idx} src={src} alt={`Preview ${idx + 1}`} />
                    ) : (
                      <video key={idx} src={src} controls />
                    )
                  ))}
                </PreviewGrid>
              )}

              <ModalActions>
                <CancelButton type="button" onClick={() => setShowModal(false)}>Cancel</CancelButton>
                <SaveButton type="submit">
                  {editingId ? "Save Changes" : `Post Impact (${mediaFiles.length})`}
                </SaveButton>
              </ModalActions>
            </form>
          </ModalContainer>
        </ModalOverlay>
      )}
    </Container>
  );
}