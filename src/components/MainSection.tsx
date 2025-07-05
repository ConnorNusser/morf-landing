'use client';

import React from 'react';
import { EmailSignup } from './EmailSignup';

export const MainSection: React.FC = () => {
  return (
    <main 
      className="flex-1 flex flex-col relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg-background)' }}
    >
      {/* Floating Logo Background Elements */}
      <div className="floating-logo top-20 left-10 transform rotate-12" style={{ animationDelay: '0s' }}>
        <img src="/icon.png" alt="" className="h-24 w-auto" />
      </div>
      <div className="floating-logo top-40 right-20 transform -rotate-12" style={{ animationDelay: '2s' }}>
        <img src="/icon.png" alt="" className="h-32 w-auto" />
      </div>
      <div className="floating-logo bottom-32 left-1/4 transform rotate-45" style={{ animationDelay: '4s' }}>
        <img src="/icon.png" alt="" className="h-20 w-auto" />
      </div>
      <div className="floating-logo bottom-20 right-1/3 transform -rotate-45" style={{ animationDelay: '1s' }}>
        <img src="/icon.png" alt="" className="h-28 w-auto" />
      </div>
      <div className="floating-logo top-1/2 left-5 transform rotate-90" style={{ animationDelay: '3s' }}>
        <img src="/icon.png" alt="" className="h-16 w-auto" />
      </div>
      {/* Demo Video Section */}
      <section className="pb-8 lg:pb-12 pt-0 px-6 lg:px-16">
                          <div className="max-w-4xl mx-auto relative">
          {/* Decorative logo for video section */}
          <div className="absolute -top-5 -right-5 opacity-10 pointer-events-none z-0">
            <img 
              src="/icon.png" 
              alt="" 
              className="h-16 w-auto logo-animated"
              style={{ transform: 'rotate(25deg)' }}
            />
          </div>
          
          <div className="text-center mb-6 relative z-10">
            <h2 
              className="text-2xl lg:text-3xl font-bold mb-4 mt-4 lg:mt-20"
              style={{ color: 'var(--text-primary)' }}
            >
              See Morf in Action
            </h2>
            <p 
              className="text-lg lg:text-xl max-w-2xl mx-auto"
              style={{ color: 'var(--text-primary)', opacity: 0.8 }}
            >
              Watch how AI-powered training adapts to create the perfect workout for you.
            </p>
          </div>
          
          <div 
            className="relative w-full rounded-2xl overflow-hidden shadow-2xl z-20"
            style={{ 
              aspectRatio: '16/9',
              backgroundColor: 'var(--bg-surface)',
              borderRadius: 'var(--border-radius)'
            }}
          >
            <iframe 
              src="https://www.loom.com/embed/f8acff7e023f400c9eb14e8638e8977f?sid=3c5b1b3c-3c5b-4c3c-8c3c-3c5b1b3c3c5b"
              frameBorder="0"
              allowFullScreen
              className="absolute inset-0 w-full h-full z-30"
              title="Morf Demo Video"
              allow="autoplay; fullscreen"
              style={{ pointerEvents: 'auto' }}
            />
          </div>
        </div>
      </section>

                  {/* Hero Section */}
      <section className="relative">
        {/* Animated Background Images - Mobile Only */}
        <div className="lg:hidden fixed inset-0 grid grid-cols-2 gap-2 p-2 opacity-15 overflow-hidden z-0" style={{ top: '-20vh', bottom: '-20vh' }}>
          {/* Column 1 - Scrolling Up */}
          <div className="animate-scroll-up overflow-hidden">
            <div className="space-y-2">
              {/* First set */}
              <div className="relative group">
                <img 
                  src="/image1.png" 
                  alt="" 
                  className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover"
                  style={{ minHeight: '120px' }}
                />
              </div>
              <div className="relative group">
                <img 
                  src="/image3.png" 
                  alt="" 
                  className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover"
                  style={{ minHeight: '120px' }}
                />
              </div>
              <div className="relative group">
                <img 
                  src="/image5.png" 
                  alt="" 
                  className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover"
                  style={{ minHeight: '120px' }}
                />
              </div>
              <div className="relative group">
                <img 
                  src="/image7.png" 
                  alt="" 
                  className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover"
                  style={{ minHeight: '120px' }}
                />
              </div>
              <div className="relative group">
                <img 
                  src="/image1.png" 
                  alt="" 
                  className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover"
                  style={{ minHeight: '120px' }}
                />
              </div>
              <div className="relative group">
                <img 
                  src="/image3.png" 
                  alt="" 
                  className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover"
                  style={{ minHeight: '120px' }}
                />
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="relative group">
                <img 
                  src="/image5.png" 
                  alt="" 
                  className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover"
                  style={{ minHeight: '120px' }}
                />
              </div>
              <div className="relative group">
                <img 
                  src="/image7.png" 
                  alt="" 
                  className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover"
                  style={{ minHeight: '120px' }}
                />
              </div>
              <div className="relative group">
                <img 
                  src="/image1.png" 
                  alt="" 
                  className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover"
                  style={{ minHeight: '120px' }}
                />
              </div>
              <div className="relative group">
                <img 
                  src="/image3.png" 
                  alt="" 
                  className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover"
                  style={{ minHeight: '120px' }}
                />
              </div>
              <div className="relative group">
                <img 
                  src="/image5.png" 
                  alt="" 
                  className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover"
                  style={{ minHeight: '120px' }}
                />
              </div>
              <div className="relative group">
                <img 
                  src="/image7.png" 
                  alt="" 
                  className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover"
                  style={{ minHeight: '120px' }}
                />
              </div>
            </div>
          </div>

          {/* Column 2 - Scrolling Down */}
          <div className="animate-scroll-down overflow-hidden">
            <div className="space-y-2">
              {/* First set */}
              <div className="relative group">
                <img 
                  src="/image2.png" 
                  alt="" 
                  className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover"
                  style={{ minHeight: '120px' }}
                />
              </div>
              <div className="relative group">
                <img 
                  src="/image4.png" 
                  alt="" 
                  className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover"
                  style={{ minHeight: '120px' }}
                />
              </div>
              <div className="relative group">
                <img 
                  src="/image6.png" 
                  alt="" 
                  className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover"
                  style={{ minHeight: '120px' }}
                />
              </div>
              <div className="relative group">
                <img 
                  src="/image8.png" 
                  alt="" 
                  className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover"
                  style={{ minHeight: '120px' }}
                />
              </div>
              <div className="relative group">
                <img 
                  src="/image2.png" 
                  alt="" 
                  className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover"
                  style={{ minHeight: '120px' }}
                />
              </div>
              <div className="relative group">
                <img 
                  src="/image4.png" 
                  alt="" 
                  className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover"
                  style={{ minHeight: '120px' }}
                />
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="relative group">
                <img 
                  src="/image6.png" 
                  alt="" 
                  className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover"
                  style={{ minHeight: '120px' }}
                />
              </div>
              <div className="relative group">
                <img 
                  src="/image8.png" 
                  alt="" 
                  className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover"
                  style={{ minHeight: '120px' }}
                />
              </div>
              <div className="relative group">
                <img 
                  src="/image2.png" 
                  alt="" 
                  className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover"
                  style={{ minHeight: '120px' }}
                />
              </div>
              <div className="relative group">
                <img 
                  src="/image4.png" 
                  alt="" 
                  className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover"
                  style={{ minHeight: '120px' }}
                />
              </div>
              <div className="relative group">
                <img 
                  src="/image6.png" 
                  alt="" 
                  className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover"
                  style={{ minHeight: '120px' }}
                />
              </div>
              <div className="relative group">
                <img 
                  src="/image8.png" 
                  alt="" 
                  className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover"
                  style={{ minHeight: '120px' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Large Background Logo */}
        <div className="hidden lg:block absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <img 
            src="/icon.png" 
            alt="" 
            className="h-96 w-auto opacity-5 logo-animated"
            style={{ 
              filter: 'blur(1px)',
              transform: 'rotate(-15deg)'
            }}
          />
        </div>

        {/* Content Section - Centered on all devices */}
        <div className="w-full flex items-center justify-center min-h-0 lg:min-h-auto pb-8 lg:pb-12 pt-4 lg:pt-0 px-6 lg:px-20 relative z-10">
          <div className="max-w-4xl w-full space-y-8 lg:space-y-12 text-center mt-4 lg:mt-20">
          {/* Main Heading - Mobile optimized */}
          <div className="space-y-3 lg:space-y-4">
            <h1 
              className="text-4xl lg:text-5xl font-bold leading-tight"
              style={{ color: 'var(--text-primary)' }}
            >
             The best possible way to{' '}
              <span 
                className="px-2 lg:px-3 py-1 rounded-lg inline-block"
                style={{ 
                  backgroundColor: 'var(--color-primary)',
                  color: 'var(--bg-background)'
                }}
              >
                train
              </span>
            </h1>
            
            <p 
              className="text-lg lg:text-xl leading-relaxed"
              style={{ color: 'var(--text-primary)', opacity: 0.8 }}
            >
              AI-powered workouts that adapt to your progress, equipment, and fitness level.{' '}
              <span 
                className="font-semibold"
                style={{ color: 'var(--color-primary)' }}
              >
                Join our waiting list
              </span>
            </p>
          </div>

          {/* Email Signup */}
          <EmailSignup />
        </div>
      </div>
      </section>
    </main>
  );
}; 