'use client';

import React from 'react';
import styled from 'styled-components';

const FoundationFormsSection = () => {
  return (
    <SectionContainer id="forms">
      <SectionContentWrapper>
        {/* Section Header */}
        <SubHeading>OFFICIAL DOCUMENTS</SubHeading>
        <MainHeading>Foundation Forms</MainHeading>
        <DividerLine />
        <SectionDescription>
          Access our official forms to apply for assistance or register as a member. Click to open or download the PDF.
        </SectionDescription>

        {/* Forms Grid */}
        <FormsGrid>
          {/* Card 1: Welfare Form */}
          <FormCard variant="burgundy">
            <CardHeader>
              <IconBox variant="burgundy">📄</IconBox>
              <div>
                <CardTitle>Welfare & Beneficiary Assistance Application Form</CardTitle>
                <CardSubtitle>Oyo State (Ibadan) and Lagos State Operations</CardSubtitle>
              </div>
            </CardHeader>

            <CardBody>
              Apply for welfare support including child school fees assistance, elderly care monthly allowance, widow support, single parent relief, youth empowerment, and food bank relief.
            </CardBody>

            <SectionsTitle>FORM SECTIONS</SectionsTitle>
            <SectionsList>
              <li>Section A: Applicant / Parent / Guardian Information</li>
              <li>Section B: Sector Assistance Requested</li>
              <li>Section C: Applicant / Dependent Medical Details</li>
              <li>Section D: Child School Fees Assistance (Ages 2-18)</li>
              <li>Section E: Elderly Client Monthly Allowance & Bank Details</li>
              <li>Section F: Terms, Conditions & Legal Declaration</li>
              <li>Section G: Undertaking & Signatories</li>
            </SectionsList>

            <CardButtonsRow>
              <OpenButton 
                variant="burgundy" 
                href="/3ee79bb32_Elizabeth_Foundation_Forms_CORRECTED_Combined.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span>↗</span> Open Form
              </OpenButton>
              <DownloadButton 
                href="/3ee79bb32_Elizabeth_Foundation_Forms_CORRECTED_Combined.pdf" 
                download="Welfare_Application_Form.pdf"
              >
                <span>📥</span> Download
              </DownloadButton>
            </CardButtonsRow>
          </FormCard>

          {/* Card 2: Membership Form */}
          <FormCard variant="gold">
            <CardHeader>
              <IconBox variant="gold">👥</IconBox>
              <div>
                <CardTitle>Official Membership Registration Form</CardTitle>
                <CardSubtitle>Oyo State (Ibadan) and Lagos State Operations</CardSubtitle>
              </div>
            </CardHeader>

            <CardBody>
              Become a registered member of The Elizabeth Foundation SS and join our network of advocates, patients, and volunteers working together for sickle cell awareness.
            </CardBody>

            <SectionsTitle>FORM SECTIONS</SectionsTitle>
            <SectionsList>
              <li>Section 1: Member Personal Profile</li>
              <li>Section 2: Membership Category &amp; Sector Interest</li>
              <li>Section 3: Health &amp; Medical Background</li>
              <li>Section 4: Constitutional Rules &amp; Terms of Membership</li>
              <li>Section 5: Undertaking &amp; Signatures</li>
            </SectionsList>

            <CardButtonsRow>
              <OpenButton 
                variant="gold" 
                href="/3ee79bb32_Elizabeth_Foundation_Forms_CORRECTED_Combined2.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span>↗</span> Open Form
              </OpenButton>
              <DownloadButton 
                href="/3ee79bb32_Elizabeth_Foundation_Forms_CORRECTED_Combined2.pdf" 
                download="Membership_Registration_Form.pdf"
              >
                <span>📥</span> Download
              </DownloadButton>
            </CardButtonsRow>
          </FormCard>
        </FormsGrid>

        {/* Bottom Comprehensive Banner */}
        <CompleteBanner>
          <BannerText>Need all forms in one document?</BannerText>
          <BannerButton 
            href="/3ee79bb32_Elizabeth_Foundation_Forms_CORRECTED_Combined3.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <span>📄</span> View Complete Forms PDF
          </BannerButton>
        </CompleteBanner>

      </SectionContentWrapper>
    </SectionContainer>
  );
};

export default FoundationFormsSection;

// --- Styled Components ---

const SectionContainer = styled.section`
  background-color: #ffffff;
  width: 100%;
  padding: 90px 20px;
  display: flex;
  justify-content: center;
`;

const SectionContentWrapper = styled.div`
  max-width: 1000px;
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
  margin-bottom: 45px;
  line-height: 1.6;
`;

const FormsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  width: 100%;
  margin-bottom: 30px;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;

const FormCard = styled.div`
  background: ${(props) => (props.variant === 'burgundy' ? '#fffbfb' : '#fffdf5')};
  border: 1px solid ${(props) => (props.variant === 'burgundy' ? '#f5d0d0' : '#fef08a')};
  border-top: 5px solid ${(props) => (props.variant === 'burgundy' ? '#7f1d1d' : '#eab308')};
  border-radius: 12px;
  padding: 30px;
  text-align: left;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.04);

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

const CardHeader = styled.div`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  margin-bottom: 16px;
`;

const IconBox = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: ${(props) => (props.variant === 'burgundy' ? '#fee2e2' : '#fef9c3')};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  flex-shrink: 0;
`;

const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 4px;
  line-height: 1.4;
`;

const CardSubtitle = styled.span`
  font-size: 12px;
  color: #64748b;
  font-weight: 500;
`;

const CardBody = styled.p`
  font-size: 13.5px;
  color: #475569;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const SectionsTitle = styled.h4`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #94a3b8;
  margin-bottom: 10px;
`;

const SectionsList = styled.ul`
  list-style-type: disc;
  padding-left: 18px;
  margin-bottom: 30px;
  flex-grow: 1;

  li {
    font-size: 12.5px;
    color: #334155;
    margin-bottom: 6px;
    line-height: 1.4;
  }
`;

const CardButtonsRow = styled.div`
  display: flex;
  gap: 12px;
  margin-top: auto;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const OpenButton = styled.a`
  flex: 1.5;
  background-color: ${(props) => (props.variant === 'burgundy' ? '#7f1d1d' : '#ca8a04')};
  color: #ffffff;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 13.5px;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }

  span {
    font-size: 15px;
  }
`;

const DownloadButton = styled.a`
  flex: 1;
  background-color: #ffffff;
  color: #334155;
  border: 1px solid #cbd5e1;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 13.5px;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  transition: background 0.2s ease;

  &:hover {
    background-color: #f8fafc;
  }
`;

const CompleteBanner = styled.div`
  background-color: #7f1d1d;
  border-radius: 12px;
  padding: 24px 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 10px 25px rgba(127, 29, 29, 0.2);

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
`;

const BannerText = styled.h4`
  font-size: 15px;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
`;

const BannerButton = styled.a`
  background-color: #eab308;
  color: #611317;
  padding: 12px 22px;
  border-radius: 30px;
  font-size: 13.5px;
  font-weight: 800;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 12px rgba(234, 179, 8, 0.3);
  transition: background 0.2s ease;

  &:hover {
    background-color: #facc15;
  }
`;