import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
    return (
        <div className="contact-page">
            <div className="container">
                {/* Header Section */}
                <header className="contact-header text-center">
                    <div className="badge-wrapper">
                        <span className="contact-badge">Connect With Us</span>
                    </div>
                    <h1 className="contact-title">
                        We'd Love to <span className="gradient-text">Hear From You</span>
                    </h1>
                    <p className="contact-subtitle">
                        Have a question, feedback, or just want to say hello? Drop us a message and our team will get back to you.
                    </p>
                </header>

                <div className="row g-4 mt-5">
                    {/* Left Column: Form */}
                    <div className="col-lg-8">
                        <div className="contact-form-card">
                            <div className="card-header-inner mb-4">
                                <span className="form-icon">💬</span>
                                <h2 className="form-title">Send us a Message</h2>
                            </div>
                            <form>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Name</label>
                                        <input type="text" className="form-control" placeholder="John Doe" />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-control" placeholder="john@example.com" />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Subject</label>
                                    <select className="form-select">
                                        <option>General Inquiry</option>
                                        <option>Listing Request</option>
                                        <option>Report a Scam</option>
                                        <option>Partnership</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className="form-label">Message</label>
                                    <textarea className="form-control" rows="6" placeholder="How can we help you today?"></textarea>
                                </div>
                                <button type="submit" className="btn-send-message">
                                    Send Message 🚀
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Right Column: Info & FAQ */}
                    <div className="col-lg-4">
                        <div className="info-column">
                            {/* Contact Info Card */}
                            <div className="info-card blue-gradient-card mb-4">
                                <div className="info-header mb-3">
                                    <span className="info-icon">📧</span>
                                    <h4 className="info-title">Contact Info</h4>
                                </div>
                                <div className="info-details">
                                    <div className="info-item mb-3">
                                        <span className="detail-label">EMAIL US</span>
                                        <p className="detail-value">hello@cryptosuggest.com</p>
                                    </div>
                                    <div className="info-item">
                                        <span className="detail-label">RESPONSE TIME</span>
                                        <p className="detail-value text-white icon-text">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <circle cx="12" cy="12" r="10" />
                                                <polyline points="12 6 12 12 16 14" />
                                            </svg>
                                            24-48 Hours
                                        </p>
                                    </div>
                                </div>
                                <p className="info-extra mt-3">
                                    Our team reviews every submission manually to ensure the highest quality for our community.
                                </p>
                            </div>

                            {/* FAQ Card */}
                            <div className="faq-mini-card">
                                <div className="info-header mb-3">
                                    <span className="info-icon">❓</span>
                                    <h4 className="info-title">Common Questions</h4>
                                </div>
                                <div className="mini-faq-list">
                                    <div className="mini-faq-item">
                                        <div className="faq-icon yellow">💡</div>
                                        <div className="faq-content">
                                            <h5 className="faq-q">How to submit a website?</h5>
                                            <p className="faq-a">Visit our 'Submit Website' page, fill out the details. We review within 2-3 business days.</p>
                                        </div>
                                    </div>
                                    <div className="mini-faq-item">
                                        <div className="faq-icon green">✅</div>
                                        <div className="faq-content">
                                            <h5 className="faq-q">Is listing free?</h5>
                                            <p className="faq-a">Basic listing is free. We verify all submissions for safety.</p>
                                        </div>
                                    </div>
                                    <div className="mini-faq-item">
                                        <div className="faq-icon red">🛑</div>
                                        <div className="faq-content">
                                            <h5 className="faq-q">Reporting a scam?</h5>
                                            <p className="faq-a">Use the 'Report' subject in the form or flag it directly on the platform page.</p>
                                        </div>
                                    </div>
                                    <div className="mini-faq-item">
                                        <div className="faq-icon blue">📝</div>
                                        <div className="faq-content">
                                            <h5 className="faq-q">Edit my listing?</h5>
                                            <p className="faq-a">Send us a message with your website details and requested changes.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
