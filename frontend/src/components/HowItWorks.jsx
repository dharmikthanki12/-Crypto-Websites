import React from 'react';
import './HowItWorks.css';

const steps = [
    {
        number: '1',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
        ),
        title: 'Browse Categories',
        desc: 'Explore 15+ categories including exchanges and DeFi.'
    },
    {
        number: '2',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2">
                <path d="M16 3h5v5" />
                <path d="M4 20L21 3" />
                <path d="M21 16v5h-5" />
                <path d="M15 15l6 6" />
            </svg>
        ),
        title: 'Compare',
        desc: 'Review key features, fees, and community ratings.'
    },
    {
        number: '3',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
        ),
        title: 'Select & Go',
        desc: 'Choose the best platform and visit securely.'
    }
];

const HowItWorks = () => {
    return (
        <section className="how-it-works">
            <div className="container">
                <div className="hiw-header">
                    <h2 className="hiw-title">How It Works</h2>
                    <p className="hiw-subtitle">Find trusted crypto platforms in 3 simple steps</p>
                </div>

                <div className="hiw-steps">
                    {steps.map((step, index) => (
                        <div className="step-item" key={index}>
                            <div className="step-visual">
                                <div className="step-icon-circle">
                                    {step.icon}
                                </div>
                                <div className="step-number-badge">{step.number}</div>
                                {index < steps.length - 1 && <div className="step-connector" />}
                            </div>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-desc">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
