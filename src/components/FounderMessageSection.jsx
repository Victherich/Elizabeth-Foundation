'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const FounderMessageSection = () => {
  return (
    <SectionContainer id="founder-message">
      <SectionContentWrapper>
        {/* Section Header */}
        <SubHeading>A MESSAGE FROM THE FOUNDER</SubHeading>
        <MainHeading>From One Mother&apos;s Promise</MainHeading>
        <DividerLine />

        {/* Message Card */}
        <MessageCard>
          <QuoteParagraph>
            <QuoteIcon>“</QuoteIcon>
            Elizabeth was my first child. She was my best friend, my beautiful Blue Bird.
          </QuoteParagraph>

          <Paragraph>
            Losing her broke something in me, but it also gave me a purpose. I promised myself that her life would not be remembered only because she died. She would be remembered because her life inspired us to make a difference.
          </Paragraph>

          <Paragraph>
            For nine years, Elizabeth Foundation SS has continued to serve. We have supported children, families, elderly people, single mothers and communities. We have provided educational assistance, healthcare awareness, Christmas support and empowerment programmes.
          </Paragraph>

          <Paragraph>
            Now, I believe it is time to do more.
          </Paragraph>

          <Paragraph>
            I ask every parent: please do not give up on your child.
          </Paragraph>

          <Paragraph>
            I ask every supporter: help us build something that will outlive us.
          </Paragraph>

          <Paragraph>
            I ask every organisation and philanthropist: join us in bringing Blue Bird home.
          </Paragraph>

          <Paragraph>
            Elizabeth&apos;s journey began in love. Her legacy continues through service. After 10 years of making an impact in her father&apos;s land, Blue Bird is coming home.
          </Paragraph>

          <CardDivider />

          {/* Founder Signature Footer inside Card */}
          <SignatureWrapper>
            <FounderAvatar>
              <Image 
                src="/im8.jpg" 
                alt="Miss Omowonuola Oyebode" 
                width={50} 
                height={50} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </FounderAvatar>
            <FounderDetails>
              <FounderName>Miss Omowonuola Oyebode</FounderName>
              <FounderTitle>Founder, Elizabeth Foundation SS</FounderTitle>
            </FounderDetails>
          </SignatureWrapper>
        </MessageCard>

        {/* Bottom Call to Action Button Block */}
        <CtaButtonBlock>
          <CtaTitle>BLUE BIRD IS HOME.</CtaTitle>
          <CtaSubtitle>Let us build. Let us support. Let us welcome Blue Bird home.</CtaSubtitle>
        </CtaButtonBlock>

      </SectionContentWrapper>
    </SectionContainer>
  );
};

export default FounderMessageSection;

// --- Styled Components ---

const SectionContainer = styled.section`
  background-color: #ffffff; /* Clean white background */
  width: 100%;
  padding: 90px 20px;
  display: flex;
  justify-content: center;
`;

const SectionContentWrapper = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const SubHeading = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: #c29b38; /* Gold accent */
  letter-spacing: 1.5px;
  margin-bottom: 10px;
`;

const MainHeading = styled.h2`
  font-size: 36px;
  font-weight: 800;
  color: #611317; /* Deep burgundy header */
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const DividerLine = styled.div`
  width: 50px;
  height: 3px;
  background-color: #c29b38;
  margin-bottom: 40px;
  border-radius: 2px;
`;

const MessageCard = styled.div`
  background: #fafaf9; /* Very soft off-white card tone */
  border: 1px solid #e7e5e4;
  border-left: 5px solid #7f1d1d; /* Deep burgundy thick left accent border */
  border-radius: 12px;
  padding: 40px 35px;
  text-align: left;
  width: 100%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  margin-bottom: 35px;

  @media (max-width: 768px) {
    padding: 25px 20px;
  }
`;

const QuoteIcon = styled.span`
  color: #d97706; /* Warm gold quote mark */
  font-size: 32px;
  line-height: 0;
  vertical-align: middle;
  margin-right: 6px;
`;

const QuoteParagraph = styled.p`
  font-size: 15px;
  line-height: 1.7;
  color: #1e293b;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 14.5px;
  line-height: 1.8;
  color: #475569;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const CardDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e2e8f0;
  margin: 30px 0 24px 0;
`;

const SignatureWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const FounderAvatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #c29b38;
  flex-shrink: 0;
  background-color: #f1f5f9;
`;

const FounderDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const FounderName = styled.h4`
  font-size: 14px;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 2px;
`;

const FounderTitle = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #64748b;
`;

const CtaButtonBlock = styled.div`
  background-color: #7f1d1d; /* Deep burgundy interactive style box */
  border: 1px solid #611317;
  border-radius: 12px;
  padding: 28px 24px;
  width: 100%;
  text-align: center;
  box-shadow: 0 10px 25px rgba(127, 29, 29, 0.25);
  cursor: pointer;
  transition: transform 0.2s ease, background-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    background-color: #611317;
  }
`;

const CtaTitle = styled.h3`
  font-size: 16px;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: 0.5px;
  margin-bottom: 6px;
`;

const CtaSubtitle = styled.p`
  font-size: 13.5px;
  color: #fde68a; /* Warm gold subtitle tone */
  margin: 0;
  font-weight: 500;
`;