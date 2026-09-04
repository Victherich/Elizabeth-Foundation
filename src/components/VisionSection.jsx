'use client';

import React from 'react';
import styled from 'styled-components';
import { Utensils, GraduationCap, HeartPulse, Scale, ShieldAlert, Stethoscope, Droplet } from 'lucide-react';

const VisionSection = () => {
  const visionItems = [
    {
      number: '1',
      icon: <Utensils size={18} />,
      title: 'Community Food Bank',
      description: 'Establish a food bank to provide food support for vulnerable families and individuals within the community.',
    },
    {
      number: '2',
      icon: <GraduationCap size={18} />,
      title: 'Youth Skills & Education Hub',
      description: 'Practical and educational workshops for young people — makeup artistry, fashion, IT, carpentry, electrical, drama, dancing, mathematics, English, and foundation to GCSE education.',
    },
    {
      number: '3',
      icon: <HeartPulse size={18} />,
      title: 'Sexual & Reproductive Health Education',
      description: 'Monthly sex education lectures, sanitary pads distribution, condom distribution, family-planning and reproductive health education.',
    },
    {
      number: '4',
      icon: <Scale size={18} />,
      title: 'Child Rights & Human Rights Awareness',
      description: 'Community education focused on child rights, child protection, Child Act awareness, human rights, safeguarding and knowing how to seek help.',
    },
    {
      number: '5',
      icon: <Stethoscope size={18} />,
      title: "Children's Immunisation Support",
      description: 'Supporting children\'s access to appropriate immunisation and health information, covering children from approximately 3 months to 16 years.',
    },
    {
      number: '6',
      icon: <ShieldAlert size={18} />,
      title: 'Elderly Healthcare Support',
      description: 'Expanding our elderly programme beyond financial assistance to develop stronger healthcare support and community-based assistance for older people.',
    },
    {
      number: '7',
      icon: <Droplet size={18} />,
      title: 'Expanded Sickle Cell Programme',
      description: 'Increased sickle cell awareness — education, prevention, early recognition of crisis symptoms, support for families and encouraging appropriate medical care.',
    },
  ];

  return (
    <VisionContainer id="vision">
      <VisionContentWrapper>
        {/* Section Header */}
        <SubHeading>OUR NEXT CHAPTER</SubHeading>
        <MainHeading>Our Vision for the Next Decade</MainHeading>
        <DividerLine />

        <DescriptionText>
          As we celebrate 10 years, we are preparing to expand and establish stronger, sustainable <br />
          community support systems.
        </DescriptionText>

        {/* Vision List Stack */}
        <ListContainer>
          {visionItems.map((item, index) => (
            <VisionCard key={index}>
              <BadgeWrapper>
                <NumberBadge>{item.number}</NumberBadge>
              </BadgeWrapper>
              <CardContent>
                <CardHeader>
                  <IconWrapper>{item.icon}</IconWrapper>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </VisionCard>
          ))}
        </ListContainer>
      </VisionContentWrapper>
    </VisionContainer>
  );
};

export default VisionSection;

// --- Styled Components ---

const VisionContainer = styled.section`
  background-color: #ffffff;
  width: 100%;
  padding: 90px 20px;
  display: flex;
  justify-content: center;
`;

const VisionContentWrapper = styled.div`
  max-width: 950px;
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

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const VisionCard = styled.div`
  position: relative;
  background: #ffffff;
  border: 1px solid #f1f5f9;
  box-shadow: 0 8px 20px -4px rgba(0, 0, 0, 0.04), 0 4px 6px -2px rgba(0, 0, 0, 0.02);
  border-radius: 12px;
  padding: 22px 28px;
  display: flex;
  align-items: center;
  text-align: left;
  gap: 24px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  /* Left accent border matching the image style */
  border-left: 5px solid #611317;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 25px -5px rgba(0, 0, 0, 0.07);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

const BadgeWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

const NumberBadge = styled.div`
  width: 32px;
  height: 32px;
  background-color: #7f1d1d;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 4px;
`;

const IconWrapper = styled.div`
  color: #7f1d1d;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: #1e293b;
`;

const CardDescription = styled.p`
  font-size: 13.5px;
  line-height: 1.5;
  color: #64748b;
  margin: 0;
`;