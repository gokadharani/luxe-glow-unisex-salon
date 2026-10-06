import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import FeaturedServices from './components/FeaturedServices';
import { About, WhyChooseUs } from './components/About';
import Team from './components/Team';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Appointment from './components/Appointment';
import { Contact, Footer } from './components/Contact';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <FeaturedServices />
        <Services />
        <About />
        <WhyChooseUs />
        <Team />
        <Pricing />
        <Testimonials />
        <Appointment />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
