'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      {/* Central circular background card effect */}
      <HeroContentWrapper>
        {/* Top Logo */}
        <LogoWrapper>
          <Image 
            src="/logo.jpg" 
            alt="The Elizabeth Foundation Logo" 
            width={90} 
            height={90} 
            priority
          />
        </LogoWrapper>

        {/* Main Headings */}
        <HeroTitle>
          THE ELIZABETH <br />
          <GoldText>FOUNDATION SS</GoldText>
        </HeroTitle>

        <HeroSubtitle>SICKLE CELL AWARENESS & SUPPORT INITIATIVE</HeroSubtitle>

        {/* Description */}
        <HeroDescription>
          A registered non-profit organisation dedicated to supporting individuals and <br />
          families living with sickle cell disease in Oyo State (Ibadan) and Lagos State, <br />
          Nigeria.
        </HeroDescription>

        {/* Action Buttons */}
        <ButtonContainer>
          <PrimaryButton href="#apply">Apply for Assistance</PrimaryButton>
          <SecondaryButton href="#story">Learn More</SecondaryButton>
        </ButtonContainer>

        {/* Bottom Stats Counter */}
        <StatsContainer>
          <StatItem>
            <StatNumber>2+</StatNumber>
            <StatLabel>States Served</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>6+</StatNumber>
            <StatLabel>Support Programs</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>100%</StatNumber>
            <StatLabel>Non-Profit</StatLabel>
          </StatItem>
        </StatsContainer>
      </HeroContentWrapper>
    </HeroContainer>
  );
};

export default HeroSection;

// --- Styled Components ---

const HeroContainer = styled.section`
  position: relative;
  background-color: #611317; /* Deep burgundy background */
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  overflow: hidden;

  /* Subtle background design element for rich gradient/shadow corners */
  &::before {
    content: '';
    position: absolute;
    bottom: -100px;
    left: -100px;
    width: 350px;
    height: 350px;
    background: rgba(0, 0, 0, 0.15);
    border-radius: 50%;
    z-index: 1;
  }
`;

const HeroContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  max-width: 900px;
  width: 100%;
  background: radial-gradient(circle, rgba(115, 23, 28, 0.95) 0%, rgba(85, 15, 18, 0.95) 100%);
  border-radius: 50%;
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    border-radius: 24px;
    padding: 40px 20px;
  }
`;

const LogoWrapper = styled.div`
  background: #ffffff;
  padding: 12px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  margin-bottom: 24px;
`;

const HeroTitle = styled.h1`
  font-family: inherit;
  font-size: 42px;
  font-weight: 800;
  color: #ffffff;
  line-height: 1.15;
  margin-bottom: 12px;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const GoldText = styled.span`
  color: #e5b84c; /* Gold accent color */
`;

const HeroSubtitle = styled.h2`
  font-size: 14px;
  font-weight: 700;
  color: #e5b84c;
  letter-spacing: 1.5px;
  margin-bottom: 24px;
`;

const HeroDescription = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: #f1f5f9;
  max-width: 650px;
  margin-bottom: 36px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 48px;
  flex-wrap: wrap;
  justify-content: center;
`;

const PrimaryButton = styled.a`
  background-color: #e5b84c;
  color: #3b090c;
  font-size: 15px;
  font-weight: 700;
  padding: 14px 32px;
  border-radius: 50px;
  text-decoration: none;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease, background-color 0.2s ease;

  &:hover {
    background-color: #f3ca5f;
    transform: translateY(-2px);
  }
`;

const SecondaryButton = styled.a`
  background-color: transparent;
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  padding: 14px 32px;
  border-radius: 50px;
  border: 1.5px solid rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    border-color: #ffffff;
    background-color: rgba(255, 255, 255, 0.05);
    transform: translateY(-2px);
  }
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 32px;

  @media (max-width: 600px) {
    gap: 24px;
  }
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatNumber = styled.span`
  font-size: 26px;
  font-weight: 800;
  color: #e5b84c;
  margin-bottom: 4px;
`;

const StatLabel = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: #cbd5e1;
`;