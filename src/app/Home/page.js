import Footer from '@/Components/Footer/Footer'
import AboutSection from '@/Components/HomeCom/AboutSection'
import AIShiftProgramSection from '@/Components/HomeCom/AIShiftProgramSection'
import BenefitsSection from '@/Components/HomeCom/BenefitsSection'
import ContactUsSection from '@/Components/HomeCom/ContactUsSection'
import DataDrivenSection from '@/Components/HomeCom/DataDrivenSection'
import HeroSection from '@/Components/HomeCom/HeroSection'
import InfoSection from '@/Components/HomeCom/InfoSection'
import LevelsSection from '@/Components/HomeCom/LevelsSection'
import ServiceSection from '@/Components/HomeCom/ServiceSection'
import TeamsSection from '@/Components/HomeCom/TeamsSection'
import Testimonials from '@/Components/HomeCom/Testimonials'
import GlobalNetworkingCard from '@/Components/HomeCom/WhyAttend'
import RotatedMarquee from '@/Components/Marquee'
import React from 'react'

const Home = () => {
  return (
    <>
      <section className='overflow-hidden'>
        <HeroSection />
        <AboutSection />
        <RotatedMarquee />
        <DataDrivenSection />
        <AIShiftProgramSection />
        <BenefitsSection />
        <ServiceSection/>
        <LevelsSection/>
        <GlobalNetworkingCard/>
        <Testimonials/>
        <TeamsSection/>
        <ContactUsSection/>
        <InfoSection/>
         <Footer />
      </section>
    </>
  )
}

export default Home