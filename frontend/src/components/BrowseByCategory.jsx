import React from 'react';
import './BrowseByCategory.css';

const categories = [
    {
        id: 1,
        name: 'Crypto Exchanges',
        count: 127,
        color: '#0EA5E9',
        blobColor: 'rgba(14, 165, 233, 0.1)',
    },
    {
        id: 2,
        name: 'NFT Marketplaces',
        count: 89,
        color: '#8B5CF6',
        blobColor: 'rgba(139, 92, 246, 0.1)',
    },
    {
        id: 3,
        name: 'Crypto Wallets',
        count: 156,
        color: '#EC4899',
        blobColor: 'rgba(236, 72, 153, 0.1)',
    },
    {
        id: 4,
        name: 'DeFi Platforms',
        count: 143,
        color: '#F59E0B',
        blobColor: 'rgba(245, 158, 11, 0.1)',
    },
    {
        id: 5,
        name: 'Blockchain Explorers',
        count: 67,
        color: '#0EA5E9',
        blobColor: 'rgba(14, 165, 233, 0.1)',
    },
    {
        id: 6,
        name: 'Crypto News & Media',
        count: 94,
        color: '#8B5CF6',
        blobColor: 'rgba(139, 92, 246, 0.1)',
    },
    {
        id: 7,
        name: 'Learning & Education',
        count: 78,
        color: '#EC4899',
        blobColor: 'rgba(236, 72, 153, 0.1)',
    },
    {
        id: 8,
        name: 'Portfolio Trackers',
        count: 102,
        color: '#F59E0B',
        blobColor: 'rgba(245, 158, 11, 0.1)',
    },
];

const StarIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
);

const BrowseByCategory = () => {
    return (
        <section className="browse-section">
            <div className="container">
                <div className="browse-header text-center">
                    <div className="discovery-badge">DISCOVERY</div>
                    <h2 className="browse-title">Browse by Category</h2>
                    <p className="browse-subtitle">
                        Explore verified crypto websites across all categories, styled for<br />easy discovery.
                    </p>
                </div>

                <div className="browse-grid">
                    {categories.map(cat => (
                        <div className="browse-card" key={cat.id}>
                            <div className="browse-card-blob" style={{ backgroundColor: cat.blobColor }} />
                            <div className="browse-icon" style={{ backgroundColor: cat.color }}>
                                <StarIcon />
                            </div>
                            <h3 className="browse-cat-name">{cat.name}</h3>
                            <p className="browse-cat-count">{cat.count} Verified Apps</p>
                            <a href="#" className="browse-explore">
                                Explore
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>

                <div className="browse-footer">
                    <button className="btn-view-all">View All Categories</button>
                </div>
            </div>
        </section>
    );
};

export default BrowseByCategory;
