'use client';

import React from 'react';
import { ThemeSelector } from './ThemeSelector';

export const Header: React.FC = () => {
  return (
    <header 
      className="border-b px-6 lg:px-16 py-4 lg:py-6 relative z-50 bg-opacity-80"
      style={{ 
        backgroundColor: 'var(--bg-background)',
        borderColor: 'var(--border-color)',
        backdropFilter: 'blur(10px)',
        opacity: 0.9
      }}
    >
      <div className="flex items-center justify-between">
        <div 
          className="text-2xl lg:text-3xl font-bold"
          style={{ color: 'var(--text-primary)' }}
        >
          Morf
        </div>
        
        <div className="flex items-center">
          <ThemeSelector />
        </div>
      </div>
    </header>
  );
}; 