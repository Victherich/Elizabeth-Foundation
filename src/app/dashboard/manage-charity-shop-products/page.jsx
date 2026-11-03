// "use client";

// import { useEffect, useState } from "react";
// import { db } from "@/firebaseConfig";
// import { 
//   collection, 
//   getDocs, 
//   addDoc, 
//   updateDoc, 
//   deleteDoc, 
//   setDoc,
//   doc, 
//   serverTimestamp 
// } from "firebase/firestore";
// import styled from "styled-components";
// import Swal from "sweetalert2";
// import { useRouter } from "next/navigation";
// import PublicCharityIntroPreview from "@/components/CharityShopIntro";

// // 🎨 THEME COLORS
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
//   gap: 12px;
//   color: ${Dark};
//   width: 100%;
//   padding: 12px;
//   box-sizing: border-box;
//   background-color: ${LightBg};
//   min-height: 100vh;
// `;

// const HeaderBanner = styled.div`
//   background: ${ThemeGradient};
//   color: ${White};
//   padding: 14px;
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
//   text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
//   margin: 10px 0 0 0;
//   flex-wrap: wrap;
// `;

// const ColorfulSectionTitle = styled.h2`
//   font-size: 1.25rem;
//   font-weight: 800;
//   margin: 0;
//   background: ${ThemeGradient};
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
// `;

// const SearchInput = styled.input`
//   border: 1px solid ${Border};
//   border-radius: 8px;
//   padding: 8px 10px;
//   font-size: 0.9rem;
//   outline: none;
//   color: ${Dark};
//   width: 240px;
//   max-width: 100%;
//   box-sizing: border-box;
//   margin: 0;
//   background: ${White};
//   box-shadow: 0 2px 6px rgba(15, 23, 42, 0.02);

//   &:focus {
//     border-color: ${PrimaryNavy};
//     box-shadow: 0 0 0 3px rgba(115, 23, 28, 0.15);
//   }
// `;

// const PrimaryButton = styled.button`
//   background: ${ThemeGradient};
//   color: ${White};
//   border: none;
//   border-radius: 8px;
//   padding: 8px 12px;
//   font-weight: 700;
//   font-size: 0.9rem;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   gap: 6px;
//   box-shadow: 0 4px 15px rgba(115, 23, 28, 0.3);
//   transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);

//   &:hover {
//     transform: translateY(-2px);
//     box-shadow: 0 6px 20px rgba(115, 23, 28, 0.45);
//   }
// `;

// const ProductsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
//   gap: 16px;
//   width: 100%;
//   box-sizing: border-box;
//   max-width: 1100px;
//   margin: 0 auto;

//   @media (max-width: 640px) {
//     grid-template-columns: 1fr;
//   }
// `;

// // 🛍️ Charity Shop Product Card Styling
// const ProductCard = styled.div`
//   background: ${White};
//   border-radius: 14px;
//   border: 1px solid ${Border};
//   box-shadow: 0 6px 20px rgba(15, 23, 42, 0.06);
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   position: relative;
//   overflow: hidden;
//   transition: all 0.3s ease;
//   width: 100%;
//   box-sizing: border-box;
//   opacity: ${({ isActive }) => (isActive ? "1" : "0.7")};

//   &:hover {
//     transform: translateY(-4px);
//     box-shadow: 0 12px 30px rgba(115, 23, 28, 0.15);
//     border-color: rgba(115, 23, 28, 0.3);
//   }
// `;

// const ProductHeader = styled.div`
//   padding: 16px 16px 12px 16px;
//   display: flex;
//   flex-direction: column;
//   gap: 8px;
//   border-bottom: 1px solid #f1f5f9;
// `;

// const ProductTopRow = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: flex-start;
//   gap: 8px;
// `;

// const ProductName = styled.h3`
//   margin: 0;
//   font-size: 1.15rem;
//   font-weight: 800;
//   color: ${Dark};
//   line-height: 1.4;
// `;

// const ProductReferenceBadge = styled.span`
//   font-family: monospace;
//   font-size: 0.75rem;
//   font-weight: 700;
//   color: ${PrimaryNavy};
//   background: rgba(115, 23, 28, 0.08);
//   padding: 4px 8px;
//   border-radius: 6px;
//   border: 1px solid rgba(115, 23, 28, 0.15);
//   letter-spacing: 0.5px;
//   white-space: nowrap;
// `;

// const ProductDesc = styled.p`
//   margin: 0;
//   font-size: 0.88rem;
//   color: ${TextMuted};
//   line-height: 1.5;
//   display: -webkit-box;
//   -webkit-line-clamp: 2;
//   -webkit-box-orient: vertical;
//   overflow: hidden;
// `;

