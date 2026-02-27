import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
    return (
        <section className="newsletter">
            <div className="newsletter-inner">
                <div className="newsletter-badge">Weekly Digest</div>

                <h2 className="newsletter-title">Stay Ahead of the Curve</h2>

                <p className="newsletter-subtitle">
                    Get verified listings, security alerts, and crypto insights
                    delivered straight to your inbox.
                </p>

                <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="input-group">
                        <input type="email" placeholder="Enter your email address" required />
                        <button type="submit" className="btn-subscribe">Subscribe</button>
                    </div>
                </form>

                <ul className="newsletter-features">
                    <li>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                        No Spam, ever
                    </li>
                    <li>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Unsubscribe anytime
                    </li>
                    <li>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Weekly Updates
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Newsletter;
