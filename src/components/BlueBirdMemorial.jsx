'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const BlueBirdMemorial = () => {
  return (
    <MemorialContainer id="story">
      <MemorialContentWrapper>
        {/* Section Header */}
        <SubHeading>IN LOVING MEMORY</SubHeading>
        <MainHeading>Blue Bird Is Coming Home</MainHeading>
        <SubTitle>Celebrating 10 Years of Love, Impact, Service & Hope</SubTitle>
        <DividerLine />

        {/* Photo Card Wrapper */}
        <PhotoCardContainer>
          <ImageFrame>
            <Image 
              src="/im1.jpg" 
              alt="Elizabeth Ajani-Adeyemo (Blue Bird)" 
              width={280} 
              height={350} 
              priority
              style={{ objectFit: 'cover', width: '100%', height: 'auto', display: 'block' }}
            />
          </ImageFrame>
          <DateBadge>22 May 2005 – 21 March 2017</DateBadge>
        </PhotoCardContainer>

        {/* Memorial Name & Quote */}
        <MemorialName>Elizabeth Ajani-Adeyemo</MemorialName>
        <MemorialQuote>“Blue Bird” — Her life was short, but her legacy will last forever.</MemorialQuote>
      </MemorialContentWrapper>
    </MemorialContainer>
  );
};

export default BlueBirdMemorial;

// --- Styled Components ---

const MemorialContainer = styled.section`
  background-color: #611317; /* Deep burgundy background matching your design */
  width: 100%;
  padding: 90px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MemorialContentWrapper = styled.div`
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
  color: #e5b84c; /* Gold accent */
  letter-spacing: 2px;
  margin-bottom: 12px;
`;

const MainHeading = styled.h2`
  font-size: 40px;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const SubTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: #f1f5f9;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const DividerLine = styled.div`
  width: 50px;
  height: 3px;
  background-color: #e5b84c;
  margin-bottom: 40px;
  border-radius: 2px;
`;

const PhotoCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

const ImageFrame = styled.div`
  width: 260px;
  border-radius: 12px;
  overflow: hidden;
  border: 4px solid #e5b84c; /* Gold border frame */
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
  background-color: #ffffff;
`;

const DateBadge = styled.div`
  background-color: #e5b84c;
  color: #3b090c;
  font-size: 12px;
  font-weight: 700;
  padding: 6px 16px;
  border-radius: 20px;
  margin-top: -14px; /* Overlaps slightly with the bottom of the frame */
  z-index: 2;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  letter-spacing: 0.5px;
`;

const MemorialName = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #e5b84c;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const MemorialQuote = styled.p`
  font-size: 15px;
  font-style: italic;
  color: #cbd5e1;
  max-width: 500px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;