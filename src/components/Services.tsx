import React from 'react';
import { Check, Star, Users, Clock, Hammer, Shield, Zap, Crown, Target } from 'lucide-react';

interface Package {
  name: string;
  price: string;
  duration: string;
  participants: string;
  items: string[];
  popular?: boolean;
  icon: React.ElementType;
  addPersonDetails?: string;
}

const Services: React.FC = () => {
  const packages: Package[] = [
    {
      name: "Mini Rage",
      price: "৳499",
      duration: "5 mins",
      participants: "1 person",
      icon: Hammer,
      items: [
        "6 bottles",
        "1 ceramic",
        "1 keyboard"
      ],
      addPersonDetails: "No extra person allowed"
    },
    {
      name: "Quick Rage",
      price: "৳999",
      duration: "10 mins",
      participants: "1 person",
      icon: Zap,
      items: [
        "10 bottles",
        "1 ceramic",
        "2 keyboards"
      ],
      addPersonDetails: "Add 1 person: +6 bottles +1 keyboard +৳599"
    },
    {
      name: "Double Rage",
      price: "৳1,599",
      duration: "15 mins",
      participants: "1-2 people",
      icon: Users,
      items: [
        "15 bottles",
        "2 ceramics",
        "3 keyboards",
        "1 monitor"
      ],
      addPersonDetails: "Add 1 person: +10 bottles +1 keyboard +1 ceramic +৳699"
    },
    {
      name: "Ultimate Rage",
      price: "৳2,499",
      duration: "20 mins",
      participants: "1-3 people",
      icon: Crown,
      popular: true,
      items: [
        "30 bottles",
        "4 ceramics",
        "4 keyboards",
        "1 monitor",
        "1 TV"
      ],
      addPersonDetails: "Add 1 person: +15 bottles +2 keyboards +1 ceramic +৳799"
    },
    {
      name: "Squad Rage",
      price: "৳4,999",
      duration: "30 mins",
      participants: "4-8 people",
      icon: Target,
      items: [
        "60 bottles",
        "10 ceramics",
        "6 keyboards",
        "2 monitors",
        "2 TVs"
      ],
      addPersonDetails: "Add 1 person: +18 bottles +3 keyboards +1 monitor +৳999"
    }
  ];

  const addOns = [
    { item: "5 bottles", price: "৳149" },
    { item: "2 keyboards", price: "৳149" },
    { item: "2 ceramics", price: "৳149" },
    { item: "1 monitor", price: "৳599" },
    { item: "1 TV", price: "৳999" }
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
            Brand New
            <span className="text-primary block sm:inline sm:ml-3">PACKAGES</span>
          </h2>
          <p className="font-body text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            Choose your perfect rage experience. All packages include safety equipment, 
            professional supervision, and an unforgettable stress-relief session.
          </p>
          <div className="flex items-center justify-center space-x-6 text-gray-300">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-primary" />
              <span>Open: 11AM - 9PM</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>📞 +880 13 3949 1027</span>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon;
            const isUltimate = pkg.name === "Ultimate Rage";
            const isSquad = pkg.name === "Squad Rage";
            
            return (
              <div
                key={pkg.name}
                className={`relative rounded-2xl p-6 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl border-2 animate-scale-in ${
                  isUltimate
                    ? 'bg-gradient-to-br from-primary/20 to-primary/5 border-primary shadow-lg shadow-primary/30 animate-glow lg:col-span-1 lg:row-span-1 lg:scale-110 lg:z-10' 
                    : isSquad
                    ? 'bg-gradient-to-br from-dark-800 to-dark-700 border-accent-orange hover:border-accent-orange/70 lg:col-span-2'
                    : 'bg-dark-900 border-gray-700 hover:border-primary/50'
                }`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-white px-6 py-2 rounded-full text-sm font-bold animate-pulse-slow flex items-center space-x-2">
                      <Star className="h-4 w-4" />
                      <span>MOST POPULAR</span>
                      <Star className="h-4 w-4" />
                    </div>
                  </div>
                )}

                {/* Package Header */}
                <div className="text-center mb-6">
                  <div className={`rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 animate-float ${
                    isUltimate ? 'bg-primary/30' : 'bg-primary/20'
                  }`}>
                    <IconComponent className={`h-8 w-8 ${isUltimate ? 'text-white' : 'text-primary'}`} />
                  </div>
                  <h3 className={`font-display font-bold text-2xl mb-4 ${
                    isUltimate ? 'text-white' : 'text-white'
                  }`}>{pkg.name}</h3>
                  
                  {/* Pricing */}
                  <div className="mb-4">
                    <div className={`text-4xl font-display font-bold mb-2 ${
                      isUltimate ? 'text-primary' : 'text-primary'
                    }`}>{pkg.price}</div>
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
                </div>

                {/* Items List */}
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-white text-center mb-4">What's Included:</h4>
                  {pkg.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-3">
                      <Check className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                        isUltimate ? 'text-primary' : 'text-primary'
                      }`} />
                      <span className="text-gray-300 capitalize">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Add Person Details */}
                {pkg.addPersonDetails && pkg.name !== "Mini Rage" && (
                  <div className={`text-xs p-3 rounded-lg mb-6 ${
                    isUltimate 
                      ? 'bg-primary/10 border border-primary/30 text-gray-200' 
                      : 'bg-gray-800 border border-gray-600 text-gray-300'
                  }`}>
                    <div className="font-medium mb-1">Additional Person:</div>
                    <div>{pkg.addPersonDetails}</div>
                  </div>
                )}

                {/* Book Button */}
                <button
                  onClick={scrollToContact}
                  className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                    isUltimate
                      ? 'bg-primary hover:bg-primary-700 text-white shadow-lg hover:shadow-primary/30'
                      : isSquad
                      ? 'bg-accent-orange hover:bg-accent-orange/80 text-white shadow-lg'
                      : 'bg-gray-800 hover:bg-primary text-white border border-gray-600 hover:border-primary'
                  }`}
                >
                  Book This Package
                </button>
              </div>
            );
          })}
        </div>

        {/* Add-ons Section */}
        <div className="mt-16 animate-fade-in" style={{animationDelay: '1s'}}>
          <div className="text-center mb-12">
            <h3 className="font-display font-bold text-3xl text-white mb-4">
              Customize Your
              <span className="text-primary ml-3">RAGE</span>
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Want more destruction? Add extra items to any package for the ultimate rage experience.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-dark-800 to-dark-700 rounded-2xl p-8 border border-gray-700">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {addOns.map((addon, index) => (
                <div 
                  key={index}
                  className="bg-dark-900 rounded-lg p-4 text-center hover:bg-dark-800 transition-all duration-300 hover:transform hover:scale-105 border border-gray-600 hover:border-primary/50 animate-slide-up"
                  style={{animationDelay: `${1.2 + index * 0.1}s`}}
                >
                  <div className="text-white font-semibold mb-2 capitalize">{addon.item}</div>
                  <div className="text-primary font-bold text-lg">{addon.price}</div>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <p className="text-gray-400 text-sm">
                Add-ons can be included when booking your session. Contact us for custom combinations!
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in" style={{animationDelay: '1.4s'}}>
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
            <h3 className="font-display font-bold text-3xl text-white mb-4">
              BOOK YOUR SPOTS NOW!
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              Rupayan ZR Plaza, Level 10, Dhanmondi, Dhaka
            </p>
            <button
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-bold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Book Your Rage Session
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;