// const ProductBody = styled.div`
//   padding: 14px 16px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background: #fafafc;
//   border-top: 1px dashed ${Border};
// `;

// const PriceLabel = styled.span`
//   font-size: 0.8rem;
//   font-weight: 700;
//   color: ${TextMuted};
//   text-transform: uppercase;
// `;

// const PriceAmount = styled.span`
//   font-size: 1.1rem;
//   font-weight: 900;
//   color: ${PrimaryNavy};
// `;

// const ProductFooter = styled.div`
//   padding: 12px 16px;
//   background: ${White};
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   border-top: 1px solid #f1f5f9;
//   gap: 10px;
// `;

// const ButtonGroup = styled.div`
//   display: flex;
//   gap: 6px;
//   align-items: center;
// `;

// const EditButton = styled.button`
//   background: rgba(115, 23, 28, 0.1);
//   color: ${PrimaryNavy};
//   border: none;
//   border-radius: 6px;
//   padding: 6px 12px;
//   font-size: 0.8rem;
//   font-weight: 700;
//   cursor: pointer;
//   transition: background 0.2s ease;

//   &:hover {
//     background: rgba(115, 23, 28, 0.2);
//   }
// `;

// const DeleteButton = styled.button`
//   background: rgba(239, 68, 68, 0.1);
//   color: ${Danger};
//   border: none;
//   border-radius: 6px;
//   padding: 6px 12px;
//   font-size: 0.8rem;
//   font-weight: 700;
//   cursor: pointer;
//   transition: background 0.2s ease;

//   &:hover {
//     background: rgba(239, 68, 68, 0.2);
//   }
// `;

// // Toggle Switch Styles
// const ToggleWrapper = styled.label`
//   display: inline-flex;
//   align-items: center;
//   gap: 6px;
//   cursor: pointer;
//   font-size: 0.8rem;
//   font-weight: 700;
//   color: ${TextMuted};
// `;

// const ToggleInput = styled.input`
//   opacity: 0;
//   width: 0;
//   height: 0;

//   &:checked + span {
//     background-color: ${Success};
//   }

//   &:checked + span:before {
//     transform: translateX(14px);
//   }
// `;

// const ToggleSlider = styled.span`
//   position: relative;
//   display: inline-block;
//   width: 32px;
//   height: 18px;
//   background-color: ${Border};
//   border-radius: 18px;
//   transition: 0.3s;

//   &:before {
//     position: absolute;
//     content: "";
//     height: 14px;
//     width: 14px;
//     left: 2px;
//     bottom: 2px;
//     background-color: white;
//     border-radius: 50%;
//     transition: 0.3s;
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
//   max-width: 480px;
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

// const StyledInput = styled.input`
//   border: 1px solid ${Border};
//   border-radius: 8px;
//   padding: 9px 12px;
//   font-size: 0.9rem;
//   outline: none;
//   color: ${Dark};
//   width: 100%;
//   box-sizing: border-box;
//   margin: 0;
//   background: ${White};

//   &:focus {
//     border-color: ${PrimaryNavy};
//     box-shadow: 0 0 0 3px rgba(115, 23, 28, 0.15);
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
//   min-height: 70px;
//   margin: 0;
//   background: ${White};

//   &:focus {
//     border-color: ${PrimaryNavy};
//     box-shadow: 0 0 0 3px rgba(115, 23, 28, 0.15);
//   }
// `;

// const CharacterCount = styled.div`
//   font-size: 0.75rem;
//   color: ${TextMuted};
//   text-align: right;
//   margin-top: -6px;
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

//   &:hover {
//     background: #cbd5e1;
//   }
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
//   box-shadow: 0 2px 8px rgba(115, 23, 28, 0.3);

//   &:hover {
//     opacity: 0.9;
//   }
// `;

// export default function ManageCharityShopPage() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");
//   const router = useRouter();

//   // Modal State Controls
//   const [showModal, setShowModal] = useState(false);
//   const [editingId, setEditingId] = useState(null);

//   // ℹ️ Charity Shop Intro States
//   const [showIntroModal, setShowIntroModal] = useState(false);
//   const [introData, setIntroData] = useState({ title: "", description: "" });
//   const [introLoading, setIntroLoading] = useState(false);
  
//   // Product Form States (with strict moderate character limits)
//   const [form, setForm] = useState({
//     name: "",
//     description: "",
//     amount: "",
//     productReference: "",
//     isActive: true,
//   });

//   const [sortOrder, setSortOrder] = useState("");

