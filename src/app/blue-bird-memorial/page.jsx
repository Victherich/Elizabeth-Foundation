// 'use client';

// import React from 'react';
// import styled from 'styled-components';

// export default function BlueBirdMemorialPage() {
//   return (
//     <PageWrapper>
//       {/* Hero Section */}
//       <HeroSection>
//         <HeroOverlay />
//         <HeroContent>
//           <BirdIconWrapper>
//             {/* Minimalist bird icon inline SVG */}
//             <svg 
//               xmlns="http://www.w3.org/2000/svg" 
//               viewBox="0 0 24 24" 
//               fill="none" 
//               stroke="currentColor" 
//               strokeWidth="2" 
//               strokeLinecap="round" 
//               strokeLinejoin="round"
//             >
//               <path d="M16 7h.01" />
//               <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" />
//               <path d="m20 7 2 .5-2 .5" />
//             </svg>
//           </BirdIconWrapper>
//           <Subtitle>IN LOVING MEMORY OF ELIZABETH</Subtitle>
//           <Title>Blue Bird Memorial</Title>
//           <HeroTagline>A spirit that continues to fly</HeroTagline>
//         </HeroContent>
//       </HeroSection>

//       {/* Main Content Section */}
//       <ContentSection>
//         <InnerContainer>
//           <SectionHeader>
//             <SmallIconWrapper>
//               <svg 
//                 xmlns="http://www.w3.org/2000/svg" 
//                 viewBox="0 0 24 24" 
//                 fill="none" 
//                 stroke="currentColor" 
//                 strokeWidth="2" 
//                 strokeLinecap="round" 
//                 strokeLinejoin="round"
//               >
//                 <path d="M16 7h.01" />
//                 <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" />
//                 <path d="m20 7 2 .5-2 .5" />
//               </svg>
//             </SmallIconWrapper>
//             <SectionTitle>A Spirit That Continues to Fly</SectionTitle>
//           </SectionHeader>

//           <Paragraph>
//             The Blue Bird Memorial is our dedicated memorial platform celebrating Elizabeth's life, achievements, dreams, memories and legacy.
//           </Paragraph>

//           <Paragraph>
//             The blue bird represents a spirit that continues to fly — reminding us that although Elizabeth is no longer physically with us, her story, her smile and her impact continue to live on.
//           </Paragraph>

//           <Paragraph>
//             The Memorial preserves memories of Elizabeth and provides a space for family, friends, former classmates, teachers and members of the community to remember and celebrate her.
//           </Paragraph>
//         </InnerContainer>
//       </ContentSection>

//       {/* Tribute Call-To-Action Section */}
//       <CtaSection>
//         <CtaContent>
//           <HeartIconWrapper>
//             <svg 
//               xmlns="http://www.w3.org/2000/svg" 
//               viewBox="0 0 24 24" 
//               fill="none" 
//               stroke="currentColor" 
//               strokeWidth="2" 
//               strokeLinecap="round" 
//               strokeLinejoin="round"
//             >
//               <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.04 3 5.5l7 7Z" />
//             </svg>
//           </HeartIconWrapper>
//           <CtaTitle>Share Your Memory of Elizabeth</CtaTitle>
//           <CtaDescription>
//             If Elizabeth touched your life, we invite you to leave a tribute on her Memory Wall.
//           </CtaDescription>
//           <TributeButton href="/elizabeth-story#tribute">
//             Leave a Tribute 
//             <span style={{ fontSize: '18px', lineHeight: 1 }}>→</span>
//           </TributeButton>
//         </CtaContent>
//       </CtaSection>
//     </PageWrapper>
//   );
// }

// // --- Styled Components ---

// const PageWrapper = styled.div`
//   width: 100%;
//   min-height: 100vh;
//   font-family: inherit;
//   background-color: #ffffff;
//   color: #1e293b;
// `;

// const HeroSection = styled.section`
//   position: relative;
//   width: 100%;
//   height: 480px;
//   background-color: #3b0707;
//   /* Placeholder background gradient or image fallback */
//   background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('/hero-bg.jpg');
//   background-size: cover;
//   background-position: center;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
//   padding: 0 20px;
// `;

