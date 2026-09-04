'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const FounderSection = () => {
  return (
    <FounderContainer id="founder">
      <FounderContentWrapper>
        {/* Section Header */}
        <SubHeading>OUR LEADER</SubHeading>
        <MainHeading>About the Founder</MainHeading>
        <DividerLine />

        {/* Founder Photo & Tag */}
        <PhotoCardWrapper>
          <PhotoFrame>
            <Image 
              src="/im8.jpg" 
              alt="Ms. Omowonuola Oyebode" 
              width={260} 
              height={320} 
              priority
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </PhotoFrame>
          <NameTag>Ms. Omowonuola Oyebode</NameTag>
        </PhotoCardWrapper>

        {/* Top Highlight Credentials Box */}
        <CredentialsBox>
          SNR Barrister, called to the UK Bar in 2006. Human Rights Law Advocate since 2017. Deputy Secretary of APC UK Caucus. Stakeholder APC Oyo State South East and North, Ward 2 Oranyan, Ibadan. Legal Practitioner & Public Servant | Advocate for Youth, Women & Community Development | LL.M, Esq.
        </CredentialsBox>

        {/* Main Bio Paragraph */}
        <MainBioText>
          Ms Omowonuola Oyebode is a British-qualified barrister with a strong foundation in international legal practice and a commitment to judicial excellence, with dedicated family responsibilities. She practices family, immigration and criminal law in the UK. She moved to the UK with her mother when she was 8 years old and has lived all her life in the UK, but remains very connected to her roots.
        </MainBioText>

        {/* Certifications Paragraph */}
        <CertificationsText>
          She holds a Mental Health & Social Care / Healthcare certificate covering: Lone Working; Mental Health, Dementia & Learning Disabilities; Transferable & CV Skills; Awareness; Duty of Care; End of Life Care; Principles and Values in Health and Social Care; PFF and Candid Updates / Promoting Yourself and Others; Handling Information; Health & Safety; Activities in Care; Privacy & Dignity; Use of Language in Care; Customer Services in Care; Volunteering in Care; Mental Health and Recognising Your Own Mental Health; Stress, Anxiety and the Return to Work; and Balls for Care — Myth Busting Value Based.
        </CertificationsText>

        {/* Cultural Heritage & Public Service Card */}
        <HeritageBox>
          <HeritageTitle>Cultural Heritage & Public Service</HeritageTitle>
          <p>
            My roots in Ibadan run deep, spanning generations of proud ancestry from the historic Ile-Tapa, Oja-Oba, Agbeni, and Oranyan areas. As a proud descendant of the historic Ile Adeepo Compound, I carry forward our family&apos;s enduring legacy of courage and excellence.
          </p>
          <p>
            Politically and socially, I am deeply committed to promoting good governance, accountability, youth empowerment, women&apos;s inclusion, and sustainable community development within Ward 1 (C1), Ibadan South-East Local Government Area, and the wider Oyo South Senatorial District.
          </p>
        </HeritageBox>

        {/* Academic & Professional Background Section */}
        <AcademicSection>
          <AcademicTitle>Academic & Professional Background</AcademicTitle>
          <AcademicList>
            <li>
              <span>•</span> <strong>Master of Laws (LL.M)</strong> — Advanced legal frameworks & research
            </li>
            <li>
              <span>•</span> <strong>Bachelor of Laws (LL.B)</strong> — University of Essex
            </li>
            <li>
              <span>•</span> <strong>Bachelor of Science (B.Sc.) in Biochemistry</strong> — University of Greenwich
            </li>
            <li>
              <span>•</span> <strong>Call to the Bar</strong>: October 2006
            </li>
          </AcademicList>
        </AcademicSection>

        {/* Footer Affiliation Note */}
        <FooterNote>
          APC Women for Children, Elderly & Widows (South & North, London), Oyo State · Young Professional for Tinubu · Business Women of Influence for Renewed Hope Agenda (BWI-RHA) PMC Committee · Welfare & Hospitality Committee · BWI-RHA Finance Committee Team.
        </FooterNote>

      </FounderContentWrapper>
    </FounderContainer>
  );
};

export default FounderSection;

// --- Styled Components ---

const FounderContainer = styled.section`
  background-color: #ffffff; /* Clean white background */
  width: 100%;
  padding: 90px 20px;
  display: flex;
  justify-content: center;
`;

const FounderContentWrapper = styled.div`
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
  margin-bottom: 40px;
  border-radius: 2px;
`;

const PhotoCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

const PhotoFrame = styled.div`
  width: 220px;
  height: 270px;
  border-radius: 14px;
  overflow: hidden;
  border: 3px solid #c29b38; /* Gold border framing */
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  background-color: #f8fafc;
  margin-bottom: -14px;
  z-index: 2;
`;

const NameTag = styled.div`
  background-color: #7f1d1d; /* Deep burgundy badge */
  color: #ffffff;
  font-size: 11px;
  font-weight: 700;
  padding: 5px 16px;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
  z-index: 3;
  letter-spacing: 0.3px;
`;

const CredentialsBox = styled.div`
  background-color: #fafaf9;
  border: 1px solid #e7e5e4;
  border-left: 4px solid #7f1d1d;
  border-radius: 8px;
  padding: 20px;
  font-size: 13.5px;
  line-height: 1.6;
  color: #44403c;
  text-align: left;
  width: 100%;
  margin-bottom: 24px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.02);
`;

const MainBioText = styled.p`
  font-size: 14px;
  line-height: 1.7;
  color: #475569;
  text-align: left;
  width: 100%;
  margin-bottom: 16px;
`;

const CertificationsText = styled.p`
  font-size: 13px;
  line-height: 1.7;
  color: #64748b;
  text-align: left;
  width: 100%;
  margin-bottom: 30px;
`;

const HeritageBox = styled.div`
  background-color: #fffbeb; /* Soft warm gold tint background */
  border: 1px solid #fde68a;
  border-radius: 12px;
  padding: 24px;
  text-align: left;
  width: 100%;
  margin-bottom: 30px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.02);

  p {
    font-size: 13.5px;
    line-height: 1.7;
    color: #78350f;
    margin-bottom: 12px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const HeritageTitle = styled.h3`
  font-size: 17px;
  font-weight: 800;
  color: #b45309;
  margin-bottom: 12px;
`;

const AcademicSection = styled.div`
  width: 100%;
  text-align: left;
  margin-bottom: 24px;
`;

const AcademicTitle = styled.h3`
  font-size: 17px;
  font-weight: 800;
  color: #611317;
  margin-bottom: 14px;
`;

const AcademicList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;

  li {
    font-size: 13.5px;
    color: #475569;
    line-height: 1.5;

    span {
      color: #c29b38;
      font-weight: bold;
      margin-right: 6px;
    }

    strong {
      color: #1e293b;
    }
  }
`;

const FooterNote = styled.p`
  font-size: 11.5px;
  line-height: 1.6;
  color: #94a3b8;
  text-align: left;
  width: 100%;
  border-top: 1px solid #f1f5f9;
  padding-top: 20px;
  margin-top: 10px;
`;