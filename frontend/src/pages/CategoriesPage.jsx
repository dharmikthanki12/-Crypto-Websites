import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CategoriesPage.css';
import { categories } from '../data/categories';

const CategoriesPage = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredCategories = categories.filter(cat =>
        cat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cat.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cat.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <div className="categories-page">
            <div className="container">
                {/* Header Section */}
                <header className="categories-header">
                    <div className="breadcrumb">
                        <Link to="/">Home</Link> / <span>Categories</span>
                    </div>
                    <div className="badge">All Tools</div>
                    <h1 className="categories-title">
                        Explore by <span className="gradient-text">Category</span>
                    </h1>
                    <p className="categories-subtitle">
                        Browse our curated list of crypto platforms by category. Find the perfect tools and services tailored to your needs.
                    </p>
                </header>

                {/* Search & Filter Section (Simplified for now) */}
                <div className="categories-search">
                    <div className="search-input-group">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search categories (e.g. DeFi, Exchanges)..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {/* Categories Grid */}
                <div className="categories-grid">
                    {filteredCategories.map(cat => (
                        <Link to={`/browse?category=${cat.id}`} key={cat.id} className="category-card" style={{ '--accent-color': cat.color }}>
                            <div className="category-icon-wrapper" style={{ backgroundColor: cat.bgColor }}>
                                <span className="category-icon-emoji">{cat.icon}</span>
                            </div>
                            <div className="category-badge">{cat.count}</div>
                            <h2 className="category-card-title">{cat.title}</h2>
                            <p className="category-card-desc">{cat.description}</p>

                            <div className="category-tags">
                                {cat.tags.map(tag => (
                                    <span key={tag} className="category-tag">{tag}</span>
                                ))}
                            </div>

                            <div className="category-footer">
                                <span className="explore-link">Explore Category</span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoriesPage;
