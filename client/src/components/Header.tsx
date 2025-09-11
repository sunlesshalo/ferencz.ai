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
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4">
                <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.64.64 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.64.64 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76m5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z"/>
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