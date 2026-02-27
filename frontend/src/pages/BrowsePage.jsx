import React, { useState, useEffect } from 'react';
import './BrowsePage.css';
import { websites } from '../data/websites';
import WebsiteCard from '../components/WebsiteCard';

// Color palette for submitted sites (cycles through these)
const CARD_COLORS = [
    '#4F46E5', '#0891B2', '#059669', '#D97706',
    '#7C3AED', '#DB2777', '#EA580C', '#65A30D'
];

const getAbbr = (name) => name ? name.slice(0, 2).toUpperCase() : '??';
const getColor = (index) => CARD_COLORS[index % CARD_COLORS.length];

const toTitleCase = (str) => {
    if (!str) return 'Unknown';
    return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

const BrowsePage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilter, setActiveFilter] = useState('Most Popular');
    const [submittedSites, setSubmittedSites] = useState([]);
    const [loadingSubmissions, setLoadingSubmissions] = useState(true);

    useEffect(() => {
        fetch('/api/submit')
            .then(res => res.json())
            .then(data => {
                if (data.success && data.data) {
                    const mapped = data.data.map((sub, i) => {
                        const name = toTitleCase(sub.websiteName);
                        const cleanDesc = sub.description ? sub.description.replace(/\s+/g, ' ').trim() : 'No description provided.';

                        return {
                            id: sub._id,
                            name: name.slice(0, 30),
                            abbr: getAbbr(sub.websiteName),
                            color: getColor(i),
                            desc: cleanDesc.slice(0, 80) + (cleanDesc.length > 80 ? '...' : ''),
                            reviews: 0,
                            tags: [sub.category || 'Other'],
                            featured: false,
                            url: sub.websiteUrl,
                            isSubmitted: true
                        };
                    });
                    setSubmittedSites(mapped);
                }
            })
            .catch(() => { })
            .finally(() => setLoadingSubmissions(false));
    }, []);

    // Merge static + submitted sites
    const allWebsites = [...websites, ...submittedSites];

    // Filter and Search logic
    const filteredWebsites = allWebsites.filter(site =>
        site.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        site.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="browse-page">
            <div className="container">
                {/* Breadcrumbs */}
                <div className="breadcrumbs">
                    <a href="/">Home</a>
                    <span className="separator">›</span>
                    <span className="current">Browse Websites</span>
                </div>

                {/* Header */}
                <div className="browse-header-section">
                    <h1 className="browse-title-main">Explore <span className="text-highlight">Crypto Websites</span></h1>
                    <p className="browse-subtitle-main">
                        Discover the most trusted and verified cryptocurrency platforms, curated just for you.
                    </p>
                </div>

                {/* Search and Filters Bar */}
                <div className="search-filter-bar">
                    <div className="search-input-wrapper">
                        <svg className="search-icon-min" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2.5">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search for exchanges, wallets, or tools..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="filter-dropdown-group">
                        <div className="filter-dropdown">
                            <svg className="star-icon-small" width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                            <span>{activeFilter}</span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </div>
                        <div className="view-toggle">
                            <button className="btn-toggle active" aria-label="Grid View">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3 3h7v7H3V3zm11 0h7v7h-7V3zm0 11h7v7h-7v-7zM3 14h7v7H3v-7z" />
                                </svg>
                            </button>
                            <button className="btn-toggle" aria-label="List View">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <line x1="3" y1="6" x2="21" y2="6" />
                                    <line x1="3" y1="12" x2="21" y2="12" />
                                    <line x1="3" y1="18" x2="21" y2="18" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Results Info */}
                <p className="results-count">
                    Showing {filteredWebsites.length} results
                    {submittedSites.length > 0 && (
                        <span style={{ marginLeft: '10px', fontSize: '13px', color: '#059669', fontWeight: 600 }}>
                            ✓ {submittedSites.length} community submitted
                        </span>
                    )}
                </p>

                {/* Cards Grid */}
                <div className="browse-grid-main">
                    {filteredWebsites.map(site => (
                        <WebsiteCard key={site.id} site={site} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BrowsePage;
