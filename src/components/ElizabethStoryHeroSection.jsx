'use client';

import React from 'react';
import styled from 'styled-components';

export default function ElizabethStoryHeroSection() {
  return (
    <HeroWrapper>
      <HeroContent>
        {/* Top Tag / Subtitle */}
        <SubHeader>
          <BirdIcon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </BirdIcon>
          A SHORT LIFE. A BEAUTIFUL LEGACY.
        </SubHeader>

        {/* Main Title */}
        <Title>ELIZABETH</Title>
        <SubtitleHighlight>The Story Behind EFSS</SubtitleHighlight>

        {/* Description Text */}
        <Description>
          Turning one little girl&apos;s story into hope for thousands.
        </Description>

        {/* Action Button */}
        <ActionButton href="#who-was-elizabeth">
          Read Elizabeth&apos;s Story
          <ChevronDown viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </ChevronDown>
        </ActionButton>
      </HeroContent>
    </HeroWrapper>
  );
}

// --- Styled Components ---

const HeroWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 85vh;
  min-height: 500px;
  background-image: url('/e4.jpg'); /* Replace with your background image path */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 20px;

  /* Dark gradient overlay to match image contrast */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.65) 0%,
      rgba(0, 0, 0, 0.75) 100%
    );
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
`;

const SubHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #e2e8f0;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

const BirdIcon = styled.svg`
  width: 16px;
  height: 16px;
  color: #38bdf8;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 900;
  letter-spacing: 4px;
  color: #ffffff;
  margin: 0 0 4px 0;
  line-height: 1.1;

  @media (min-width: 768px) {
    font-size: 64px;
  }
`;

const SubtitleHighlight = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #fbbf24;
  margin: 0 0 20px 0;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const Description = styled.p`
  font-size: 15px;
  color: #cbd5e1;
  margin: 0 0 32px 0;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const ActionButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background-color: #fbbf24;
  color: #1e1b4b;
  font-size: 14px;
  font-weight: 700;
  padding: 12px 28px;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.2s ease;
  box-shadow: 0 4px 14px rgba(251, 191, 36, 0.3);

  &:hover {
    background-color: #f59e0b;
    transform: translateY(-2px);
  }
`;

const ChevronDown = styled.svg`
  width: 14px;
  height: 14px;
`;