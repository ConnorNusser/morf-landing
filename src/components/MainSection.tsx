'use client';

import React from 'react';
import { EmailSignup } from './EmailSignup';

export const MainSection: React.FC = () => {
  return (
    <main 
      className="flex-1 flex flex-col lg:flex-row relative"
      style={{ backgroundColor: 'var(--bg-background)' }}
    >
      {/* Mobile: Animated Background Images (visible on mobile) */}
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

      {/* Content Section - Centered vertically on mobile, half width on desktop */}
      <div className="w-full lg:w-1/2 flex items-center justify-center min-h-screen lg:min-h-0 py-12 lg:py-20 px-6 lg:px-16 relative z-10">
        <div className="max-w-lg w-full space-y-6 lg:space-y-8 text-center lg:text-left">
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
              AI-powered workouts that adapt to your goals, equipment, and fitness level.{' '}
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

      {/* Desktop Images Section - Only visible on desktop */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-2 gap-4 p-8">
          {/* Column 1 - Scrolling Up */}
          <div className="animate-scroll-up">
            <div className="space-y-4">
              {/* First set */}
              <div className="relative group">
                <img 
                  src="/image1.png" 
                  alt="Workout 1" 
                  className="w-full rounded-2xl shadow-lg filter blur-[2px] group-hover:blur-none transition-all duration-500"
                  style={{ borderRadius: 'var(--border-radius)' }}
                />
              </div>
              <div className="relative group">
                <img 
                  src="/image3.png" 
                  alt="Workout 3" 
                  className="w-full rounded-2xl shadow-lg filter blur-[2px] group-hover:blur-none transition-all duration-500"
                  style={{ borderRadius: 'var(--border-radius)' }}
                />
              </div>
              <div className="relative group">
                <img 
                  src="/image5.png" 
                  alt="Workout 5" 
                  className="w-full rounded-2xl shadow-lg filter blur-[2px] group-hover:blur-none transition-all duration-500"
                  style={{ borderRadius: 'var(--border-radius)' }}
                />
              </div>
              <div className="relative group">
                <img 
                  src="/image7.png" 
                  alt="Workout 7" 
                  className="w-full rounded-2xl shadow-lg filter blur-[2px] group-hover:blur-none transition-all duration-500"
                  style={{ borderRadius: 'var(--border-radius)' }}
                />
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="relative group">
                <img 
                  src="/image1.png" 
                  alt="Workout 1" 
                  className="w-full rounded-2xl shadow-lg filter blur-[2px] group-hover:blur-none transition-all duration-500"
                  style={{ borderRadius: 'var(--border-radius)' }}
                />
              </div>
              <div className="relative group">
                <img 
                  src="/image3.png" 
                  alt="Workout 3" 
                  className="w-full rounded-2xl shadow-lg filter blur-[2px] group-hover:blur-none transition-all duration-500"
                  style={{ borderRadius: 'var(--border-radius)' }}
                />
              </div>
              <div className="relative group">
                <img 
                  src="/image5.png" 
                  alt="Workout 5" 
                  className="w-full rounded-2xl shadow-lg filter blur-[2px] group-hover:blur-none transition-all duration-500"
                  style={{ borderRadius: 'var(--border-radius)' }}
                />
              </div>
              <div className="relative group">
                <img 
                  src="/image7.png" 
                  alt="Workout 7" 
                  className="w-full rounded-2xl shadow-lg filter blur-[2px] group-hover:blur-none transition-all duration-500"
                  style={{ borderRadius: 'var(--border-radius)' }}
                />
              </div>
            </div>
          </div>

          {/* Column 2 - Scrolling Down */}
          <div className="animate-scroll-down">
            <div className="space-y-4">
              {/* First set */}
              <div className="relative group">
                <img 
                  src="/image2.png" 
                  alt="Workout 2" 
                  className="w-full rounded-2xl shadow-lg filter blur-[2px] group-hover:blur-none transition-all duration-500"
                  style={{ borderRadius: 'var(--border-radius)' }}
                />
              </div>
              <div className="relative group">
                <img 
                  src="/image4.png" 
                  alt="Workout 4" 
                  className="w-full rounded-2xl shadow-lg filter blur-[2px] group-hover:blur-none transition-all duration-500"
                  style={{ borderRadius: 'var(--border-radius)' }}
                />
              </div>
              <div className="relative group">
                <img 
                  src="/image6.png" 
                  alt="Workout 6" 
                  className="w-full rounded-2xl shadow-lg filter blur-[2px] group-hover:blur-none transition-all duration-500"
                  style={{ borderRadius: 'var(--border-radius)' }}
                />
              </div>
              <div className="relative group">
                <img 
                  src="/image8.png" 
                  alt="Workout 8" 
                  className="w-full rounded-2xl shadow-lg filter blur-[2px] group-hover:blur-none transition-all duration-500"
                  style={{ borderRadius: 'var(--border-radius)' }}
                />
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="relative group">
                <img 
                  src="/image2.png" 
                  alt="Workout 2" 
                  className="w-full rounded-2xl shadow-lg filter blur-[2px] group-hover:blur-none transition-all duration-500"
                  style={{ borderRadius: 'var(--border-radius)' }}
                />
              </div>
              <div className="relative group">
                <img 
                  src="/image4.png" 
                  alt="Workout 4" 
                  className="w-full rounded-2xl shadow-lg filter blur-[2px] group-hover:blur-none transition-all duration-500"
                  style={{ borderRadius: 'var(--border-radius)' }}
                />
              </div>
              <div className="relative group">
                <img 
                  src="/image6.png" 
                  alt="Workout 6" 
                  className="w-full rounded-2xl shadow-lg filter blur-[2px] group-hover:blur-none transition-all duration-500"
                  style={{ borderRadius: 'var(--border-radius)' }}
                />
              </div>
              <div className="relative group">
                <img 
                  src="/image8.png" 
                  alt="Workout 8" 
                  className="w-full rounded-2xl shadow-lg filter blur-[2px] group-hover:blur-none transition-all duration-500"
                  style={{ borderRadius: 'var(--border-radius)' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(90deg, var(--bg-background) 0%, transparent 30%, transparent 70%, var(--bg-background) 100%)`
          }}
        />
      </div>
    </main>
  );
}; 