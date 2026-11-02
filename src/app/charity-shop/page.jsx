// "use client";

// import { useEffect, useState } from "react";
// import { db } from "@/firebaseConfig";
// import { 
//   collection, 
//   getDocs, 
//   query, 
//   where, 
//   onSnapshot,
//   serverTimestamp 
// } from "firebase/firestore";

// import styled from "styled-components";
// import Swal from "sweetalert2";
// import { useAppContext } from "@/components/Context";
// import VolunteerForm from "@/components/VolunteerForm";
// import PublicCharityIntroPreview from "@/components/CharityShopIntro";

// // 🎨 THEME COLORS
// const PrimaryNavy = "rgba(115, 23, 28, 0.95)";
// const ThemeGradient = "linear-gradient(135deg, rgba(115, 23, 28, 0.95) 0%, rgba(85, 15, 18, 0.95) 100%)";

// const Dark = "#0f172a";
// const Border = "#cbd5e1";
// const White = "#ffffff";
// const TextMuted = "#475569";
// const LightBg = "#f8fafc";
// const Success = "#22c55e";

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 24px;
//   color: ${Dark};
//   width: 100%;
//   max-width: 1100px;
//   margin: 0 auto;
//   padding: 70px 16px;
//   box-sizing: border-box;
// //   background-color: ${LightBg};
//   min-height: 100vh;
// `;

// const HeaderBanner = styled.div`
//   background: ${ThemeGradient};
//   color: ${White};
//   padding: 24px;
//   border-radius: 16px;
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
//   box-shadow: 0 10px 25px rgba(115, 23, 28, 0.15);
//   text-align: center;
// `;

// const ColorfulTitle = styled.h1`
//   font-size: 2.2rem;
//   font-weight: 900;
//   margin: 0;
//   color: ${White};
//   letter-spacing: -0.5px;
//   @media (max-width: 640px) {
//     font-size: 1.6rem;
//   }
// `;

// const ColorfulSub = styled.p`
//   font-size: 1.05rem;
//   margin: 0;
//   color: #f8fafc;
//   opacity: 0.95;
//   @media (max-width: 640px) {
//     font-size: 0.9rem;
//   }
// `;

// const ControlsBar = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   gap: 12px;
//   flex-wrap: wrap;
// `;

// const SearchInput = styled.input`
//   border: 1px solid ${Border};
//   border-radius: 10px;
//   padding: 10px 14px;
//   font-size: 0.95rem;
//   outline: none;
//   color: ${Dark};
//   width: 100%;
//   max-width: 320px;
//   box-sizing: border-box;
//   background: ${White};
//   box-shadow: 0 2px 8px rgba(15, 23, 42, 0.03);

//   &:focus {
//     border-color: ${PrimaryNavy};
//     box-shadow: 0 0 0 3px rgba(115, 23, 28, 0.15);
//   }
// `;

// const StoreGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 16px;
//   width: 100%;
//   box-sizing: border-box;

//   @media (max-width: 768px) {
//     grid-template-columns: repeat(2, 1fr);
//     gap: 10px;
//   }
// `;

// // E-commerce Product Card Design
// const ProductCard = styled.div`
//   background: ${White};
//   border-radius: 14px;
//   border: 1px solid ${Border};
//   box-shadow: 0 4px 16px rgba(15, 23, 42, 0.05);
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   overflow: hidden;
//   transition: all 0.25s ease;
//   width: 100%;
//   box-sizing: border-box;

//   &:hover {
//     transform: translateY(-4px);
//     box-shadow: 0 10px 25px rgba(115, 23, 28, 0.12);
//     border-color: rgba(115, 23, 28, 0.3);
//   }
// `;

// const CardTop = styled.div`
//   padding: 14px;
//   display: flex;
//   flex-direction: column;
//   gap: 8px;
//   flex: 1;

//   @media (max-width: 640px) {
//     padding: 10px;
//     gap: 6px;
//   }
// `;

