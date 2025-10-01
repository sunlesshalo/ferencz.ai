import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-1 items-center text-xs">
      <button
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 transition-colors ${
          language === 'en'
            ? 'text-foreground font-semibold'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        EN
      </button>
      <span className="text-muted-foreground">|</span>
      <button
        onClick={() => setLanguage('ro')}
        className={`px-2 py-1 transition-colors ${
          language === 'ro'
            ? 'text-foreground font-semibold'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        RO
      </button>
      <span className="text-muted-foreground">|</span>
      <button
        onClick={() => setLanguage('hu')}
        className={`px-2 py-1 transition-colors ${
          language === 'hu'
            ? 'text-foreground font-semibold'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        HU
      </button>
    </div>
  );
}