//   useEffect(() => {
//     fetchProducts();
//   }, []);



//   const fetchProducts = async () => {
//     try {
//       setLoading(true);
//       const querySnapshot = await getDocs(collection(db, "charityShopProducts"));
//       const list = querySnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setProducts(list);
//     } catch (error) {
//       Swal.fire("Error", "Failed to fetch charity shop products.", "error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch existing charity shop intro on mount
//   useEffect(() => {
//     const fetchIntro = async () => {
//       try {
//         const introDoc = await getDocs(collection(db, "charityShopSettings"));
//         // Assuming we store it in a document ID like "intro"
//         const docSnap = introDoc.docs.find(d => d.id === "intro");
//         if (docSnap) {
//           setIntroData(docSnap.data());
//         }
//       } catch (err) {
//         console.error("Failed to fetch intro settings", err);
//       }
//     };
//     fetchIntro();
//   }, []);

//   const generateRandomReference = () => {
//     const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//     let ref = "SHOP-";
//     for (let i = 0; i < 6; i++) {
//       ref += chars.charAt(Math.floor(Math.random() * chars.length));
//     }
//     return ref;
//   };

//   const handleToggleActive = async (item, e) => {
//     e.stopPropagation();
//     try {
//       const newStatus = !item.isActive;
//       await updateDoc(doc(db, "charityShopProducts", item.id), { isActive: newStatus });
//       setProducts(products.map(p => p.id === item.id ? { ...p, isActive: newStatus } : p));
//     } catch (error) {
//       Swal.fire("Error", "Could not update product status.", "error");
//     }
//   };

//   const handleSave = async (e) => {
//     e.preventDefault();
//     try {
//       if (!form.name || form.amount === "") {
//         return Swal.fire({
//           icon: "warning",
//           text: "Please provide a product name and price amount.",
//         });
//       }

//       if (form.name.length > 50) {
//         return Swal.fire({
//           icon: "warning",
//           text: "Product name cannot exceed 50 characters.",
//         });
//       }

//       if (form.description.length > 120) {
//         return Swal.fire({
//           icon: "warning",
//           text: "Product description cannot exceed 120 characters for clean card display.",
//         });
//       }

//       Swal.fire({
//         text: "Saving product...",
//         allowOutsideClick: false,
//         didOpen: () => Swal.showLoading(),
//       });

//       const payload = {
//         name: form.name,
//         description: form.description,
//         amount: Number(form.amount),
//         productReference: form.productReference || generateRandomReference(),
//         isActive: form.isActive,
//       };

//       if (editingId) {
//         await updateDoc(doc(db, "charityShopProducts", editingId), payload);
//       } else {
//         await addDoc(collection(db, "charityShopProducts"), {
//           ...payload,
//           createdAt: serverTimestamp(),
//         });
//       }

//       Swal.close();
//       Swal.fire({
//         icon: "success",
//         text: "Product Saved Successfully!",
//         timer: 1500,
//         showConfirmButton: false,
//       });

//       setShowModal(false);
//       setForm({ name: "", description: "", amount: "", productReference: generateRandomReference(), isActive: true });
//       setEditingId(null);
//       fetchProducts();
//     } catch (error) {
//       Swal.close();
//       Swal.fire({
//         icon: "error",
//         title: "Save Failed",
//         text: error.message || "Please try again.",
//       });
//     }
//   };

//   const handleEdit = (item, e) => {
//     e.stopPropagation();
//     setForm({
//       name: item.name || "",
//       description: item.description || "",
//       amount: item.amount || "",
//       productReference: item.productReference || generateRandomReference(),
//       isActive: item.isActive ?? true,
//     });
//     setEditingId(item.id);
//     setShowModal(true);
//   };

//   const handleDelete = async (id, e) => {
//     e.stopPropagation();
//     const result = await Swal.fire({
//       title: "Are you sure?",
//       text: "This shop product will be deleted permanently.",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: Danger,
//       cancelButtonColor: TextMuted,
//       confirmButtonText: "Yes, delete it!",
//     });

//     if (!result.isConfirmed) return;

//     try {
//       await deleteDoc(doc(db, "charityShopProducts", id));
//       Swal.fire("Deleted!", "", "success");
//       fetchProducts();
//     } catch (error) {
//       Swal.fire("Error", "Could not delete product.", "error");
//     }
//   };




// const handleSaveIntro = async (e) => {
//     e.preventDefault();
//     try {
//       setIntroLoading(true);
//       Swal.fire({
//         text: "Saving charity shop intro...",
//         allowOutsideClick: false,
//         didOpen: () => Swal.showLoading(),
//       });