// const HeroOverlay = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(40, 10, 10, 0.65);
//   z-index: 1;
// `;

// const HeroContent = styled.div`
//   position: relative;
//   z-index: 2;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   max-width: 800px;
// `;

// const BirdIconWrapper = styled.div`
//   width: 36px;
//   height: 36px;
//   color: #fbbf24;
//   margin-bottom: 12px;

//   svg {
//     width: 100%;
//     height: 100%;
//   }
// `;

// const Subtitle = styled.span`
//   font-size: 11px;
//   font-weight: 700;
//   letter-spacing: 2px;
//   color: #fbbf24;
//   text-transform: uppercase;
//   margin-bottom: 8px;
// `;

// const Title = styled.h1`
//   font-size: 42px;
//   font-weight: 800;
//   color: #ffffff;
//   margin: 0 0 10px 0;

//   @media (min-width: 768px) {
//     font-size: 52px;
//   }
// `;

// const HeroTagline = styled.p`
//   font-size: 15px;
//   color: #e2e8f0;
//   margin: 0;
//   font-weight: 400;
// `;

// const ContentSection = styled.section`
//   padding: 80px 20px;
//   background-color: #ffffff;
//   display: flex;
//   justify-content: center;
// `;

// const InnerContainer = styled.div`
//   max-width: 720px;
//   text-align: center;
// `;

// const SectionHeader = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-bottom: 32px;
// `;

// const SmallIconWrapper = styled.div`
//   width: 28px;
//   height: 28px;
//   color: #3b82f6;
//   margin-bottom: 12px;

//   svg {
//     width: 100%;
//     height: 100%;
//   }
// `;

// const SectionTitle = styled.h2`
//   font-size: 26px;
//   font-weight: 700;
//   color: #7f1d1d;
//   margin: 0;

//   @media (min-width: 768px) {
//     font-size: 30px;
//   }
// `;

// const Paragraph = styled.p`
//   font-size: 15px;
//   line-height: 1.7;
//   color: #475569;
//   margin-bottom: 24px;

//   &:last-child {
//     margin-bottom: 0;
//   }
// `;

// const CtaSection = styled.section`
//   background-color: #7f1d1d;
//   padding: 70px 20px;
//   display: flex;
//   justify-content: center;
//   text-align: center;
// `;

// const CtaContent = styled.div`
//   max-width: 600px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const HeartIconWrapper = styled.div`
//   width: 28px;
//   height: 28px;
//   color: #fbbf24;
//   margin-bottom: 16px;

//   svg {
//     width: 100%;
//     height: 100%;
//   }
// `;

// const CtaTitle = styled.h3`
//   font-size: 22px;
//   font-weight: 700;
//   color: #ffffff;
//   margin: 0 0 12px 0;

//   @media (min-width: 768px) {
//     font-size: 26px;
//   }
// `;

// const CtaDescription = styled.p`
//   font-size: 14px;
//   color: #f1f5f9;
//   margin: 0 0 28px 0;
//   line-height: 1.5;
// `;

// const TributeButton = styled.a`
//   display: inline-flex;
//   align-items: center;
//   gap: 8px;
//   background-color: #fbbf24;
//   color: #7f1d1d;
//   font-size: 14px;
//   font-weight: 700;
//   padding: 12px 28px;
//   border-radius: 50px;
//   text-decoration: none;
//   transition: background-color 0.2s ease, transform 0.2s ease;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

//   &:hover {
//     background-color: #f59e0b;
//     transform: translateY(-2px);
//   }
// `;





'use client';

import React from 'react';
import styled from 'styled-components';

