import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Calendar, MessageCircle, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    participants: '',
    address: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmissionMessage('');

    try {
      const response = await fetch('https://hook.eu2.make.com/c3se0oml0ansekvbsterk56o5nqdk059', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Always show success message since webhook doesn't send response
      setSubmissionMessage('Booking request sent successfully! We will contact you soon to confirm your session.');
      // Clear form data on successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        participants: '',
        address: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmissionMessage('Failed to send booking request. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: [
        "Rupayan ZR Plaza 10th Floor",
        "Dhanmondi 9/A Satmasjid Road",
        "Dhaka 1209"
      ]
    },
    {
      icon: Phone,
      title: "Phone",
      details: [
        "+880 1339-491027",
        "+880 1316-314296"
      ]
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "ragehouse24@gmail.com"
      ]
    },
    {
      icon: Clock,
      title: "Operating Hours",
      details: [
        "Sat - Thu: 1PM - 11PM",
        "Fri: 3PM - 11PM",
        "Closed on Public Holidays"
      ]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-6">
            Book Your
            <span className="text-primary block sm:inline sm:ml-3">RAGE SESSION</span>
          </h2>
          <p className="font-body text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to release your stress? Book your session now or get in touch with us 
            for custom packages and group bookings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-dark-800 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <Calendar className="h-6 w-6 text-primary mr-3" />
              <h3 className="font-display font-bold text-2xl text-white">Book Your Session</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="+880 1727-546095"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Service Package *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <option value="">Select a package</option>
                    <option value="Mini Rage">Mini Rage - ৳499</option>
                    <option value="Quick Rage">Quick Rage - ৳999</option>
                    <option value="Double Rage">Double Rage - ৳1,599</option>
                    <option value="Ultimate Rage">Ultimate Rage - ৳2,499</option>
                    <option value="Squad Rage">Squad Rage - ৳4,999</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Preferred Time *
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <option value="">Select time</option>
                    <option value="2pm">2:00 PM</option>
                    <option value="3pm">3:00 PM</option>
                    <option value="4pm">4:00 PM</option>
                    <option value="5pm">5:00 PM</option>
                    <option value="6pm">6:00 PM</option>
                    <option value="7pm">7:00 PM</option>
                    <option value="8pm">8:00 PM</option>
                    <option value="9pm">9:00 PM</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Participants
                  </label>
                  <select
                    name="participants"
                    value={formData.participants}
                    onChange={handleInputChange}
                    disabled={isLoading}
                    className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <option value="">Select number</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5">5 People</option>
                    <option value="6+">6+ People</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Address (Optional)
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Your location helps us serve better"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary hover:bg-primary-700 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:scale-100 flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Booking...</span>
                  </>
                ) : (
                  <span>Book My Session</span>
                )}
              </button>

              {/* Submission Message */}
              {submissionMessage && (
                <div className={`p-4 rounded-lg text-center ${
                  submissionMessage.includes('successfully') 
                    ? 'bg-green-900/20 border border-green-500/30 text-green-400' 
                    : 'bg-red-900/20 border border-red-500/30 text-red-400'
                }`}>
                  {submissionMessage}
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="bg-dark-800 rounded-xl p-6 hover:bg-dark-700 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/20 rounded-lg p-3 flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-display font-semibold text-lg text-white mb-2">
                          {info.title}
                        </h4>
                        <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-gray-300">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <MessageCircle className="h-6 w-6 text-primary mr-3" />
                <h4 className="font-display font-semibold text-lg text-white">
                  Need Quick Help?
                </h4>
              </div>
              <p className="text-gray-300 mb-4">
                Have questions or need immediate assistance? Our team is ready to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+8801339491027"
                  className="bg-primary hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-200"
                >
                  Call Now
                </a>
                <a
                  href="mailto:ragehouse24@gmail.com"
                  className="bg-dark-700 hover:bg-dark-600 text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-200"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;