//       // setDoc creates the "intro" document if it doesn't exist, or merges updates if it does
//       const introRef = doc(db, "charityShopSettings", "intro");
//       await setDoc(introRef, {
//         title: introData.title || "",
//         description: introData.description || "",
//         updatedAt: serverTimestamp(),
//       }, { merge: true });

//       Swal.close();
//       Swal.fire({
//         icon: "success",
//         text: "Shop Intro Saved Successfully!",
//         timer: 1500,
//         showConfirmButton: false,
//       });

//       setShowIntroModal(false);
//     } catch (error) {
//       console.error("Save intro error:", error);
//       Swal.close();
//       Swal.fire("Error", error.message || "Failed to save intro.", "error");
//     } finally {
//       setIntroLoading(false);
//     }
//   };



//   const filteredData = products
//     .filter((item) => {
//       const matchesSearch = item.name?.toLowerCase().includes(search.toLowerCase()) || 
//                             item.productReference?.toLowerCase().includes(search.toLowerCase());
//       return matchesSearch;
//     })
//     .sort((a, b) => {
//       const amountA = Number(a.amount || 0);
//       const amountB = Number(b.amount || 0);
//       if (sortOrder === "low-high") return amountA - amountB;
//       if (sortOrder === "high-low") return amountB - amountA;
//       return 0;
//     });

//   if (loading) {
//     return <LoadingContainer>Loading charity shop items...</LoadingContainer>;
//   }

//   return (
//     <Container>
//       <HeaderBanner>
//         <ColorfulTitle>Charity Shop Management 🛍️</ColorfulTitle>
//         <ColorfulSub>Add, edit, and organize merchandise items displayed in the foundation shop.</ColorfulSub>
//       </HeaderBanner>
// {/* dilhfoehbkpsbdp */}
// <PublicCharityIntroPreview/>
//       <ActionRow>
//         <ColorfulSectionTitle>Products ({filteredData.length})</ColorfulSectionTitle>
//         <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
//           <SearchInput
//             type="text"
//             placeholder="Search product or reference..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//           <select
//             value={sortOrder}
//             onChange={(e) => setSortOrder(e.target.value)}
//             style={{
//               border: `1px solid ${Border}`,
//               borderRadius: "8px",
//               padding: "8px 10px",
//               fontSize: "0.9rem",
//               outline: "none",
//               color: Dark,
//               background: White,
//               boxSizing: "border-box",
//               margin: 0,
//             }}
//           >
//             <option value="">Sort by Price</option>
//             <option value="low-high">Price: Low to High</option>
//             <option value="high-low">Price: High to Low</option>
//           </select>
//           <PrimaryButton onClick={() => {
//             setEditingId(null);
//             setForm({ 
//               name: "", 
//               description: "", 
//               amount: "", 
//               productReference: generateRandomReference(),
//               isActive: true
//             });
//             setShowModal(true);
//           }}>
//             <span>+ Add Product</span>
//           </PrimaryButton>
//         </div>
//         <PrimaryButton 
//             style={{ background: "rgba(115, 23, 28, 0.1)", color: PrimaryNavy, border: `1px solid ${PrimaryNavy}` }}
//             onClick={() => setShowIntroModal(true)}
//           >
//             <span>ℹ️ Edit Shop Intro</span>
//           </PrimaryButton>
//       </ActionRow>

//       {filteredData.length === 0 ? (
//         <LoadingContainer>No charity shop products found.</LoadingContainer>
//       ) : (
//         <ProductsGrid>
//           {filteredData.map((item) => {
//             const isActive = item.isActive ?? true;
//             return (
//               <ProductCard key={item.id} isActive={isActive}>
//                 <ProductHeader>
//                   <ProductTopRow>
//                     <ProductName>{item.name}</ProductName>
//                     <ProductReferenceBadge>{item.productReference || "SHOP-XXXXXX"}</ProductReferenceBadge>
//                   </ProductTopRow>
//                   <ProductDesc>{item.description || "No description provided."}</ProductDesc>
//                 </ProductHeader>

//                 <ProductBody>
//                   <PriceLabel>Price Amount</PriceLabel>
//                   <PriceAmount>₦{Number(item.amount || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</PriceAmount>
//                 </ProductBody>
                
//                 <ProductFooter>
//                   <ToggleWrapper onClick={(e) => e.stopPropagation()}>
//                     <ToggleInput 
//                       type="checkbox" 
//                       checked={isActive} 
//                       onChange={(e) => handleToggleActive(item, e)} 
//                     />
//                     <ToggleSlider />
//                     <span>{isActive ? "Active" : "Inactive"}</span>
//                   </ToggleWrapper>
                  
