import React from 'react';
import Hero from '@/components/hero';
import About from '@/components/about';
import Services from '@/components/services';
import FAQ from '@/components/faq';
import LocationMap from '@/components/localtionMap';
import Footer from '@/components/footer';
import SessionFees from '@/components/sessionFees';
import AnimatedSection from '@/components/AnimatedSection';

const page = () => {
  return (
    <div>
      <AnimatedSection delay={0.1}><Hero /></AnimatedSection>
      <AnimatedSection delay={0.2}><About /></AnimatedSection>
      <AnimatedSection delay={0.3}><Services /></AnimatedSection>
      <AnimatedSection delay={0.4}><SessionFees /></AnimatedSection>
      <AnimatedSection delay={0.5}><FAQ /></AnimatedSection>
      <AnimatedSection delay={0.6}><LocationMap /></AnimatedSection>
      <Footer />
    </div>
  );
};

export default page;
