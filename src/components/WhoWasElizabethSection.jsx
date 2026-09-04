'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

export default function WhoWasElizabethSection() {
  return (
    <SectionWrapper id="who-was-elizabeth">
      <Container>
        {/* Left Text Content */}
        <TextContent>
          <SubHeader>WHO WAS ELIZABETH?</SubHeader>
          <Title>A Little Girl Who Left a Big Legacy</Title>

          <Paragraph>
            Elizabeth was a beautiful, intelligent and compassionate young girl whose life, though tragically short, continues to inspire our commitment to children, families and vulnerable communities.
          </Paragraph>

          <Paragraph>
            Elizabeth lived with sickle cell and passed away at the age of 11, shortly before her 12th birthday.
          </Paragraph>

          <Paragraph>
            Her story became the foundation of a mission: to ensure that children and families affected by sickle cell disease and vulnerability are not left without support, hope or a voice.
          </Paragraph>
        </TextContent>

        {/* Right Image Container */}
        <ImageWrapper>
          <ImageContainerInner>
            <Image 
              src="/e1.jpg" /* Replace with your actual image path */
              alt="Elizabeth Portrait" 
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              style={{ objectFit: 'cover' }}
              priority
            />
          </ImageContainerInner>
        </ImageWrapper>
      </Container>
    </SectionWrapper>
  );
}

// --- Styled Components ---

const SectionWrapper = styled.section`
  width: 100%;
  background-color: #ffffff;
  padding: 80px 20px;
  font-family: inherit;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 1100px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  align-items: center;

  @media (min-width: 900px) {
    grid-template-columns: 1.1fr 0.9fr;
    gap: 60px;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubHeader = styled.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #b45309;
  text-transform: uppercase;
  margin-bottom: 12px;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: #7f1d1d;
  line-height: 1.25;
  margin: 0 0 24px 0;

  @media (min-width: 768px) {
    font-size: 38px;
  }
`;

const Paragraph = styled.p`
  font-size: 15px;
  line-height: 1.7;
  color: #475569;
  margin-bottom: 18px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ImageContainerInner = styled.div`
  position: relative;
  width: 100%;
  max-width: 440px;
  height: 520px;
  border-radius: 16px;
  overflow: hidden;
  background-color: #f1f5f9;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
  border: 4px solid #fdf8f6;

  @media (min-width: 900px) {
    height: 580px;
  }
`;