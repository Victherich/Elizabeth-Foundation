'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const TeamSection = () => {
  const teamMembers = [
    {
      role: 'Founder',
      name: 'Miss Omowonuola Oyebode',
      subtitle: 'SNR Barrister · LLM, Esq. · Human Rights Advocate',
      bio: 'British-qualified barrister with a strong foundation in international legal practice and a commitment to judicial excellence. Human Rights Law Advocate since 2017, Deputy Secretary of APC UK Caucus, and Stakeholder APC Oyo State South East & North (Ward 2 Oranyan, Ibadan). She established Elizabeth Foundation SS in memory of her daughter Elizabeth, and has personally funded and led the Foundation’s community programmes across Nigeria for nine years.',
      image: '/im5.jpg', // Replace with your actual image path
    },
    {
      role: 'Project Manager',
      name: 'Oluwasefunmi Omotosho Adedeji',
      subtitle: 'Therapist, Food Technologist & Advocate',
      bio: 'Oluwasefunmi Omotosho Adedeji is a passionate therapist, Food Technologist, and advocate for women’s growth and mental well-being. She is the CEO of Collegio Edutech Solutions and the founder of We-Listen, a platform dedicated to providing emotional support, mental health awareness, and safe spaces for people to be heard and understood. Driven by a deep passion for helping others thrive, she is committed to empowering women to see possibilities beyond the walls of their homes — supporting women in rediscovering themselves, pursuing their dreams, and building meaningful careers. She is also deeply passionate about raising confident and purposeful girls. Beyond her professional work, Oluwasefunmi is a devoted wife and a proud mother of two boys.',
      image: '/im6.png', // Replace with your actual image path
    },
    {
      role: 'Clinical Consultant',
      name: 'Nwokoma Omolola Folake',
      subtitle: 'M.Sc Clinical Pharmacy (University of Lagos)',
      bio: 'Omolola Folake Nwokoma is a highly experienced clinical pharmacist with over two decades of pharmaceutical practice. She holds an M.Sc in Clinical Pharmacy from the University of Lagos and a B.Pharm (Hons) from the University of Benin. She brings deep expertise in medication therapy management, patient education, and healthcare team collaboration. She is a member of the Pharmaceutical Society of Nigeria (PSN), the American Association of Health-Systems Pharmacists (MASHP), the Federation of International Pharmacists (FIP), and the Commonwealth Pharmacist Association (CPA).',
      image: '/im7.png', // Replace with your actual image path
    },
  ];

  return (
    <TeamContainer id="team">
      <TeamContentWrapper>
        {/* Section Header */}
        <SubHeading>THE PEOPLE BEHIND THE WORK</SubHeading>
        <MainHeading>Our Project Team</MainHeading>
        <DividerLine />

        {/* Team Cards Stack */}
        <CardsList>
          {teamMembers.map((member, index) => (
            <TeamCard key={index}>
              <ImageWrapper>
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  width={220} 
                  height={220} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </ImageWrapper>
              <CardContent>
                <RoleBadge>{member.role}</RoleBadge>
                <MemberName>{member.name}</MemberName>
                <MemberSubtitle>{member.subtitle}</MemberSubtitle>
                <MemberBio>{member.bio}</MemberBio>
              </CardContent>
            </TeamCard>
          ))}
        </CardsList>
      </TeamContentWrapper>
    </TeamContainer>
  );
};

export default TeamSection;

// --- Styled Components ---

const TeamContainer = styled.section`
  background-color: #ffffff; /* Clean white background */
  width: 100%;
  padding: 90px 20px;
  display: flex;
  justify-content: center;
`;

const TeamContentWrapper = styled.div`
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
  color: #c29b38; /* Gold accent color */
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
  margin-bottom: 50px;
  border-radius: 2px;
`;

const CardsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

const TeamCard = styled.div`
  background: #ffffff;
  border: 1px solid #f1f5f9;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.04);
  border-radius: 14px;
  padding: 24px;
  display: flex;
  align-items: flex-start;
  text-align: left;
  gap: 24px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.08);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const ImageWrapper = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 10px;
  overflow: hidden;
  flex-shrink: 0;
  border: 1px solid #e2e8f0;
  background-color: #f8fafc;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 240px;
    height: 240px;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const RoleBadge = styled.div`
  background-color: #7f1d1d; /* Deep burgundy badge tone */
  color: #ffffff;
  font-size: 11px;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 20px;
  width: fit-content;
  margin-bottom: 8px;
  letter-spacing: 0.3px;

  @media (max-width: 768px) {
    margin: 0 auto 8px auto;
  }
`;

const MemberName = styled.h3`
  font-size: 18px;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 2px;
`;

const MemberSubtitle = styled.h4`
  font-size: 12.5px;
  font-weight: 600;
  color: #b45309; /* Warm gold-brown */
  margin-bottom: 12px;
`;

const MemberBio = styled.p`
  font-size: 13.5px;
  line-height: 1.6;
  color: #64748b;
  margin: 0;
`;