import React from 'react';
import { Link } from 'react-router-dom';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: 'Find a Gig',
      description: 'Browse through our wide range of services and find the perfect gig for your needs.',
      icon: '🔍',
      image: 'https://images.unsplash.com/photo-1517940310602-26535839fe84?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      title: 'Contact Seller',
      description: 'Get in touch with the seller to discuss your requirements and get a quote.',
      icon: '💬',
      image: 'https://images.unsplash.com/photo-1517940310602-26535839fe84?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      title: 'Make Payment',
      description: 'Securely pay for your gig using our trusted payment system. Payments are held until delivery.',
      icon: '💳',
      image: 'https://images.unsplash.com/photo-1517940310602-26535839fe84?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 4,
      title: 'Get Your Work',
      description: 'Receive your completed work and release payment to the seller. Rate your experience!',
      icon: '✨',
      image: 'https://images.unsplash.com/photo-1517940310602-26535839fe84?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

  return (
    <div className="how-it-works">
      <h1>How It Works</h1>
      <div className="steps-container">
        {steps.map((step) => (
          <div key={step.id} className="step-card">
            <div className="step-number">{step.id}</div>
            <div className="step-content">
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="cta-section">
        <h2>Ready to Get Started?</h2>
        <p>Join thousands of satisfied customers who have found great value in our platform.</p>
        <Link to="/browse-gigs" className="cta-button">
          Browse Gigs
        </Link>
      </div>
    </div>
  );
};

export default HowItWorks;
