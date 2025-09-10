import { Button } from '@/components/ui/button';

export default function BookingSection() {
  return (
    <section id="foglalas" className="py-8 flex justify-center">
      <h2 className="sr-only">Foglalás</h2>
      <Button 
        asChild 
        variant="default"
        size="lg"
        className="hover-elevate"
        data-testid="button-booking"
      >
        <a 
          href="https://cal.com/ferencz-csuszner/30min" 
          target="_blank" 
          rel="noopener"
        >
          Beszéljünk!
        </a>
      </Button>
    </section>
  );
}