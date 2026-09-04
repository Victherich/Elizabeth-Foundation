'use client';

import React from 'react';
import styled from 'styled-components';

const ContactUsSection = () => {
  return (
    <SectionContainer id="contact">
      <SectionContentWrapper>
        {/* Section Header */}
        <SubHeading>GET IN TOUCH</SubHeading>
        <MainHeading>Contact Us</MainHeading>
        <DividerLine />
        <SectionDescription>
          Reach out to us for enquiries, support applications, or to get involved with our programs.
        </SectionDescription>

        {/* Info Grid */}
        <InfoGrid>
          {/* Address Card */}
          <InfoCard>
            <IconBox>📍</IconBox>
            <CardContent>
              <CardLabel>ADDRESS</CardLabel>
              <CardText>Elizabeth Foundation SS Clinic Hub, Oluyole, Ibadan, Oyo State</CardText>
            </CardContent>
          </InfoCard>

          {/* Phone / WhatsApp Card */}
          <InfoCard as="a" href="tel:+2348129021662">
            <IconBox>📞</IconBox>
            <CardContent>
              <CardLabel>PHONE / WHATSAPP</CardLabel>
              <CardText>+234 812 902 1662</CardText>
            </CardContent>
          </InfoCard>

          {/* WhatsApp Chat Card */}
          <InfoCard as="a" href="https://wa.me/2348129021662" target="_blank" rel="noopener noreferrer">
            <IconBox>💬</IconBox>
            <CardContent>
              <CardLabel>WHATSAPP</CardLabel>
              <CardText>Chat with us on WhatsApp</CardText>
            </CardContent>
          </InfoCard>

          {/* Email Card */}
          <InfoCard as="a" href="mailto:elizabethfoundationss21@gmail.com">
            <IconBox>✉️</IconBox>
            <CardContent>
              <CardLabel>EMAIL</CardLabel>
              <CardText>elizabethfoundationss21@gmail.com</CardText>
            </CardContent>
          </InfoCard>
        </InfoGrid>

        {/* Operations Banner */}
        <OperationsBanner>
          <BannerTitle>Operations</BannerTitle>
          <BannerSubtitle>Oyo State (Ibadan) - Lagos State</BannerSubtitle>
          <ButtonsRow>
            <WhatsAppButton href="https://wa.me/2348129021662" target="_blank" rel="noopener noreferrer">
              WhatsApp Us
            </WhatsAppButton>
            <EmailButton href="mailto:elizabethfoundationss21@gmail.com">
              Send Email
            </EmailButton>
          </ButtonsRow>
        </OperationsBanner>

      </SectionContentWrapper>
    </SectionContainer>
  );
};

export default ContactUsSection;

// --- Styled Components ---

const SectionContainer = styled.section`
  background-color: #ffffff;
  width: 100%;
  padding: 90px 20px;
  display: flex;
  justify-content: center;
`;

const SectionContentWrapper = styled.div`
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
  color: #c29b38;
  letter-spacing: 1.5px;
  margin-bottom: 8px;
`;

const MainHeading = styled.h2`
  font-size: 36px;
  font-weight: 800;
  color: #611317;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

const DividerLine = styled.div`
  width: 50px;
  height: 3px;
  background-color: #c29b38;
  margin-bottom: 16px;
  border-radius: 2px;
`;

const SectionDescription = styled.p`
  font-size: 14px;
  color: #64748b;
  max-width: 600px;
  margin-bottom: 40px;
  line-height: 1.6;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled.div`
  background: #fafafa;
  border: 1px solid #f1f5f9;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  align-items: center;
  gap: 20px;
  text-align: left;
  text-decoration: none;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
  }
`;

const IconBox = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background: #fef2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  flex-shrink: 0;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const CardLabel = styled.span`
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #94a3b8;
`;

const CardText = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #1e293b;
  line-height: 1.4;
`;

const OperationsBanner = styled.div`
  background-color: #611317;
  border-radius: 12px;
  padding: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 10px 25px rgba(97, 19, 23, 0.2);
`;

const BannerTitle = styled.h4`
  font-size: 15px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 4px;
`;

const BannerSubtitle = styled.p`
  font-size: 13.5px;
  color: #f1f5f9;
  margin-bottom: 20px;
  font-weight: 500;
`;

const ButtonsRow = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`;

const WhatsAppButton = styled.a`
  background-color: #eab308;
  color: #611317;
  padding: 10px 24px;
  border-radius: 30px;
  font-size: 13.5px;
  font-weight: 800;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(234, 179, 8, 0.3);
  transition: background 0.2s ease;

  &:hover {
    background-color: #facc15;
  }

  @media (max-width: 480px) {
    text-align: center;
  }
`;

const EmailButton = styled.a`
  background-color: transparent;
  color: #ffffff;
  border: 1.5px solid #ffffff;
  padding: 10px 24px;
  border-radius: 30px;
  font-size: 13.5px;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 480px) {
    text-align: center;
  }
`;