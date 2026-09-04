'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const GallerySection = () => {
  // Array of your gallery images (Update paths/filenames as needed)
  const galleryImages = [
    { src: '/g1.jpg', alt: 'Elizabeth Foundation - Memory 1' },
    { src: '/g2.jpg', alt: 'Elizabeth Foundation - Memory 2' },
    { src: '/g3.jpg', alt: 'Elizabeth Foundation - Memory 3' },
    { src: '/g4.jpg', alt: 'Elizabeth Foundation - Memory 4' },
    { src: '/g5.jpg', alt: 'Elizabeth Foundation - Memory 5' },
    { src: '/g6.jpg', alt: 'Elizabeth Foundation - Memory 6' },
    { src: '/g7.jpg', alt: 'Elizabeth Foundation - Memory 7' },
    { src: '/g8.jpg', alt: 'Elizabeth Foundation - Memory 8' },
    { src: '/g9.jpg', alt: 'Elizabeth Foundation - Memory 9' },
    { src: '/g10.jpg', alt: 'Elizabeth Foundation - Memory 10' },
    { src: '/g11.jpg', alt: 'Elizabeth Foundation - Memory 11' },
    { src: '/g12.jpg', alt: 'Elizabeth Foundation - Memory 12' },
    { src: '/g13.jpg', alt: 'Elizabeth Foundation - Memory 13' },
    { src: '/g14.jpg', alt: 'Elizabeth Foundation - Memory 14' },
    { src: '/g15.jpg', alt: 'Elizabeth Foundation - Memory 15' },
    { src: '/g16.jpg', alt: 'Elizabeth Foundation - Memory 16' },
    { src: '/g17.jpg', alt: 'Elizabeth Foundation - Memory 17' },
    { src: '/g18.jpg', alt: 'Elizabeth Foundation - Memory 18' },
    { src: '/g19.jpg', alt: 'Elizabeth Foundation - Memory 19' },
    { src: '/g20.jpg', alt: 'Elizabeth Foundation - Memory 20' },
    { src: '/g21.jpg', alt: 'Elizabeth Foundation - Memory 21' },
    { src: '/g22.jpg', alt: 'Elizabeth Foundation - Memory 22' },
    { src: '/g23.jpg', alt: 'Elizabeth Foundation - Memory 23' },
    { src: '/g24.jpg', alt: 'Elizabeth Foundation - Memory 24' },
    { src: '/g25.jpg', alt: 'Elizabeth Foundation - Memory 25' },
    { src: '/g26.jpg', alt: 'Elizabeth Foundation - Memory 26' },
    { src: '/g27.jpg', alt: 'Elizabeth Foundation - Memory 27' },
    { src: '/g28.jpg', alt: 'Elizabeth Foundation - Memory 28' },
    { src: '/g29.jpg', alt: 'Elizabeth Foundation - Memory 29' },
    { src: '/g30.jpg', alt: 'Elizabeth Foundation - Memory 30' },
    {src: '/g31.jpg', alt: 'Elizabeth Foundation - Memory 31' },
    {src: '/g32.jpg', alt: 'Elizabeth Foundation - Memory 32' },
    {src: '/g33.jpg', alt: 'Elizabeth Foundation - Memory 33' },
    {src: '/g34.jpg', alt: 'Elizabeth Foundation - Memory 34' },
    {src: '/g35.jpg', alt: 'Elizabeth Foundation - Memory 35' },
    {src: '/g36.jpg', alt: 'Elizabeth Foundation - Memory 36' },
    {src: '/g37.jpg', alt: 'Elizabeth Foundation - Memory 37' },
    {src: '/g38.jpg', alt: 'Elizabeth Foundation - Memory 38' },
    {src: '/g39.jpg', alt: 'Elizabeth Foundation - Memory 39' },
    {src: '/g40.jpg', alt: 'Elizabeth Foundation - Memory 40' },
    {src: '/g41.jpg', alt: 'Elizabeth Foundation - Memory 41' },
    {src: '/g42.jpg', alt: 'Elizabeth Foundation - Memory 42' },
    {src: '/g43.jpg', alt: 'Elizabeth Foundation - Memory 43' },
    {src: '/g44.jpg', alt: 'Elizabeth Foundation - Memory 44' },
    {src: '/g45.jpg', alt: 'Elizabeth Foundation - Memory 45' },
  {src: '/g46.jpg', alt: 'Elizabeth Foundation - Memory 46' },
  ];

  const [activeImage, setActiveImage] = useState(null);

  return (
    <SectionContainer id="gallery">
      <SectionContentWrapper>
        {/* Section Header */}
        <SubHeading>MOMENTS & MEMORIES</SubHeading>
        <MainHeading>Gallery</MainHeading>
        <DividerLine />
        <SectionDescription>
          Tap any image to view it in full
        </SectionDescription>

        {/* Gallery Grid */}
        <GalleryGrid>
          {galleryImages.map((img, index) => (
            <ImageCard key={index} onClick={() => setActiveImage(img.src)}>
              <Image 
                src={img.src} 
                alt={img.alt} 
                width={400} 
                height={400} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </ImageCard>
          ))}
        </GalleryGrid>
      </SectionContentWrapper>

      {/* Lightbox Modal for Full View */}
      {activeImage && (
        <LightboxOverlay onClick={() => setActiveImage(null)}>
          <LightboxContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setActiveImage(null)}>&times;</CloseButton>
            <Image 
              src={activeImage} 
              alt="Full size preview" 
              width={900} 
              height={900} 
              style={{ width: '100%', height: 'auto', maxHeight: '85vh', objectFit: 'contain', borderRadius: '8px' }}
            />
          </LightboxContent>
        </LightboxOverlay>
      )}
    </SectionContainer>
  );
};

export default GallerySection;

// --- Styled Components ---

const SectionContainer = styled.section`
  background-color: #ffffff; /* Clean white background */
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
  color: #c29b38; /* Gold accent */
  letter-spacing: 1.5px;
  margin-bottom: 8px;
`;

const MainHeading = styled.h2`
  font-size: 36px;
  font-weight: 800;
  color: #611317; /* Deep burgundy header */
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

const DividerLine = styled.div`
  width: 50px;
  height: 3px;
  background-color: #c29b38;
  margin-bottom: 12px;
  border-radius: 2px;
`;

const SectionDescription = styled.p`
  font-size: 13.5px;
  color: #64748b;
  margin-bottom: 40px;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;

  @media (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;

const ImageCard = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  background-color: #f8fafc;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  img {
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);

    img {
      transform: scale(1.04);
    }
  }
`;

const LightboxOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
`;

const LightboxContent = styled.div`
  position: relative;
  max-width: 850px;
  width: 100%;
  background: #ffffff;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
`;

const CloseButton = styled.button`
  position: absolute;
  top: -14px;
  right: -14px;
  background: #611317;
  color: #ffffff;
  border: 2px solid #ffffff;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  font-size: 22px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  z-index: 1010;
  transition: background 0.2s ease;

  &:hover {
    background: #7f1d1d;
  }
`;