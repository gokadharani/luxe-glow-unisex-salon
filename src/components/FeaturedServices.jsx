import React from 'react';

const FeaturedServices = () => {
  const featured = [
    {
      title: "Signature Hair Styling",
      price: "From $65",
      img: "https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Luxe Hair Spa",
      price: "From $85",
      img: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Premium Grooming",
      price: "From $55",
      img: "https://images.unsplash.com/photo-1621607512281-259678c2e64a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Relaxation Spa",
      price: "From $110",
      img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
