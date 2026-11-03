




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

// const PreviewGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 8px;
//   margin-top: 6px;
//   max-height: 140px;
//   overflow-y: auto;

//   img, video {
//     width: 100%;
//     height: 65px;
//     object-fit: cover;
//     border-radius: 6px;
//     border: 1px solid ${Border};
//     background: #000;
//   }
// `;

// export default function ManageImpactsPage() {
//   const [impacts, setImpacts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Modal State Controls
//   const [showModal, setShowModal] = useState(false);
//   const [editingId, setEditingId] = useState(null);

//   // Form States (Updated to support arrays/multiple files for creation, single file for edit)
//   const [mediaType, setMediaType] = useState("image"); // "image" or "video"
//   const [description, setDescription] = useState("");
//   const [mediaFiles, setMediaFiles] = useState([]); // Array of files for bulk upload
//   const [mediaPreviews, setMediaPreviews] = useState([]); // Array of previews

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
//     const files = Array.from(e.target.files);
//     if (files.length === 0) return;

//     for (let file of files) {
//       if (mediaType === "image" && !file.type.startsWith("image/")) {
//         return Swal.fire("Error", "Only valid image files are allowed.", "error");
//       }
//       if (mediaType === "video" && !file.type.startsWith("video/")) {
//         return Swal.fire("Error", "Only valid video files are allowed.", "error");
//       }
//     }

//     setMediaFiles(files);
//     const previews = files.map((file) => URL.createObjectURL(file));
//     setMediaPreviews(previews);
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
//       if (!editingId && mediaFiles.length === 0) {
//         return Swal.fire("Missing Field", "Please select at least one media file.", "warning");
//       }

//       Swal.fire({
//         text: editingId ? "Updating post..." : `Uploading ${mediaFiles.length} media item(s)...`,
//         allowOutsideClick: false,
//         didOpen: () => Swal.showLoading(),
//       });

//       if (editingId) {
//         // Editing existing post (single item update)
//         let mediaUrl = mediaPreviews[0];
//         if (mediaFiles.length > 0) {
//           const file = mediaFiles[0];
//           if (mediaType === "image") {
//             const compressedBlob = await compressImage(file, 150);
//             mediaUrl = await uploadToCloudinary(compressedBlob, "image");
//           } else {
//             mediaUrl = await uploadToCloudinary(file, "video");
//           }
//         }

//         const payload = {
//           mediaType,
//           description,
//           url: mediaUrl,
//         };

//         await updateDoc(doc(db, "foundationImpacts", editingId), payload);
//       } else {
//         // Creating new posts (Supports bulk upload of multiple selected files)
//         for (let i = 0; i < mediaFiles.length; i++) {
//           const file = mediaFiles[i];
//           let mediaUrl = "";

//           if (mediaType === "image") {
//             const compressedBlob = await compressImage(file, 150);
//             mediaUrl = await uploadToCloudinary(compressedBlob, "image");
//           } else {
//             mediaUrl = await uploadToCloudinary(file, "video");
//           }

//           // If multiple items are uploaded, append numbering to descriptions or keep base description
//           const itemDescription = mediaFiles.length > 1 ? `${description.trim()} (${i + 1})` : description.trim();

//           await addDoc(collection(db, "foundationImpacts"), {
//             mediaType,
//             description: itemDescription,
//             url: mediaUrl,
//             createdAt: serverTimestamp(),
//           });
//         }
//       }

//       Swal.close();
//       Swal.fire({
//         icon: "success",
//         text: editingId ? "Impact Post Updated Successfully!" : `${mediaFiles.length} Impact Post(s) Saved Successfully!`,
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
//     setMediaFiles([]);
//     setMediaPreviews([item.url || ""]);
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
//     setMediaFiles([]);
//     setMediaPreviews([]);
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
//             <ModalTitle>{editingId ? "Edit Impact Post" : "Create Impact Post (Multiple Allowed)"}</ModalTitle>
//             <form onSubmit={handleSave} style={{ display: "flex", flexDirection: "column", gap: "10px", margin: 0 }}>
              
