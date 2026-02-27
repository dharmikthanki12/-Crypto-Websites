import React, { useState } from 'react';
import './WebsiteCard.css';

const StarIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="#F59E0B">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
);

const HeartIcon = ({ filled }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? '#EF4444' : 'none'} stroke={filled ? '#EF4444' : '#9CA3AF'} strokeWidth="2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
);

const CompareIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 3 21 3 21 8" />
        <line x1="4" y1="20" x2="21" y2="3" />
        <polyline points="21 16 21 21 16 21" />
        <line x1="15" y1="15" x2="21" y2="21" />
    </svg>
);

const ArrowIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
    </svg>
);

const WebsiteCard = ({ site }) => {
    const [isLiked, setIsLiked] = useState(false);

    return (
        <div className="wc-card">
            <div className="wc-body">
                {/* Header row: icon + name + heart */}
                <div className="wc-header">
                    <div className="wc-icon" style={{ background: site.color }}>
                        {site.abbr}
                    </div>
                    <div className="wc-meta">
                        <h3 className="wc-name">{site.name}</h3>
                        <div className="wc-rating">
                            <StarIcon />
                            <span className="wc-reviews">
                                {site.reviews > 0 ? `• ${site.reviews.toLocaleString()} reviews` : '• New listing'}
                            </span>
                        </div>
                    </div>
                    <button className="wc-heart" onClick={() => setIsLiked(!isLiked)} aria-label="Save">
                        <HeartIcon filled={isLiked} />
                    </button>
                </div>

                {/* Description */}
                <p className="wc-desc">{site.desc}</p>

                {/* Tags */}
                <div className="wc-tags">
                    {site.tags.map(tag => (
                        <span key={tag} className="wc-badge wc-badge-category">{tag}</span>
                    ))}
                    {site.featured && <span className="wc-badge wc-badge-featured">Featured</span>}
                </div>
            </div>

            {/* Footer buttons */}
            <div className="wc-footer">
                <button className="wc-btn-compare">
                    <CompareIcon />
                    Compare
                </button>
                <button
                    className="wc-btn-details"
                    onClick={() => site.url && window.open(site.url, '_blank', 'noopener,noreferrer')}
                >
                    Details
                    <ArrowIcon />
                </button>
            </div>
        </div>
    );
};

export default WebsiteCard;
