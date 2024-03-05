import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Appointment from './components/Appointment';
import Resources from './components/Resources';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
      <HeroSection />

      </div>
      <AboutUs />
      <Services />
      <Appointment />
      <Resources />
      <Testimonials />
      <ContactUs />
    </div>
  );
}

export default App;