//               <label style={{ fontSize: "0.85rem", fontWeight: 700 }}>Select Media Type</label>
//               <StyledSelect 
//                 value={mediaType} 
//                 onChange={(e) => {
//                   setMediaType(e.target.value);
//                   setMediaFiles([]);
//                   setMediaPreviews([]);
//                 }}
//               >
//                 <option value="image">Image Post(s)</option>
//                 <option value="video">Video Post(s)</option>
//               </StyledSelect>

//               <label style={{ fontSize: "0.85rem", fontWeight: 700 }}>Description</label>
//               <StyledTextarea
//                 placeholder="Write description about this impact..."
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 required
//               />

//               <label style={{ fontSize: "0.85rem", fontWeight: 700 }}>
//                 Upload Media Files {editingId ? "" : "(Multiple files allowed)"}
//               </label>
//               <input
//                 id="impactMediaUpload"
//                 type="file"
//                 accept={mediaType === "image" ? "image/*" : "video/*"}
//                 multiple={!editingId}
//                 onChange={handleMediaSelect}
//                 style={{ display: "none" }}
//               />
//               <label htmlFor="impactMediaUpload">
//                 <PreviewBtn as="span">
//                   {mediaFiles.length > 0 
//                     ? `Selected: ${mediaFiles.length} file(s)` 
//                     : mediaPreviews.length > 0 && editingId 
//                       ? "Change Media File" 
//                       : "Click to Select Files"}
//                 </PreviewBtn>
//               </label>

//               {mediaPreviews.length > 0 && (
//                 <PreviewGrid>
//                   {mediaPreviews.map((src, idx) => (
//                     mediaType === "image" ? (
//                       <img key={idx} src={src} alt={`Preview ${idx + 1}`} />
//                     ) : (
//                       <video key={idx} src={src} controls />
//                     )
//                   ))}
//                 </PreviewGrid>
//               )}

//               <ModalActions>
//                 <CancelButton type="button" onClick={() => setShowModal(false)}>Cancel</CancelButton>
//                 <SaveButton type="submit">
//                   {editingId ? "Save Changes" : `Post Impact (${mediaFiles.length})`}
//                 </SaveButton>
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

const SecondaryButton = styled.button`
  background: ${White};
  color: ${PrimaryNavy};
  border: 1px solid ${PrimaryNavy};
  border-radius: 8px;
  padding: 8px 14px;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.25s ease;

  &:hover {
    background: rgba(115, 23, 28, 0.05);
  }
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 10px;
`;

const CategoriesListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 10px;
  background: ${White};
  padding: 12px;
  border-radius: 12px;
  border: 1px solid ${Border};
`;

const CategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 6px;
  background: #f1f5f9;
  border: 1px solid ${Border};
  padding: 10px 12px;
  border-radius: 10px;
`;

const CategoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    font-size: 0.9rem;
    color: ${Dark};
  }

  div {
    display: flex;
    gap: 6px;

    button {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 0.8rem;
      padding: 0;
    }
  }
`;

const CategoryDescText = styled.p`
  margin: 0;
  font-size: 0.78rem;
  color: ${TextMuted};
  line-height: 1.4;
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

const CardCategories = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 4px;
`;

const MiniCategoryTag = styled.span`
  background: rgba(115, 23, 28, 0.1);
  color: ${PrimaryNavy};
  font-size: 0.7rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 4px;
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

const StyledInput = styled.input`
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

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 160px;
  overflow-y: auto;
  border: 1px solid ${Border};
  padding: 10px;
  border-radius: 8px;
  background: ${LightBg};
`;

const CheckboxItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  color: ${Dark};

  span.title {
    font-size: 0.85rem;
    font-weight: 700;
  }

  span.desc {
    font-size: 0.75rem;
    color: ${TextMuted};
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
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modal State Controls
  const [showModal, setShowModal] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Impact Form States
  const [mediaType, setMediaType] = useState("image"); // "image" or "video"
  const [description, setDescription] = useState("");
  const [selectedCategoryIds, setSelectedCategoryIds] = useState([]); // Multiple categories
  const [mediaFiles, setMediaFiles] = useState([]); // Array of files for bulk upload
  const [mediaPreviews, setMediaPreviews] = useState([]); // Array of previews

  // Category Form State (Title and Description)
  const [categoryTitle, setCategoryTitle] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");
  const [editingCategoryId, setEditingCategoryId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      
      // Fetch Impacts
      const impactSnapshot = await getDocs(collection(db, "foundationImpacts"));
      const impactList = impactSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setImpacts(impactList);

      // Fetch Categories
      const catSnapshot = await getDocs(collection(db, "impactCategories"));
      const catList = catSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCategories(catList);

    } catch (error) {
      Swal.fire("Error", "Failed to fetch data.", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleCategorySave = async (e) => {
    e.preventDefault();
    if (!categoryTitle.trim()) {
      return Swal.fire("Missing Field", "Please provide a category title.", "warning");
    }

    try {
      if (editingCategoryId) {
        await updateDoc(doc(db, "impactCategories", editingCategoryId), {
          title: categoryTitle.trim(),
          description: categoryDescription.trim(),
        });
        Swal.fire({ icon: "success", text: "Category Updated Successfully!", timer: 1200, showConfirmButton: false });
      } else {
        await addDoc(collection(db, "impactCategories"), {
          title: categoryTitle.trim(),
          description: categoryDescription.trim(),
          createdAt: serverTimestamp(),
        });
        Swal.fire({ icon: "success", text: "Category Created Successfully!", timer: 1200, showConfirmButton: false });
      }

      setShowCategoryModal(false);
      resetCategoryForm();
      fetchData();
    } catch (error) {
      Swal.fire("Error", error.message || "Failed to save category.", "error");
    }
  };

  const handleEditCategory = (cat) => {
    setCategoryTitle(cat.title || cat.name || "");
    setCategoryDescription(cat.description || "");
    setEditingCategoryId(cat.id);
    setShowCategoryModal(true);
  };

  const handleDeleteCategory = async (catId) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This category will be deleted permanently.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: Danger,
      cancelButtonColor: TextMuted,
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    try {
      await deleteDoc(doc(db, "impactCategories", catId));
      Swal.fire("Deleted!", "", "success");
      fetchData();
    } catch (error) {
      Swal.fire("Error", "Could not delete category.", "error");
    }
  };

  const resetCategoryForm = () => {
    setCategoryTitle("");
    setCategoryDescription("");
    setEditingCategoryId(null);
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
    data.append("upload_preset", "bees_interior");
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
      if (selectedCategoryIds.length === 0) {
        return Swal.fire("Missing Field", "Please select at least one category.", "warning");
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
          categoryIds: selectedCategoryIds,
          url: mediaUrl,
        };

        await updateDoc(doc(db, "foundationImpacts", editingId), payload);
      } else {
        for (let i = 0; i < mediaFiles.length; i++) {
          const file = mediaFiles[i];
          let mediaUrl = "";

          if (mediaType === "image") {
            const compressedBlob = await compressImage(file, 150);
            mediaUrl = await uploadToCloudinary(compressedBlob, "image");
          } else {
            mediaUrl = await uploadToCloudinary(file, "video");
          }

          const itemDescription = mediaFiles.length > 1 ? `${description.trim()} (${i + 1})` : description.trim();

          await addDoc(collection(db, "foundationImpacts"), {
            mediaType,
            description: itemDescription,
            categoryIds: selectedCategoryIds,
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
      fetchData();
    } catch (error) {
      Swal.close();
      Swal.fire("Error", error.message || "Something went wrong.", "error");
    }
  };

  const handleEdit = (item) => {
    setMediaType(item.mediaType || "image");
    setDescription(item.description || "");
    setSelectedCategoryIds(item.categoryIds || (item.categoryId ? [item.categoryId] : []));
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
      fetchData();
    } catch (error) {
      Swal.fire("Error", "Could not delete post.", "error");
    }
  };

  const resetForm = () => {
    setMediaType("image");
    setDescription("");
    setSelectedCategoryIds([]);
    setMediaFiles([]);
    setMediaPreviews([]);
    setEditingId(null);
  };

  const imageImpacts = impacts.filter((item) => item.mediaType === "image");
  const videoImpacts = impacts.filter((item) => item.mediaType === "video");

  if (loading) {
    return <LoadingContainer>Loading impact posts and categories...</LoadingContainer>;
  }

  return (
    <Container>
      <HeaderBanner>
        <ColorfulTitle>Foundation Impacts Management 🌟</ColorfulTitle>
        <ColorfulSub>Post and manage categories and image/video impact stories for your foundation platform.</ColorfulSub>
      </HeaderBanner>

      {/* Categories Management Section */}
      <SectionContainer>
        <ActionRow>
          <ColorfulSectionTitle style={{ fontSize: "1.1rem" }}>📂 Impact Categories ({categories.length})</ColorfulSectionTitle>
          <SecondaryButton onClick={() => { resetCategoryForm(); setShowCategoryModal(true); }}>
            <span>+ Create Category</span>
          </SecondaryButton>
        </ActionRow>

        {categories.length === 0 ? (
          <p style={{ fontSize: "0.85rem", color: TextMuted, fontStyle: "italic" }}>No categories created yet. Please create one to assign to impact posts.</p>
        ) : (
          <CategoriesListWrapper>
            {categories.map((cat) => (
              <CategoryCard key={cat.id}>
                <CategoryHeader>
                  <strong>{cat.title || cat.name}</strong>
                  <div>
                    <button onClick={() => handleEditCategory(cat)} title="Edit">✏️</button>
                    <button onClick={() => handleDeleteCategory(cat.id)} title="Delete" style={{ color: Danger }}>❌</button>
                  </div>
                </CategoryHeader>
                {cat.description && <CategoryDescText>{cat.description}</CategoryDescText>}
              </CategoryCard>
            ))}
          </CategoriesListWrapper>
        )}
      </SectionContainer>

      <hr style={{ border: "none", borderTop: `1px solid ${Border}`, margin: "10px 0" }} />

      <ActionRow>
        <ColorfulSectionTitle>Impact Gallery & Stories</ColorfulSectionTitle>
        <PrimaryButton onClick={() => { resetForm(); setShowModal(true); }}>
          <span>+ Create Impact Post</span>
        </PrimaryButton>
      </ActionRow>

      {/* Images Section */}
      <SectionContainer>
        <ColorfulSectionTitle style={{ fontSize: "1.1rem" }}>📸 Image Impacts ({imageImpacts.length})</ColorfulSectionTitle>
        {imageImpacts.length === 0 ? (
          <p style={{ fontSize: "0.85rem", color: TextMuted, fontStyle: "italic" }}>No image impact posts available.</p>
        ) : (
          <ImpactsGrid>
            {imageImpacts.map((item) => {
              const itemCats = categories.filter((c) => (item.categoryIds || []).includes(c.id));
              return (
                <ImpactCard key={item.id}>
                  <img src={item.url} alt="Impact" />
                  <CardBody>
                    <div>
                      {itemCats.length > 0 && (
                        <CardCategories>
                          {itemCats.map((c) => (
                            <MiniCategoryTag key={c.id}>{c.title || c.name}</MiniCategoryTag>
                          ))}
                        </CardCategories>
                      )}
                      <CardDesc>{item.description}</CardDesc>
                    </div>
                    <CardFooter>
                      <EditButton onClick={() => handleEdit(item)}>Edit</EditButton>
                      <DeleteButton onClick={() => handleDelete(item.id)}>Delete</DeleteButton>
                    </CardFooter>
                  </CardBody>
                </ImpactCard>
              );
            })}
          </ImpactsGrid>
        )}
      </SectionContainer>

      {/* Videos Section */}
      <SectionContainer style={{ marginTop: "2rem" }}>
        <ColorfulSectionTitle style={{ fontSize: "1.1rem" }}>🎥 Video Impacts ({videoImpacts.length})</ColorfulSectionTitle>
        {videoImpacts.length === 0 ? (
          <p style={{ fontSize: "0.85rem", color: TextMuted, fontStyle: "italic" }}>No video impact posts available.</p>
        ) : (
          <ImpactsGrid>
            {videoImpacts.map((item) => {
              const itemCats = categories.filter((c) => (item.categoryIds || []).includes(c.id));
              return (
                <ImpactCard key={item.id}>
                  <video src={item.url} controls />
                  {/* <CardBody>
                    <div>
                      {itemCats.length > 0 && (
                        <CardCategories>
                          {itemCats.map((c) => (
                            <MiniCategoryTag key={c.id}>{c.title || c.name}</MiniCategoryTag>
                          ))}
                        </CardCategories>
                      )}
                      <CardDesc>{item.description}</CardDesc>
                    </div>
                    <CardFooter>
                      <EditButton onClick={() => handleEdit(item)}>Edit</EditButton>
                      <DeleteButton onClick={() => handleDelete(item.id)}>Delete</DeleteButton>
                    </CardFooter>
                  </CardBody> */}

                  <CardBody>
  <div>
    {/* Display all categories associated with this post */}
    {(() => {
      const itemCats = categories.filter((c) => (item.categoryIds || []).includes(c.id));
      if (itemCats.length === 0) return null;
      return (
        <CardCategories>
          {itemCats.map((c) => (
            <MiniCategoryTag key={c.id}>
              {c.title || c.name}
            </MiniCategoryTag>
          ))}
        </CardCategories>
      );
    })()}
    
    <CardDesc>{item.description}</CardDesc>
  </div>

  <CardFooter>
    <EditButton onClick={() => handleEdit(item)}>Edit</EditButton>
    <DeleteButton onClick={() => handleDelete(item.id)}>Delete</DeleteButton>
  </CardFooter>
</CardBody>
                </ImpactCard>
              );
            })}
          </ImpactsGrid>
        )}
      </SectionContainer>

      {/* Create / Edit Category Modal */}
      {showCategoryModal && (
        <ModalOverlay onClick={() => setShowCategoryModal(false)}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <ModalTitle>{editingCategoryId ? "Edit Category" : "Create Impact Category"}</ModalTitle>
            <form onSubmit={handleCategorySave} style={{ display: "flex", flexDirection: "column", gap: "10px", margin: 0 }}>
              <label style={{ fontSize: "0.85rem", fontWeight: 700 }}>Category Title</label>
              <StyledInput
                type="text"
                placeholder="e.g. Education Support, Healthcare Services..."
                value={categoryTitle}
                onChange={(e) => setCategoryTitle(e.target.value)}
                required
              />

              <label style={{ fontSize: "0.85rem", fontWeight: 700 }}>Category Description</label>
              <StyledTextarea
                placeholder="Write a brief description about what this category covers..."
                value={categoryDescription}
                onChange={(e) => setCategoryDescription(e.target.value)}
              />

              <ModalActions>
                <CancelButton type="button" onClick={() => setShowCategoryModal(false)}>Cancel</CancelButton>
                <SaveButton type="submit">{editingCategoryId ? "Save Changes" : "Create Category"}</SaveButton>
              </ModalActions>
            </form>
          </ModalContainer>
        </ModalOverlay>
      )}

      {/* Create / Edit Impact Modal */}
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

              <label style={{ fontSize: "0.85rem", fontWeight: 700 }}>Select Categories (Multiple allowed)</label>
              {categories.length === 0 ? (
                <p style={{ fontSize: "0.8rem", color: Danger }}>Please create at least one category first.</p>
              ) : (
                <CheckboxContainer>
                  {categories.map((cat) => (
                    <CheckboxItem key={cat.id}>
                      <input
                        type="checkbox"
                        id={`cat-${cat.id}`}
                        checked={selectedCategoryIds.includes(cat.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedCategoryIds([...selectedCategoryIds, cat.id]);
                          } else {
                            setSelectedCategoryIds(selectedCategoryIds.filter((id) => id !== cat.id));
                          }
                        }}
                        style={{ marginTop: "3px" }}
                      />
                      <CheckboxLabel htmlFor={`cat-${cat.id}`}>
                        <span className="title">{cat.title || cat.name}</span>
                        {cat.description && <span className="desc">{cat.description}</span>}
                      </CheckboxLabel>
                    </CheckboxItem>
                  ))}
                </CheckboxContainer>
              )}

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