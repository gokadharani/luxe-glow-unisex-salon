import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Where Style Meets Confidence.</h1>
          <p>Premium hair, beauty and grooming experiences designed for every style in a luxurious gender-neutral environment.</p>
          
          <div className="hero-buttons">
            <a href="#book" className="btn btn-primary">Book an Appointment</a>
            <a href="#services" className="btn btn-outline">Explore Services</a>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <h4>10+</h4>
              <p>Years of Expertise</p>
            </div>
            <div className="stat-item">
              <h4>5,000+</h4>
              <p>Happy Clients</p>
            </div>
            <div className="stat-item">
              <h4>15+</h4>
              <p>Pro Stylists</p>
            </div>
          </div>
        </div>
        
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="LuxeGlow Premium Salon Interior" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
