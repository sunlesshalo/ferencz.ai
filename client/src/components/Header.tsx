import profileImage from '@assets/50b785f7732240bb9616be93c9d2c3a0e9ec73903044452a8c56b5288bd87cf5_1757522652032.jpeg';

export default function Header() {
  return (
    <header className="flex items-start gap-6">
      <img 
        src={profileImage} 
        alt="Profilkép" 
        className="w-24 h-24 rounded-full object-cover flex-shrink-0 hero-entrance"
        data-testid="img-profile"
      />
      <div className="space-y-4 flex-1">
        <div className="flex items-center gap-3 flex-wrap hero-entrance">
          <h1 className="text-2xl font-bold tracking-tight" data-testid="text-name">
            Csuszner Ferencz
          </h1>
          <nav className="flex gap-2">
            <a 
              href="https://ferenczai.substack.com" 
              target="_blank" 
              rel="noopener"
              className="text-muted-foreground hover:text-foreground transition-colors push-effect"
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
              className="text-muted-foreground hover:text-foreground transition-colors push-effect"
              data-testid="link-youtube"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" className="h-4 w-4">
                <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.6 64 288 64 288 64S117.4 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6C16 167 16 256 16 256s0 89 10.3 131.9c6.3 23.7 24.8 42.3 48.3 48.6C117.4 448 288 448 288 448s170.6 0 213.4-11.5c23.5-6.3 42-24.9 48.3-48.6C560 345 560 256 560 256s0-89-10.3-131.9zM232 336V176l144 80-144 80z"/>
              </svg>
            </a>
            <a 
              href="https://m.me/csuszner.ferencz" 
              target="_blank" 
              rel="noopener"
              className="text-muted-foreground hover:text-foreground transition-colors push-effect"
              data-testid="link-messenger"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-4 w-4">
                <path d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94l8.35 12.81c3.5 5.38 11.49 7.62 17.78 4.99l57.96-24.18c8-3.34 16.9-4.64 25.64-3.73C206.65 497.93 228.62 504 256.55 504c138.04 0 245.95-101.77 245.95-241.13C502.5 116.55 390.09 8 256.55 8zM198.66 184.63l40.81-60.44c5.1-7.56 15.39-9.34 22.25-3.86l57.29 45.8c6.5 5.2 15.79 5.2 22.29 0l57.29-45.8c6.86-5.48 17.15-3.7 22.25 3.86l40.81 60.44c5.1 7.56.21 17.8-8.35 17.8h-225.99c-8.57 0-13.46-10.24-8.35-17.8z"/>
              </svg>
            </a>
          </nav>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed font-medium hero-entrance-delayed" data-testid="text-description">
          A stratégiai partnered az AI‑bevezetésben: prompt‑stratégiától az automatizálásokon át az AI‑munkafolyamatok bevezetéséig — üzleti célok alapján, mérhető ROI‑val, a pilottól a skálázható megoldásokig.
        </p>
      </div>
    </header>
  );
}