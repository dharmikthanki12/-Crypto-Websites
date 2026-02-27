import React from 'react';
import Hero from '../components/Hero';
import FeaturedWebsites from '../components/FeaturedWebsites';
import BrowseByCategory from '../components/BrowseByCategory';
import TrustSection from '../components/TrustSection';
import HowItWorks from '../components/HowItWorks';
import Newsletter from '../components/Newsletter';
import VerifiedListing from '../components/VerifiedListing';

const HomePage = () => {
    return (
        <main>
            <Hero />
            <BrowseByCategory />
            <FeaturedWebsites />
            <TrustSection />
            <HowItWorks />
            <Newsletter />
            <VerifiedListing />
        </main>
    );
};

export default HomePage;
