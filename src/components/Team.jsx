import React from 'react';

const Team = () => {
  const team = [
    {
      name: "Arjun",
      role: "Senior Hair Stylist",
      specialty: "Precision Cuts & Balayage",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Meera",
      role: "Beauty Specialist",
      specialty: "Advanced Facials & Skincare",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Rahul",
      role: "Grooming Expert",
      specialty: "Classic Barbering & Beard Styling",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Ananya",
      role: "Spa & Wellness Specialist",
      specialty: "Deep Tissue & Aromatherapy",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section id="team" className="section">
      <div className="container">
        <h2 className="section-title">Meet Our Experts</h2>
        <p className="section-subtitle">A team of passionate professionals dedicated to making you look and feel your absolute best.</p>
        
        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className="team-card">
              <img src={member.img} alt={member.name} className="team-img" />
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem' }}>{member.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
