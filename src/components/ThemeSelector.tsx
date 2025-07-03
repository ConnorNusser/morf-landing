'use client';

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { themes } from '@/lib/themes';
import { ThemeLevel } from '@/types';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

export const ThemeSelector: React.FC = () => {
  const { currentTheme, setTheme } = useTheme();

  const themeDisplayNames: Record<ThemeLevel, string> = {
    beginner: 'Beginner - 0% Percentile',
    intermediate: 'Intermediate - 25% Percentile',
    advanced: 'Advanced - 50% Percentile',
    elite: 'Elite - 75% Percentile',
    god: 'God - 90% Percentile',
  };

  return (
    <div className="flex items-center gap-2 lg:gap-4">
      <Badge 
        variant="secondary" 
        className="hidden sm:block"
        style={{ 
          backgroundColor: 'var(--bg-surface)',
          color: 'var(--text-primary)',
          border: '1px solid var(--border-color)'
        }}
      >
        Theme
      </Badge>
      <Select value={currentTheme} onValueChange={(value: ThemeLevel) => setTheme(value)}>
        <SelectTrigger 
          className="w-44 sm:w-56 lg:w-72 min-h-[44px]"
          style={{ 
            backgroundColor: 'var(--bg-surface)',
            color: 'var(--text-primary)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--border-radius)'
          }}
        >
          <SelectValue placeholder="Select a theme" />
        </SelectTrigger>
        <SelectContent 
          className="w-64 sm:w-72"
          style={{ 
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--border-radius)'
          }}
        >
          {Object.entries(themeDisplayNames).map(([key, displayName]) => (
            <SelectItem 
              key={key} 
              value={key}
              style={{ 
                color: 'var(--text-primary)',
              }}
              className="hover:bg-opacity-10 min-h-[44px] cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div 
                  className="w-4 h-4 rounded-full border flex-shrink-0"
                  style={{ 
                    backgroundColor: themes[key as ThemeLevel].colors.primary,
                    borderColor: themes[key as ThemeLevel].colors.border
                  }}
                />
                <span className="text-sm sm:text-base">{displayName}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}; 