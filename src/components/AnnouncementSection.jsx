'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

export default function AnnouncementSection() {
  return (
    <SectionWrapper>
      <Container>
        {/* Announcement Tag */}
        <Badge>
          <MegaphoneIcon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
          </MegaphoneIcon>
          EFSS ANNOUNCEMENT
        </Badge>

        {/* Main Headings */}
        <Heading>EFSS School Fees Support Disbursement Has Started</Heading>
        
        <SubText>
          We are pleased to announce that disbursement has started for the 300 selected children under the EFSS School Fees Support Initiative.
        </SubText>

        {/* Flyer / Banner Image Container */}
        <FlyerWrapper>
          <Image 
            src="/im12.jpg" /* Replace with your actual image path or import */
            alt="EFSS School Fees Support Disbursement Flyer" 
            width={900}
            height={600}
            priority
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </FlyerWrapper>
      </Container>
    </SectionWrapper>
  );
}

// --- Styled Components ---

const SectionWrapper = styled.section`
  width: 100%;
  background-color: #fcfcfc;
  padding: 100px 20px;
  font-family: inherit;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background-color: #7f1d1d;
  color: #ffffff;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 6px 16px;
  border-radius: 50px;
  margin-bottom: 24px;
  text-transform: uppercase;
`;

const MegaphoneIcon = styled.svg`
  width: 14px;
  height: 14px;
`;

const Heading = styled.h1`
  font-size: 32px;
  font-weight: 800;
  color: #4a1515;
  line-height: 1.25;
  margin: 0 0 16px 0;
  max-width: 750px;

  @media (min-width: 768px) {
    font-size: 38px;
  }
`;

const SubText = styled.p`
  font-size: 15px;
  color: #64748b;
  line-height: 1.6;
  margin: 0 0 40px 0;
  max-width: 600px;
`;

const FlyerWrapper = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid #f1f1f1;
`;