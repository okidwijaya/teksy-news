"use client";
import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Page(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.subject && formData.message) {
      setShowSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-5">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2 animate-fadeIn">
        <div className="bg-black text-white p-12 md:p-16 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-gray-300 text-lg mb-12 leading-relaxed">
            Have a project in mind or want to discuss how we can help? We had love to hear from you. 
            Drop us a message and we will get back to you as soon as possible.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
              <Mail className="w-6 h-6" />
              <span className="text-lg">kitadevelopers@gmail.com</span>
            </div>

            <div className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
              <Phone className="w-6 h-6" />
              <span className="text-lg">+6282136735672</span>
            </div>

            <div className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
              <MapPin className="w-6 h-6" />
              <span className="text-lg">Jakarta, Indonesia</span>
            </div>
          </div>
        </div>

        <div className="p-12 md:p-16 bg-white">
          {showSuccess && (
            <div className="bg-black text-white p-4 rounded-lg mb-6 animate-slideDown">
              Thank you! Your message has been sent successfully.
            </div>
          )}

          <h2 className="text-3xl font-bold text-black mb-3">Send us a Message</h2>
          <p className="text-gray-600 mb-8">Fill out the form below and we will respond within 24 hours.</p>

          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-black mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-black mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Inquiry"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-black mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                rows={5}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black focus:outline-none transition-colors resize-none"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};