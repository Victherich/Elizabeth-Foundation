// 'use client';

// import React from 'react';
// import styled from 'styled-components';
// import Image from 'next/image';
// import { Home, Smile, UserCheck, Backpack, Users, Gift, Droplet, Shirt } from 'lucide-react';
// import PublicImpactsSection from './ImpactMedia';

// const ImpactSection = () => {
//   const impactPrograms = [
//     {
//       icon: <Home size={22} />,
//       title: 'Community Outreach',
//       description: 'Regular outreach programmes supporting children, families and vulnerable members of the community.',
//     },
//     {
//       icon: <Smile size={22} />,
//       title: "Weekly Children's Outreach",
//       description: 'Weekly engagement and outreach activities designed to support and educate children within the community.',
//     },
//     {
//       icon: <UserCheck size={22} />,
//       title: 'Elderly Support',
//       description: 'Monthly financial allowances and support for elderly members of the community.',
//     },
//     {
//       icon: <Backpack size={22} />,
//       title: 'Back-to-School Support',
//       description: 'Educational assistance, including school-fee support for 300 children, helping children remain in school.',
//     },
//     {
//       icon: <Users size={22} />,
//       title: 'Single-Mother Empowerment',
//       description: 'Empowerment and support programmes for single mothers organised every three months.',
//     },
//     {
//       icon: <Gift size={22} />,
//       title: 'Christmas Support',
//       description: 'Annual Christmas giveaways and support for members of the Foundation and the wider community.',
//     },
//     {
//       icon: <Droplet size={22} />,
//       title: 'Sickle Cell Awareness',
//       description: 'Community awareness programmes educating families about sickle cell, crisis prevention and early intervention.',
//     },
//     {
//       icon: <Shirt size={22} />,
//       title: 'Clothing & Footwear Support',
//       description: 'Distribution of clothing and shoes to children and vulnerable families.',
//     },
//   ];

//   return (
//     <>
//     <ImpactContainer id="impact">
//       <ImpactContentWrapper>
//         {/* Section Header */}
//         <SubHeading>OUR TRACK RECORD</SubHeading>
//         <MainHeading>9 Years of Impact</MainHeading>
//         <DividerLine />

//         <DescriptionText>
//           Over the past nine years, Elizabeth Foundation SS has served communities through these <br />
//           key programmes.
//         </DescriptionText>

//         {/* Impact Cards Grid */}
//         <CardsGrid>
//           {impactPrograms.map((item, index) => (
//             <Card key={index}>
//               <IconWrapper>{item.icon}</IconWrapper>
//               <CardContent>
//                 <CardTitle>{item.title}</CardTitle>
//                 <CardDescription>{item.description}</CardDescription>
//               </CardContent>
//             </Card>
//           ))}
//         </CardsGrid>

//         {/* Bottom Featured Photo Banner */}
//         <PhotoBannerCard>
//           <ImageWrapper>
//             <Image 
//               src="/im2.jpg" 
//               alt="Elizabeth Foundation SS - Community Outreach & Food Distribution" 
//               width={1000} 
//               height={400} 
//               style={{ width: '100%', height: 'auto', display: 'block' }}
//               priority
//             />
//           </ImageWrapper>
//           <BannerCaption>
//             Elizabeth Foundation SS — Community Outreach & Food Distribution
//           </BannerCaption>
//         </PhotoBannerCard>

//       </ImpactContentWrapper>
      
//     </ImpactContainer>
//     <PublicImpactsSection/>
//   </>
//   );
// };

// export default ImpactSection;

// // --- Styled Components ---

// const ImpactContainer = styled.section`
//   background-color: #ffffff; /* Clean white background */
//   width: 100%;
//   padding: 90px 20px;
//   display: flex;
//   justify-content: center;
// `;

// const ImpactContentWrapper = styled.div`
//   max-width: 1050px;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
// `;

// const SubHeading = styled.span`
//   font-size: 13px;
//   font-weight: 700;
//   color: #c29b38; /* Gold accent */
//   letter-spacing: 1.5px;
//   margin-bottom: 10px;
// `;

// const MainHeading = styled.h2`
//   font-size: 36px;
//   font-weight: 800;
//   color: #611317; /* Deep burgundy */
//   margin-bottom: 12px;

//   @media (max-width: 768px) {
//     font-size: 28px;
//   }
// `;

// const DividerLine = styled.div`
//   width: 50px;
//   height: 3px;
//   background-color: #c29b38;
//   margin-bottom: 16px;
//   border-radius: 2px;
// `;

// const DescriptionText = styled.p`
//   font-size: 15px;
//   line-height: 1.6;
//   color: #475569;
//   margin-bottom: 50px;

//   @media (max-width: 768px) {
//     font-size: 14px;
//   }
// `;

