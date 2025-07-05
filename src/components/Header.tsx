'use client';

import React from 'react';
import { ThemeSelector } from './ThemeSelector';

export const Header: React.FC = () => {
  return (
    <header 
      className="border-b px-6 lg:px-16 py-3 lg:py-4 relative z-50 bg-opacity-80"
      style={{ 
        backgroundColor: 'var(--bg-background)',
        borderColor: 'var(--border-color)',
        backdropFilter: 'blur(10px)',
        opacity: 0.9
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative group cursor-pointer">
            <img 
              src="/icon.png" 
              alt="Morf" 
              className="h-8 lg:h-10 w-auto logo-animated transition-all duration-300 group-hover:scale-110"
            />
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(123, 104, 238, 0.3) 0%, rgba(255, 107, 207, 0.2) 50%, transparent 70%)',
                borderRadius: '50%',
                transform: 'scale(2)',
                filter: 'blur(8px)',
              }}
            />
          </div>
          <span 
            className="text-xl lg:text-2xl font-bold tracking-wide"
            style={{ 
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-suse)',
            }}
          >
            Morf
          </span>
        </div>
        
        <div className="flex items-center">
          <ThemeSelector />
        </div>
      </div>
    </header>
  );
}; 