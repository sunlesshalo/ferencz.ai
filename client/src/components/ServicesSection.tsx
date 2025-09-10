export default function ServicesSection() {
  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 inline mr-1">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.73z"/>
        </svg>
      ),
      title: "AI‑bevezetés",
      description: "üzleti célok, mérőszámok, pilot → produkció."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 inline mr-1">
          <circle cx="12" cy="12" r="10"/>
          <circle cx="12" cy="12" r="6"/>
          <circle cx="12" cy="12" r="2"/>
        </svg>
      ),
      title: "Prompt‑stratégia & tréning",
      description: "hatékony utasítások, workflowk és sablonok ChatGPT-hez, Claude.ai-hoz és Gemini-hez"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 inline mr-1">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      ),
      title: "Automatizálás",
      description: "sales folyamatok, ügyfélszolgálat, marketing jelentések, tartalomgyártás, kimutatások, dashboardok"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 inline mr-1">
          <path d="M3 3v18h18"/>
          <path d="M18 17V9"/>
          <path d="M13 17V5"/>
          <path d="M8 17v-3"/>
        </svg>
      ),
      title: "Mini eszközök",
      description: "micro‑SaaS és belső toolok, gyors implementáció"
    }
  ];

  return (
    <section className="space-y-1 text-sm">
      {services.map((service, index) => (
        <p key={index} data-testid={`service-${index}`}>
          {service.icon}
          <strong>{service.title}</strong> — {service.description}
        </p>
      ))}
    </section>
  );
}