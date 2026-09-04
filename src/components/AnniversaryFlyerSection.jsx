'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const AnniversaryFlyerSection = () => {
  return (
    <FlyerContainer id="elizabeths-story">
      <FlyerContentWrapper>
        {/* Section Header */}
        <SubHeading>OUR JOURNEY</SubHeading>
        <MainHeading>10 Years of Hope, Impact & Legacy</MainHeading>
        <DividerLine />
        <SectionDescription>
          A decade of dedicated service to the sickle cell community — our story of numbers and resilience.
        </SectionDescription>

        {/* Responsive Flyer Image Board */}
        <FlyerImageCard>
          <Image 
            src="/im3.jpg" 
            alt="10 Years of Hope, Impact & Legacy - Elizabeth Foundation SS Flyer" 
            width={900} 
            height={1300} 
            priority
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </FlyerImageCard>
      </FlyerContentWrapper>
    </FlyerContainer>
  );
};

export default AnniversaryFlyerSection;

// --- Styled Components ---

const FlyerContainer = styled.section`
  background-color: #ffffff; /* Clean white background */
  width: 100%;
  padding: 90px 20px;
  display: flex;
  justify-content: center;
`;

const FlyerContentWrapper = styled.div`
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const SubHeading = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: #c29b38; /* Gold accent matching previous white-background sections */
  letter-spacing: 2px;
  margin-bottom: 8px;
`;

const MainHeading = styled.h2`
  font-size: 36px;
  font-weight: 800;
  color: #611317; /* Deep burgundy matching page headers */
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

const DividerLine = styled.div`
  width: 50px;
  height: 3px;
  background-color: #c29b38;
  margin-bottom: 14px;
  border-radius: 2px;
`;

const SectionDescription = styled.p`
  font-size: 14.5px;
  color: #475569; /* Slate grey for clean readability on white */
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 13.5px;
  }
`;

const FlyerImageCard = styled.div`
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #e2e8f0; /* Subtle modern border */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08); /* Softer shadow for white layout */
  background-color: #ffffff;
`;