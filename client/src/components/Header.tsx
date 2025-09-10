import profileImage from '@assets/50b785f7732240bb9616be93c9d2c3a0e9ec73903044452a8c56b5288bd87cf5_1757522652032.jpeg';

interface HeaderProps {
  onContactClick: () => void;
}

export default function Header({ onContactClick }: HeaderProps) {
  return (
    <header className="flex items-start gap-4">
      <img 
        src={profileImage} 
        alt="Profilkép" 
        className="w-24 h-24 rounded-full object-cover flex-shrink-0"
        data-testid="img-profile"
      />
      <div className="space-y-3 flex-1">
        <div className="flex items-center gap-3 flex-wrap">
          <h1 className="text-2xl font-bold tracking-tight" data-testid="text-name">
            Csuszner Ferencz
          </h1>
          <nav className="flex gap-2">
            <a 
              href="https://ferenczai.substack.com" 
              target="_blank" 
              rel="noopener"
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-substack"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="h-4 w-4">
                <path d="M448 32v96H0V32h448zm0 160v96H0v-96h448zM0 352h192v128l-96-48-96 48V352z"/>
              </svg>
            </a>
            <a 
              href="https://www.youtube.com/@csusznerferencz" 
              target="_blank" 
              rel="noopener"
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-youtube"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" className="h-4 w-4">
                <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.6 64 288 64 288 64S117.4 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6C16 167 16 256 16 256s0 89 10.3 131.9c6.3 23.7 24.8 42.3 48.3 48.6C117.4 448 288 448 288 448s170.6 0 213.4-11.5c23.5-6.3 42-24.9 48.3-48.6C560 345 560 256 560 256s0-89-10.3-131.9zM232 336V176l144 80-144 80z"/>
              </svg>
            </a>
            <button 
              onClick={onContactClick}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="button-contact"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-4 w-4">
                <path d="M502.3 190.8L327.4 338.6c-15.9 13.1-39 13.1-54.9 0L9.7 190.8C3.6 185.7 0 178.1 0 170.2V400c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V170.2c0 7.9-3.6 15.5-9.7 20.6zM464 80H48C21.5 80 0 101.5 0 128v.3l256 198.2L512 128.3V128c0-26.5-21.5-48-48-48z"/>
              </svg>
            </button>
          </nav>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed font-semibold" data-testid="text-description">
          A stratégiai partnered az AI‑bevezetésben: prompt‑stratégiától az automatizálásokon át az AI‑munkafolyamatok bevezetéséig — üzleti célok alapján, mérhető ROI‑val, a pilottól a skálázható megoldásokig.
        </p>
      </div>
    </header>
  );
}