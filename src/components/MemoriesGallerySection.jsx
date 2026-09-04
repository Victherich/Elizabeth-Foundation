'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

export default function MemoriesGallerySection() {
  // Array of gallery image items (replace paths and alt texts as needed)
const galleryImages = [
    { src: '/e1.jpg', alt: 'Elizabeth smiling' },
    { src: '/e2.jpg', alt: 'Elizabeth memory image' },
    { src: '/e3.jpg', alt: 'Elizabeth memory image' },
    { src: '/e4.jpg', alt: 'Elizabeth memory image' },
    { src: '/e5.jpg', alt: 'Elizabeth memory image' },
    { src: '/e6.jpg', alt: 'Elizabeth memory image' },
    { src: '/e7.jpg', alt: 'Elizabeth memory image' },
    { src: '/e8.jpg', alt: 'Elizabeth memory image' },
    { src: '/e9.jpg', alt: 'Elizabeth memory image' },
    { src: '/e10.jpg', alt: 'Elizabeth memory image' },
    { src: '/e11.jpg', alt: 'Elizabeth memory image' },
    { src: '/e12.jpg', alt: 'Elizabeth memory image' },
    { src: '/e13.jpg', alt: 'Elizabeth memory image' },
    { src: '/e14.jpg', alt: 'Elizabeth memory image' },
    { src: '/e15.jpg', alt: 'Elizabeth memory image' },
    { src: '/e16.jpg', alt: 'Elizabeth memory image' },
    { src: '/e17.jpg', alt: 'Elizabeth memory image' },
    { src: '/e18.jpg', alt: 'Elizabeth memory image' },
    { src: '/e19.jpg', alt: 'Elizabeth memory image' },
    { src: '/e20.jpg', alt: 'Elizabeth memory image' },
    { src: '/e21.jpg', alt: 'Elizabeth memory image' },
    { src: '/e22.jpg', alt: 'Elizabeth memory image' },
    { src: '/e23.jpg', alt: 'Elizabeth memory image' },
    { src: '/e24.jpg', alt: 'Elizabeth memory image' },
    { src: '/e25.jpg', alt: 'Elizabeth memory image' },
    { src: '/e26.jpg', alt: 'Elizabeth memory image' },
    { src: '/e27.jpg', alt: 'Elizabeth memory image' },
    { src: '/e28.jpg', alt: 'Elizabeth memory image' },
    { src: '/e29.jpg', alt: 'Elizabeth memory image' },
    { src: '/e30.jpg', alt: 'Elizabeth memory image' },
    { src: '/e31.jpg', alt: 'Elizabeth memory image' },
    { src: '/e32.jpg', alt: 'Elizabeth memory image' },
    { src: '/e33.jpg', alt: 'Elizabeth memory image' },
    { src: '/e34.jpg', alt: 'Elizabeth memory image' },
    { src: '/e35.jpg', alt: 'Elizabeth memory image' },
    { src: '/e36.jpg', alt: 'Elizabeth memory image' },
  ];

  return (
    <SectionWrapper>
      <Container>
        {/* Header Block */}
        <HeaderBlock>
          <SubHeader>CHERISHED MOMENTS</SubHeader>
          <Title>Memories We Carry</Title>
          <GoldDivider />
        </HeaderBlock>

        {/* Gallery Grid (2 columns on mobile, 4 columns on desktop) */}
        <GalleryGrid>
          {galleryImages.map((image, index) => (
            <ImageCard key={index}>
              <ImageInner>
                <Image 
                  src={image.src} 
                  alt={image.alt} 
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  style={{ objectFit: 'cover' }}
                />
              </ImageInner>
            </ImageCard>
          ))}
        </GalleryGrid>
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
  max-width: 1140px;
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
  font-size: 28px;
  font-weight: 800;
  color: #7f1d1d;
  margin: 0 0 16px 0;

  @media (min-width: 768px) {
    font-size: 34px;
  }
`;

const GoldDivider = styled.div`
  width: 48px;
  height: 3px;
  background-color: #d97706;
  border-radius: 2px;
`;

const GalleryGrid = styled.div`
  display: grid;
  /* Exactly 2 columns on mobile screens */
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  width: 100%;

  @media (min-width: 640px) {
    gap: 16px;
  }

  /* Expands to 4 columns on desktop screens */
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
`;

const ImageCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ImageInner = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1; /* Keeps images nicely squared like the preview */
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 3px solid #ffffff;
  background-color: #f1f5f9;
`;