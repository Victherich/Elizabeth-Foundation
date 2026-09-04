'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

export default function ElizabethLegacyLivesOnSection() {
  return (
    <SectionWrapper>
      <Container>
        {/* Header Block */}
        <HeaderBlock>
          <SubHeader>TODAY &amp; ALWAYS</SubHeader>
          <Title>Elizabeth&apos;s Legacy Lives On</Title>
          <GoldDivider />
        </HeaderBlock>

        {/* Narrative Text */}
        <NarrativeTextContainer>
          <Paragraph>
            Through EFSS, Elizabeth continues to touch lives.
          </Paragraph>
          <Paragraph>
            Her memory inspires our work with children, families, single parents, widows, widowers and vulnerable communities.
          </Paragraph>
          <Paragraph>
            Every act of kindness is a continuation of the love Elizabeth gave during her short but beautiful life.
          </Paragraph>
        </NarrativeTextContainer>

        {/* Twin Image Gallery Grid */}
        <ImageGalleryGrid>
          <ImageCard>
            <ImageInner>
              <Image 
                src="/im14.jpg" /* Replace with your actual image path */
                alt="Elizabeth in striped shirt" 
                fill
                sizes="(max-width: 768px) 100vw, 450px"
                style={{ objectFit: 'cover' }}
              />
            </ImageInner>
          </ImageCard>

            <ImageCard>
            <ImageInner>
              <Image 
                src="/im15.jpg" /* Replace with your actual image path */
                alt="Elizabeth with family" 
                fill
                sizes="(max-width: 768px) 100vw, 450px"
                style={{ objectFit: 'cover' }}
              />
            </ImageInner>
          </ImageCard>
        </ImageGalleryGrid>
      </Container>
    </SectionWrapper>
  );
}

// --- Styled Components ---

const SectionWrapper = styled.section`
  width: 100%;
  background-color: #fffaf5;
  padding: 80px 20px;
  font-family: inherit;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 960px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const HeaderBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
`;

const SubHeader = styled.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #b45309;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

const Title = styled.h2`
  font-size: 30px;
  font-weight: 800;
  color: #7f1d1d;
  margin: 0 0 16px 0;

  @media (min-width: 768px) {
    font-size: 36px;
  }
`;

const GoldDivider = styled.div`
  width: 48px;
  height: 3px;
  background-color: #d97706;
  border-radius: 2px;
`;

const NarrativeTextContainer = styled.div`
  max-width: 680px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 48px;
`;

const Paragraph = styled.p`
  font-size: 15px;
  line-height: 1.7;
  color: #475569;
  margin: 0;

  &:first-child {
    font-weight: 600;
    color: #334155;
  }
`;

const ImageGalleryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ImageCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ImageInner = styled.div`
  position: relative;
  width: 100%;
  max-width: 450px;
  height: 360px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
  border: 4px solid #ffffff;

  @media (min-width: 768px) {
    height: 400px;
  }
`;