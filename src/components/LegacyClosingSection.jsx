'use client';

import React from 'react';
import styled from 'styled-components';

export default function LegacyClosingSection() {
  return (
    <SectionWrapper>
      <Container>
        {/* Main Header */}
        <Title>Her Life Was Short. Her Legacy Is Lasting.</Title>

        {/* Centered Bullet-like Legacy Statements */}
        <StatementList>
          <StatementItem>She dreamed of becoming a doctor.</StatementItem>
          <StatementItem>She loved to write.</StatementItem>
          <StatementItem>She loved her friends.</StatementItem>
          <StatementItem>She loved her family.</StatementItem>
          <StatementItem>She loved to smile.</StatementItem>
          <StatementItem>She loved life.</StatementItem>
        </StatementList>

        <SubText>
          And today, we continue the work she never had the opportunity to finish.
        </SubText>

        {/* Primary Action Button */}
        <PrimaryButton href="#">
          EFSS — The Legacy of Elizabeth Lives On.
        </PrimaryButton>
      </Container>

      {/* Bottom Action Footer Bar */}
      <FooterActionBar>
        <ActionButtonsContainer>
          <FooterBtn $variant="gold" href="/school-fees-support">
            <HeartIcon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.04 3 5.5l7 7Z" />
            </HeartIcon>
            Support EFSS
          </FooterBtn>

          <FooterBtn $variant="outline" href="/#donate">
            <UserIcon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </UserIcon>
            Volunteer
          </FooterBtn>

          <FooterBtn $variant="outline" href="#tribute">
            <HeartIcon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.04 3 5.5l7 7Z" />
            </HeartIcon>
            Leave a Tribute
          </FooterBtn>
        </ActionButtonsContainer>
      </FooterActionBar>
    </SectionWrapper>
  );
}

// --- Styled Components ---

const SectionWrapper = styled.section`
  width: 100%;
  background-color: #f8fafc;
  font-family: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  max-width: 720px;
  width: 100%;
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 800;
  color: #7f1d1d;
  line-height: 1.25;
  margin: 0 0 32px 0;

  @media (min-width: 768px) {
    font-size: 36px;
  }
`;

const StatementList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 32px;
  width: 100%;
`;

const StatementItem = styled.p`
  font-size: 15px;
  color: #475569;
  margin: 0;
  font-weight: 500;
`;

const SubText = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 36px 0;
`;

const PrimaryButton = styled.a`
  background-color: #7f1d1d;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  padding: 14px 32px;
  border-radius: 50px;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(127, 29, 29, 0.2);
  transition: background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background-color: #991b1b;
    transform: translateY(-2px);
  }
`;

const FooterActionBar = styled.div`
  width: 100%;
  background-color: #7f1d1d;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
`;

const ActionButtonsContainer = styled.div`
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const FooterBtn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  max-width: 280px;
  padding: 14px 20px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  transition: opacity 0.2s ease, transform 0.2s ease;

  background-color: ${({ $variant }) => ($variant === 'gold' ? '#eab308' : 'transparent')};
  color: ${({ $variant }) => ($variant === 'gold' ? '#7f1d1d' : '#ffffff')};
  border: ${({ $variant }) => ($variant === 'gold' ? 'none' : '2px solid rgba(255, 255, 255, 0.4)')};

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    border-color: ${({ $variant }) => ($variant === 'gold' ? 'none' : '#ffffff')};
  }
`;

const HeartIcon = styled.svg`
  width: 16px;
  height: 16px;
`;

const UserIcon = styled.svg`
  width: 16px;
  height: 16px;
`;