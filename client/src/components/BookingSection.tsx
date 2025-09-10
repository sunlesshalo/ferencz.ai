import { Button } from '@/components/ui/button';

export default function BookingSection() {
  return (
    <section id="foglalas" className="py-8 flex flex-col items-center space-y-2">
      <h2 className="sr-only">Foglalás</h2>
      <Button 
        asChild 
        variant="outline"
        size="lg"
        className="hover-elevate shadow-sm px-8 py-3 border-2 border-gray-800 dark:border-gray-400"
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
      <p className="text-sm text-muted-foreground text-center max-w-[160px] leading-tight" data-testid="text-consultation-info">
        30 perces ingyenes konzultáció foglalása
      </p>
    </section>
  );
}