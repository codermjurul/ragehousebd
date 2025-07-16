import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Safety from './components/Safety';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingBookingButton from './components/FloatingBookingButton';

function App() {
  return (
    <div className="bg-dark-900 text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Safety />
        <Contact />
      </main>
      <Footer />
      <FloatingBookingButton />
    </div>
  );
}

export default App;