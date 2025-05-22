import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <section className="hero-section">
        <h1>About GigKonnect</h1>
        <p>Connecting South African freelancers with businesses since 2025</p>
      </section>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At GigKonnect, we aim to empower South African freelancers and businesses by providing a trusted platform for gig-based services. 
          We focus on supporting township economies and promoting B-BBEE compliance while ensuring quality services for our clients.
        </p>
      </section>

      <section className="features-section">
        <h2>Why Choose GigKonnect?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🌟</div>
            <h3>Local Focus</h3>
            <p>Specialized in South African market with township and B-BBEE expertise</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Secure Payments</h3>
            <p>Safe, transparent payment system in Rands (R)</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤝</div>
            <h3>Community Support</h3>
            <p>Supporting local businesses and township economies</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">✅</div>
            <h3>Verified Sellers</h3>
            <p>All sellers are verified and rated by our community</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Join Our Community</h2>
        <p>Start connecting with talented South African freelancers today!</p>
        <Link to="/browse-gigs" className="cta-button">
          Browse Gigs
        </Link>
      </section>
    </div>
  );
};

export default About;