//                   <ButtonGroup>
//                     <EditButton onClick={(e) => handleEdit(item, e)}>Edit</EditButton>
//                     <DeleteButton onClick={(e) => handleDelete(item.id, e)}>Delete</DeleteButton>
//                   </ButtonGroup>
//                 </ProductFooter>
//               </ProductCard>
//             );
//           })}
//         </ProductsGrid>
//       )}

//       {/* Create / Edit Modal */}
//       {showModal && (
//         <ModalOverlay onClick={() => setShowModal(false)}>
//           <ModalContainer onClick={(e) => e.stopPropagation()}>
//             <ModalTitle>{editingId ? "Edit Shop Product" : "Add Shop Product"}</ModalTitle>
//             <form onSubmit={handleSave} style={{ display: "flex", flexDirection: "column", gap: "10px", margin: 0 }}>
//               <StyledInput
//                 type="text"
//                 placeholder="Product Reference (Auto-generated)"
//                 value={form.productReference}
//                 onChange={(e) => setForm({ ...form, productReference: e.target.value })}
//                 required
//                 disabled
//               />
             
//               <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
//                 <StyledInput
//                   type="text"
//                   placeholder="Product Name (e.g., Foundation Branded Tee)"
//                   value={form.name}
//                   onChange={(e) => setForm({ ...form, name: e.target.value })}
//                   maxLength={50}
//                   required
//                 />
//                 <CharacterCount>{form.name.length}/50 chars</CharacterCount>
//               </div>

//               <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
//                 <StyledTextarea
//                   placeholder="Short brief description for display cards..."
//                   value={form.description}
//                   onChange={(e) => setForm({ ...form, description: e.target.value })}
//                   maxLength={120}
//                 />
//                 <CharacterCount>{form.description.length}/120 chars</CharacterCount>
//               </div>

//               <StyledInput
//                 type="number"
//                 placeholder="Amount / Price (₦)"
//                 value={form.amount}
//                 onChange={(e) => setForm({ ...form, amount: e.target.value })}
//                 required
//               />

//               <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "4px" }}>
//                 <input
//                   type="checkbox"
//                   id="isActiveToggle"
//                   checked={form.isActive}
//                   onChange={(e) => setForm({ ...form, isActive: e.target.checked })}
//                   style={{ width: "16px", height: "16px", cursor: "pointer" }}
//                 />
//                 <label htmlFor="isActiveToggle" style={{ fontSize: "0.85rem", fontWeight: "600", cursor: "pointer" }}>
//                   Display on public shop page (Active)
//                 </label>
//               </div>

//               <ModalActions>
//                 <CancelButton type="button" onClick={() => setShowModal(false)}>Cancel</CancelButton>
//                 <SaveButton type="submit">{editingId ? "Save Changes" : "Add Product"}</SaveButton>
//               </ModalActions>
//             </form>
//           </ModalContainer>
//         </ModalOverlay>
//       )}

//       {/* Shop Intro Modal */}
//       {showIntroModal && (
//         <ModalOverlay onClick={() => setShowIntroModal(false)}>
//           <ModalContainer onClick={(e) => e.stopPropagation()}>
//             <ModalTitle>Manage Charity Shop Intro</ModalTitle>
//             <form onSubmit={handleSaveIntro} style={{ display: "flex", flexDirection: "column", gap: "10px", margin: 0 }}>
              
//               <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
//                 <label style={{ fontSize: "0.85rem", fontWeight: "700" }}>Intro Title</label>
//                 <StyledInput
//                   type="text"
//                   placeholder="e.g., Welcome to Our Charity Store"
//                   value={introData.title}
//                   onChange={(e) => setIntroData({ ...introData, title: e.target.value })}
//                   required
//                 />
//               </div>

//               <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
//                 <label style={{ fontSize: "0.85rem", fontWeight: "700" }}>Intro Description / Mission</label>
//                 <StyledTextarea
//                   placeholder="Write a brief overview about what this charity shop supports..."
//                   value={introData.description}
//                   onChange={(e) => setIntroData({ ...introData, description: e.target.value })}
//                   style={{ minHeight: "100px" }}
//                   required
//                 />
//               </div>

//               <ModalActions>
//                 <CancelButton type="button" onClick={() => setShowIntroModal(false)}>Cancel</CancelButton>
//                 <SaveButton type="submit" disabled={introLoading}>Save Intro</SaveButton>
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
  setDoc,
  doc, 
  serverTimestamp 
} from "firebase/firestore";
import styled from "styled-components";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import imageCompression from "browser-image-compression";
import PublicCharityIntroPreview from "@/components/CharityShopIntro";

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

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 16px;
  width: 100%;
  box-sizing: border-box;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

