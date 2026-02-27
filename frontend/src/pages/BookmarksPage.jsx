import React from 'react';
import { Link } from 'react-router-dom';
import './BookmarksPage.css';

const BookmarksPage = () => {
    return (
        <div className="bookmarks-page">
            <div className="container">
                {/* Header Section */}
                <header className="bookmarks-header">
                    <h1 className="bookmarks-title">
                        <span className="heart-icon">❤️</span> My Bookmarks
                    </h1>
                    <p className="bookmarks-subtitle">
                        Manage your saved crypto platforms and projects. Keep track of your favorites in one place.
                    </p>
                </header>

                {/* Empty State Card */}
                <div className="empty-bookmarks-card">
                    <div className="empty-state-content">
                        <div className="large-heart-icon">
                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="1.5">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                            </svg>
                        </div>
                        <h2 className="empty-title">No bookmarks yet</h2>
                        <p className="empty-subtitle">
                            Start exploring crypto platforms and save your favorites to access them quickly later.
                        </p>
                        <Link to="/browse" className="btn-browse-platforms">
                            Browse Platforms
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookmarksPage;
