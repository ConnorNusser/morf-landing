'use client';

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { themes, ThemeLevel } from '@/lib/themes';
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
    beginner: 'Beginner - Studio Ghibli',
    intermediate: 'Intermediate - Clean Material',
    advanced: 'Advanced - iOS Inspired',
    elite: 'Elite - Arctic Ice',
    god: 'God - Dark Mastery',
  };

  return (
    <div className="flex items-center gap-4">
      <Badge 
        variant="secondary" 
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
          className="w-64"
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
              className="hover:bg-opacity-10"
            >
              <div className="flex items-center gap-3">
                <div 
                  className="w-4 h-4 rounded-full border"
                  style={{ 
                    backgroundColor: themes[key as ThemeLevel].colors.primary,
                    borderColor: themes[key as ThemeLevel].colors.border
                  }}
                />
                {displayName}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}; 