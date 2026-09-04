'use client';

import React from 'react';
import styled from 'styled-components';

const StorySection = () => {
  return (
    <StoryContainer id="story">
      <StoryContentWrapper>
        
        {/* Card 1: The Story Behind Elizabeth Foundation SS */}
        <ContentCard>
          <CardTitle>The Story Behind Elizabeth Foundation SS</CardTitle>
          <CardText>
            Elizabeth Foundation SS was born from the life and loss of my first child, Elizabeth Ajani-Adeyemo, lovingly known as "Blue Bird."
          </CardText>
          <CardText>
            Elizabeth was a beautiful, brilliant and exceptionally sweet child. She smiled all the time. She was gentle, loving and never gave me a reason to scream or shout at her. She was more than my daughter — she was my best friend.
          </CardText>
          <CardText>
            Elizabeth was born with sickle cell anaemia. On 21 March 2017, Elizabeth sadly passed away at Basildon Hospital after approximately 10 hours, following a medical emergency involving sickle cell complications and inadequate access to the blood and medical care she needed.
          </CardText>
          <CardText>
            Her death changed my life forever. I made a vow that no child should be left without proper care, support, education or access to the right information within their community. That vow became the foundation of Elizabeth Foundation SS.
          </CardText>
        </ContentCard>

        {/* Card 2: Who Was Blue Bird? */}
        <ContentCard>
          <CardTitle>Who Was Blue Bird?</CardTitle>
          <CardText>
            Elizabeth&apos;s nursery school gave her the nickname &quot;Blue Bird.&quot; She loved the colour blue deeply and dreamed of wearing a beautiful blue outfit for her prom day. Sadly, she never had the opportunity to fulfil that dream.
          </CardText>
          <CardText>
            Elizabeth&apos;s father comes from a royal lineage, and Elizabeth was an Ibadan girl and a royal princess. After nine years of serving and making an impact, we believe it is time to bring her vision back to the community she came from.
          </CardText>
          <HighlightText>
            &quot;Blue Bird Is Coming Home.&quot;
          </HighlightText>
          <CardText>
            Her story will not end with her death. Her story continues through every child we support, every family we help, every young person we empower and every life we touch.
          </CardText>
        </ContentCard>

        {/* Bottom Slogan Badge */}
        <SloganCard>
          <SloganQuote>&quot;A Happy Mind Will Raise a Happy Child.&quot;</SloganQuote>
          <SloganAuthor>Elizabeth Foundation SS Organisational Slogan</SloganAuthor>
        </SloganCard>

      </StoryContentWrapper>
    </StoryContainer>
  );
};

export default StorySection;

// --- Styled Components ---

const StoryContainer = styled.section`
  background-color: #611317; /* Deep burgundy background matching your page */
  width: 100%;
  padding: 80px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StoryContentWrapper = styled.div`
  max-width: 850px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`;

const ContentCard = styled.div`
  background: rgba(85, 15, 18, 0.75); /* Slightly lighter translucent burgundy panel */
  border: 1px solid rgba(229, 184, 76, 0.2); /* Subtle gold border frame */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 40px;
  width: 100%;
  text-align: left;

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

const CardTitle = styled.h2`
  font-size: 22px;
  font-weight: 700;
  color: #e5b84c; /* Gold accent header */
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 19px;
  }
`;

const CardText = styled.p`
  font-size: 15px;
  line-height: 1.7;
  color: #f1f5f9;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const HighlightText = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #e5b84c;
  margin: 16px 0;
`;

const SloganCard = styled.div`
  background-color: #e5b84c; /* Solid gold badge container */
  color: #3b090c;
  width: 100%;
  max-width: 600px;
  padding: 24px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  margin-top: 10px;
`;

const SloganQuote = styled.h3`
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 6px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SloganAuthor = styled.p`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
  opacity: 0.85;
  text-transform: uppercase;
`;