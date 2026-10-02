import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';
import LandingProductsSection from '@/components/LandingProductsSection';
import Link from 'next/link';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import HeroSection2 from '@/components/Hero';
import LandingPageComponent from '@/components/LandingPageComponent';
import TestimonialsSection from '@/components/TestimonialSection';
import AboutSection from '@/components/AboutSection';
import BlueBirdMemorial from '@/components/BlueBirdMemorial';
import StorySection from '@/components/StorySection';
import ImpactSection from '@/components/ImpactSection';
import VisionSection from '@/components/VisionSection';
import EventsSection from '@/components/EventsSection';
import AnniversaryFlyerSection from '@/components/AnniversaryFlyerSection';
import MiniClinicSection from '@/components/MiniClinicSection';
import TeamSection from '@/components/TeamSection';
import FounderSection from '@/components/FounderSection';
import FounderMessageSection from '@/components/FounderMessageSection';
import FundraisingSection from '@/components/FundraisingSection';
import GallerySection from '@/components/GallerySection';
import FoundationFormsSection from '@/components/FoundationFormsSection';
import ContactUsSection from '@/components/ContactUsSection';
import ReviewsSection from '@/components/ReviewsSection';
import AnnouncementsSection from '@/components/AnnouncementsSection';




export default function CompleteLandingPage() {
 



  
  return (
    <>
    <HeroSection2/>
    <AboutSection/>
    <AnnouncementsSection/>
<BlueBirdMemorial/>
<StorySection/>
<ImpactSection/>
<VisionSection/>
<EventsSection/>
<AnniversaryFlyerSection/>
<MiniClinicSection/>
<TeamSection/>
<FounderSection/>
<FounderMessageSection/>
<FundraisingSection/>
<GallerySection/>
<FoundationFormsSection/>
<ReviewsSection/>
<ContactUsSection/>
    </>

  );
}