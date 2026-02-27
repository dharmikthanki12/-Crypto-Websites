import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="container footer-inner">
                <div className="footer-col about-col">
                    <div className="footer-logo">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" stroke="#3B82F6" strokeWidth="2" strokeLinejoin="round" />
                            <path d="M12 12l10-5M12 12v10M12 12L2 7" stroke="#3B82F6" strokeWidth="1.5" />
                        </svg>
                        <span>CRYPTO SUGGEST</span>
                    </div>
                    <p className="footer-about-text">
                        Your trusted directory for discovering verified crypto websites. We help users find reliable platforms and give website owners visibility.
                    </p>
                </div>

                <div className="footer-col">
                    <h4 className="footer-heading">Popular Categories</h4>
                    <ul className="footer-links">
                        <li><a href="#">Crypto Exchanges</a></li>
                        <li><a href="#">NFT Marketplaces</a></li>
                        <li><a href="#">Crypto Wallets</a></li>
                        <li><a href="#">DeFi Platforms</a></li>
                        <li><a href="#">Blockchain Explorers</a></li>
                        <li><a href="#">Crypto News</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4 className="footer-heading">For Website Owners</h4>
                    <ul className="footer-links">
                        <li><a href="#">Submit Website</a></li>
                        <li><a href="#">Verification Process</a></li>
                        <li><a href="#">Advertising</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4 className="footer-heading">Resources</h4>
                    <ul className="footer-links">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>

                    <div className="footer-socials">
                        <a href="#" aria-label="Twitter">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                            </svg>
                        </a>
                        <a href="#" aria-label="Telegram">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M21.19 2.85a.96.96 0 0 0-1-.1c-.4.2-16.1 6.8-17.1 7.2a.96.96 0 0 0-.1 1.77c1.3.4 3 .9 3 .9s.8 2.4 1.2 3.6c.1.4.3.5.6.5.3 0 .5-.2.7-.4.6-.6 2.5-2.5 2.5-2.5l4.8 3.5a.96.96 0 0 0 1.5-.6c.6-3 3-14 3.1-14.3a.96.96 0 0 0-.2-.6z" />
                            </svg>
                        </a>
                        <a href="#" aria-label="Discord">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.3 4.3a19.7 19.7 0 0 0-4.9-1.5.1.1 0 0 0-.1.1 13.8 13.8 0 0 0-.6 1.2.1.1 0 0 1-.1 0 18.2 18.2 0 0 0-5.2 0 .1.1 0 0 1-.1 0 11.2 11.2 0 0 0-.6-1.2.1.1 0 0 0-.1-.1 19.7 19.7 0 0 0-4.9 1.5.1.1 0 0 0 0 .1 20.3 20.3 0 0 0-2.5 9.7v.1c0 .1 1.4 2.5 5 2.5a.1.1 0 0 0 .1-.1 14.5 14.5 0 0 0 1-1.6.1.1 0 0 0 0-.1c-1.2-.4-2.3-1-3.3-1.7a.1.1 0 0 1 0-.2c.2-.2.5-.4.7-.6a.1.1 0 0 1 .1 0 14.7 14.7 0 0 0 10.4 0 .1.1 0 0 1 .1 0c.3.2.5.4.7.6a.1.1 0 0 1 0 .2 12.3 12.3 0 0 1-3.3 1.7.1.1 0 0 0 0 .1 19.3 19.3 0 0 0 1 1.6.1.1 0 0 0 .1.1c3.6 0 5-2.4 5-2.5v-.1a21.4 21.4 0 0 0-2.5-9.8.1.1 0 0 0 0-.1z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>© 2026 Crypto Suggest - Your Trusted Crypto Directory. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
