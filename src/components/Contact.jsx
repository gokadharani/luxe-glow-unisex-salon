import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">We're here to answer any questions you might have.</p>
        
        <div className="contact-grid">
          <div className="contact-info">
            <h3 style={{ fontFamily: 'var(--font-heading)', marginBottom: '2rem', fontSize: '1.8rem' }}>Salon Information</h3>
            
            <div className="contact-info-item">
              <MapPin className="contact-icon" size={24} />
              <div>
                <h4 style={{ marginBottom: '0.5rem' }}>Location</h4>
                <p style={{ color: 'var(--color-text-light)' }}>123 Luxury Avenue, Suite 45<br/>Beverly Hills, CA 90210</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <Phone className="contact-icon" size={24} />
              <div>
                <h4 style={{ marginBottom: '0.5rem' }}>Phone & WhatsApp</h4>
                <p style={{ color: 'var(--color-text-light)' }}>+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <Mail className="contact-icon" size={24} />
              <div>
                <h4 style={{ marginBottom: '0.5rem' }}>Email</h4>
                <p style={{ color: 'var(--color-text-light)' }}>hello@luxeglowsalon.com</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <Clock className="contact-icon" size={24} />
              <div>
                <h4 style={{ marginBottom: '0.5rem' }}>Opening Hours</h4>
                <p style={{ color: 'var(--color-text-light)' }}>Monday - Friday: 9:00 AM - 8:00 PM<br/>Saturday: 9:00 AM - 7:00 PM<br/>Sunday: 10:00 AM - 5:00 PM</p>
              </div>
            </div>
            
            <a href="https://wa.me/15551234567" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ marginTop: '1rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <Phone size={18} /> Message on WhatsApp
            </a>
          </div>
          
          <div className="map-container">
            {/* Mock map using a static image or a styled div for demo purposes */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.707567702582!2d-118.40248448478442!3d34.0770282806019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1645000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              title="Salon Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-logo">Luxe<span style={{ color: 'var(--color-primary)' }}>Glow</span></div>
            <p style={{ color: '#bbb', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              A premium unisex salon offering professional hair, grooming, beauty, and spa services designed for every style.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ color: 'var(--color-white)', fontWeight: 'bold' }}>IG</a>
              <a href="#" style={{ color: 'var(--color-white)', fontWeight: 'bold' }}>FB</a>
              <a href="#" style={{ color: 'var(--color-white)', fontWeight: 'bold' }}>X</a>
            </div>
          </div>
          
          <div className="footer-col">
            <h4 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#team">Our Team</a></li>
              <li><a href="#pricing">Pricing</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>Services</h4>
            <ul className="footer-links">
              <li><a href="#services">Hair Styling</a></li>
              <li><a href="#services">Men's Grooming</a></li>
              <li><a href="#services">Beauty & Facials</a></li>
              <li><a href="#services">Spa & Massage</a></li>
              <li><a href="#services">Bridal Packages</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>Newsletter</h4>
            <p style={{ color: '#bbb', marginBottom: '1rem' }}>Subscribe to get special offers and updates.</p>
            <div style={{ display: 'flex' }}>
              <input 
                type="email" 
                placeholder="Your email address" 
                style={{ padding: '10px 15px', border: 'none', borderRadius: '4px 0 0 4px', width: '100%', outline: 'none' }}
              />
              <button style={{ background: 'var(--color-primary)', border: 'none', color: 'white', padding: '0 15px', borderRadius: '0 4px 4px 0', cursor: 'pointer' }}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} LuxeGlow Unisex Salon. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
