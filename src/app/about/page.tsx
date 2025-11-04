'use client';

import { useState } from 'react';
import { Code, Smartphone, ShoppingBag, Server, Users, Target, Award, Zap } from 'lucide-react';

export default function Page() {
  const [showBanner, setShowBanner] = useState(true);

  const values = [
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'We push boundaries with cutting-edge technologies to deliver solutions that give you a competitive edge.'
    },
    {
      icon: Users,
      title: 'Client Partnership',
      description: 'Your success is our mission. We work alongside you as true partners throughout the entire journey.'
    },
    {
      icon: Target,
      title: 'Results Driven',
      description: 'Every line of code, every design decision is made with your business goals and ROI in mind.'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in code quality, security, and performance across all projects.'
    }
  ];

  const expertise = [
    { icon: Code, title: 'Web Development', count: '200+' },
    { icon: Smartphone, title: 'Mobile Apps', count: '150+' },
    { icon: ShoppingBag, title: 'E-Commerce', count: '180+' },
    { icon: Server, title: 'SaaS Solutions', count: '90+' }
  ];

  const milestones = [
    { year: '2018', title: 'Founded', description: 'Started with a vision to transform digital experiences' },
    { year: '2020', title: 'Expansion', description: 'Grew team to 25+ developers and designers' },
    { year: '2022', title: 'Recognition', description: 'Awarded Top Development Agency in Southeast Asia' },
    { year: '2024', title: 'Innovation', description: 'Launched AI-powered development solutions' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {showBanner && (
        <div className="bg-orange-50 border-b border-orange-200 px-4 py-3 relative">
          <div className="flex items-center justify-center text-center">
            <span className="text-orange-600 mr-2">✨</span>
            <span className="text-gray-800 text-sm md:text-base">
              Get a FREE Expert Audit of Your Website, App, or Product
            </span>
            <span className="text-gray-600 ml-2">↗</span>
          </div>
          <button
            onClick={() => setShowBanner(false)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      <div className="bg-gradient-to-br from-[#F7F7F7] via-[#121212] to-[#323232] relative overflow-hidden">

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="text-center text-white mb-12">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              About Our Journey
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Kickstart Ideas,<br />Transform Applications
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Were a passionate team of developers, designers, and innovators dedicated to turning your boldest ideas into powerful digital solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20">
                  <Icon className="w-8 h-8 text-white mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{item.count}</div>
                  <div className="text-sm text-white/80">{item.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We exist to bridge the gap between ambitious ideas and successful digital products. Every day, we help businesses transform their vision into scalable, user-friendly applications that drive real growth.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From startups launching their first MVP to enterprises scaling their operations, we provide the technical expertise and strategic guidance needed to succeed in today s digital landscape.
            </p>
          </div>
          <div className="bg-[#F96E2A] rounded-3xl p-8 md:p-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#121212] text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-0">Listen & Understand</h3>
                  <p className="text-[#121212]">We dive deep into your business goals and challenges</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#121212] text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-0">Design & Develop</h3>
                  <p className="text-[#121212]">Build scalable solutions with best practices</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#121212] text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-0">Launch & Grow</h3>
                  <p className="text-[#121212]">Support your success with ongoing optimization</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-[#121212] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Our Journey
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#F7F7F7] to-[#121212] hidden md:block"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ?  'md:flex-row ' :  'md:flex-row-reverse '}`}>
                  <div className={`flex-1 ${index % 2 === 0 ?  'md:text-right' : 'md:text-left'} text-left`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="text-3xl font-bold text-[#121212] mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:block w-4 h-4 bg-[#121212] rounded-full border-4 border-white shadow-lg"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br to-[#F96E2A] via-[#121212] from-[#323232] rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Idea?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Lets discuss how we can help you build something extraordinary. Schedule a free consultation with our team today.
          </p>
          <button className="bg-white text-[#121212] px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all hover:-translate-y-1">
            Start Your Project
          </button>
        </div>
      </div>
    </div>
  );
}