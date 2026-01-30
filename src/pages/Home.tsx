import React from 'react';
import Hero from '../components/Hero';
import ComponentGrid from '../components/ComponentGrid';
import FeatureBento from '../components/FeatureBento';
import PerformanceBanner from '../components/PerformanceBanner';
import CTASection from '../components/CTASection';
import EcosystemShowcase from '../components/EcosystemShowcase';

const Home = () => {
    return (
        <>
            <Hero />
            <EcosystemShowcase />
            <FeatureBento />
            <PerformanceBanner />
            <ComponentGrid />
            <CTASection />
        </>
    );
};

export default Home;
