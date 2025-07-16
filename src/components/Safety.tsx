import React from 'react';
import { Shield, CheckCircle, AlertTriangle, Users, Headphones, HardHat } from 'lucide-react';

const Safety: React.FC = () => {
  const safetyFeatures = [
    {
      icon: Shield,
      title: "Professional Safety Equipment",
      description: "Full-body coveralls, safety goggles, closed-toe shoes, and protective gloves provided for every session."
    },
    {
      icon: HardHat,
      title: "Trained Safety Officers",
      description: "Certified safety instructors supervise every session and provide comprehensive safety briefings."
    },
    {
      icon: Users,
      title: "Controlled Environment",
      description: "Soundproof rooms with reinforced walls, proper ventilation, and emergency protocols in place."
    },
    {
      icon: Headphones,
      title: "Hearing Protection",
      description: "Noise-canceling headphones provided to protect your hearing during high-impact sessions."
    }
  ];

  const rules = [
    "Must be 16+ years old (16-17 requires parent/guardian supervision)",
    "Mandatory safety briefing before each session",
    "All safety equipment must be worn at all times",
    "No alcohol or substances allowed before sessions",
    "Follow all instructor commands immediately",
    "No personal items in the destruction zone",
    "Medical conditions must be disclosed beforehand",
    "Maximum session duration strictly enforced"
  ];

  const emergencyProcedures = [
    "Immediate stop signal recognition and response",
    "First aid certified staff on-site at all times",
    "Direct emergency contact with local medical facilities",
    "Comprehensive insurance coverage for all participants",
    "Regular safety equipment inspection and maintenance",
    "Incident reporting and review procedures"
  ];

  return (
    <section id="safety" className="py-20 bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-6">
            Safety
            <span className="text-primary block sm:inline sm:ml-3">FIRST ALWAYS</span>
          </h2>
          <p className="font-body text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Your safety is our top priority. We maintain the highest safety standards to ensure 
            every rage session is both thrilling and completely secure.
          </p>
        </div>

        {/* Safety Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {safetyFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-dark-800 rounded-xl p-6 text-center hover:bg-dark-700 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Safety Rules and Procedures */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Safety Rules */}
          <div className="bg-gradient-to-br from-dark-800 to-dark-700 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <AlertTriangle className="h-8 w-8 text-primary mr-3" />
              <h3 className="font-display font-bold text-2xl text-white">Safety Rules</h3>
            </div>
            <div className="space-y-4">
              {rules.map((rule, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">{rule}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency Procedures */}
          <div className="bg-gradient-to-br from-dark-800 to-dark-700 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-primary mr-3" />
              <h3 className="font-display font-bold text-2xl text-white">Emergency Procedures</h3>
            </div>
            <div className="space-y-4">
              {emergencyProcedures.map((procedure, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">{procedure}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Safety Statistics */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 text-center">
          <h3 className="font-display font-bold text-2xl text-white mb-6">Our Safety Record</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-display font-bold text-primary mb-2">99.9%</div>
              <div className="text-gray-300">Incident-Free Sessions</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-primary mb-2">1000+</div>
              <div className="text-gray-300">Safe Sessions Completed</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-primary mb-2">Zero</div>
              <div className="text-gray-300">Serious Injuries</div>
            </div>
          </div>
        </div>

        {/* Safety Disclaimer */}
        <div className="mt-12 bg-dark-800 rounded-lg p-6 border-l-4 border-primary">
          <h4 className="font-semibold text-white mb-3">Important Safety Disclaimer</h4>
          <p className="text-gray-300 text-sm leading-relaxed">
            Participation in rage room activities involves inherent risks. All participants must sign 
            a waiver and follow safety protocols. THE RAGE HOUSE maintains comprehensive insurance 
            and adheres to international safety standards. Participants with heart conditions, 
            pregnancy, or other medical concerns should consult with our staff before booking.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Safety;