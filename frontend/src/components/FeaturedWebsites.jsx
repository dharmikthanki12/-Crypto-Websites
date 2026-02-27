import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedWebsites.css';
import { websites } from '../data/websites';
import WebsiteCard from './WebsiteCard';

const FeaturedWebsites = () => {
    // Only show featured websites on the homepage
    const featuredSites = websites.filter(site => site.featured);

    return (
        <section className="featured-section">
            <div className="container">
                <div className="section-header">
                    <div>
                        <h2 className="section-title">Featured Websites</h2>
                        <p className="section-subtitle">Handpicked verified crypto platforms for you</p>
                    </div>
                    <Link to="/browse" className="btn-view-all">View All</Link>
                </div>

                <div className="cards-grid">
                    {featuredSites.map(site => (
                        <WebsiteCard key={site.site_id || site.id} site={site} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedWebsites;
