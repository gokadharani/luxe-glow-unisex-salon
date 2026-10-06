import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="section pricing">
      <div className="container">
        <h2 className="section-title">Curated Packages</h2>
        <p className="section-subtitle">Comprehensive care packages designed for your regular maintenance and special occasions.</p>
        
        <div className="pricing-grid">
          <div className="pricing-card">
            <h3>ESSENTIAL</h3>
            <p style={{ color: 'var(--color-text-light)', marginTop: '1rem' }}>Perfect for regular maintenance</p>
            <div className="pricing-price">$75</div>
            <ul className="pricing-list">
              <li><Check size={18} color="var(--color-primary)" /> Expert Haircut</li>
              <li><Check size={18} color="var(--color-primary)" /> Basic Styling</li>
              <li><Check size={18} color="var(--color-primary)" /> Basic Grooming / Cleanup</li>
              <li><Check size={18} color="var(--color-primary)" /> Refreshing Beverage</li>
            </ul>
            <a href="#book" className="btn btn-outline" style={{ width: '100%' }}>Book Essential</a>
          </div>
          
          <div className="pricing-card popular">
            <div className="popular-badge">MOST POPULAR</div>
            <h3>PREMIUM</h3>
            <p style={{ color: 'var(--color-text-light)', marginTop: '1rem' }}>Complete revitalization</p>
            <div className="pricing-price">$145</div>
            <ul className="pricing-list">
              <li><Check size={18} color="var(--color-primary)" /> Expert Haircut</li>
              <li><Check size={18} color="var(--color-primary)" /> Deep Nourishing Hair Spa</li>
              <li><Check size={18} color="var(--color-primary)" /> Advanced Styling</li>
              <li><Check size={18} color="var(--color-primary)" /> Advanced Grooming / Facial</li>
              <li><Check size={18} color="var(--color-primary)" /> Premium Beverage</li>
            </ul>
            <a href="#book" className="btn btn-primary" style={{ width: '100%' }}>Book Premium</a>
          </div>
          
          <div className="pricing-card">
            <h3>LUXE</h3>
            <p style={{ color: 'var(--color-text-light)', marginTop: '1rem' }}>The ultimate salon experience</p>
            <div className="pricing-price">$250</div>
            <ul className="pricing-list">
              <li><Check size={18} color="var(--color-primary)" /> Premium Styling & Color</li>
              <li><Check size={18} color="var(--color-primary)" /> Advanced Hair Treatment</li>
              <li><Check size={18} color="var(--color-primary)" /> 60-Min Body Spa</li>
              <li><Check size={18} color="var(--color-primary)" /> Full Grooming / Beauty Suite</li>
              <li><Check size={18} color="var(--color-primary)" /> Priority Booking</li>
            </ul>
            <a href="#book" className="btn btn-outline" style={{ width: '100%' }}>Book Luxe</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
