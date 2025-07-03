'use client';

import { Header } from '@/components/Header';
import { MainSection } from '@/components/MainSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div 
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: 'var(--bg-background)' }}
    >
      <Header />
      <MainSection />
      <Footer />
    </div>
  );
}
