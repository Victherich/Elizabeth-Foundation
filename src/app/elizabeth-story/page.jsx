import React from 'react'
import ElizabethStoryHeroSection from '@/components/ElizabethStoryHeroSection'
import WhoWasElizabethSection from '@/components/WhoWasElizabethSection'
import ElizabethStorySection from '@/components/ElizabethStorySection'
import LifeFilledWithPromiseSection from '@/components/LifeFilledWithPromiseSection'  
import LegacyAndMemorialSection from '@/components/LegacyAndMemorialSection'
import LeaveTributeSection from '@/components/LeaveTributeSection'
import ElizabethLegacyLivesOnSection from '@/components/ElizabethLegacyLivesOnSection'
import LegacyClosingSection from '@/components/LegacyClosingSection'
import MemoriesGallerySection from '@/components/MemoriesGallerySection'

const page = () => {
  return (
    <div>
      <ElizabethStoryHeroSection />
      <WhoWasElizabethSection />
      <ElizabethStorySection />
      <LifeFilledWithPromiseSection />
      <LegacyAndMemorialSection />
      <LeaveTributeSection />
      <ElizabethLegacyLivesOnSection />
      <MemoriesGallerySection/>
      <LegacyClosingSection/>
    </div>
  )
}

export default page
