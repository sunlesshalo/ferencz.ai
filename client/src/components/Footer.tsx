export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 text-xs text-muted-foreground" data-testid="footer">
      <span>© <span data-testid="text-year">{currentYear}</span> Csuszner Ferencz</span>
    </footer>
  );
}