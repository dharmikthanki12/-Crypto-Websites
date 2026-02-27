import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css';

const AboutPage = () => {
    const stats = [
        { label: 'Verified Websites', value: '500+' },
        { label: 'Monthly Users', value: '50k+' },
        { label: 'Categories', value: '15+' },
        { label: 'Monitoring', value: '24/7' }
    ];

    return (
        <div className="about-page">
            <div className="container">
                {/* Header Section */}
                <header className="about-header">
                    <div className="badge">About Crypto Suggest</div>
                    <h1 className="about-title">
                        Navigating the <span className="gradient-text">Crypto World</span><br />
                        With Confidence
                    </h1>
                    <p className="about-subtitle">
                        We're on a mission to simplify your crypto journey by curating the most trusted, secure, and innovative platforms in one place.
                    </p>
                </header>

                {/* Stats Section */}
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-card">
                            <h3 className="stat-value">{stat.value}</h3>
                            <p className="stat-label">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Mission & vision and Why We Started Section */}
                <div className="about-content-grid">
                    <div className="cards-column">
                        <div className="mission-card card-gradient-blue">
                            <div className="card-icon-wrapper blue-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <circle cx="11" cy="11" r="8" />
                                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                </svg>
                            </div>
                            <h2 className="card-title">Our Mission</h2>
                            <p className="card-text">
                                To eliminate the noise and scams in the crypto space by providing a meticulously verified directory of legitimate projects. We believe everyone deserves a safe entry point into Web3.
                            </p>
                        </div>

                        <div className="mission-card card-gradient-purple">
                            <div className="card-icon-wrapper purple-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
                                    <polyline points="12 22 12 12 22 7" />
                                    <polyline points="12 12 2 7" />
                                </svg>
                            </div>
                            <h2 className="card-title">Our Vision</h2>
                            <p className="card-text">
                                A world where cryptocurrency adoption is hindered only by curiosity, not fear. We aim to be the global standard for crypto reputation and discovery.
                            </p>
                        </div>
                    </div>

                    <div className="why-started-column">
                        <div className="why-started-card">
                            <h2 className="why-title">Why We Started</h2>
                            <div className="why-steps">
                                <div className="why-step">
                                    <div className="step-number">1</div>
                                    <div className="step-content">
                                        <h4 className="step-title">The Scam Epidemic</h4>
                                        <p className="step-text">We saw too many newcomers losing funds to phishing sites and rug pulls.</p>
                                    </div>
                                </div>
                                <div className="why-step">
                                    <div className="step-number">2</div>
                                    <div className="step-content">
                                        <h4 className="step-title">Information Overload</h4>
                                        <p className="step-text">The velocity of projects launching daily makes it impossible to filter quality.</p>
                                    </div>
                                </div>
                                <div className="why-step">
                                    <div className="step-number">3</div>
                                    <div className="step-content">
                                        <h4 className="step-title">The Solution</h4>
                                        <p className="step-text">A centralized, vetted hub for safe crypto exploration.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quality Assurance Section */}
                <section className="quality-assurance">
                    <div className="section-header">
                        <span className="section-badge">Our Process</span>
                        <h2 className="section-title">How We Ensure <span className="gradient-text">Quality</span></h2>
                        <p className="section-desc">Every website on Crypto Suggest goes through a rigorous multi-step verification process.</p>
                    </div>

                    <div className="quality-grid">
                        <div className="quality-card">
                            <div className="quality-icon blue">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                            </div>
                            <h4 className="quality-card-title">Security Audit</h4>
                            <p className="quality-card-text">SSL, Domain Age, and Contract Checks.</p>
                        </div>
                        <div className="quality-card">
                            <div className="quality-icon purple">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </div>
                            <h4 className="quality-card-title">Team Verif.</h4>
                            <p className="quality-card-text">Background checks on core team members.</p>
                        </div>
                        <div className="quality-card">
                            <div className="quality-icon indigo">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                                </svg>
                            </div>
                            <h4 className="quality-card-title">Performance</h4>
                            <p className="quality-card-text">Active user base and volume analysis.</p>
                        </div>
                        <div className="quality-card">
                            <div className="quality-icon pink">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                                </svg>
                            </div>
                            <h4 className="quality-card-title">Community</h4>
                            <p className="quality-card-text">Social sentiment and feedback analysis.</p>
                        </div>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section className="about-cta">
                    <div className="about-cta-card">
                        <h2 className="cta-title">Ready to Explore Safely?</h2>
                        <p className="cta-text">Join thousands of users who trust Crypto Suggest for their daily crypto discovery.</p>
                        <div className="cta-actions">
                            <Link to="/browse" className="btn-white">Browse Websites</Link>
                            <Link to="/contact" className="btn-outline-white">Contact Us</Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutPage;