// const ProductBadgeRow = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// const CategoryTag = styled.span`
//   font-size: 0.7rem;
//   font-weight: 800;
//   text-transform: uppercase;
//   color: ${PrimaryNavy};
//   background: rgba(115, 23, 28, 0.08);
//   padding: 3px 6px;
//   border-radius: 4px;
// `;

// const ProductName = styled.h3`
//   margin: 0;
//   font-size: 1.1rem;
//   font-weight: 800;
//   color: ${Dark};
//   line-height: 1.3;
//   @media (max-width: 640px) {
//     font-size: 0.95rem;
//   }
// `;

// const ProductDesc = styled.p`
//   margin: 0;
//   font-size: 0.85rem;
//   color: ${TextMuted};
//   line-height: 1.4;
//   display: -webkit-box;
//   -webkit-line-clamp: 2;
//   -webkit-box-orient: vertical;
//   overflow: hidden;
//   @media (max-width: 640px) {
//     font-size: 0.78rem;
//   }
// `;

// const CardBottom = styled.div`
//   padding: 12px 14px;
//   background: #f8fafc;
//   border-top: 1px solid #f1f5f9;
//   display: flex;
//   flex-direction: column;
//   gap: 10px;

//   @media (max-width: 640px) {
//     padding: 10px;
//     gap: 8px;
//   }
// `;

// const PriceRow = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// const PriceText = styled.span`
//   font-size: 1.15rem;
//   font-weight: 900;
//   color: ${Dark};
//   @media (max-width: 640px) {
//     font-size: 0.95rem;
//   }
// `;

// const BuyButton = styled.button`
//   background: ${ThemeGradient};
//   color: ${White};
//   border: none;
//   border-radius: 8px;
//   padding: 9px 12px;
//   font-weight: 700;
//   font-size: 0.85rem;
//   cursor: pointer;
//   width: 100%;
//   box-shadow: 0 4px 12px rgba(115, 23, 28, 0.2);
//   transition: all 0.2s ease;

//   &:hover {
//     opacity: 0.92;
//     transform: translateY(-1px);
//   }

//   @media (max-width: 640px) {
//     padding: 7px 10px;
//     font-size: 0.8rem;
//   }
// `;

// const LoadingContainer = styled.div`
//   padding: 40px;
//   text-align: center;
//   color: ${TextMuted};
//   font-weight: 600;
//   font-size: 1.1rem;
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
//   padding: 12px;
//   box-sizing: border-box;
// `;

// const ModalContainer = styled.div`
//   background: ${White};
//   border-radius: 14px;
//   padding: 24px;
//   width: 100%;
//   max-width: 440px;
//   border: 1px solid ${Border};
//   box-shadow: 0 20px 40px rgba(15, 23, 42, 0.2);
//   display: flex;
//   flex-direction: column;
//   gap: 14px;
// `;

// const ModalTitle = styled.h3`
//   margin: 0;
//   font-size: 1.25rem;
//   font-weight: 800;
//   color: ${Dark};
// `;

// const StyledInput = styled.input`
//   border: 1px solid ${Border};
//   border-radius: 8px;
//   padding: 10px 12px;
//   font-size: 0.95rem;
//   outline: none;
//   color: ${Dark};
//   width: 100%;
//   box-sizing: border-box;
//   background: ${White};

//   &:focus {
//     border-color: ${PrimaryNavy};
//     box-shadow: 0 0 0 3px rgba(115, 23, 28, 0.15);
//   }
// `;

// const ModalActions = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   gap: 10px;
//   margin-top: 10px;
// `;

// const CancelButton = styled.button`
//   background: ${Border};
//   color: ${TextMuted};
//   border: none;
//   border-radius: 8px;
//   padding: 9px 14px;
//   font-size: 0.9rem;
//   font-weight: 700;
//   cursor: pointer;

//   &:hover {
//     background: #cbd5e1;
//   }
// `;