export default function BlueBirdMemorialPage() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <HeroSection>
        <HeroOverlay />
        <HeroContent>
          <BirdIconWrapper>
            {/* Minimalist bird icon inline SVG */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M16 7h.01" />
              <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" />
              <path d="m20 7 2 .5-2 .5" />
            </svg>
          </BirdIconWrapper>
          <Subtitle>IN LOVING MEMORY OF ELIZABETH</Subtitle>
          <Title>Blue Bird Memorial</Title>
          <HeroTagline>A spirit that continues to fly</HeroTagline>
        </HeroContent>
      </HeroSection>

      {/* Main Content Section */}
      <ContentSection>
        <InnerContainer>
          <SectionHeader>
            <SmallIconWrapper>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M16 7h.01" />
                <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" />
                <path d="m20 7 2 .5-2 .5" />
              </svg>
            </SmallIconWrapper>
            <SectionTitle>A Spirit That Continues to Fly</SectionTitle>
          </SectionHeader>

          <Paragraph>
            The Blue Bird Memorial is our dedicated memorial platform celebrating Elizabeth's life, achievements, dreams, memories and legacy.
          </Paragraph>

          <Paragraph>
            The blue bird represents a spirit that continues to fly — reminding us that although Elizabeth is no longer physically with us, her story, her smile and her impact continue to live on.
          </Paragraph>

          <Paragraph>
            The Memorial preserves memories of Elizabeth and provides a space for family, friends, former classmates, teachers and members of the community to remember and celebrate her.
          </Paragraph>
        </InnerContainer>
      </ContentSection>

      {/* Tribute Call-To-Action Section */}
      <CtaSection>
        <CtaContent>
          <HeartIconWrapper>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.04 3 5.5l7 7Z" />
            </svg>
          </HeartIconWrapper>
          <CtaTitle>Share Your Memory of Elizabeth</CtaTitle>
          <CtaDescription>
            If Elizabeth touched your life, we invite you to leave a tribute on her Memory Wall.
          </CtaDescription>
          <TributeButton href="/elizabeth-story#tribute">
            Leave a Tribute 
            <span style={{ fontSize: '18px', lineHeight: 1 }}>→</span>
          </TributeButton>
        </CtaContent>
      </CtaSection>
    </PageWrapper>
  );
}

// --- Styled Components ---

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  font-family: inherit;
  background-color: #ffffff;
  color: #1e293b;
`;

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 480px;
  background-color: #3b0707;
  background-image: url('/e4.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 20px;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(40, 10, 10, 0.75);
  z-index: 1;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
`;

const BirdIconWrapper = styled.div`
  width: 36px;
  height: 36px;
  color: #fbbf24;
  margin-bottom: 12px;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const Subtitle = styled.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #fbbf24;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: 800;
  color: #ffffff;
  margin: 0 0 10px 0;

  @media (min-width: 768px) {
    font-size: 52px;
  }
`;

const HeroTagline = styled.p`
  font-size: 15px;
  color: #e2e8f0;
  margin: 0;
  font-weight: 400;
`;

const ContentSection = styled.section`
  padding: 80px 20px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
`;

const InnerContainer = styled.div`
  max-width: 720px;
  text-align: center;
`;

const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
`;

const SmallIconWrapper = styled.div`
  width: 28px;
  height: 28px;
  color: #3b82f6;
  margin-bottom: 12px;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const SectionTitle = styled.h2`
  font-size: 26px;
  font-weight: 700;
  color: #7f1d1d;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

const Paragraph = styled.p`
  font-size: 15px;
  line-height: 1.7;
  color: #475569;
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const CtaSection = styled.section`
  background-color: #7f1d1d;
  padding: 70px 20px;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const CtaContent = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeartIconWrapper = styled.div`
  width: 28px;
  height: 28px;
  color: #fbbf24;
  margin-bottom: 16px;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const CtaTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 12px 0;

  @media (min-width: 768px) {
    font-size: 26px;
  }
`;

const CtaDescription = styled.p`
  font-size: 14px;
  color: #f1f5f9;
  margin: 0 0 28px 0;
  line-height: 1.5;
`;

const TributeButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: #fbbf24;
  color: #7f1d1d;
  font-size: 14px;
  font-weight: 700;
  padding: 12px 28px;
  border-radius: 50px;
  text-decoration: none;
  transition: background-color 0.2s ease, transform 0.2s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  &:hover {
    background-color: #f59e0b;
    transform: translateY(-2px);
  }
`;