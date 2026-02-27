import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    CheckCircle2,
    ArrowRight,
    ArrowLeft,
    Star,
    ShieldCheck,
    Zap,
    Award,
    Info,
    UploadCloud,
    User,
    Check
} from 'lucide-react';
import './SubmitPage.css';

const SubmitPage = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        websiteName: '',
        websiteUrl: '',
        officialEmail: '',
        category: 'Crypto Exchange',
        description: '',
        role: '',
        isOfficialSubmission: false,
        agreedToTerms: false,
        acknowledgesVerification: false
    });

    const categories = [
        'Crypto Exchange',
        'DeFi Protocol',
        'NFT Marketplace',
        'Wallet',
        'Tool / Service',
        'News / Media'
    ];

    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const nextStep = () => {
        setStep(prev => prev + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const prevStep = () => {
        setStep(prev => prev - 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSubmit = async (e) => {
        if (e) e.preventDefault();
        setSubmitting(true);
        setSubmitError('');
        try {
            const response = await fetch('/api/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (data.success) {
                setSubmitted(true);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                setSubmitError(data.message || 'Submission failed. Please try again.');
            }
        } catch (err) {
            setSubmitError('Could not connect to server. Make sure the backend is running.');
        } finally {
            setSubmitting(false);
        }
    };

    const isStep1Valid = formData.websiteName && formData.websiteUrl && formData.officialEmail;
    const isStep2Valid = formData.description.length >= 150 && formData.description.length <= 500;
    const isStep3Valid = formData.role && formData.isOfficialSubmission && formData.agreedToTerms && formData.acknowledgesVerification;

    if (submitted) {
        return (
            <div className="submit-page-container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="success-message card container"
                >
                    <div className="success-icon-wrap">
                        <CheckCircle2 size={64} />
                    </div>
                    <h2>Submission Successful!</h2>
                    <p>
                        Thank you for submitting <strong>{formData.websiteName}</strong>.
                        Our team will manually verify the platform details within 3-5 business days.
                    </p>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                        <button className="btn-back" onClick={() => window.location.href = '/'}>Back to Home</button>
                        <button className="btn-submit-review" onClick={() => window.location.reload()}>Submit Another</button>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="submit-page-container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="submit-header"
            >
                <h1 className="text-gradient">Get Your Crypto Website Listed</h1>
                <p>Join 500+ verified platforms and get premium visibility within the community.</p>
            </motion.div>

            <div className="submit-benefits-full container">
                {[
                    { icon: <Star />, title: "Increase Visibility", text: "Reach active enthusiasts searching for new platforms.", color: "yellow" },
                    { icon: <ShieldCheck />, title: "Build Trust", text: "A verified badge adds instant credibility to your brand.", color: "green" },
                    { icon: <Zap />, title: "Targeted Traffic", text: "Users specifically interested in your platform category.", color: "orange" },
                    { icon: <Award />, title: "Free Listing", text: "Basic listings are always free for genuine projects.", color: "purple" }
                ].map((benefit, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="benefit-card"
                    >
                        <div className={`b-icon-wrap ${benefit.color}`}>{benefit.icon}</div>
                        <h3>{benefit.title}</h3>
                        <p>{benefit.text}</p>
                    </motion.div>
                ))}
            </div>

            <div className="multi-step-form-container container">
                <div className="form-card-main">
                    <div className="step-indicator">
                        {[
                            { step: 1, label: "Basic Info" },
                            { step: 2, label: "Details" },
                            { step: 3, label: "Verification" }
                        ].map((s, i) => (
                            <React.Fragment key={s.step}>
                                <div className={`step-item ${step === s.step ? 'active' : ''} ${step > s.step ? 'completed' : ''}`}>
                                    <div className="step-number">{step > s.step ? <Check size={18} /> : s.step}</div>
                                    <span className="step-label">{s.label}</span>
                                </div>
                                {i < 2 && <div className={`step-line ${step > s.step ? 'completed' : ''}`}></div>}
                            </React.Fragment>
                        ))}
                    </div>

                    <form onSubmit={(e) => e.preventDefault()}>
                        <AnimatePresence mode="wait">
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="step-content"
                                >
                                    <div className="step-header-title">
                                        <div className="info-circle-icon"><Info size={24} /></div>
                                        <h3>Basic Information</h3>
                                    </div>
                                    <div className="form-grid">
                                        <div className="form-group-custom">
                                            <label>Website Name *</label>
                                            <div className="input-wrapper">
                                                <input
                                                    type="text"
                                                    name="websiteName"
                                                    value={formData.websiteName}
                                                    onChange={handleChange}
                                                    placeholder="Enter website name"
                                                    required
                                                />
                                                {formData.websiteName && <span className="valid-check"><Check size={16} /></span>}
                                            </div>
                                        </div>
                                        <div className="form-group-custom">
                                            <label>Website URL *</label>
                                            <div className="input-wrapper">
                                                <input
                                                    type="url"
                                                    name="websiteUrl"
                                                    value={formData.websiteUrl}
                                                    onChange={handleChange}
                                                    placeholder="https://"
                                                    required
                                                />
                                                {formData.websiteUrl && <span className="valid-check"><Check size={16} /></span>}
                                            </div>
                                        </div>
                                        <div className="form-group-custom">
                                            <label>Official Email *</label>
                                            <div className="input-wrapper">
                                                <input
                                                    type="email"
                                                    name="officialEmail"
                                                    value={formData.officialEmail}
                                                    onChange={handleChange}
                                                    placeholder="Enter official email"
                                                    required
                                                />
                                                {formData.officialEmail && <span className="valid-check"><Check size={16} /></span>}
                                            </div>
                                        </div>
                                        <div className="form-group-custom">
                                            <label>Category *</label>
                                            <div className="input-wrapper">
                                                <select name="category" value={formData.category} onChange={handleChange}>
                                                    {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-actions-multi">
                                        <button
                                            type="button"
                                            className="btn-next"
                                            disabled={!isStep1Valid}
                                            onClick={nextStep}
                                        >
                                            Next Step <ArrowRight size={20} />
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="step-content"
                                >
                                    <div className="step-header-title">
                                        <div className="info-circle-icon orange-bg"><UploadCloud size={24} /></div>
                                        <h3>Additional Details</h3>
                                    </div>
                                    <div className="form-group-custom">
                                        <label>
                                            Description *
                                            <span className={formData.description.length < 150 ? 'count-red' : 'count-green'}>
                                                {formData.description.length}/500
                                            </span>
                                        </label>
                                        <textarea
                                            name="description"
                                            value={formData.description}
                                            onChange={handleChange}
                                            placeholder="Describe your platform in 150-500 characters..."
                                            rows="6"
                                        ></textarea>
                                    </div>
                                    <div className="form-actions-multi spread">
                                        <button type="button" className="btn-back" onClick={prevStep}>
                                            <ArrowLeft size={20} /> Back
                                        </button>
                                        <button
                                            type="button"
                                            className="btn-next"
                                            disabled={!isStep2Valid}
                                            onClick={nextStep}
                                        >
                                            Next Step <ArrowRight size={20} />
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="step-content"
                                >
                                    <div className="step-header-title">
                                        <div className="info-circle-icon blue-bg"><User size={24} /></div>
                                        <h3>Final Verification</h3>
                                    </div>
                                    <div className="form-group-custom" mb-8>
                                        <label>Your Role *</label>
                                        <div className="input-wrapper">
                                            <select name="role" value={formData.role} onChange={handleChange}>
                                                <option value="">Select your role</option>
                                                <option value="Founder">Founder</option>
                                                <option value="Marketing Manager">Marketing Manager</option>
                                                <option value="Developer">Developer</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="checkbox-group-custom">
                                        {[
                                            { name: 'isOfficialSubmission', label: "I confirm this is an official submission" },
                                            { name: 'agreedToTerms', label: "I agree to terms and conditions" },
                                            { name: 'acknowledgesVerification', label: "I understand verification may take 3-5 business days" }
                                        ].map(check => (
                                            <label key={check.name} className="checkbox-item">
                                                <input
                                                    type="checkbox"
                                                    name={check.name}
                                                    checked={formData[check.name]}
                                                    onChange={handleChange}
                                                />
                                                <span>{check.label}</span>
                                            </label>
                                        ))}
                                    </div>
                                    {submitError && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            style={{ color: '#f43f5e', marginTop: '20px', fontSize: '14px', textAlign: 'center', fontWeight: 'bold' }}
                                        >
                                            ⚠️ {submitError}
                                        </motion.div>
                                    )}
                                    <div className="form-actions-multi spread">
                                        <button type="button" className="btn-back" onClick={prevStep}>
                                            <ArrowLeft size={20} /> Back
                                        </button>
                                        <button
                                            type="button"
                                            className="btn-submit-review"
                                            disabled={!isStep3Valid || submitting}
                                            onClick={handleSubmit}
                                        >
                                            {submitting ? 'Submitting...' : 'Submit for Review'}
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SubmitPage;

