'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

export default function ElizabethStorySection() {
  return (
    <SectionWrapper id="elizabeths-story">
      <Container>
        {/* Top Header */}
        <SubHeader>HER STORY</SubHeader>
        <Title>Elizabeth — My First Baby</Title>
        <QuoteSubtitle>&ldquo;My beautiful virgin baby.&rdquo;</QuoteSubtitle>

        {/* Narrative Paragraphs */}
        <Paragraph>
          Elizabeth was my first baby — my beautiful &ldquo;virgin baby.&rdquo;
        </Paragraph>

        <Paragraph>
          From the moment she was born, she was a peaceful, happy and loving child. She hardly cried as a baby. She smiled constantly and had a gentle personality that made people fall in love with her wherever she went.
        </Paragraph>

        <Paragraph>
          When we discovered that she could have sickle cell because both her father and I were AS, I made a decision immediately: whatever her genotype, I would love her, care for her and give her the best life I could.
        </Paragraph>

        {/* Mid Heading */}
        <MidHeading>And Elizabeth lived.</MidHeading>

        {/* 3 Highlight Cards */}
        <CardsRow>
          <HighlightCard>She lived with joy.</HighlightCard>
          <HighlightCard>She lived with love.</HighlightCard>
          <HighlightCard>She lived with purpose.</HighlightCard>
        </CardsRow>

        {/* More Narrative */}
        <Paragraph>
          She was brilliant academically and loved Mathematics and English. She dreamed of becoming a doctor. She became a Young Governor for Basildon Council and received an award recognising her achievements as a student.
        </Paragraph>

        <Paragraph>
          She was also a writer and poet. Elizabeth loved writing and had a passion for expressing herself through words. At just ten years old, she had already written a book that was sold at WHSmith.
        </Paragraph>

        {/* First Image */}
        <ImageWrapper>
          <ImageInner>
            <Image 
              src="/im13.jpg" /* Replace with your actual image path */
              alt="Elizabeth smiling outdoors" 
              fill
              sizes="(max-width: 768px) 100vw, 700px"
              style={{ objectFit: 'cover' }}
            />
          </ImageInner>
        </ImageWrapper>

        <Paragraph style={{ textAlign: 'center', color: '#64748b' }}>
          But beyond her achievements, Elizabeth was known for something even more special:
        </Paragraph>

        {/* Section: Her smile. */}
        <SmileSectionTitle>Her smile.</SmileSectionTitle>

        <Paragraph>
          She loved her friends and was always willing to help them. She loved her siblings. She loved her father. And she loved her Mummy.
        </Paragraph>

        <Paragraph>
          She was my daughter, but she was also my best friend.
        </Paragraph>

        <Paragraph>
          We went everywhere together. We talked about everything. She would come home from school and hug me. When she was at school, she would tell her teachers that she missed Mummy and wanted to go home.
        </Paragraph>

        {/* Second Image (Christmas Tree background) */}
        <ImageWrapper>
          <ImageInner>
            <Image 
              src="/im14.jpg" /* Replace with your actual image path */
              alt="Elizabeth near Christmas tree" 
              fill
              sizes="(max-width: 768px) 100vw, 700px"
              style={{ objectFit: 'cover' }}
            />
          </ImageInner>
        </ImageWrapper>

        {/* Ending statement */}
        <EndingStatement>
          Then, at just eleven years old, everything changed.
        </EndingStatement>
      </Container>
    </SectionWrapper>
  );
}

// --- Styled Components ---

const SectionWrapper = styled.section`
  width: 100%;
  background-color: #fffaf5; /* Warm off-white/cream background matching theme */
  padding: 80px 20px;
  font-family: inherit;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 740px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const SubHeader = styled.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #b45309;
  text-transform: uppercase;
  margin-bottom: 12px;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: #7f1d1d;
  line-height: 1.25;
  margin: 0 0 6px 0;

  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

const QuoteSubtitle = styled.p`
  font-size: 15px;
  font-style: italic;
  color: #94a3b8;
  margin: 0 0 40px 0;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: #475569;
  margin-bottom: 24px;
  text-align: left;
  width: 100%;

  @media (min-width: 768px) {
    text-align: center;
  }
`;

const MidHeading = styled.h3`
  font-size: 24px;
  font-weight: 800;
  color: #7f1d1d;
  margin: 30px 0 24px 0;
`;

const CardsRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  margin-bottom: 40px;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const HighlightCard = styled.div`
  background-color: #ffffff;
  border: 1px solid #fde68a;
  border-radius: 12px;
  padding: 16px 24px;
  font-size: 15px;
  font-weight: 700;
  color: #7f1d1d;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
  flex: 1;
  text-align: center;
`;

const ImageWrapper = styled.div`
  width: 100%;
  margin: 30px 0;
  display: flex;
  justify-content: center;
`;

const ImageInner = styled.div`
  position: relative;
  width: 100%;
  max-width: 680px;
  height: 380px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  border: 4px solid #ffffff;

  @media (min-width: 768px) {
    height: 440px;
  }
`;

const SmileSectionTitle = styled.h3`
  font-size: 28px;
  font-weight: 800;
  color: #7f1d1d;
  margin: 20px 0 24px 0;
`;

const EndingStatement = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #334155;
  margin-top: 20px;
  text-align: center;
  font-style: italic;
`;