// export default function CharityShopStore() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");
//   const [subaccountCode, setSubaccountCode] = useState(null);
//   const { payWithPaystack } = useAppContext();

//   // Checkout Modal State
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [buyerName, setBuyerName] = useState("");
//   const [buyerEmail, setBuyerEmail] = useState("");
//   const [buyerPhone, setBuyerPhone] = useState("");

//   useEffect(() => {
//     // Real-time listener for active charity shop products
//     const q = query(collection(db, "charityShopProducts"), where("isActive", "==", true));

//     const unsubscribe = onSnapshot(
//       q,
//       (querySnapshot) => {
//         const list = querySnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setProducts(list);
//         setLoading(false);
//       },
//       (error) => {
//         console.error("Real-time listener error:", error);
//         setLoading(false);
//       }
//     );

//     fetchSubaccount();

//     return () => unsubscribe();
//   }, []);

//   const fetchSubaccount = async () => {
//     try {
//       const querySnapshot = await getDocs(collection(db, "subaccounts"));
//       if (!querySnapshot.empty) {
//         const data = querySnapshot.docs[0].data();
//         if (data.subaccount_code) {
//           setSubaccountCode(data.subaccount_code);
//         }
//       }
//     } catch (error) {
//       console.error("Error fetching subaccount:", error);
//     }
//   };

//   const handleOpenCheckoutModal = (product) => {
//     setSelectedProduct(product);
//     setBuyerName("");
//     setBuyerEmail("");
//     setBuyerPhone("");
//   };

//   const generateOrderCode = () => {
//     const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//     let code = "SHOP-";
//     for (let i = 0; i < 6; i++) {
//       code += chars.charAt(Math.floor(Math.random() * chars.length));
//     }
//     return code;
//   };

//   const handleCheckout = async (e) => {
//     e.preventDefault();

//     if (!buyerName || !buyerEmail || !buyerPhone) {
//       return Swal.fire("Missing Information", "Please enter your name, email, and phone number.", "warning");
//     }

//     if (!subaccountCode) {
//       return Swal.fire("Setup Error", "Seller payment routing is not configured yet. Please try again later.", "error");
//     }

//     if (!selectedProduct) {
//       return Swal.fire("Error", "No product selected.", "error");
//     }

//     const orderUniqueCode = generateOrderCode();
//     const uniqueOrderNumber = `SHOPOUT-${Date.now().toString().slice(-6)}${Math.floor(Math.random() * 900 + 100)}`;

//     const orderPayload = {
//       orderNumber: uniqueOrderNumber,
//       productId: selectedProduct.id,
//       productName: selectedProduct.name,
//       productReference: selectedProduct.productReference,
//       assignedOrderCode: orderUniqueCode,
//       amount: Number(selectedProduct.amount),
//       currency: "NGN",
//       accountInfo: {
//         name: buyerName,
//         email: buyerEmail,
//         phone: buyerPhone
//       },
//       paymentType: "ONLINE PAYMENT",
//       paymentStatus: "Paid",
//       orderStatus: "Confirmed",
//       createdAt: serverTimestamp()
//     };

//     try {
//       localStorage.setItem("pendingOrder", JSON.stringify(orderPayload));
//       setSelectedProduct(null);

//       // Trigger Paystack popup
//       payWithPaystack(Number(selectedProduct.amount), "NGN", subaccountCode, buyerEmail, buyerName);

//     } catch (error) {
//       console.error("Checkout setup error:", error);
//       Swal.fire("Error", "Could not initialize checkout. Please try again.", "error");
//     }
//   };

//   const filteredProducts = products.filter((item) => {
//     return item.name?.toLowerCase().includes(search.toLowerCase()) || 
//            item.productReference?.toLowerCase().includes(search.toLowerCase());
//   });

//   if (loading) {
//     return <LoadingContainer>Loading charity store items...</LoadingContainer>;
//   }

