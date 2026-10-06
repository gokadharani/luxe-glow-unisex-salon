import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    else if (!/^\d{10,15}$/.test(formData.phone.replace(/[-+()\s]/g, ''))) newErrors.phone = 'Valid phone is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setShowToast(true);
      setFormData({ name: '', phone: '', email: '', service: '', date: '', time: '', message: '' });
      setTimeout(() => setShowToast(false), 5000);
    }
  };

  return (
    <>
      <section id="book" className="section appointment">
        <div className="container">
          <h2 className="section-title">Reserve Your Time</h2>
          <p className="section-subtitle">Book your appointment today and let our experts take care of the rest.</p>
          
          <form className="appointment-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Full Name" 
                  className="form-control" 
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>
              
              <div className="form-group">
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="Phone Number" 
                  className="form-control"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <span className="error-text">{errors.phone}</span>}
              </div>
              
              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email Address" 
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>
              
              <div className="form-group">
                <select 
                  name="service" 
                  className="form-control"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Select Service Category</option>
                  <option value="hair">Haircut & Styling</option>
                  <option value="color">Hair Coloring</option>
                  <option value="grooming">Men's Grooming</option>
                  <option value="beauty">Beauty & Facials</option>
                  <option value="spa">Spa & Massage</option>
                  <option value="package">Curated Package</option>
                </select>
                {errors.service && <span className="error-text">{errors.service}</span>}
              </div>
              
              <div className="form-group">
                <input 
                  type="date" 
                  name="date" 
                  className="form-control"
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                />
                {errors.date && <span className="error-text">{errors.date}</span>}
              </div>
              
              <div className="form-group">
                <input 
                  type="time" 
                  name="time" 
                  className="form-control"
                  value={formData.time}
                  onChange={handleChange}
                />
                {errors.time && <span className="error-text">{errors.time}</span>}
              </div>
              
              <div className="form-group full">
                <textarea 
                  name="message" 
                  placeholder="Any special requests or details we should know?" 
                  className="form-control" 
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              
              <div className="form-group full">
                <button type="submit" className="btn btn-primary" style={{ width: '100%', fontSize: '1.1rem' }}>
                  Confirm Booking
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      <div className={`toast ${showToast ? 'show' : ''}`}>
        <CheckCircle2 size={24} color="white" />
        <div>
          <strong style={{ display: 'block', fontSize: '1.05rem' }}>Success!</strong>
          Appointment request received! We'll contact you shortly to confirm your appointment.
        </div>
      </div>
    </>
  );
};

export default Appointment;
