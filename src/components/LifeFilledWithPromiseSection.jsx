'use client';

import React from 'react';
import styled from 'styled-components';

export default function LifeFilledWithPromiseSection() {
  const promiseItems = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      title: "Young Governor",
      description: "Elizabeth became a Young Governor for Basildon Council."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
        </svg>
      ),
      title: "Award Recipient",
      description: "She received recognition for her achievements as a student."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          <path d="M12 6v8" />
          <path d="M8 10h8" />
        </svg>
      ),
      title: "Writer & Poet",
      description: "Elizabeth loved writing poetry and expressing herself through words."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
          <path d="M16 13H8" />
          <path d="M16 17H8" />
          <path d="M10 9H8" />
        </svg>
      ),
      title: "Published Author",
      description: "At just ten years old, Elizabeth had already written a book that was sold at WHSmith."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.04 3 5.5l7 7Z" />
        </svg>
      ),
      title: "Future Doctor",
      description: "She dreamed of becoming a doctor."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
        </svg>
      ),
      title: "A Loving Daughter",
      description: "She was deeply loved by her family and especially shared a close bond with her mother."
    }
  ];

  const joysItems = [
    "She loved to smile.",
    "She loved her friends.",
    "She loved her family.",
    "She loved to write.",
    "She loved learning.",
    "She dreamed of becoming a doctor.",
    "She loved life."
  ];

  return (
    <SectionWrapper>
      <Container>
        {/* Section 1: A Life Filled With Promise */}
        <HeaderBlock>
          <SubHeader>HER PROMISE</SubHeader>
          <Title>A Life Filled With Promise</Title>
          <GoldDivider />
        </HeaderBlock>

        <CardsGrid>
          {promiseItems.map((item, index) => (
            <PromiseCard key={index}>
              <IconWrapper>{item.icon}</IconWrapper>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </PromiseCard>
          ))}
        </CardsGrid>

        {/* Section 2: She Loved Life */}
        <HeaderBlock style={{ marginTop: '100px' }}>
          <SubHeader>HER JOYS</SubHeader>
          <Title>She Loved Life</Title>
          <GoldDivider />
        </HeaderBlock>

        <JoysContainer>
          {joysItems.map((joy, index) => (
            <JoyBadge key={index} $position={index}>
              {joy}
            </JoyBadge>
          ))}
        </JoysContainer>
      </Container>
    </SectionWrapper>
  );
}

// --- Styled Components ---

const SectionWrapper = styled.section`
  width: 100%;
  background-color: #fffaf5;
  padding: 80px 20px;
  font-family: inherit;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 960px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 40px;
`;

const SubHeader = styled.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #b45309;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

const Title = styled.h2`
  font-size: 30px;
  font-weight: 800;
  color: #7f1d1d;
  margin: 0 0 16px 0;

  @media (min-width: 768px) {
    font-size: 36px;
  }
`;

const GoldDivider = styled.div`
  width: 48px;
  height: 3px;
  background-color: #d97706;
  border-radius: 2px;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  width: 100%;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const PromiseCard = styled.div`
  background-color: #ffffff;
  border: 1px solid #fde68a;
  border-radius: 12px;
  padding: 28px 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

const IconWrapper = styled.div`
  width: 36px;
  height: 36px;
  color: #9f1239;
  background-color: #fff1f2;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const CardTitle = styled.h3`
  font-size: 17px;
  font-weight: 700;
  color: #7f1d1d;
  margin: 0 0 10px 0;
`;

const CardDescription = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #64748b;
  margin: 0;
`;

const JoysContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 700px;
  margin-top: 10px;
`;

const JoyBadge = styled.div`
  background-color: #ffffff;
  border: 1px solid #fde68a;
  border-radius: 10px;
  padding: 16px 24px;
  font-size: 15px;
  font-weight: 600;
  color: #7f1d1d;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
  width: fit-content;

  /* Stagger alignment mimicking the design layout pattern */
  align-self: ${({ $position }) => {
    switch ($position % 4) {
      case 0: return 'flex-start';
      case 1: return 'flex-end';
      case 2: return 'flex-start';
      case 3: return 'flex-end';
      default: return 'flex-start';
    }
  }};

  @media (max-width: 640px) {
    align-self: flex-start !important;
    width: 100%;
  }
`;