//   return (
//     <Container>
//       <HeaderBanner>
//         <ColorfulTitle>Foundation Charity Store 🛍️</ColorfulTitle>
//         <ColorfulSub>Explore our official merchandise and support our foundation initiatives with every purchase.</ColorfulSub>
//       </HeaderBanner>
//       <PublicCharityIntroPreview/>

//       <ControlsBar>
//         <SearchInput
//           type="text"
//           placeholder="Search products..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <div style={{ fontSize: "0.9rem", fontWeight: "700", color: TextMuted }}>
//           {filteredProducts.length} {filteredProducts.length === 1 ? "Item" : "Items"} Available
//         </div>
//       </ControlsBar>

//       {filteredProducts.length === 0 ? (
//         <LoadingContainer>No products found matching your search.</LoadingContainer>
//       ) : (
//         <StoreGrid>
//           {filteredProducts.map((item) => (
//             <ProductCard key={item.id}>
//               <CardTop>
//                 <ProductBadgeRow>
//                   <CategoryTag>{item.productReference || "STORE"}</CategoryTag>
//                 </ProductBadgeRow>
//                 <ProductName>{item.name}</ProductName>
//                 <ProductDesc>{item.description || "Official charity store merchandise item."}</ProductDesc>
//               </CardTop>

//               <CardBottom>
//                 <PriceRow>
//                   <span style={{ fontSize: "0.75rem", fontWeight: "700", color: TextMuted, textTransform: "uppercase" }}>Price</span>
//                   <PriceText>₦{Number(item.amount || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</PriceText>
//                 </PriceRow>
//                 <BuyButton onClick={() => handleOpenCheckoutModal(item)}>
//                   Checkout Now 🛒
//                 </BuyButton>
//               </CardBottom>
//             </ProductCard>
//           ))}
//         </StoreGrid>
//       )}

//       {/* Checkout Modal */}
//       {selectedProduct && (
//         <ModalOverlay onClick={() => setSelectedProduct(null)}>
//           <ModalContainer onClick={(e) => e.stopPropagation()}>
//             <ModalTitle>Checkout: {selectedProduct.name}</ModalTitle>
//             <div style={{ background: "#f8fafc", padding: "10px 12px", borderRadius: "8px", border: `1px solid ${Border}` }}>
//               <div style={{ fontSize: "0.85rem", color: TextMuted, fontWeight: "600" }}>Total Amount</div>
//               <div style={{ fontSize: "1.2rem", fontWeight: "950", color: PrimaryNavy }}>
//                 ₦{Number(selectedProduct.amount || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
//               </div>
//             </div>

//             <form onSubmit={handleCheckout} style={{ display: "flex", flexDirection: "column", gap: "12px", margin: 0 }}>
//               <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
//                 <label style={{ fontSize: "0.85rem", fontWeight: "700", color: Dark }}>Full Name</label>
//                 <StyledInput
//                   type="text"
//                   placeholder="e.g. John Doe"
//                   value={buyerName}
//                   onChange={(e) => setBuyerName(e.target.value)}
//                   required
//                 />
//               </div>

//               <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
//                 <label style={{ fontSize: "0.85rem", fontWeight: "700", color: Dark }}>Email Address</label>
//                 <StyledInput
//                   type="email"
//                   placeholder="e.g. john@example.com"
//                   value={buyerEmail}
//                   onChange={(e) => setBuyerEmail(e.target.value)}
//                   required
//                 />
//               </div>

//               <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
//                 <label style={{ fontSize: "0.85rem", fontWeight: "700", color: Dark }}>Phone Number</label>
//                 <StyledInput
//                   type="tel"
//                   placeholder="e.g. 08012345678"
//                   value={buyerPhone}
//                   onChange={(e) => setBuyerPhone(e.target.value)}
//                   required
//                 />
//               </div>