// 🛍️ Charity Shop Product Card Styling
const ProductCard = styled.div`
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

const ProductImageThumb = styled.div`
  width: 100%;
  height: 180px;
  background: #f1f5f9;
  overflow: hidden;
  position: relative;
  border-bottom: 1px solid ${Border};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProductHeader = styled.div`
  padding: 14px 16px 10px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-bottom: 1px solid #f1f5f9;
`;

const ProductTopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
`;

const ProductName = styled.h3`
  margin: 0;
  font-size: 1.15rem;
  font-weight: 800;
  color: ${Dark};
  line-height: 1.4;
`;

const ProductReferenceBadge = styled.span`
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

const ProductDesc = styled.p`
  margin: 0;
  font-size: 0.88rem;
  color: ${TextMuted};
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ProductBody = styled.div`
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fafafc;
  border-top: 1px dashed ${Border};
`;

const PriceLabel = styled.span`
  font-size: 0.8rem;
  font-weight: 700;
  color: ${TextMuted};
  text-transform: uppercase;
`;

const PriceAmount = styled.span`
  font-size: 1.1rem;
  font-weight: 900;
  color: ${PrimaryNavy};
`;

const ProductFooter = styled.div`
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
  min-height: 70px;
  margin: 0;
  background: ${White};

  &:focus {
    border-color: ${PrimaryNavy};
    box-shadow: 0 0 0 3px rgba(115, 23, 28, 0.15);
  }
`;

const CharacterCount = styled.div`
  font-size: 0.75rem;
  color: ${TextMuted};
  text-align: right;
  margin-top: -6px;
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

const PreviewImg = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid ${Border};
  background: #000;
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

