'use client';

import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContentWrapper>
        {/* Logo */}
        <LogoBox>
          <LogoImage src="/logo.jpg" alt="The Elizabeth Foundation SS Logo" />
        </LogoBox>

        {/* Contact Info Text */}
        <InfoText>
          CAC/NGO Reg No: 8391820 &bull; Elizabeth Foundation SS Clinic Hub, Oluyole, Ibadan, Oyo State
        </InfoText>
        <ContactRow>
          <a href="tel:+2348129021662">+234 812 902 1662</a>
          <span>&bull;</span>
          <a href="mailto:elizabethfoundationss21@gmail.com">elizabethfoundationss21@gmail.com</a>
        </ContactRow>

        <DividerLine />

        {/* Copyright & Legal */}
        <CopyrightText>
          &copy; 2026 The Elizabeth Foundation SS. All rights reserved. &bull; Non-Profit Organisation
        </CopyrightText>
      </FooterContentWrapper>
    </FooterContainer>
  );
};

export default Footer;

// --- Styled Components ---

const FooterContainer = styled.footer`
  background-color: #230608;
  width: 100%;
  padding: 60px 20px 40px;
  display: flex;
  justify-content: center;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
`;

const FooterContentWrapper = styled.div`
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const LogoBox = styled.div`
  width: 70px;
  height: 70px;
  background-color: #ffffff;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  margin-bottom: 24px;
`;

const LogoImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const InfoText = styled.p`
  font-size: 13.5px;
  color: #cbd5e1;
  margin-bottom: 8px;
  line-height: 1.5;
`;

const ContactRow = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 13.5px;
  color: #cbd5e1;
  margin-bottom: 30px;
  flex-wrap: wrap;
  justify-content: center;

  a {
    color: #cbd5e1;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #eab308;
    }
  }

  span {
    color: #64748b;
  }
`;

const DividerLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.08);
  margin-bottom: 24px;
`;

const CopyrightText = styled.p`
  font-size: 12px;
  color: #94a3b8;
  line-height: 1.5;
`;