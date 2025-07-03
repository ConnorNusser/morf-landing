'use client';

import React from 'react';
import { ThemeSelector } from './ThemeSelector';

export const Header: React.FC = () => {
  return (
    <header 
      className="w-full py-6 px-8 border-b"
      style={{ 
        backgroundColor: 'var(--bg-background)',
        borderColor: 'var(--border-color)'
      }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div 
          className="text-3xl font-bold"
          style={{ color: 'var(--color-primary)' }}
        >
          Morf
        </div>
        
        <ThemeSelector />
      </div>
    </header>
  );
}; 