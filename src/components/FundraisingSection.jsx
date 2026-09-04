'use client';

import React from 'react';
import styled from 'styled-components';

const FundraisingSection = () => {
  const waysToSupport = [
    "One-off donation",
    "Monthly donation",
    "Corporate sponsorship",
    "Programme sponsorship",
    "Event sponsorship",
    "Clinic Hub sponsorship",
    "In-kind donations",
    "Partnership opportunities"
  ];

  const partnershipTypes = [
    "Hospitals & Healthcare Professionals",
    "Schools & Educational Institutions",
    "Businesses & Corporates",
    "Charities & Foundations",
    "Government & Public Sector",
    "Diaspora Organisations",
    "Community Organisations",
    "Philanthropists"
  ];

  return (
    <SectionContainer id="donate">
      <SectionContentWrapper>
        {/* Section Header */}
        <SubHeading>SUPPORT BLUE BIRD&apos;S LEGACY</SubHeading>
        <MainHeading>₦500 Million Fundraising Campaign</MainHeading>
        <SectionDescription>
          Every contribution matters. No donation is too small when it helps save a life, educate a child, support a family or give hope to someone in need.
        </SectionDescription>

        {/* Bank Details Card */}
        <BankCard>
          <BankCardTitle>💳 Donation Bank Details</BankCardTitle>
          <BankRow>
            <BankLabel>Account Name</BankLabel>
            <BankValue>Pinkles Nigeria Limited</BankValue>
          </BankRow>
          <BankDivider />
          <BankRow>
            <BankLabel>Bank</BankLabel>
            <BankValue>Polaris Bank</BankValue>
          </BankRow>
          <BankDivider />
          <BankRow>
            <BankLabel>Account Number</BankLabel>
            <BankAccountNumber>4092477448</BankAccountNumber>
          </BankRow>
          <BankFooterNote>
            Please send your name and donation type via WhatsApp after transfer: +234 812 902 1862
          </BankFooterNote>
        </BankCard>

        {/* Ways to Support Box */}
        <SupportWrapper>
          <SupportTitle>Ways to Support</SupportTitle>
          <BadgesGrid>
            {waysToSupport.map((way, index) => (
              <SupportBadge key={index}>{way}</SupportBadge>
            ))}
          </BadgesGrid>
        </SupportWrapper>

        {/* Action Buttons */}
        <ButtonsRow>
          <PrimaryButton>
            <span>♥</span> Donate Now
          </PrimaryButton>
          <SecondaryButton>
            <span>♥</span> Become a Partner
          </SecondaryButton>
        </ButtonsRow>

        {/* Partnerships Section */}
        <PartnershipsContainer>
          <PartnershipHeading>We welcome partnerships with:</PartnershipHeading>
          <PartnershipBadgesGrid>
            {partnershipTypes.map((type, index) => (
              <PartnerBadge key={index}>{type}</PartnerBadge>
            ))}
          </PartnershipBadgesGrid>
        </PartnershipsContainer>

      </SectionContentWrapper>
    </SectionContainer>
  );
};

export default FundraisingSection;

// --- Styled Components ---

const SectionContainer = styled.section`
  background-color: #611317; /* Deep burgundy background theme */
  width: 100%;
  padding: 90px 20px;
  display: flex;
  justify-content: center;
`;

const SectionContentWrapper = styled.div`
  max-width: 850px;
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
  letter-spacing: 1.5px;
  margin-bottom: 8px;
`;

const MainHeading = styled.h2`
  font-size: 36px;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

const SectionDescription = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #cbd5e1;
  max-width: 700px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const BankCard = styled.div`
  background: rgba(0, 0, 0, 0.18);
  border: 1px solid rgba(229, 184, 76, 0.3);
  border-radius: 14px;
  padding: 28px;
  width: 100%;
  margin-bottom: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`;

const BankCardTitle = styled.h3`
  font-size: 15px;
  font-weight: 700;
  color: #e5b84c;
  margin-bottom: 24px;
  letter-spacing: 0.5px;
`;

const BankRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
`;

const BankLabel = styled.span`
  font-size: 13.5px;
  color: #cbd5e1;
`;

const BankValue = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: #ffffff;
`;

const BankAccountNumber = styled.span`
  font-size: 20px;
  font-weight: 800;
  color: #e5b84c;
  letter-spacing: 1px;
`;

const BankDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.1);
  margin: 8px 0;
`;

const BankFooterNote = styled.p`
  font-size: 12px;
  color: #94a3b8;
  margin-top: 20px;
  border-top: 1px dashed rgba(255, 255, 255, 0.1);
  padding-top: 14px;
`;

const SupportWrapper = styled.div`
  background: rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 24px;
  width: 100%;
  margin-bottom: 30px;
  text-align: left;
`;

const SupportTitle = styled.h3`
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 16px;
`;

const BadgesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const SupportBadge = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  padding: 10px 12px;
  font-size: 12.5px;
  color: #e2e8f0;
  text-align: center;
  font-weight: 500;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const ButtonsRow = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  margin-bottom: 40px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const PrimaryButton = styled.button`
  flex: 1;
  background-color: #e5b84c;
  color: #611317;
  border: none;
  border-radius: 30px;
  padding: 14px 24px;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-shadow: 0 4px 15px rgba(229, 184, 76, 0.3);
  transition: transform 0.2s ease, background-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    background-color: #f6c855;
  }

  span {
    color: #611317;
    font-size: 14px;
  }
`;

const SecondaryButton = styled.button`
  flex: 1;
  background-color: transparent;
  color: #ffffff;
  border: 2px solid #ffffff;
  border-radius: 30px;
  padding: 14px 24px;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: transform 0.2s ease, background-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    background-color: rgba(255, 255, 255, 0.08);
  }

  span {
    color: #e5b84c;
    font-size: 14px;
  }
`;

const PartnershipsContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const PartnershipHeading = styled.h4`
  font-size: 13.5px;
  font-weight: 600;
  color: #cbd5e1;
  margin-bottom: 16px;
`;

const PartnershipBadgesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
`;

const PartnerBadge = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 6px 14px;
  font-size: 11.5px;
  color: #cbd5e1;
  font-weight: 500;
`;