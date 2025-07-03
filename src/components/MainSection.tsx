'use client';

import React from 'react';
import { EmailSignup } from './EmailSignup';

export const MainSection: React.FC = () => {
  return (
    <main 
      className="flex-1 flex items-center justify-center py-20 px-8"
      style={{ backgroundColor: 'var(--bg-background)' }}
    >
      <div className="max-w-2xl mx-auto text-center space-y-12">
        {/* Simple Hero Section */}
        <div className="space-y-6">
          <h1 
            className="text-5xl md:text-7xl font-bold tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            <span style={{ color: 'var(--color-primary)' }}>
              Morf
            </span>
          </h1>
          
          <p 
            className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto"
            style={{ color: 'var(--text-primary)', opacity: 0.8 }}
          >
            AI-powered fitness that automatically generates personalized workouts based on your goals and progress.
          </p>
        </div>

        {/* Email Signup */}
        <EmailSignup />
      </div>
    </main>
  );
}; 