// const CardsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   gap: 20px;
//   width: 100%;
//   margin-bottom: 50px;

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const Card = styled.div`
//   background: #ffffff;
//   border: 1px solid #f1f5f9;
//   box-shadow: 0 8px 20px -4px rgba(0, 0, 0, 0.04), 0 4px 6px -2px rgba(0, 0, 0, 0.02);
//   border-radius: 14px;
//   padding: 24px;
//   display: flex;
//   align-items: flex-start;
//   text-align: left;
//   gap: 18px;
//   transition: transform 0.2s ease, box-shadow 0.2s ease;

//   &:hover {
//     transform: translateY(-2px);
//     box-shadow: 0 12px 25px -5px rgba(0, 0, 0, 0.07);
//   }
// `;

// const IconWrapper = styled.div`
//   background-color: #fdf8f6;
//   color: #7f1d1d;
//   padding: 12px;
//   border-radius: 12px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-shrink: 0;
//   border: 1px solid #fae8e6;
// `;

// const CardContent = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const CardTitle = styled.h3`
//   font-size: 16px;
//   font-weight: 700;
//   color: #1e293b;
//   margin-bottom: 6px;
// `;

// const CardDescription = styled.p`
//   font-size: 13.5px;
//   line-height: 1.5;
//   color: #64748b;
//   margin: 0;
// `;

// const PhotoBannerCard = styled.div`
//   width: 100%;
//   border-radius: 14px;
//   overflow: hidden;
//   box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
//   border: 1px solid #e2e8f0;
//   background-color: #ffffff;
// `;

// const ImageWrapper = styled.div`
//   width: 100%;
//   max-height: 450px;
//   overflow: hidden;
// `;

// const BannerCaption = styled.div`
//   background-color: #611317; /* Deep burgundy footer tag */
//   color: #ffffff;
//   font-size: 14px;
//   font-weight: 600;
//   padding: 14px;
//   text-align: center;
//   letter-spacing: 0.3px;

//   @media (max-width: 768px) {
//     font-size: 13px;
//   }
// `;




'use client';

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Sparkles, X } from 'lucide-react';
import { db } from "@/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import PublicImpactsSection from './ImpactMedia';

