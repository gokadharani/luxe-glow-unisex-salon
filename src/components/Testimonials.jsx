import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah Jenkins",
      text: "Absolutely love my new hair color! The stylist really listened to what I wanted and the result is stunning. The salon itself has such a relaxing vibe.",
      rating: 5
    },
    {
      name: "David Chen",
      text: "Best grooming experience in the city. The hot towel shave was incredibly relaxing and the haircut was precise. Highly recommend Rahul's services.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      text: "I booked the Luxe package for my birthday and it was worth every penny. The spa treatment melted all my stress away. Very professional staff.",
      rating: 5
    },
    {
      name: "Michael Ross",
      text: "Clean, modern, and unisex which I really appreciate. They use great products and never keep you waiting past your appointment time.",
      rating: 4
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Client Stories</h2>
        <p className="section-subtitle">Don't just take our word for it. Here's what our wonderful clients have to say about their LuxeGlow experience.</p>
        
        <div className="testimonials-grid">
          {reviews.map((review, index) => (
            <div key={index} className="testimonial-card">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill={i < review.rating ? "#fbbf24" : "none"} stroke={i < review.rating ? "#fbbf24" : "#ccc"} />
                ))}
              </div>
              <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', color: 'var(--color-text-light)' }}>"{review.text}"</p>
              <h4 style={{ fontFamily: 'var(--font-heading)' }}>{review.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
