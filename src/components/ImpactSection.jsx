'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Home, Smile, UserCheck, Backpack, Users, Gift, Droplet, Shirt } from 'lucide-react';

const ImpactSection = () => {
  const impactPrograms = [
    {
      icon: <Home size={22} />,
      title: 'Community Outreach',
      description: 'Regular outreach programmes supporting children, families and vulnerable members of the community.',
    },
    {
      icon: <Smile size={22} />,
      title: "Weekly Children's Outreach",
      description: 'Weekly engagement and outreach activities designed to support and educate children within the community.',
    },
    {
      icon: <UserCheck size={22} />,
      title: 'Elderly Support',
      description: 'Monthly financial allowances and support for elderly members of the community.',
    },
    {
      icon: <Backpack size={22} />,
      title: 'Back-to-School Support',
      description: 'Educational assistance, including school-fee support for 300 children, helping children remain in school.',
    },
    {
      icon: <Users size={22} />,
      title: 'Single-Mother Empowerment',
      description: 'Empowerment and support programmes for single mothers organised every three months.',
    },
    {
      icon: <Gift size={22} />,
      title: 'Christmas Support',
      description: 'Annual Christmas giveaways and support for members of the Foundation and the wider community.',
    },
    {
      icon: <Droplet size={22} />,
      title: 'Sickle Cell Awareness',
      description: 'Community awareness programmes educating families about sickle cell, crisis prevention and early intervention.',
    },
    {
      icon: <Shirt size={22} />,
      title: 'Clothing & Footwear Support',
      description: 'Distribution of clothing and shoes to children and vulnerable families.',
    },
  ];

  return (
    <ImpactContainer id="impact">
      <ImpactContentWrapper>
        {/* Section Header */}
        <SubHeading>OUR TRACK RECORD</SubHeading>
        <MainHeading>9 Years of Impact</MainHeading>
        <DividerLine />

        <DescriptionText>
          Over the past nine years, Elizabeth Foundation SS has served communities through these <br />
          key programmes.
        </DescriptionText>

        {/* Impact Cards Grid */}
        <CardsGrid>
          {impactPrograms.map((item, index) => (
            <Card key={index}>
              <IconWrapper>{item.icon}</IconWrapper>
              <CardContent>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </CardsGrid>

        {/* Bottom Featured Photo Banner */}
        <PhotoBannerCard>
          <ImageWrapper>
            <Image 
              src="/im2.jpg" 
              alt="Elizabeth Foundation SS - Community Outreach & Food Distribution" 
              width={1000} 
              height={400} 
              style={{ width: '100%', height: 'auto', display: 'block' }}
              priority
            />
          </ImageWrapper>
          <BannerCaption>
            Elizabeth Foundation SS — Community Outreach & Food Distribution
          </BannerCaption>
        </PhotoBannerCard>

      </ImpactContentWrapper>
    </ImpactContainer>
  );
};

export default ImpactSection;

// --- Styled Components ---

const ImpactContainer = styled.section`
  background-color: #ffffff; /* Clean white background */
  width: 100%;
  padding: 90px 20px;
  display: flex;
  justify-content: center;
`;

const ImpactContentWrapper = styled.div`
  max-width: 1050px;
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
  color: #611317; /* Deep burgundy */
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const DividerLine = styled.div`
  width: 50px;
  height: 3px;
  background-color: #c29b38;
  margin-bottom: 16px;
  border-radius: 2px;
`;

const DescriptionText = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: #475569;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: #ffffff;
  border: 1px solid #f1f5f9;
  box-shadow: 0 8px 20px -4px rgba(0, 0, 0, 0.04), 0 4px 6px -2px rgba(0, 0, 0, 0.02);
  border-radius: 14px;
  padding: 24px;
  display: flex;
  align-items: flex-start;
  text-align: left;
  gap: 18px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 25px -5px rgba(0, 0, 0, 0.07);
  }
`;

const IconWrapper = styled.div`
  background-color: #fdf8f6;
  color: #7f1d1d;
  padding: 12px;
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
  font-size: 16px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 6px;
`;

const CardDescription = styled.p`
  font-size: 13.5px;
  line-height: 1.5;
  color: #64748b;
  margin: 0;
`;

const PhotoBannerCard = styled.div`
  width: 100%;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  background-color: #ffffff;
`;

const ImageWrapper = styled.div`
  width: 100%;
  max-height: 450px;
  overflow: hidden;
`;

const BannerCaption = styled.div`
  background-color: #611317; /* Deep burgundy footer tag */
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  padding: 14px;
  text-align: center;
  letter-spacing: 0.3px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;