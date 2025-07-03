'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const EmailSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // For now, just open email client - you can later integrate with a service like ConvertKit, Mailchimp, etc.
    const subject = 'Morf AI Fitness - Email List Signup';
    const body = `Hi! I'd like to join the Morf AI Fitness email list.%0D%0A%0D%0AEmail: ${email}`;
    const mailtoLink = `mailto:connornusser@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    window.open(mailtoLink, '_blank');
    
    setSubmitted(true);
    setIsSubmitting(false);
  };

  if (submitted) {
    return (
      <div 
        className="flex flex-col items-center gap-6 p-10 rounded-2xl border-2 transform transition-all duration-500 hover:scale-105 animate-pulse"
        style={{ 
          backgroundColor: 'var(--bg-surface)',
          borderColor: 'var(--color-primary)',
          borderRadius: 'var(--border-radius)',
          boxShadow: `0 20px 40px rgba(0,0,0,0.1)`
        }}
      >
        <div 
          className="text-2xl font-bold animate-bounce"
          style={{ color: 'var(--color-primary)' }}
        >
          Thanks for joining!
        </div>
        <p 
          className="text-center text-lg opacity-90"
          style={{ color: 'var(--text-primary)' }}
        >
          We've opened your email client. Send it to get notified when Morf launches!
        </p>
        <Button
          variant="outline"
          onClick={() => setSubmitted(false)}
          className="transform transition-all duration-200 hover:scale-105 hover:shadow-lg text-lg px-8 py-4"
          style={{ 
            color: 'var(--text-primary)',
            borderColor: 'var(--border-color)',
            backgroundColor: 'transparent',
            borderRadius: 'var(--border-radius)'
          }}
        >
          Add another email
        </Button>
      </div>
    );
  }

  return (
    <div 
      className="w-full max-w-2xl mx-auto p-10 rounded-2xl border-2 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
      style={{ 
        backgroundColor: 'var(--bg-surface)',
        borderColor: 'var(--border-color)',
        borderRadius: 'var(--border-radius)',
        boxShadow: `0 10px 30px rgba(0,0,0,0.1)`
      }}
    >
      <div className="text-center mb-8">
        <h3 
          className="text-3xl font-bold mb-4 transform transition-all duration-300 hover:scale-105"
          style={{ color: 'var(--text-primary)' }}
        >
          Get Early Access
        </h3>
        <p 
          className="text-lg opacity-80"
          style={{ color: 'var(--text-primary)' }}
        >
          Be the first to experience AI-powered workouts
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full text-lg py-6 px-6 transform transition-all duration-200 focus:scale-[1.02] focus:shadow-lg hover:shadow-md"
          style={{ 
            backgroundColor: 'var(--bg-background)',
            color: 'var(--text-primary)',
            borderColor: 'var(--border-color)',
            borderRadius: 'var(--border-radius)',
            fontSize: '18px',
            height: '60px'
          }}
        />
        
        <Button
          type="submit"
          disabled={isSubmitting || !email}
          className="w-full text-xl py-8 font-semibold transform transition-all duration-200 hover:scale-[1.02] hover:shadow-xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ 
            backgroundColor: 'var(--color-primary)',
            color: 'var(--bg-background)',
            borderRadius: 'var(--border-radius)',
            border: 'none',
            height: '70px'
          }}
        >
          <span className={isSubmitting ? 'animate-pulse' : ''}>
            {isSubmitting ? 'Joining...' : 'Join Waitlist'}
          </span>
        </Button>
      </form>
    </div>
  );
}; 