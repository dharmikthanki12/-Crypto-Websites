import React from 'react';
import './TrustSection.css';

const trustItems = [
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
        title: 'Manual Verification',
        desc: 'Every website is manually reviewed before listing.',
        bgColor: '#EFF6FF'
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="8" y1="8" x2="14" y2="14" />
                <line x1="14" y1="8" x2="8" y2="14" />
            </svg>
        ),
        title: 'Scam Protection',
        desc: 'Continuous monitoring and community reporting.',
        bgColor: '#FEF2F2'
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                <polyline points="16 7 22 7 22 13" />
            </svg>
        ),
        title: 'Regular Updates',
        desc: 'Listings updated daily with latest information.',
        bgColor: '#ECFDF5'
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        title: 'Community Driven',
        desc: 'Powered by user reviews and feedback.',
        bgColor: '#F5F3FF'
    }
];

const TrustSection = () => {
    return (
        <section className="trust-section">
            <div className="container">
                <div className="trust-header">
                    <div className="safety-badge">TRUST & SECURITY</div>
                    <h2 className="trust-title">Why Trust Crypto Suggest?</h2>
                    <p className="trust-subtitle">
                        We prioritize your safety above everything else. Our rigorous verification process ensures you only interact with the most reliable platforms in the crypto ecosystem.
                    </p>
                </div>

                <div className="trust-grid">
                    {trustItems.map((item, index) => (
                        <div className="trust-card" key={index}>
                            <div className="trust-icon-box" style={{ backgroundColor: item.bgColor }}>
                                {item.icon}
                            </div>
                            <h3 className="trust-card-title">{item.title}</h3>
                            <p className="trust-card-desc">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="trusted-by-wrapper">
                    <p className="trusted-by-label">TRUSTED BY 50,000+ USERS & PROTECTING ECOSYSTEMS</p>
                    <div className="trusted-by-logos">
                        <div className="partner-logo">Metamask</div>
                        <div className="partner-logo">Coinbase</div>
                        <div className="partner-logo">Binance</div>
                        <div className="partner-logo">Trust Wallet</div>
                        <div className="partner-logo">Phantom</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustSection;
