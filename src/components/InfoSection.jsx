'use client';

import React from 'react';
import styled from 'styled-components';

export default function InfoSection() {
  const infoCards = [
    {
      title: 'One Child Per Family',
      description: 'To ensure fairness and equal opportunity.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: 'Forms Are Now Closed',
      description: 'The target of 300 children has been reached.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="m15 9-6 6" />
          <path d="m9 9 6 6" />
        </svg>
      ),
    },
    {
      title: 'Payment Directly to the School',
      description: 'Upon successful verification of details.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18" />
          <path d="M3 10h18" />
          <path d="M5 6l7-3 7 3" />
          <path d="M4 10v11" />
          <path d="M20 10v11" />
          <path d="M8 14v3" />
          <path d="M12 14v3" />
          <path d="M16 14v3" />
        </svg>
      ),
    },
    {
      title: 'You Will Be Notified',
      description: 'Parents notified by Email or WhatsApp after payment.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
  ];

  return (
    <SectionWrapper>
      <Container>
        {/* Top 4 Grid Cards */}
        <CardsGrid>
          {infoCards.map((card, index) => (
            <Card key={index}>
              <IconWrapper>{card.icon}</IconWrapper>
              <CardTextContent>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardTextContent>
            </Card>
          ))}
        </CardsGrid>

        {/* Important Notice Box */}
        <ImportantBox>
          <ImportantTitle>Important</ImportantTitle>
          <ImportantText>
            No payment will be made until all beneficiary and school details have been fully checked and confirmed. Be sure you are registered with EFSS. No further applications will be accepted from today. It is closed.
          </ImportantText>
        </ImportantBox>

        {/* Notification Banner */}
        <NotificationBanner>
          <BannerIcon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </BannerIcon>
          <BannerText>
            All parents will be notified of receipt of payment directly to the school by Email or WhatsApp.
          </BannerText>
        </NotificationBanner>
      </Container>

      {/* Footer / Contact Section */}
      <FooterContainer>
        <FooterInner>
          <FooterHeading>FOR MORE INFORMATION</FooterHeading>
          
          <ContactList>
            <ContactItem href="mailto:elizabethfoundationss21@gmail.com">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              elizabethfoundationss21@gmail.com
            </ContactItem>

            <ContactItem href="tel:+2348129021662">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +234 812 902 1662
            </ContactItem>

            <ContactItem href="https://elizabethfoundation123.base44.app" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              elizabethfoundation123.base44.app
            </ContactItem>
          </ContactList>

          <FooterDivider />
          
          <RegistrationText>
            NGO Registration No. 8391820 • NGO / Non-Profit Organisation
          </RegistrationText>
        </FooterInner>
      </FooterContainer>
    </SectionWrapper>
  );
}

// --- Styled Components ---

const SectionWrapper = styled.section`
  width: 100%;
  background-color: #fcfcfc;
  font-family: inherit;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Card = styled.div`
  background: #ffffff;
  border: 1px solid #f1f1f1;
  border-radius: 12px;
  padding: 20px 24px;
  display: flex;
  align-items: center;
  gap: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background-color: #fdf2f2;
  color: #7f1d1d;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 22px;
    height: 22px;
  }
`;

const CardTextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const CardTitle = styled.h3`
  font-size: 15px;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
`;

const CardDescription = styled.p`
  font-size: 13px;
  color: #64748b;
  margin: 0;
  line-height: 1.4;
`;

const ImportantBox = styled.div`
  background-color: #faf5f5;
  border-left: 4px solid #7f1d1d;
  border-radius: 6px;
  padding: 20px 24px;
  margin-top: 10px;
`;

const ImportantTitle = styled.h4`
  font-size: 15px;
  font-weight: 700;
  color: #7f1d1d;
  margin: 0 0 8px 0;
`;

const ImportantText = styled.p`
  font-size: 14px;
  color: #475569;
  line-height: 1.6;
  margin: 0;
`;

const NotificationBanner = styled.div`
  background-color: #fefce8;
  border: 1px solid #fef08a;
  border-radius: 8px;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 20px;
`;

const BannerIcon = styled.div`
  width: 22px;
  height: 22px;
  color: #ca8a04;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const BannerText = styled.p`
  font-size: 13px;
  color: #854d0e;
  margin: 0;
  font-weight: 500;
`;

const FooterContainer = styled.footer`
  background-color: #1a0808;
  color: #ffffff;
  padding: 50px 20px 30px 20px;
  display: flex;
  justify-content: center;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

const FooterInner = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const FooterHeading = styled.h4`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #fbbf24;
  margin-bottom: 28px;
`;

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  margin-bottom: 30px;
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #e2e8f0;
  font-size: 14px;
  text-decoration: none;
  transition: color 0.2s ease;

  svg {
    width: 18px;
    height: 18px;
    color: #cbd5e1;
  }

  &:hover {
    color: #fbbf24;
    
    svg {
      color: #fbbf24;
    }
  }
`;

const FooterDivider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 24px;
`;

const RegistrationText = styled.p`
  font-size: 12px;
  color: #94a3b8;
  margin: 0;
  letter-spacing: 0.5px;
`;