//               <ModalActions>
//                 <CancelButton type="button" onClick={() => setSelectedProduct(null)}>Cancel</CancelButton>
//                 <BuyButton type="submit" style={{ width: "auto", padding: "9px 18px" }}>Proceed to Payment</BuyButton>
//               </ModalActions>
//             </form>
//           </ModalContainer>
//         </ModalOverlay>
//       )}
//       <VolunteerForm/>
//     </Container>
//   );
// }





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
import VolunteerForm from "@/components/VolunteerForm";
import PublicCharityIntroPreview from "@/components/CharityShopIntro";

// 🎨 THEME COLORS
const PrimaryNavy = "rgba(115, 23, 28, 0.95)";
const ThemeGradient = "linear-gradient(135deg, rgba(115, 23, 28, 0.95) 0%, rgba(85, 15, 18, 0.95) 100%)";

const Dark = "#0f172a";
const Border = "#cbd5e1";
const White = "#ffffff";
const TextMuted = "#475569";
const LightBg = "#f8fafc";
const Danger = "#ef4444";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  color: ${Dark};
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 70px 16px;
  box-sizing: border-box;
  min-height: 100vh;
  position: relative;
`;

const HeaderBanner = styled.div`
  background: ${ThemeGradient};
  color: ${White};
  padding: 24px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0 10px 25px rgba(115, 23, 28, 0.15);
  text-align: center;
`;

const ColorfulTitle = styled.h1`
  font-size: 2.2rem;
  font-weight: 900;
  margin: 0;
  color: ${White};
  letter-spacing: -0.5px;
  @media (max-width: 640px) {
    font-size: 1.6rem;
  }
`;

const ColorfulSub = styled.p`
  font-size: 1.05rem;
  margin: 0;
  color: #f8fafc;
  opacity: 0.95;
  @media (max-width: 640px) {
    font-size: 0.9rem;
  }
`;

const ControlsBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`;

const SearchInput = styled.input`
  border: 1px solid ${Border};
  border-radius: 10px;
  padding: 10px 14px;
  font-size: 0.95rem;
  outline: none;
  color: ${Dark};
  width: 100%;
  max-width: 320px;
  box-sizing: border-box;
  background: ${White};
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.03);

  &:focus {
    border-color: ${PrimaryNavy};
    box-shadow: 0 0 0 3px rgba(115, 23, 28, 0.15);
  }
`;

const CartFloatingButton = styled.button`
  background: ${ThemeGradient};
  color: ${White};
  border: none;
  border-radius: 30px;
  padding: 10px 20px;
  font-weight: 800;
  font-size: 0.95rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 6px 20px rgba(115, 23, 28, 0.35);
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(115, 23, 28, 0.45);
  }
`;

const CartBadge = styled.span`
  background: ${White};
  color: ${PrimaryNavy};
  font-size: 0.8rem;
  font-weight: 900;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StoreGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
`;

const ProductCard = styled.div`
  background: ${White};
  border-radius: 14px;
  border: 1px solid ${Border};
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  transition: all 0.25s ease;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(115, 23, 28, 0.12);
    border-color: rgba(115, 23, 28, 0.3);
  }
`;

const CardTop = styled.div`
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;

  @media (max-width: 640px) {
    padding: 10px;
    gap: 6px;
  }
`;

const ProductBadgeRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CategoryTag = styled.span`
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  color: ${PrimaryNavy};
  background: rgba(115, 23, 28, 0.08);
  padding: 3px 6px;
  border-radius: 4px;
`;

const ProductName = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 800;
  color: ${Dark};
  line-height: 1.3;
  @media (max-width: 640px) {
    font-size: 0.95rem;
  }
`;

const ProductDesc = styled.p`
  margin: 0;
  font-size: 0.85rem;
  color: ${TextMuted};
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media (max-width: 640px) {
    font-size: 0.78rem;
  }
`;

const CardBottom = styled.div`
  padding: 12px 14px;
  background: #f8fafc;
  border-top: 1px solid #f1f5f9;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 640px) {
    padding: 10px;
    gap: 8px;
  }
`;

const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PriceText = styled.span`
  font-size: 1.15rem;
  font-weight: 900;
  color: ${Dark};
  @media (max-width: 640px) {
    font-size: 0.95rem;
  }
