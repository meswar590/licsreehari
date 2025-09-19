import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ScrollingPlansSection from '@/components/ScrollingPlansSection';
import FeaturedPlanSection from '@/components/FeaturedPlanSection';
import ServicesSection from '@/components/ServicesSection';
import AchievementsSection from '@/components/AchievementsSection';
import ServicesWeProvideSection from '@/components/ServicesWeProvideSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Professional LIC Agent Website - Complete Solution
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        <AboutSection />
        <ScrollingPlansSection />
        <FeaturedPlanSection />
        <ServicesSection />
        <ServicesWeProvideSection />
        <AchievementsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
