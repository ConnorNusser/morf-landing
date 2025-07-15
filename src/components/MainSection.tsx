'use client';

import React, { useState, useEffect } from 'react';
import { EmailSignup } from './EmailSignup';
import { track } from '@vercel/analytics';

// Mobile Hero Component
const MobileHeroSection: React.FC = () => {
  const [showAnimatedBg, setShowAnimatedBg] = useState<boolean | null>(null);

  useEffect(() => {
    // A/B test: randomly choose whether to show animated background
    const variant = Math.floor(Math.random() * 2) + 1; // 1 or 2
    setShowAnimatedBg(variant === 1);
  }, []);

  const handleDownloadClick = (platform: 'ios' | 'android') => {
    if (platform === 'android') {
      // Scroll to newsletter section
      const newsletterSection = document.querySelector('[data-newsletter-section]');
      if (newsletterSection) {
        newsletterSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'center'
        });
        
        // Add a brief highlight effect to the newsletter section
        newsletterSection.classList.add('highlight-newsletter');
        setTimeout(() => {
          newsletterSection.classList.remove('highlight-newsletter');
        }, 2000);
      }
    }
    
    track(`${platform}_download_clicked`, {
      platform,
      device_type: 'mobile',
      animated_bg_variant: showAnimatedBg ? 'with_animation' : 'no_animation',
      ...(platform === 'android' && { status: 'coming_soon' }),
      timestamp: new Date().toISOString(),
    });
  };

  return (
    <section className="min-h-screen flex items-start justify-center px-6 text-center relative overflow-hidden pt-[20vh]">
      {/* Animated Background Images - A/B Test */}
      {showAnimatedBg && (
        <div className="fixed inset-0 grid grid-cols-2 gap-2 p-2 opacity-15 overflow-hidden z-0 pointer-events-none" style={{ top: '-240vh', bottom: '-400vh' }}>
          {/* Column 1 - Scrolling Up */}
          <div className="animate-scroll-up overflow-hidden">
            <div className="space-y-2">
              {/* First set */}
              <div className="relative group">
                <img src="/image1.png" alt="" className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover" style={{ minHeight: '200px' }} />
              </div>
              <div className="relative group">
                <img src="/image3.png" alt="" className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover" style={{ minHeight: '200px' }} />
              </div>
              <div className="relative group">
                <img src="/image5.png" alt="" className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover" style={{ minHeight: '200px' }} />
              </div>
              <div className="relative group">
                <img src="/image7.png" alt="" className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover" style={{ minHeight: '200px' }} />
              </div>
              {/* Second set */}
              <div className="relative group">
                <img src="/image1.png" alt="" className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover" style={{ minHeight: '200px' }} />
              </div>
              <div className="relative group">
                <img src="/image3.png" alt="" className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover" style={{ minHeight: '200px' }} />
              </div>
              <div className="relative group">
                <img src="/image5.png" alt="" className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover" style={{ minHeight: '200px' }} />
              </div>
              <div className="relative group">
                <img src="/image7.png" alt="" className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover" style={{ minHeight: '200px' }} />
              </div>
              {/* Third set */}
              <div className="relative group">
                <img src="/image1.png" alt="" className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover" style={{ minHeight: '200px' }} />
              </div>
              <div className="relative group">
                <img src="/image3.png" alt="" className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover" style={{ minHeight: '200px' }} />
              </div>
              <div className="relative group">
                <img src="/image5.png" alt="" className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover" style={{ minHeight: '200px' }} />
              </div>
              <div className="relative group">
                <img src="/image7.png" alt="" className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover" style={{ minHeight: '200px' }} />
              </div>
              {/* Fourth set */}
              <div className="relative group">
                <img src="/image1.png" alt="" className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover" style={{ minHeight: '200px' }} />
              </div>
              <div className="relative group">
                <img src="/image3.png" alt="" className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover" style={{ minHeight: '200px' }} />
              </div>
              <div className="relative group">
                <img src="/image5.png" alt="" className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover" style={{ minHeight: '200px' }} />
              </div>
              <div className="relative group">
                <img src="/image7.png" alt="" className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover" style={{ minHeight: '200px' }} />
              </div>
            </div>
          </div>
          {/* Column 2 - Scrolling Down */}
          <div className="animate-scroll-down overflow-hidden">
            <div className="space-y-2">
              {/* First set */}
              <div className="relative group">
                <img src="/image2.png" alt="" className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover" style={{ minHeight: '200px' }} />
              </div>
              <div className="relative group">
                <img src="/image4.png" alt="" className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover" style={{ minHeight: '200px' }} />
              </div>
              <div className="relative group">
                <img src="/image6.png" alt="" className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover" style={{ minHeight: '200px' }} />
              </div>
              <div className="relative group">
                <img src="/image8.png" alt="" className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover" style={{ minHeight: '200px' }} />
              </div>
              {/* Second set */}
              <div className="relative group">
                <img src="/image2.png" alt="" className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover" style={{ minHeight: '200px' }} />
              </div>
              <div className="relative group">
                <img src="/image4.png" alt="" className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover" style={{ minHeight: '200px' }} />
              </div>
              <div className="relative group">
                <img src="/image6.png" alt="" className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover" style={{ minHeight: '200px' }} />
              </div>
              <div className="relative group">
                <img src="/image8.png" alt="" className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover" style={{ minHeight: '200px' }} />
              </div>
              {/* Third set */}
              <div className="relative group">
                <img src="/image2.png" alt="" className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover" style={{ minHeight: '200px' }} />
              </div>
              <div className="relative group">
                <img src="/image4.png" alt="" className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover" style={{ minHeight: '200px' }} />
              </div>
              <div className="relative group">
                <img src="/image6.png" alt="" className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover" style={{ minHeight: '200px' }} />
              </div>
              <div className="relative group">
                <img src="/image8.png" alt="" className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover" style={{ minHeight: '200px' }} />
              </div>
              {/* Fourth set */}
              <div className="relative group">
                <img src="/image2.png" alt="" className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover" style={{ minHeight: '200px' }} />
              </div>
              <div className="relative group">
                <img src="/image4.png" alt="" className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover" style={{ minHeight: '200px' }} />
              </div>
              <div className="relative group">
                <img src="/image6.png" alt="" className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover" style={{ minHeight: '200px' }} />
              </div>
              <div className="relative group">
                <img src="/image8.png" alt="" className="w-full rounded-lg filter blur-[1px] group-hover:blur-none transition-all duration-500 object-cover" style={{ minHeight: '200px' }} />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-md mx-auto space-y-8 relative z-10">
        {/* Logo */}
        <div className="flex justify-center">
          <img src="/icon.png" alt="Morf Logo" className="h-24 w-24 rounded-2xl" />
        </div>

        {/* App Name */}
        <h1 className="text-5xl font-bold" style={{ color: 'var(--text-primary)' }}>
          Morf
        </h1>

        {/* Tagline */}
        <p className="text-xl" style={{ color: 'var(--color-primary)' }}>
          ChatGPT for Fitness
        </p>

        {/* Download Buttons */}
        <div className="pt-4">
          <div className="flex flex-col justify-center items-center gap-4">
            <a
              href="https://apps.apple.com/us/app/morf-your-ai-workout-tracker/id6747366819?platform=iphone"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-12 py-4 text-xl font-semibold rounded-full transition-all duration-200 hover:opacity-90 hover:scale-105"
              style={{ backgroundColor: 'var(--color-primary)', color: 'var(--bg-background)' }}
              onClick={() => handleDownloadClick('ios')}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.13997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
              </svg>
              Download Now
            </a>
            <button 
              className="inline-flex items-center justify-center gap-3 px-12 py-4 text-xl font-semibold rounded-full transition-all duration-200 hover:opacity-90 hover:scale-105"
              style={{ backgroundColor: 'var(--color-accent)', color: 'var(--bg-background)' }}
              onClick={() => handleDownloadClick('android')}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24c-2.86-1.21-6.08-1.21-8.94 0L5.65 5.67c-.19-.28-.54-.37-.83-.22-.3.16-.42.54-.26.85L6.4 9.48C3.3 11.25 1.28 14.44 1 18h22c-.28-3.56-2.3-6.75-5.4-8.52zM7 15.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm10 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25S18.25 13.31 18.25 14s-.56 1.25-1.25 1.25z"/>
              </svg>
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Desktop Hero Component
const DesktopHeroSection: React.FC = () => {
  const handleDownloadClick = (platform: 'ios' | 'android') => {
    if (platform === 'android') {
      // Scroll to newsletter section
      const newsletterSection = document.querySelector('[data-newsletter-section]');
      if (newsletterSection) {
        newsletterSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'center'
        });
        
        // Add a brief highlight effect to the newsletter section
        newsletterSection.classList.add('highlight-newsletter');
        setTimeout(() => {
          newsletterSection.classList.remove('highlight-newsletter');
        }, 2000);
      }
    }
    
    track(`${platform}_download_clicked`, {
      platform,
      device_type: 'desktop',
      animated_bg_variant: 'no_animation',
      ...(platform === 'android' && { status: 'coming_soon' }),
      timestamp: new Date().toISOString(),
    });
  };

  return (
  <section className="flex items-center justify-center px-16 py-20 text-center relative">
    <div className="max-w-lg mx-auto space-y-10">
      {/* Logo */}
      <div className="flex justify-center">
        <img src="/icon.png" alt="Morf Logo" className="h-32 w-32 rounded-2xl" />
      </div>

      {/* App Name */}
      <h1 className="text-6xl font-bold" style={{ color: 'var(--text-primary)' }}>
        Morf
      </h1>

      {/* Tagline */}
      <p className="text-2xl" style={{ color: 'var(--color-primary)' }}>
        ChatGPT for Fitness
      </p>

      {/* Download Buttons */}
      <div className="pt-4">
        <div className="flex justify-center gap-10">
          <a
            href="https://apps.apple.com/us/app/morf-your-ai-workout-tracker/id6747366819?platform=iphone"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-16 py-4 text-xl font-semibold rounded-full transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{ backgroundColor: 'var(--color-primary)', color: 'var(--bg-background)' }}
            onClick={() => handleDownloadClick('ios')}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.13997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
            </svg>
            Download Now
          </a>
          <button 
            className="inline-flex items-center justify-center gap-3 px-16 py-4 text-xl font-semibold rounded-full transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{ backgroundColor: 'var(--color-accent)', color: 'var(--bg-background)' }}
            onClick={() => handleDownloadClick('android')}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24c-2.86-1.21-6.08-1.21-8.94 0L5.65 5.67c-.19-.28-.54-.37-.83-.22-.3.16-.42.54-.26.85L6.4 9.48C3.3 11.25 1.28 14.44 1 18h22c-.28-3.56-2.3-6.75-5.4-8.52zM7 15.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm10 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25S18.25 13.31 18.25 14s-.56 1.25-1.25 1.25z"/>
            </svg>
            Join Waitlist
          </button>
        </div>
      </div>
    </div>
  </section>
  );
};

