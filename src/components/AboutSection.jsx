'use client';

import React from 'react';
import styled from 'styled-components';
import { Heart, ShieldCheck, Users, MapPin } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Heart size={24} />,
      title: 'Compassionate Care',
      description: 'We provide holistic welfare support to sickle cell patients, widows, the elderly, and single parents.',
    },
    {
      icon: <ShieldCheck size={24} />,
      title: 'Transparency & Integrity',
      description: 'All disbursements are verified and made directly to institutions or verified bank accounts — no cash transfers.',
    },
    {
      icon: <Users size={24} />,
      title: 'Community Empowerment',
      description: 'From youth empowerment to food bank relief, we strengthen communities and restore dignity.',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Local Impact',
      description: 'Operating across Ibadan (Oyo State) and Lagos State with boots on the ground at our Clinic Hub.',
    },
  ];

  return (
    <AboutContainer >
      <AboutContentWrapper>
        {/* Section Header */}
        <SubHeading>WHO WE ARE</SubHeading>
        <MainHeading>About The Elizabeth Foundation SS</MainHeading>
        <DividerLine />

        <DescriptionText>
          The Elizabeth Foundation SS is a registered non-profit organisation (CAC/NGO Reg No:{' '}
          <strong>8391820</strong>) headquartered at our Clinic Hub in Oluyole, Ibadan, Oyo State. We are committed{' '}
          <br />
          to raising awareness and providing material, financial, and emotional support to those{' '}
          <br />
          affected by sickle cell disease and related vulnerabilities.
        </DescriptionText>

        {/* Feature Cards Grid */}
        <CardsGrid>
          {features.map((item, index) => (
            <Card key={index}>
              <IconWrapper>{item.icon}</IconWrapper>
              <CardContent>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </CardsGrid>
      </AboutContentWrapper>
    </AboutContainer>
  );
};

export default AboutSection;

// --- Styled Components ---

const AboutContainer = styled.section`
  background-color: #ffffff;
  padding: 80px 20px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const AboutContentWrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const SubHeading = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: #c29b38; /* Gold accent color */
  letter-spacing: 1.5px;
  margin-bottom: 10px;
`;

const MainHeading = styled.h2`
  font-size: 36px;
  font-weight: 800;
  color: #611317; /* Deep burgundy color */
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const DividerLine = styled.div`
  width: 60px;
  height: 3px;
  background-color: #c29b38;
  margin-bottom: 24px;
  border-radius: 2px;
`;

const DescriptionText = styled.p`
  font-size: 15px;
  line-height: 1.7;
  color: #475569;
  max-width: 850px;
  margin-bottom: 50px;

  strong {
    font-weight: 600;
    color: #334155;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: #ffffff;
  border: 1px solid #f1f5f9;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  padding: 28px;
  display: flex;
  align-items: flex-start;
  text-align: left;
  gap: 20px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.08);
  }
`;

const IconWrapper = styled.div`
  background-color: #fdf8f6;
  color: #7f1d1d; /* Deep burgundy icon tint */
  padding: 14px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 1px solid #fae8e6;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  font-size: 17px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 6px;
`;

const CardDescription = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: #64748b;
  margin: 0;
`;