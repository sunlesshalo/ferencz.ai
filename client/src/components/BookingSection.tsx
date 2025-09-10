export default function BookingSection() {
  return (
    <section id="foglalas" className="space-y-1 text-sm">
      <h2 className="sr-only">Foglalás</h2>
      <p>
        <a 
          href="https://cal.com/ferencz-csuszner/30min" 
          target="_blank" 
          rel="noopener" 
          className="hover:underline"
          data-testid="link-booking-free"
        >
          Ingyenes 30 perc
        </a> 
        — ismerkedés, iránykijelölés
      </p>
      <p>
        <a 
          href="https://cal.com/ferencz-csuszner/konzultacio" 
          target="_blank" 
          rel="noopener" 
          className="hover:underline"
          data-testid="link-booking-paid"
        >
          Fizetős 60 perc
        </a> 
        — konkrét feladat megoldása
      </p>
    </section>
  );
}