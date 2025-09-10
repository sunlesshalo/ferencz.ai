import { useState } from 'react';
import Header from '@/components/Header';
import BookingSection from '@/components/BookingSection';
import FeaturedContent from '@/components/FeaturedContent';
import ServicesSection from '@/components/ServicesSection';
import ContactModal from '@/components/ContactModal';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';
import AnimatedBackground from '@/components/AnimatedBackground';

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <AnimatedBackground />
      <div className="fixed top-4 right-4 z-10">
        <ThemeToggle />
      </div>
      
      <main className="max-w-2xl mx-auto px-5 py-16 space-y-9 relative z-10">
        <Header onContactClick={() => setIsContactModalOpen(true)} />
        <BookingSection />
        <ServicesSection />
        <FeaturedContent />
        <Footer />
      </main>
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
}