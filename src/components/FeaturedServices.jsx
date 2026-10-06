import React from 'react';

const FeaturedServices = () => {
  const featured = [
    {
      title: "Signature Hair Styling",
      price: "From $65",
      img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Luxe Hair Spa",
      price: "From $85",
      img: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Premium Grooming",
      price: "From $55",
      img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Relaxation Spa",
      price: "From $110",
      img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="section featured">
      <div className="container">
        <h2 className="section-title">Signature Experiences</h2>
        <p className="section-subtitle">Our most requested premium treatments for the ultimate salon experience.</p>
        
        <div className="featured-grid">
          {featured.map((item, index) => (
            <div key={index} className="featured-card">
              <img src={item.img} alt={item.title} className="featured-img" />
              <h3>{item.title}</h3>
              <p style={{ color: 'var(--color-primary)', marginTop: '0.5rem' }}>{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