`;

const ActionButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
`;

const BuyButton = styled.button`
  background: ${ThemeGradient};
  color: ${White};
  border: none;
  border-radius: 8px;
  padding: 9px 12px;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  flex: 1;
  box-shadow: 0 4px 12px rgba(115, 23, 28, 0.2);
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.92;
    transform: translateY(-1px);
  }

  @media (max-width: 640px) {
    padding: 7px 10px;
    font-size: 0.8rem;
  }
`;

const AddCartBtn = styled.button`
  background: rgba(115, 23, 28, 0.1);
  color: ${PrimaryNavy};
  border: 1px solid rgba(115, 23, 28, 0.2);
  border-radius: 8px;
  padding: 9px 12px;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(115, 23, 28, 0.2);
  }

  @media (max-width: 640px) {
    padding: 7px 10px;
    font-size: 0.8rem;
  }
`;

const LoadingContainer = styled.div`
  padding: 40px;
  text-align: center;
  color: ${TextMuted};
  font-weight: 600;
  font-size: 1.1rem;
`;

/* 🛒 CART DRAWER STYLES */
const DrawerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(4px);
  z-index: 2000;
  display: flex;
  justify-content: flex-end;
`;

const DrawerContainer = styled.div`
  width: 100%;
  max-width: 420px;
  height: 100%;
  background: ${White};
  display: flex;
  flex-direction: column;
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.15);
`;

const DrawerHeader = styled.div`
  padding: 18px 20px;
  border-bottom: 1px solid ${Border};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${LightBg};
`;

const DrawerTitle = styled.h2`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 800;
  color: ${Dark};
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1.4rem;
  font-weight: 800;
  color: ${TextMuted};
  cursor: pointer;
  
  &:hover {
    color: ${Dark};
  }
`;

const DrawerBody = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const CartItemRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border: 1px solid ${Border};
  border-radius: 10px;
  background: ${White};
`;

const CartItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`;

const CartItemName = styled.span`
  font-size: 0.92rem;
  font-weight: 800;
  color: ${Dark};
`;

const CartItemPrice = styled.span`
  font-size: 0.85rem;
  font-weight: 700;
  color: ${PrimaryNavy};
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #f1f5f9;
  border-radius: 6px;
  padding: 3px 8px;
`;

const QtyBtn = styled.button`
  background: transparent;
  border: none;
  font-weight: 800;
  font-size: 1rem;
  cursor: pointer;
  color: ${Dark};
  padding: 0 4px;

  &:hover {
    color: ${PrimaryNavy};
  }
`;

const QtyValue = styled.span`
  font-size: 0.85rem;
  font-weight: 800;
`;

const RemoveBtn = styled.button`
  background: transparent;
  border: none;
  color: ${Danger};
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;
  margin-left: 8px;

  &:hover {
    text-decoration: underline;
  }
`;

const DrawerFooter = styled.div`
  padding: 20px;
  border-top: 1px solid ${Border};
  background: ${LightBg};
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 900;
  color: ${Dark};
`;

/* 💳 MODAL STYLES */
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
  padding: 12px;
  box-sizing: border-box;
`;

const ModalContainer = styled.div`
  background: ${White};
  border-radius: 14px;
  padding: 24px;
  width: 100%;
  max-width: 440px;
  border: 1px solid ${Border};
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.2);
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const ModalTitle = styled.h3`
  margin: 0;
  font-size: 1.25rem;
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
  padding: 9px 14px;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background: #cbd5e1;
  }