const ImpactSection = () => {
  const [categories, setCategories] = useState([]);
  const [impacts, setImpacts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modal State for Category Media
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryMediaItems, setCategoryMediaItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      
      // Fetch Categories
      const catSnapshot = await getDocs(collection(db, "impactCategories"));
      const catList = catSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCategories(catList);

      // Fetch Impacts to filter by category when clicked
      const impactSnapshot = await getDocs(collection(db, "foundationImpacts"));
      const impactList = impactSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setImpacts(impactList);

    } catch (error) {
      console.error("Failed to fetch impact categories:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCardClick = (cat) => {
    setSelectedCategory(cat);
    // Filter impact items that belong to this category (supporting categoryIds array or single categoryId)
    const filtered = impacts.filter((item) => {
      const ids = item.categoryIds || (item.categoryId ? [item.categoryId] : []);
      return ids.includes(cat.id);
    });
    setCategoryMediaItems(filtered);
  };

  return (
    <>
      <ImpactContainer id="impact">
        <ImpactContentWrapper>
          {/* Section Header */}
          <SubHeading>OUR TRACK RECORD</SubHeading>
          <MainHeading>9 Years of Impact</MainHeading>
          <DividerLine />

          <DescriptionText>
            Over the past nine years, Elizabeth Foundation SS has served communities through these <br />
            key programmes. Click any category below to view related stories and media.
          </DescriptionText>

          {/* Impact Cards Grid (Dynamic from Firestore) */}
          {loading ? (
            <LoadingText>Loading impact programmes...</LoadingText>
          ) : categories.length === 0 ? (
            <LoadingText>No impact categories found.</LoadingText>
          ) : (
            <CardsGrid>
              {categories.map((cat) => (
                <Card key={cat.id} onClick={() => handleCardClick(cat)}>
                  <IconWrapper>
                    <Sparkles size={22} />
                  </IconWrapper>
                  <CardContent>
                    <CardTitle>{cat.title || cat.name}</CardTitle>
                    <CardDescription>{cat.description || "Explore impact stories and media for this category."}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </CardsGrid>
          )}

          {/* Bottom Featured Photo Banner */}
          <PhotoBannerCard>
            <ImageWrapper>
              <Image 
                src="/im2.jpg" 
                alt="Elizabeth Foundation SS - Community Outreach & Food Distribution" 
                width={1000} 
                height={400} 
                style={{ width: '100%', height: 'auto', display: 'block' }}
                priority
              />
            </ImageWrapper>
            <BannerCaption>
              Elizabeth Foundation SS — Community Outreach & Food Distribution
            </BannerCaption>
          </PhotoBannerCard>

        </ImpactContentWrapper>
      </ImpactContainer>

      {/* Category Media Modal */}
      {selectedCategory && (
        <ModalOverlay onClick={() => setSelectedCategory(null)}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <div>
                <ModalTitle>{selectedCategory.title || selectedCategory.name}</ModalTitle>
                {selectedCategory.description && <ModalSubDesc>{selectedCategory.description}</ModalSubDesc>}
              </div>
              <CloseButton onClick={() => setSelectedCategory(null)}>
                <X size={20} />
              </CloseButton>
            </ModalHeader>

            <ModalBody>
              {categoryMediaItems.length === 0 ? (
                <NoMediaText>No media posts available for this category yet.</NoMediaText>
              ) : (
                <MediaGrid>
                  {categoryMediaItems.map((item) => (
                    <MediaCard key={item.id}>
                      {item.mediaType === "video" ? (
                        <video src={item.url} controls />
                      ) : (
                        <img src={item.url} alt="Impact Media" />
                      )}
                      <MediaCaption>{item.description}</MediaCaption>
                    </MediaCard>
                  ))}
                </MediaGrid>
              )}
            </ModalBody>
          </ModalContainer>
        </ModalOverlay>
      )}

      <PublicImpactsSection />
    </>
  );
};

export default ImpactSection;

// --- Styled Components ---

const ImpactContainer = styled.section`
  background-color: #ffffff;
  width: 100%;
  padding: 90px 20px;
  display: flex;
  justify-content: center;
`;

const ImpactContentWrapper = styled.div`
  max-width: 1050px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const SubHeading = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: #c29b38;
  letter-spacing: 1.5px;
  margin-bottom: 10px;
`;

const MainHeading = styled.h2`
  font-size: 36px;
  font-weight: 800;
  color: #611317;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const DividerLine = styled.div`
  width: 50px;
  height: 3px;
  background-color: #c29b38;
  margin-bottom: 16px;
  border-radius: 2px;
`;

const DescriptionText = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: #475569;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const LoadingText = styled.p`
  font-size: 14px;
  color: #64748b;
  margin-bottom: 40px;
  font-style: italic;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: #ffffff;
  border: 1px solid #f1f5f9;
  box-shadow: 0 8px 20px -4px rgba(0, 0, 0, 0.04), 0 4px 6px -2px rgba(0, 0, 0, 0.02);
  border-radius: 14px;
  padding: 24px;
  display: flex;
  align-items: flex-start;
  text-align: left;
  gap: 18px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 25px -5px rgba(97, 19, 23, 0.1);
    border-color: rgba(97, 19, 23, 0.2);
  }
`;

const IconWrapper = styled.div`
  background-color: #fdf8f6;
  color: #7f1d1d;
  padding: 12px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 1px solid #fae8e6;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 6px;
`;

const CardDescription = styled.p`
  font-size: 13.5px;
  line-height: 1.5;
  color: #64748b;
  margin: 0;
`;

const PhotoBannerCard = styled.div`
  width: 100%;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  background-color: #ffffff;
`;

const ImageWrapper = styled.div`
  width: 100%;
  max-height: 450px;
  overflow: hidden;
`;

const BannerCaption = styled.div`
  background-color: #611317;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  padding: 14px;
  text-align: center;
  letter-spacing: 0.3px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

// Modal Styled Components
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 23, 42, 0.65);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1100;
  padding: 20px;
  box-sizing: border-box;
`;

const ModalContainer = styled.div`
  background: #ffffff;
  border-radius: 16px;
  width: 100%;
  max-width: 850px;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  border: 1px solid #e2e8f0;
`;

const ModalHeader = styled.div`
  padding: 20px 24px;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 15px;
`;

const ModalTitle = styled.h3`
  margin: 0 0 4px 0;
  font-size: 20px;
  font-weight: 800;
  color: #611317;
`;

const ModalSubDesc = styled.p`
  margin: 0;
  font-size: 13.5px;
  color: #64748b;
  line-height: 1.4;
`;

const CloseButton = styled.button`
  background: #e2e8f0;
  color: #334155;
  border: none;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.2s ease;

  &:hover {
    background: #cbd5e1;
  }
`;

const ModalBody = styled.div`
  padding: 24px;
  overflow-y: auto;
  flex: 1;
  background: #f1f5f9;
`;

const NoMediaText = styled.p`
  text-align: center;
  color: #64748b;
  font-size: 14px;
  font-style: italic;
  padding: 40px 0;
  margin: 0;
`;

const MediaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
`;

const MediaCard = styled.div`
  background: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);

  img, video {
    width: 100%;
    height: 170px;
    object-fit: cover;
    background: #000;
  }
`;

const MediaCaption = styled.p`
  padding: 10px 12px;
  margin: 0;
  font-size: 12.5px;
  color: #334155;
  line-height: 1.4;
`;