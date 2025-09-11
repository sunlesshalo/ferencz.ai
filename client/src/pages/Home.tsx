import { useState } from 'react';
import Header from '@/components/Header';
import BookingSection from '@/components/BookingSection';
import FeaturedContent from '@/components/FeaturedContent';
import YouTubeShortsSection from '@/components/YouTubeShortsSection';
import ServicesSection from '@/components/ServicesSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import ContactModal from '@/components/ContactModal';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed top-4 right-4 z-10">
        <ThemeToggle />
      </div>
      
      <main className="max-w-2xl mx-auto px-5 py-16 space-y-9">
        <Header />
        <div className="hero-entrance-delayed"><BookingSection /></div>
        <div className="hero-entrance-delayed"><ServicesSection /></div>
        <div className="hero-entrance-delayed"><CaseStudiesSection /></div>
        <div className="hero-entrance-delayed"><FeaturedContent /></div>
        <div className="hero-entrance-delayed"><YouTubeShortsSection /></div>
        <div className="hero-entrance-delayed"><Footer /></div>
      </main>
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
}