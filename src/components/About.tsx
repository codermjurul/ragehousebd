import React from 'react';
import { Target, Heart, Zap, Award, Users, Clock } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: "1000+", label: "Happy Customers", icon: Users },
    { number: "50,000+", label: "Items Destroyed", icon: Zap },
    { number: "99.9%", label: "Safety Record", icon: Award },
    { number: "365", label: "Days Open", icon: Clock }
  ];

  const values = [
    {
      icon: Target,
      title: "Stress Relief",
      description: "Our scientifically-backed approach helps you release built-up tension and anxiety in a healthy, controlled environment."
    },
    {
      icon: Heart,
      title: "Mental Wellness",
      description: "Experience the therapeutic benefits of physical destruction while improving your mental health and emotional balance."
    },
    {
      icon: Zap,
      title: "Pure Fun",
      description: "Sometimes you just need to break things! We provide a safe space for uninhibited fun and excitement."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-dark-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-6">
            About
            <span className="text-primary block sm:inline sm:ml-3">THE RAGE HOUSE</span>
          </h2>
          <p className="font-body text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Bangladesh's first and premier rage room experience, where stress meets its match.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6 animate-slide-up">
            <h3 className="font-display font-bold text-2xl md:text-3xl text-white">
              Our Story
            </h3> 
            <div className="space-y-4 text-gray-300">
              <p>
                Founded in 2025 by the one and only <b>Hasibur Rahaman Khan Mojlish</b>, THE RAGE HOUSE was born from a simple observation: in our fast-paced, 
                high-stress world, people needed a safe, fun way to release their frustrations especially in Bangladesh!
              </p>
              <p>
                What started as a unique idea has grown into Bangladesh's most popular stress-relief 
                destination. We've created a space where breaking things isn't just allowed—it's encouraged!
              </p>
              <p>
                Our mission is to provide a therapeutic, entertaining, and completely safe environment 
                where people can let go of their stress, connect with friends, and experience the 
                pure joy of controlled destruction.
              </p>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="bg-gradient-to-br from-primary/20 to-transparent rounded-2xl p-8">
              <img
                src="/https://res.cloudinary.com/dankeqpe3/image/upload/v1757690327/IMG_1698_untql1.heic"
                alt="Rage room experience"
                className="rounded-lg shadow-xl w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="bg-dark-800/50 rounded-lg p-6 text-center hover:bg-dark-800 transition-all duration-300 border border-gray-800 hover:border-primary/30 animate-fade-in"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <IconComponent className="h-8 w-8 text-primary mx-auto mb-3 animate-float" style={{animationDelay: `${index * 0.3}s`}} />
                <div className="font-display font-bold text-2xl md:text-3xl text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-white text-center mb-12 animate-fade-in">
            Why Choose THE RAGE HOUSE?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="bg-dark-800/30 rounded-xl p-8 text-center hover:bg-dark-800/50 transition-all duration-300 hover:transform hover:scale-105 border border-gray-800 hover:border-primary/30 animate-slide-up"
                  style={{animationDelay: `${index * 0.3}s`}}
                >
                  <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 animate-float" style={{animationDelay: `${index * 0.4}s`}}>
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-display font-bold text-xl text-white mb-4">{value.title}</h4>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center animate-fade-in" style={{animationDelay: '1s'}}>
          <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-8">
            Our Expert Team
          </h3>
          <p className="text-gray-300 max-w-3xl mx-auto mb-8">
            Our certified safety instructors and trained staff ensure every session is both 
            thrilling and completely secure. With over 1000+ successful sessions, we're 
            Bangladesh's most trusted rage room experience.
          </p>
          <div className="bg-primary/10 rounded-lg p-6 max-w-2xl mx-auto border border-primary/20">
            <p className="text-white font-semibold italic">
              "We don't just provide a service—we create an experience that transforms stress 
              into satisfaction, anger into amusement, and tension into triumph."
            </p>
            <p className="text-primary font-semibold mt-4">- The Rage House Team</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;