`;

export default function CharityShopStore() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [subaccountCode, setSubaccountCode] = useState(null);
  const { payWithPaystack } = useAppContext();

  // 🛒 Cart States
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  // 💳 Checkout Modal State
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [buyerName, setBuyerName] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");
  const [buyerPhone, setBuyerPhone] = useState("");

  useEffect(() => {
    // Real-time listener for active charity shop products
    const q = query(collection(db, "charityShopProducts"), where("isActive", "==", true));

    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const list = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(list);
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

  /* 🛒 CART ACTIONS */
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });

    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "success",
      title: `${product.name} added to cart!`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const updateQuantity = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const buyNow = (product) => {
    setCart([{ ...product, quantity: 1 }]);
    setShowCheckoutModal(true);
  };

  const cartTotalAmount = cart.reduce(
    (sum, item) => sum + Number(item.amount || 0) * item.quantity,
    0
  );

  const cartTotalCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const generateOrderCode = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "SHOP-";
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

    if (!subaccountCode) {
      return Swal.fire("Setup Error", "Seller payment routing is not configured yet. Please try again later.", "error");
    }

    if (cart.length === 0) {
      return Swal.fire("Empty Cart", "Your cart is empty.", "warning");
    }

    const orderUniqueCode = generateOrderCode();
    const uniqueOrderNumber = `SHOPOUT-${Date.now().toString().slice(-6)}${Math.floor(Math.random() * 900 + 100)}`;

    const orderPayload = {
      orderNumber: uniqueOrderNumber,
      items: cart.map((item) => ({
        productId: item.id,
        productName: item.name,
        productReference: item.productReference,
        amount: Number(item.amount),
        quantity: item.quantity,
      })),
      assignedOrderCode: orderUniqueCode,
      amount: cartTotalAmount,
      currency: "NGN",
      accountInfo: {
        name: buyerName,
        email: buyerEmail,
        phone: buyerPhone,
      },
      paymentType: "ONLINE PAYMENT",
      paymentStatus: "Paid",
      orderStatus: "Confirmed",
      createdAt: serverTimestamp(),
    };

    try {
      localStorage.setItem("pendingOrder", JSON.stringify(orderPayload));
      setShowCheckoutModal(false);
      setCartOpen(false);

      // Trigger Paystack payment flow
      payWithPaystack(cartTotalAmount, "NGN", subaccountCode, buyerEmail, buyerName);
    } catch (error) {
      console.error("Checkout setup error:", error);
      Swal.fire("Error", "Could not initialize checkout. Please try again.", "error");
    }
  };

  const filteredProducts = products.filter((item) => {
    return (
      item.name?.toLowerCase().includes(search.toLowerCase()) ||
      item.productReference?.toLowerCase().includes(search.toLowerCase())
    );
  });

  if (loading) {
    return <LoadingContainer>Loading charity store items...</LoadingContainer>;
  }

  return (
    <Container>
      <HeaderBanner>
        <ColorfulTitle>Foundation Charity Store 🛍️</ColorfulTitle>
        <ColorfulSub>Explore our official merchandise and support our foundation initiatives with every purchase.</ColorfulSub>
      </HeaderBanner>
      
      <PublicCharityIntroPreview />

      <ControlsBar>
        <SearchInput
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ fontSize: "0.9rem", fontWeight: "700", color: TextMuted }}>
            {filteredProducts.length} {filteredProducts.length === 1 ? "Item" : "Items"} Available
          </div>

          <CartFloatingButton onClick={() => setCartOpen(true)}>
            <span>🛒 Cart</span>
            <CartBadge>{cartTotalCount}</CartBadge>
          </CartFloatingButton>
        </div>
      </ControlsBar>

      {filteredProducts.length === 0 ? (
        <LoadingContainer>No products found matching your search.</LoadingContainer>
      ) : (
        <StoreGrid>
          {filteredProducts.map((item) => (
            <ProductCard key={item.id}>
              <CardTop>
                <ProductBadgeRow>
                  <CategoryTag>{item.productReference || "STORE"}</CategoryTag>
                </ProductBadgeRow>
                <ProductName>{item.name}</ProductName>
                <ProductDesc>{item.description || "Official charity store merchandise item."}</ProductDesc>
              </CardTop>

              <CardBottom>
                <PriceRow>
                  <span style={{ fontSize: "0.75rem", fontWeight: "700", color: TextMuted, textTransform: "uppercase" }}>
                    Price
                  </span>
                  <PriceText>
                    ₦{Number(item.amount || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </PriceText>
                </PriceRow>

                <ActionButtonGroup>
                  <AddCartBtn onClick={() => addToCart(item)}>
                    + Cart
                  </AddCartBtn>
                  <BuyButton onClick={() => buyNow(item)}>
                    Checkout 🛒
                  </BuyButton>
                </ActionButtonGroup>
              </CardBottom>
            </ProductCard>
          ))}
        </StoreGrid>
      )}

      {/* 🛒 CART DRAWER */}
      {cartOpen && (
        <DrawerOverlay onClick={() => setCartOpen(false)}>
          <DrawerContainer onClick={(e) => e.stopPropagation()}>
            <DrawerHeader>
              <DrawerTitle>Your Cart ({cartTotalCount})</DrawerTitle>
              <CloseButton onClick={() => setCartOpen(false)}>✕</CloseButton>
            </DrawerHeader>

            <DrawerBody>
              {cart.length === 0 ? (
                <p style={{ textAlign: "center", color: TextMuted, marginTop: "40px" }}>
                  Your cart is currently empty.
                </p>
              ) : (
                cart.map((item) => (
                  <CartItemRow key={item.id}>
                    <CartItemInfo>
                      <CartItemName>{item.name}</CartItemName>
                      <CartItemPrice>
                        ₦{Number(item.amount || 0).toLocaleString("en-US")}
                      </CartItemPrice>
                    </CartItemInfo>

                    <QuantityControl>
                      <QtyBtn onClick={() => updateQuantity(item.id, -1)}>-</QtyBtn>
                      <QtyValue>{item.quantity}</QtyValue>
                      <QtyBtn onClick={() => updateQuantity(item.id, 1)}>+</QtyBtn>
                    </QuantityControl>

                    <RemoveBtn onClick={() => removeFromCart(item.id)}>Remove</RemoveBtn>
                  </CartItemRow>
                ))
              )}
            </DrawerBody>

            {cart.length > 0 && (
              <DrawerFooter>
                <TotalRow>
                  <span>Total Amount</span>
                  <span style={{ color: PrimaryNavy }}>
                    ₦{cartTotalAmount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </span>
                </TotalRow>

                <BuyButton
                  style={{ padding: "12px" }}
                  onClick={() => {
                    setCartOpen(false);
                    setShowCheckoutModal(true);
                  }}
                >
                  Proceed to Checkout 🛒
                </BuyButton>
              </DrawerFooter>
            )}
          </DrawerContainer>
        </DrawerOverlay>
      )}

      {/* 💳 CHECKOUT MODAL */}
      {showCheckoutModal && (
        <ModalOverlay onClick={() => setShowCheckoutModal(false)}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <ModalTitle>Checkout ({cartTotalCount} Items)</ModalTitle>

            <div style={{ background: "#f8fafc", padding: "10px 12px", borderRadius: "8px", border: `1px solid ${Border}` }}>
              <div style={{ fontSize: "0.85rem", color: TextMuted, fontWeight: "600" }}>
                Total Order Amount
              </div>
              <div style={{ fontSize: "1.2rem", fontWeight: "950", color: PrimaryNavy }}>
                ₦{cartTotalAmount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
            </div>

            <form onSubmit={handleCheckout} style={{ display: "flex", flexDirection: "column", gap: "12px", margin: 0 }}>
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
                <CancelButton type="button" onClick={() => setShowCheckoutModal(false)}>
                  Cancel
                </CancelButton>
                <BuyButton type="submit" style={{ width: "auto", padding: "9px 18px" }}>
                  Proceed to Payment
                </BuyButton>
              </ModalActions>
            </form>
          </ModalContainer>
        </ModalOverlay>
      )}

      <VolunteerForm />
    </Container>
  );
}