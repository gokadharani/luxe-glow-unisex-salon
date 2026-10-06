import React, { useState } from 'react';

const serviceData = {
  HAIR: [
    { name: 'Haircut & Styling', desc: 'Precision cutting and styling for your face shape.', price: '$45+', duration: '45 mins' },
    { name: 'Hair Coloring', desc: 'Full color, highlights, balayage, and root touch-ups.', price: '$90+', duration: '120 mins' },
    { name: 'Hair Spa', desc: 'Deep conditioning and scalp revitalization.', price: '$65', duration: '60 mins' },
    { name: 'Keratin Treatment', desc: 'Smooth, frizz-free hair for up to 3 months.', price: '$150+', duration: '150 mins' },
    { name: 'Hair Treatment', desc: 'Targeted treatments for damage, hair fall, or dandruff.', price: '$55', duration: '45 mins' },
  ],
  "MEN'S GROOMING": [
    { name: "Men's Haircut", desc: 'Classic and contemporary cuts, includes wash and style.', price: '$35', duration: '30 mins' },
    { name: 'Beard Styling', desc: 'Precision beard trimming and shaping.', price: '$20', duration: '20 mins' },
    { name: 'Beard Grooming', desc: 'Hot towel shave and premium oils.', price: '$35', duration: '30 mins' },
    { name: 'Head Massage', desc: 'Relaxing massage with essential oils.', price: '$25', duration: '20 mins' },
    { name: 'Premium Grooming Package', desc: 'Haircut, beard styling, and mini facial.', price: '$85', duration: '75 mins' },
  ],
  BEAUTY: [
    { name: 'Facial', desc: 'Customized facials for glowing, healthy skin.', price: '$75+', duration: '60 mins' },
    { name: 'Cleanup', desc: 'Quick refresh with cleansing and exfoliation.', price: '$40', duration: '30 mins' },
    { name: 'Waxing', desc: 'Gentle hair removal for various areas.', price: '$15+', duration: 'Varies' },
    { name: 'Threading', desc: 'Precise eyebrow shaping and facial threading.', price: '$12+', duration: '15 mins' },
    { name: 'Manicure & Pedicure', desc: 'Classic nail care and polish.', price: '$55', duration: '60 mins' },
  ],
  "SPA & WELLNESS": [
    { name: 'Body Spa', desc: 'Full body exfoliation and hydration.', price: '$110', duration: '90 mins' },
    { name: 'Relaxation Massage', desc: 'Swedish massage to relieve tension.', price: '$90', duration: '60 mins' },
    { name: 'Scalp Treatment', desc: 'Intensive care for a healthy scalp environment.', price: '$50', duration: '40 mins' },
  ]
};

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('HAIR');

  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">Discover our comprehensive range of premium treatments tailored just for you.</p>
        
        <div className="services-tabs">
          {Object.keys(serviceData).map(category => (
            <button 
              key={category}
              className={`tab-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="services-grid">
          {serviceData[activeCategory].map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-header">
                <h3 className="service-title">{service.name}</h3>
                <span className="service-price">{service.price}</span>
              </div>
              <p className="service-desc">{service.desc}</p>
              <div style={{ marginTop: '10px', fontSize: '0.85rem', color: 'var(--color-primary)' }}>
                Duration: {service.duration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
