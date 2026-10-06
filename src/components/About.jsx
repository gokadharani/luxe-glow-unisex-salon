import React from 'react';
import { Award, Sparkles, Heart, Shield, Clock } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="section">
      <div className="container about-content">
        <div className="about-image">
          <img 
            src="https://images.unsplash.com/photo-1521590832167-7bfcfaa6362f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="LuxeGlow Salon Interior" 
          />
        </div>
        <div className="about-text">
          <h2>Redefining the Salon Experience</h2>
          <p>
            At LuxeGlow, we believe that self-care is a necessity, not a luxury. Founded with a vision to provide a gender-neutral space where everyone feels welcome, we've created a sanctuary dedicated to premium styling, grooming, and relaxation.
          </p>
          <p>
            Our team of experienced stylists and therapists are passionate about their craft, continuously training to bring you the latest trends and modern techniques. We use only premium products to ensure your hair and skin receive the best possible care in a hygienic, comfortable environment.
          </p>
          <a href="#team" className="btn btn-outline" style={{ marginTop: '1rem' }}>Meet Our Team</a>
        </div>
      </div>
    </section>
  );
};

export const WhyChooseUs = () => {
  const features = [
    { icon: <Award size={30} />, title: 'Experienced Professionals', desc: 'Our team consists of highly trained and certified experts.' },
    { icon: <Sparkles size={30} />, title: 'Premium Products', desc: 'We use only top-tier, salon-exclusive products for all treatments.' },
    { icon: <Heart size={30} />, title: 'Personalized Service', desc: 'Every treatment begins with a thorough consultation.' },
    { icon: <Shield size={30} />, title: 'Hygienic & Comfortable', desc: 'We maintain the highest standards of cleanliness and sanitation.' },
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
      <div className="container">
        <h2 className="section-title">Why Choose LuxeGlow</h2>
        <p className="section-subtitle">Experience the difference that passion, expertise, and quality make.</p>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 style={{ marginBottom: '1rem' }}>{feature.title}</h3>
              <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem' }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
