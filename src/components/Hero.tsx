import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Black Gradient Background with Subtle Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-dark-900 to-gray-900">
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/50"></div>
        {/* Animated subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_70%,rgba(204,0,0,0.4)_0%,transparent_50%)] animate-pulse-slow"></div>
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_70%_30%,rgba(204,0,0,0.3)_0%,transparent_60%)] animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Column - Main Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight">
                UNLEASH YOUR{' '}
                <span className="text-primary animate-pulse-slow">RAGE</span>
                <br />
                BREAK EVERYTHING
              </h1>
              <p className="font-body text-lg sm:text-xl md:text-2xl text-gray-300 mt-6 max-w-2xl leading-relaxed">
                Bangladesh's premier rage room experience. Smash, break, and destroy in a safe, controlled environment.
              </p>
            </div>

            {/* CTA Button */}
            <div className="animate-slide-up">
              <button
                onClick={() => scrollToSection('contact')}
                className="group bg-primary hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>BOOK YOUR RAGE</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column - Clean Image Only */}
          <div className="relative animate-scale-in">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/Rage House .png"
                alt="Rage room experience"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              
              {/* Subtle gradient overlay for better integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              
              {/* Animated border effect */}
              <div className="absolute inset-0 border-2 border-primary/30 rounded-2xl animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;