import React from 'react';
import { Check, Star, Users, Clock, Hammer, Shield } from 'lucide-react';

interface Package {
  name: string;
  originalPrice: string;
  discountedPrice: string;
  duration: string;
  participants: string;
  features: string[];
  popular?: boolean;
  icon: React.ElementType;
}

const Services: React.FC = () => {
  const packages: Package[] = [
    {
      name: "The Starter",
      originalPrice: "৳599",
      discountedPrice: "৳499",
      duration: "10 mins +",
      participants: "1 person",
      icon: Hammer,
      features: [
        "3 glass bottles",
        "4 clay items",
        "1 keyboard"
      ]
    },
    {
      name: "The Double Trouble",
      originalPrice: "৳1,099",
      discountedPrice: "৳999",
      duration: "15 mins +",
      participants: "2 people",
      icon: Users,
      popular: true,
      features: [
        "6 glass bottles",
        "6 clay items",
        "2 keyboards",
        "1 medium TV"
      ]
    },
    {
      name: "The Ultimate Rage",
      originalPrice: "৳1,599",
      discountedPrice: "৳1,499",
      duration: "20 mins +",
      participants: "1-3 people",
      icon: Star,
      features: [
        "10 glass bottles",
        "10 clay items",
        "4 keyboards",
        "1 large TV",
        "1 small TV or casing"
      ]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-6">
            Choose Your
            <span className="text-primary block sm:inline sm:ml-3">DESTRUCTION PACKAGE</span>
          </h2>
          <p className="font-body text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            Select the perfect rage room experience for your needs. All packages include safety equipment, 
            professional supervision, and an unforgettable stress-relief session.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon;
            return (
              <div
                key={pkg.name}
                className={`relative bg-dark-900 rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl border-2 animate-scale-in ${
                  pkg.popular 
                    ? 'border-primary shadow-lg shadow-primary/20 animate-glow' 
                    : 'border-gray-700 hover:border-primary/50'
                }`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold animate-pulse-slow">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                {/* Discount Badge */}
                <div className="absolute -top-3 -right-3">
                  <div className="bg-gradient-to-r from-primary to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold transform rotate-12 shadow-lg">
                    SAVE ৳100
                  </div>
                </div>

                {/* Package Header */}
                <div className="text-center mb-8">
                  <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 animate-float">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white mb-4">{pkg.name}</h3>
                  
                  {/* Pricing with Discount */}
                  <div className="mb-4">
                    <div className="text-lg text-gray-400 line-through mb-1">{pkg.originalPrice}</div>
                    <div className="text-4xl font-display font-bold text-primary mb-2">{pkg.discountedPrice}</div>
                    <div className="text-primary text-sm font-semibold mt-2">
                      Till July 31st!
                    </div>
                  </div>
                  
                  <div className="text-gray-400 space-y-1">
                    <div className="flex items-center justify-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Users className="h-4 w-4" />
                      <span>{pkg.participants}</span>
                    </div>
                  </div>
                  
                  {/* Additional charge info for Ultimate Rage */}
                  {pkg.name === "The Ultimate Rage" && (
                    <div className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-md mt-2">
                      Extra ৳500 charge for every additional person
                    </div>
                  )}
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Book Button */}
                <button
                  onClick={scrollToContact}
                  className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                    pkg.popular || pkg.name === "The Double Trouble"
                      ? 'bg-primary hover:bg-primary-700 text-white shadow-lg hover:shadow-primary/30'
                      : 'bg-gray-800 hover:bg-primary text-white border border-gray-600 hover:border-primary'
                  }`}
                >
                  Book This Package
                </button>
              </div>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="mt-16 text-center animate-fade-in" style={{animationDelay: '0.8s'}}>
          <h3 className="font-display font-bold text-2xl text-white mb-8">Additional Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Corporate Team Building", icon: Users, description: "Custom packages for companies" },
              { name: "Birthday Parties", icon: Star, description: "Special celebration packages" },
              { name: "Safety Training", icon: Shield, description: "Professional safety briefing" },
              { name: "Extended Sessions", icon: Clock, description: "Longer destruction time" }
            ].map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <div 
                  key={index} 
                  className="bg-dark-900 rounded-lg p-6 hover:bg-dark-800 transition-all duration-300 hover:transform hover:scale-105 border border-gray-800 hover:border-primary/30 animate-slide-up"
                  style={{animationDelay: `${1 + index * 0.1}s`}}
                >
                  <ServiceIcon className="h-8 w-8 text-primary mx-auto mb-3 animate-float" style={{animationDelay: `${index * 0.5}s`}} />
                  <h4 className="font-semibold text-white mb-2">{service.name}</h4>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;