export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 text-xs text-muted-foreground text-center" data-testid="footer">
      <span>© <span data-testid="text-year">{currentYear}</span> SC Pine Lines SRL, Str. Horea, Nr. 88-90, Ap. 13, Cluj-Napoca, ROMANIA</span>
    </footer>
  );
}