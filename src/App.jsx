import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { AboutUs } from './components/AboutUs/AboutUs';
import { Services } from './components/Services/Services';
import { Benefits } from './components/Benefits/Benefits';
import { Testimonials } from './components/Testimonials/Testimonials';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

import './index.css';
import './App.css';
import { Faq } from './components/Faq/Faq';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <Benefits />
        <Faq />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;