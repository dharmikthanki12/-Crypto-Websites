import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('Home');
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Browse', path: '/browse' },
        { name: 'Categories', path: '/categories' },
        { name: 'Bookmarks', path: '/bookmarks' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <nav className="navbar">
            <div className="container navbar-inner">
                {/* Logo */}
                <Link to="/" className="navbar-logo" onClick={() => setActiveLink('Home')}>
                    <img src="/logo.png" alt="Crypto Suggest" className="navbar-logo-img" />
                </Link>

                {/* Navigation Links */}
                <ul className="navbar-links">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                                onClick={() => setActiveLink(link.name)}
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Action Buttons */}
                <div className="navbar-actions">
                    <button className="btn-primary-custom">Connect Wallet</button>
                    <Link to="/submit" className="btn-submit-custom">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275l5.813 1.912-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z"></path>
                        </svg>
                        Submit Website
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
