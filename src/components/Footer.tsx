'use client';

import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer 
      className="w-full py-8 px-8 border-t"
      style={{ 
        backgroundColor: 'var(--bg-background)',
        borderColor: 'var(--border-color)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left side - Brand */}
          <div 
            className="text-xl font-bold"
            style={{ color: 'var(--color-primary)' }}
          >
            Morf
          </div>

          {/* Right side - Contact email */}
          <a
            href="mailto:connornusser@gmail.com"
            className="text-base font-medium hover:underline transition-all duration-200"
            style={{ color: 'var(--text-primary)', opacity: 0.8 }}
          >
            connornusser@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}; 