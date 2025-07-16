import React, { useState, useEffect } from 'react';
import { Calendar, X } from 'lucide-react';

const FloatingBookingButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToContact}
      className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 group animate-bounce-slow"
      aria-label="Book Now"
    >
      <Calendar className="h-6 w-6" />
      <div className="absolute -top-2 -left-16 bg-dark-800 text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
        Book Now
      </div>
    </button>
  );
};

export default FloatingBookingButton;