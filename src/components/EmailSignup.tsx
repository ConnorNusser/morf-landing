'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { track } from '@vercel/analytics';

export const EmailSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Enhanced tracking with Vercel Analytics
    track('email_signup_started', {
      email_domain: email.split('@')[1] || 'unknown',
      timestamp: new Date().toISOString(),
      user_agent: navigator.userAgent,
      viewport_width: window.innerWidth,
      is_mobile: window.innerWidth < 768
    });
    
    // Simulate brief processing time
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Track successful completion
    track('email_signup_completed', {
      email_domain: email.split('@')[1] || 'unknown',
      timestamp: new Date().toISOString(),
    });
    
    setSubmitted(true);
    setIsSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="space-y-4">
        <div 
          className="border rounded-xl p-6"
          style={{ 
            backgroundColor: 'var(--bg-surface)',
            borderColor: 'var(--color-accent)',
            borderRadius: 'var(--border-radius)'
          }}
        >
          <div 
            className="font-semibold text-lg lg:text-xl mb-2"
            style={{ color: 'var(--color-accent)' }}
          >
            You&apos;re on the list! 🎉
          </div>
          <p 
            className="text-sm lg:text-base"
            style={{ color: 'var(--text-primary)', opacity: 0.8 }}
          >
            We&apos;ll notify you when Morf launches. Get ready to transform your training!
          </p>
        </div>
        <button
          onClick={() => {
            setSubmitted(false);
            setEmail('');
            // Track retry attempts
            track('email_signup_retry', {
              timestamp: new Date().toISOString(),
            });
          }}
          className="text-sm transition-colors hover:opacity-70 min-h-[44px] flex items-center justify-center"
          style={{ color: 'var(--text-primary)', opacity: 0.6 }}
        >
          Add another email
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4 lg:space-y-6">
      {/* Email Form - Mobile-first responsive */}
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => {
            // Track form engagement
            track('email_input_focus', {
              timestamp: new Date().toISOString(),
            });
          }}
          required
          className="flex-1 h-14 px-4 text-base rounded-lg focus:ring-2 transition-all"
          style={{ 
            backgroundColor: 'var(--bg-surface)',
            color: 'var(--text-primary)',
            borderColor: 'var(--border-color)',
            borderRadius: 'var(--border-radius)',
          }}
        />
        
        <Button
          type="submit"
          disabled={isSubmitting || !email}
          className="h-14 px-8 rounded-lg font-medium text-base transition-all disabled:opacity-50 w-full sm:w-auto min-w-[120px]"
          style={{ 
            backgroundColor: 'var(--color-primary)',
            color: 'var(--bg-background)',
            borderRadius: 'var(--border-radius)',
            border: 'none'
          }}
        >
          {isSubmitting ? 'Joining...' : 'Join Waitlist'}
        </Button>
      </form>
    </div>
  );
}; 