export default function ManageCharityShopPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const router = useRouter();

  // Modal State Controls
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // ℹ️ Charity Shop Intro States
  const [showIntroModal, setShowIntroModal] = useState(false);
  const [introData, setIntroData] = useState({ title: "", description: "" });
  const [introLoading, setIntroLoading] = useState(false);
  
  // Product Form States
  const [form, setForm] = useState({
    name: "",
    description: "",
    amount: "",
    productReference: "",
    image: "",
    isActive: true,
  });

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, "charityShopProducts"));
      const list = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(list);
    } catch (error) {
      Swal.fire("Error", "Failed to fetch charity shop products.", "error");
    } finally {
      setLoading(false);
    }
  };

  // Fetch existing charity shop intro on mount
  useEffect(() => {
    const fetchIntro = async () => {
      try {
        const introDoc = await getDocs(collection(db, "charityShopSettings"));
        const docSnap = introDoc.docs.find(d => d.id === "intro");
        if (docSnap) {
          setIntroData(docSnap.data());
        }
      } catch (err) {
        console.error("Failed to fetch intro settings", err);
      }
    };
    fetchIntro();
  }, []);

  const generateRandomReference = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let ref = "SHOP-";
    for (let i = 0; i < 6; i++) {
      ref += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return ref;
  };

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      return Swal.fire("Error", "Only valid image files are allowed.", "error");
    }
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const compressImage = async (file, maxSizeKB = 150) => {
    if (!file) return file;
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

  const uploadToCloudinary = async (blobOrFile) => {
    const data = new FormData();
    data.append("file", blobOrFile);
    data.append("upload_preset", "bees_interior"); // Replace if your preset differs
    data.append("folder", "charity_shop_products");

    const res = await fetch(`https://api.cloudinary.com/v1_1/aqxyleoh/image/upload`, {
      method: "POST",
      body: data,
    });

    const json = await res.json();
    if (!res.ok) {
      throw new Error(json.error?.message || "Image upload failed");
    }
    return json.secure_url;
  };

  const handleToggleActive = async (item, e) => {
    e.stopPropagation();
    try {
      const newStatus = !item.isActive;
      await updateDoc(doc(db, "charityShopProducts", item.id), { isActive: newStatus });
      setProducts(products.map(p => p.id === item.id ? { ...p, isActive: newStatus } : p));
    } catch (error) {
      Swal.fire("Error", "Could not update product status.", "error");
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      if (!form.name || form.amount === "") {
        return Swal.fire({
          icon: "warning",
          text: "Please provide a product name and price amount.",
        });
      }

      if (form.name.length > 50) {
        return Swal.fire({
          icon: "warning",
          text: "Product name cannot exceed 50 characters.",
        });
      }

      if (form.description.length > 120) {
        return Swal.fire({
          icon: "warning",
          text: "Product description cannot exceed 120 characters for clean card display.",
        });
      }

      Swal.fire({
        text: "Saving product...",
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
      });

      let imageUrl = form.image;
      if (imageFile) {
        const compressedBlob = await compressImage(imageFile, 150);
        imageUrl = await uploadToCloudinary(compressedBlob);
      }

      const payload = {
        name: form.name,
        description: form.description,
        amount: Number(form.amount),
        productReference: form.productReference || generateRandomReference(),
        image: imageUrl || "",
        isActive: form.isActive,
      };

      if (editingId) {
        await updateDoc(doc(db, "charityShopProducts", editingId), payload);
      } else {
        await addDoc(collection(db, "charityShopProducts"), {
          ...payload,
          createdAt: serverTimestamp(),
        });
      }

      Swal.close();
      Swal.fire({
        icon: "success",
        text: "Product Saved Successfully!",
        timer: 1500,
        showConfirmButton: false,
      });

      setShowModal(false);
      setForm({ name: "", description: "", amount: "", productReference: generateRandomReference(), image: "", isActive: true });
      setImageFile(null);
      setImagePreview("");
      setEditingId(null);
      fetchProducts();
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
      amount: item.amount || "",
      productReference: item.productReference || generateRandomReference(),
      image: item.image || "",
      isActive: item.isActive ?? true,
    });
    setImageFile(null);
    setImagePreview(item.image || "");
    setEditingId(item.id);
    setShowModal(true);
  };

  const handleDelete = async (id, e) => {
    e.stopPropagation();
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This shop product will be deleted permanently.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: Danger,
      cancelButtonColor: TextMuted,
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    try {
      await deleteDoc(doc(db, "charityShopProducts", id));
      Swal.fire("Deleted!", "", "success");
      fetchProducts();
    } catch (error) {
      Swal.fire("Error", "Could not delete product.", "error");
    }
  };

  const handleSaveIntro = async (e) => {
    e.preventDefault();
    try {
      setIntroLoading(true);
      Swal.fire({
        text: "Saving charity shop intro...",
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
      });

      const introRef = doc(db, "charityShopSettings", "intro");
      await setDoc(introRef, {
        title: introData.title || "",
        description: introData.description || "",
        updatedAt: serverTimestamp(),
      }, { merge: true });

      Swal.close();
      Swal.fire({
        icon: "success",
        text: "Shop Intro Saved Successfully!",
        timer: 1500,
        showConfirmButton: false,
      });

      setShowIntroModal(false);
    } catch (error) {
      console.error("Save intro error:", error);
      Swal.close();
      Swal.fire("Error", error.message || "Failed to save intro.", "error");
    } finally {
      setIntroLoading(false);
    }
  };

  const filteredData = products
    .filter((item) => {
      const matchesSearch = item.name?.toLowerCase().includes(search.toLowerCase()) || 
                            item.productReference?.toLowerCase().includes(search.toLowerCase());
      return matchesSearch;
    })
    .sort((a, b) => {
      const amountA = Number(a.amount || 0);
      const amountB = Number(b.amount || 0);
      if (sortOrder === "low-high") return amountA - amountB;
      if (sortOrder === "high-low") return amountB - amountA;
      return 0;
    });

  if (loading) {
    return <LoadingContainer>Loading charity shop items...</LoadingContainer>;
  }

  return (
    <Container>
      <HeaderBanner>
        <ColorfulTitle>Charity Shop Management 🛍️</ColorfulTitle>
        <ColorfulSub>Add, edit, and organize merchandise items displayed in the foundation shop.</ColorfulSub>
      </HeaderBanner>

      <PublicCharityIntroPreview/>

      <ActionRow>
        <ColorfulSectionTitle>Products ({filteredData.length})</ColorfulSectionTitle>
        <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
          <SearchInput
            type="text"
            placeholder="Search product or reference..."
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
              amount: "", 
              productReference: generateRandomReference(),
              image: "",
              isActive: true
            });
            setImageFile(null);
            setImagePreview("");
            setShowModal(true);
          }}>
            <span>+ Add Product</span>
          </PrimaryButton>
        </div>
        <PrimaryButton 
          style={{ background: "rgba(115, 23, 28, 0.1)", color: PrimaryNavy, border: `1px solid ${PrimaryNavy}` }}
          onClick={() => setShowIntroModal(true)}
        >
          <span>ℹ️ Edit Shop Intro</span>
        </PrimaryButton>
      </ActionRow>

      {filteredData.length === 0 ? (
        <LoadingContainer>No charity shop products found.</LoadingContainer>
      ) : (
        <ProductsGrid>
          {filteredData.map((item) => {
            const isActive = item.isActive ?? true;
            return (
              <ProductCard key={item.id} isActive={isActive}>
                {item.image && (
                  <ProductImageThumb>
                    <img src={item.image} alt={item.name} />
                  </ProductImageThumb>
                )}
                <ProductHeader>
                  <ProductTopRow>
                    <ProductName>{item.name}</ProductName>
                    <ProductReferenceBadge>{item.productReference || "SHOP-XXXXXX"}</ProductReferenceBadge>
                  </ProductTopRow>
                  <ProductDesc>{item.description || "No description provided."}</ProductDesc>
                </ProductHeader>

                <ProductBody>
                  <PriceLabel>Price Amount</PriceLabel>
                  <PriceAmount>₦{Number(item.amount || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</PriceAmount>
                </ProductBody>
                
                <ProductFooter>
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
                </ProductFooter>
              </ProductCard>
            );
          })}
        </ProductsGrid>
      )}

      {/* Create / Edit Modal */}
      {showModal && (
        <ModalOverlay onClick={() => setShowModal(false)}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <ModalTitle>{editingId ? "Edit Shop Product" : "Add Shop Product"}</ModalTitle>
            <form onSubmit={handleSave} style={{ display: "flex", flexDirection: "column", gap: "10px", margin: 0 }}>
              <StyledInput
                type="text"
                placeholder="Product Reference (Auto-generated)"
                value={form.productReference}
                onChange={(e) => setForm({ ...form, productReference: e.target.value })}
                required
                disabled
              />
             
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <StyledInput
                  type="text"
                  placeholder="Product Name (e.g., Foundation Branded Tee)"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  maxLength={50}
                  required
                />
                <CharacterCount>{form.name.length}/50 chars</CharacterCount>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <StyledTextarea
                  placeholder="Short brief description for display cards..."
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  maxLength={120}
                />
                <CharacterCount>{form.description.length}/120 chars</CharacterCount>
              </div>

              <StyledInput
                type="number"
                placeholder="Amount / Price (₦)"
                value={form.amount}
                onChange={(e) => setForm({ ...form, amount: e.target.value })}
                required
              />

              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label style={{ fontSize: "0.85rem", fontWeight: 700 }}>Product Image</label>
                <input
                  id="productImageUpload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageSelect}
                  style={{ display: "none" }}
                />
                <label htmlFor="productImageUpload">
                  <PreviewBtn as="span">
                    {imageFile ? `Selected: ${imageFile.name}` : imagePreview ? "Change Product Image" : "Click to Select Image"}
                  </PreviewBtn>
                </label>
                {imagePreview && <PreviewImg src={imagePreview} alt="Preview" />}
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
                  Display on public shop page (Active)
                </label>
              </div>

              <ModalActions>
                <CancelButton type="button" onClick={() => setShowModal(false)}>Cancel</CancelButton>
                <SaveButton type="submit">{editingId ? "Save Changes" : "Add Product"}</SaveButton>
              </ModalActions>
            </form>
          </ModalContainer>
        </ModalOverlay>
      )}

      {/* Shop Intro Modal */}
      {showIntroModal && (
        <ModalOverlay onClick={() => setShowIntroModal(false)}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <ModalTitle>Manage Charity Shop Intro</ModalTitle>
            <form onSubmit={handleSaveIntro} style={{ display: "flex", flexDirection: "column", gap: "10px", margin: 0 }}>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <label style={{ fontSize: "0.85rem", fontWeight: "700" }}>Intro Title</label>
                <StyledInput
                  type="text"
                  placeholder="e.g., Welcome to Our Charity Store"
                  value={introData.title}
                  onChange={(e) => setIntroData({ ...introData, title: e.target.value })}
                  required
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <label style={{ fontSize: "0.85rem", fontWeight: "700" }}>Intro Description / Mission</label>
                <StyledTextarea
                  placeholder="Write a brief overview about what this charity shop supports..."
                  value={introData.description}
                  onChange={(e) => setIntroData({ ...introData, description: e.target.value })}
                  style={{ minHeight: "100px" }}
                  required
                />
              </div>

              <ModalActions>
                <CancelButton type="button" onClick={() => setShowIntroModal(false)}>Cancel</CancelButton>
                <SaveButton type="submit" disabled={introLoading}>Save Intro</SaveButton>
              </ModalActions>
            </form>
          </ModalContainer>
        </ModalOverlay>
      )}
    </Container>
  );
}