export const MainSection: React.FC = () => {
  return (
    <main className="flex-1 flex flex-col relative overflow-hidden" style={{ backgroundColor: 'var(--bg-background)' }}>
      {/* Hero Sections */}
      <div className="lg:hidden">
        <MobileHeroSection />
      </div>
      
      <div className="hidden lg:block">
        <DesktopHeroSection />
      </div>

      {/* Newsletter Signup Section */}
      <section className="pb-8 lg:pb-12 pt-8 lg:pt-0 px-6 lg:px-16 relative z-20" data-newsletter-section>
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-3 lg:space-y-4 mb-8">
            <p className="text-lg lg:text-xl leading-relaxed" style={{ color: 'var(--text-primary)', opacity: 0.8 }}>
              AI-powered workouts that adapt to your progress, equipment, and fitness level.{' '}
              <span className="font-semibold" style={{ color: 'var(--color-primary)' }}>
                Get updates
              </span>{' '}
              on new features and Android launch.
            </p>
          </div>
          <EmailSignup />
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="pb-8 lg:pb-12 pt-16 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -top-5 -right-5 opacity-10 pointer-events-none z-0">
            <img src="/icon.png" alt="" className="h-16 w-auto logo-animated" style={{ transform: 'rotate(25deg)' }} />
          </div>
          
          <div className="text-center mb-6 relative z-10">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 mt-4 lg:mt-20" style={{ color: 'var(--text-primary)' }}>
              See Morf in Action
            </h2>
            <p className="text-lg lg:text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-primary)', opacity: 0.8 }}>
              Dev Vlog of Morf and first iteration of the app :).
            </p>
          </div>
          
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl z-20" style={{ aspectRatio: '16/9', backgroundColor: 'var(--bg-surface)', borderRadius: 'var(--border-radius)' }}>
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
    </main>
  );
}; 