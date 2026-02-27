import React from 'react';
import './Hero.css';
import heroImg from '../assets/hero-illustration.png';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="row align-items-center">
                    {/* Left Content */}
                    <div className="col-lg-6 hero-content">
                        <div className="hero-badge">
                            <span className="badge-new">NEW</span>
                            <span className="badge-text">The most trusted crypto directory</span>
                        </div>

                        <h1 className="hero-title">
                            Build on<br />
                            <span className="hero-title-accent">Verified Crypto Protocols</span>
                        </h1>

                        <p className="hero-desc">
                            Discover manually verified Exchanges, Wallets, and DeFi protocols.<br />
                            No scams. Just trusted platforms.
                        </p>

                        <div className="hero-search-container">
                            <div className="hero-search-inner">
                                <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2">
                                    <circle cx="11" cy="11" r="8" />
                                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                </svg>
                                <input type="text" placeholder="Search protocols..." className="search-input" />
                                <button className="btn-explore-custom">
                                    Explore
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <polyline points="12 5 19 12 12 19" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="hero-social-proof">
                            <div className="avatar-group">
                                <div className="avatar" style={{ backgroundColor: '#EFF6FF', border: '2px solid white' }}>
                                    <span style={{ color: '#2563EB', fontSize: '12px', fontWeight: 'bold' }}>U</span>
                                </div>
                                <div className="avatar" style={{ backgroundColor: '#F5F3FF', border: '2px solid white', marginLeft: '-12px' }}>
                                    <span style={{ color: '#7C3AED', fontSize: '12px', fontWeight: 'bold' }}>C</span>
                                </div>
                                <div className="avatar" style={{ backgroundColor: '#ECFDF5', border: '2px solid white', marginLeft: '-12px' }}>
                                    <span style={{ color: '#10B981', fontSize: '12px', fontWeight: 'bold' }}>D</span>
                                </div>
                                <div className="avatar avatar-plus" style={{ marginLeft: '-12px' }}>
                                    <span>+</span>
                                </div>
                            </div>
                            <div className="proof-stats">
                                <div className="proof-stat">
                                    <span className="stat-num">50,000+</span>
                                    <span className="stat-txt">Monthly Users</span>
                                </div>
                                <div className="proof-divider"></div>
                                <div className="proof-stat">
                                    <span className="stat-num">500+</span>
                                    <span className="stat-txt">Verified Apps</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="col-lg-6 hero-visual-container">
                        <div className="visual-wrapper">
                            <div className="main-3d-card">
                                <div className="illustration-container">
                                    <img src={heroImg} alt="Crypto Trust Illustration" className="hero-3d-image" />
                                </div>
                            </div>

                            {/* Decorative Blobs */}
                            <div className="decor-blob blob-1"></div>
                            <div className="decor-blob blob-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
