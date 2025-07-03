'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeLevel } from '@/types';
import { Theme, themes } from '@/lib/themes';

interface ThemeContextType {
  currentTheme: ThemeLevel;
  theme: Theme;
  setTheme: (theme: ThemeLevel) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeLevel>('beginner');

  useEffect(() => {
    // Load theme from localStorage if available
    const savedTheme = localStorage.getItem('morf-theme') as ThemeLevel;
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    // Apply theme CSS variables
    const theme = themes[currentTheme];
    const root = document.documentElement;
    
    root.style.setProperty('--bg-background', theme.colors.background);
    root.style.setProperty('--text-primary', theme.colors.text);
    root.style.setProperty('--color-primary', theme.colors.primary);
    root.style.setProperty('--color-secondary', theme.colors.secondary);
    root.style.setProperty('--color-accent', theme.colors.accent);
    root.style.setProperty('--bg-surface', theme.colors.surface);
    root.style.setProperty('--border-color', theme.colors.border);
    root.style.setProperty('--border-radius', `${theme.borderRadius}px`);

    // Save to localStorage
    localStorage.setItem('morf-theme', currentTheme);
  }, [currentTheme]);

  const setTheme = (theme: ThemeLevel) => {
    setCurrentTheme(theme);
  };

  const value = {
    currentTheme,
    theme: themes[currentTheme],
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}; 