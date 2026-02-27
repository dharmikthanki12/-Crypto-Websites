import React from 'react';
import './VerifiedListing.css';

const VerifiedListing = () => {
    return (
        <section className="verified-listing">
            <div className="container">
                <div className="vl-card">
                    <div className="vl-content">
                        <div className="vl-badge">For Developers</div>
                        <h2 className="vl-title">Build Trust with a<br />Verified Listing</h2>
                        <p className="vl-desc">
                            Join 500+ verified platforms. Get discovered by active users and showcase your commitment to security and transparency.
                        </p>

                        <ul className="vl-features">
                            <li>
                                <div className="check-icon">✓</div>
                                <span>Boost your SEO and brand visibility</span>
                            </li>
                            <li>
                                <div className="check-icon">✓</div>
                                <span>Gain a "Verified" badge for your platform</span>
                            </li>
                            <li>
                                <div className="check-icon">✓</div>
                                <span>Access detailed user analytics</span>
                            </li>
                        </ul>

                        <button className="btn-submit-website">
                            Submit Your Website
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </button>
                    </div>

                    <div className="vl-visual">
                        <div className="stats-card">
                            <div className="stat-row">
                                <div className="stat-info">
                                    <span className="stat-label">MONTHLY TRAFFIC</span>
                                    <span className="stat-value">50,000+</span>
                                </div>
                                <div className="stat-graph-mini">
                                    <svg width="40" height="24" viewBox="0 0 40 24">
                                        <path d="M2 22 L10 16 L18 19 L26 8 L34 12 L38 4" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-row">
                                <div className="stat-info">
                                    <span className="stat-label">CONVERSION RATE</span>
                                    <span className="stat-value">4.8%</span>
                                </div>
                                <div className="stat-icon-mini">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                        <circle cx="9" cy="7" r="4" />
                                        <polyline points="16 11 18 13 22 9" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        {/* Background elements */}
                        <div className="vl-blob"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VerifiedListing;
