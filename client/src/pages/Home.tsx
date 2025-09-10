import { useState } from 'react';
import Header from '@/components/Header';
import BookingSection from '@/components/BookingSection';
import ServicesSection from '@/components/ServicesSection';
import ContactModal from '@/components/ContactModal';
import Footer from '@/components/Footer';

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="max-w-2xl mx-auto px-5 py-16 space-y-10">
        <Header onContactClick={() => setIsContactModalOpen(true)} />
        <BookingSection />
        <ServicesSection />
        <Footer />
      </main>
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
}