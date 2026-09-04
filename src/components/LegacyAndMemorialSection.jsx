'use client';

import React from 'react';
import styled from 'styled-components';

export default function LegacyAndMemorialSection() {
  const legacyTags = [
    "CHILDREN",
    "FAMILIES",
    "SINGLE PARENTS",
    "WIDOWS",
    "WIDOWERS",
    "VULNERABLE COMMUNITIES"
  ];

  return (
    <SectionWrapper>
      {/* 1. Dark Crisis Section */}
      <DarkCrisisBlock>
        <DarkCrisisContainer>
          <DarkTitle>Then, At Just Eleven Years Old...</DarkTitle>
          <DarkSubtitle>Everything changed.</DarkSubtitle>
          <DarkParagraph>
            Elizabeth suffered a sickle cell crisis. She began vomiting, and I took her to hospital.
          </DarkParagraph>
          <DarkParagraph>
            I never imagined that day would be the day I would lose my daughter.
          </DarkParagraph>
          <DarkParagraph>
            Before I knew it, Elizabeth had passed away.
          </DarkParagraph>
          <DarkHighlightText>
            The pain of losing her changed my life forever.
          </DarkHighlightText>
        </DarkCrisisContainer>
      </DarkCrisisBlock>

      {/* 2. Her Story Did Not End There */}
      <LightSection>
        <LightContainer>
          <BirdIconWrapper>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 7h.01" />
              <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" />
              <path d="m20 7 2 .5-2 .5" />
            </svg>
          </BirdIconWrapper>
          <SectionTitle>Her Story Did Not End There.</SectionTitle>
          <SectionSubtitle>
            Elizabeth&apos;s life became the beginning of something bigger.
          </SectionSubtitle>
          <SectionParagraph>
            EFSS was born from her memory, her courage, her smile and the love she gave to everyone around her.
          </SectionParagraph>

          <TagsGrid>
            {legacyTags.map((tag, index) => (
              <TagCard key={index}>{tag}</TagCard>
            ))}
          </TagsGrid>

          <FooterNote>
            Every child we reach, every family we support and every person we educate about sickle cell is part of Elizabeth&apos;s continuing legacy.
          </FooterNote>
        </LightContainer>
      </LightSection>

      {/* 3. Blue Bird Memorial Section */}
      <MemorialSection>
        <MemorialContainer>
          <BirdIconWrapper>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 7h.01" />
              <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" />
              <path d="m20 7 2 .5-2 .5" />
            </svg>
          </BirdIconWrapper>
          <MemorialEyebrow>A SPIRIT THAT CONTINUES TO FLY</MemorialEyebrow>
          <MemorialTitle>Blue Bird Memorial</MemorialTitle>
          
          <MemorialParagraph>
            The Blue Bird Memorial is our dedicated memorial platform celebrating Elizabeth&apos;s life, achievements, dreams, memories and legacy.
          </MemorialParagraph>
          <MemorialParagraph>
            The blue bird represents a spirit that continues to fly — reminding us that although Elizabeth is no longer physically with us, her story, her smile and her impact continue to live on.
          </MemorialParagraph>
          <MemorialParagraph>
            The Memorial will preserve memories of Elizabeth and provide a space for family, friends, former classmates, teachers and members of the community to remember and celebrate her.
          </MemorialParagraph>

          <MemorialButton href="/blue-bird-memorial">
            Visit the Blue Bird Memorial <span style={{ fontSize: '18px', lineHeight: 1 }}>→</span>
          </MemorialButton>
        </MemorialContainer>
      </MemorialSection>
    </SectionWrapper>
  );
}

// --- Styled Components ---

const SectionWrapper = styled.div`
  width: 100%;
  font-family: inherit;
`;

// Dark Crisis Section Styling
const DarkCrisisBlock = styled.section`
  background-color: #240a0a;
  padding: 80px 20px;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const DarkCrisisContainer = styled.div`
  max-width: 680px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DarkTitle = styled.h2`
  font-size: 28px;
  font-weight: 800;
  color: #ffffff;
  margin: 0 0 16px 0;

  @media (min-width: 768px) {
    font-size: 34px;
  }
`;

const DarkSubtitle = styled.p`
  font-size: 16px;
  color: #fde68a;
  margin: 0 0 24px 0;
  font-weight: 600;
`;

const DarkParagraph = styled.p`
  font-size: 15px;
  line-height: 1.7;
  color: #cbd5e1;
  margin: 0 0 16px 0;
`;

const DarkHighlightText = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #fbbf24;
  margin-top: 16px;
`;

// Light Legacy Section Styling
const LightSection = styled.section`
  background-color: #fffaf5;
  padding: 80px 20px;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const LightContainer = styled.div`
  max-width: 760px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BirdIconWrapper = styled.div`
  width: 32px;
  height: 32px;
  color: #3b82f6;
  margin-bottom: 12px;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: 800;
  color: #7f1d1d;
  margin: 0 0 8px 0;

  @media (min-width: 768px) {
    font-size: 34px;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 15px;
  font-weight: 600;
  color: #334155;
  margin: 0 0 12px 0;
`;

const SectionParagraph = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: #64748b;
  margin: 0 0 36px 0;
  max-width: 600px;
`;

const TagsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
  width: 100%;
  margin-bottom: 36px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TagCard = styled.div`
  background-color: #7f1d1d;
  color: #ffffff;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 16px 12px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(127, 29, 29, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const FooterNote = styled.p`
  font-size: 14px;
  color: #64748b;
  line-height: 1.6;
  font-style: italic;
  max-width: 620px;
  margin: 0;
`;

// Blue Bird Memorial Section Styling
const MemorialSection = styled.section`
  background-color: #f0fdf4; /* Light clean tint complementing the memorial block */
  background-color: #f8fafc;
  padding: 80px 20px;
  display: flex;
  justify-content: center;
  text-align: center;
  border-top: 1px solid #f1f5f9;
`;

const MemorialContainer = styled.div`
  max-width: 720px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MemorialEyebrow = styled.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #b45309;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

const MemorialTitle = styled.h2`
  font-size: 30px;
  font-weight: 800;
  color: #7f1d1d;
  margin: 0 0 24px 0;

  @media (min-width: 768px) {
    font-size: 36px;
  }
`;

const MemorialParagraph = styled.p`
  font-size: 15px;
  line-height: 1.8;
  color: #475569;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 36px;
  }
`;

const MemorialButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: #7ea8be;
  background-color: #93c5fd;
  color: #1e3a8a;
  font-size: 14px;
  font-weight: 700;
  padding: 14px 28px;
  border-radius: 50px;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
  transition: background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background-color: #60a5fa;
    transform: translateY(-2px);
  }
`;