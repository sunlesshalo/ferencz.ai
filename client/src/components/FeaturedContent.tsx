import { Card, CardContent } from '@/components/ui/card';

export default function FeaturedContent() {
  return (
    <section id="kiemelt-tartalom" className="space-y-6">
      <h2 className="text-xl font-bold tracking-tight" data-testid="heading-featured">
        Kiemelt tartalom
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Substack Article */}
        <Card className="hover-elevate overflow-hidden" data-testid="card-substack">
          <a 
            href="https://ferenczai.substack.com/p/gpt-5-promptolas-mesterfokon-3-technika" 
            target="_blank" 
            rel="noopener"
            className="block"
          >
            <div className="aspect-video w-full bg-muted relative overflow-hidden">
              <img
                src="https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe0b5c4a4-f0e1-4dc5-ac11-bdf314cfd741_2816x1536.jpeg"
                alt="GPT-5 promptolás mesterfokon"
                className="w-full h-full object-cover"
                data-testid="img-substack-thumbnail"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="h-4 w-4 text-muted-foreground">
                  <path d="M448 32v96H0V32h448zm0 160v96H0v-96h448zM0 352h192v128l-96-48-96 48V352z"/>
                </svg>
                <span className="text-xs text-muted-foreground">Substack</span>
              </div>
              <h3 className="font-medium text-sm leading-snug line-clamp-3" data-testid="text-substack-title">
                GPT-5 promptolás mesterfokon: 3 technika + 3 hack + 15 sablon
              </h3>
              <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
                Self-consistency, Program of Thought, Plan & Solve – így lesz a GPT-5 a legjobb partnered
              </p>
            </CardContent>
          </a>
        </Card>

        {/* YouTube Video */}
        <Card className="hover-elevate overflow-hidden" data-testid="card-youtube">
          <a 
            href="https://www.youtube.com/watch?v=YSNXaX0rwUw" 
            target="_blank" 
            rel="noopener"
            className="block"
          >
            <div className="aspect-video w-full bg-muted relative overflow-hidden">
              <img
                src="https://img.youtube.com/vi/YSNXaX0rwUw/maxresdefault.jpg"
                alt="YouTube video thumbnail"
                className="w-full h-full object-cover"
                data-testid="img-youtube-thumbnail"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute bottom-4 right-4 bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                YouTube
              </div>
            </div>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" className="h-4 w-4 text-red-600">
                  <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.6 64 288 64 288 64S117.4 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6C16 167 16 256 16 256s0 89 10.3 131.9c6.3 23.7 24.8 42.3 48.3 48.6C117.4 448 288 448 288 448s170.6 0 213.4-11.5c23.5-6.3 42-24.9 48.3-48.6C560 345 560 256 560 256s0-89-10.3-131.9zM232 336V176l144 80-144 80z"/>
                </svg>
                <span className="text-xs text-muted-foreground">YouTube</span>
              </div>
              <h3 className="font-medium text-sm leading-snug line-clamp-3" data-testid="text-youtube-title">
                AI Stratégia és Megvalósítás Vállalkozásoknak
              </h3>
              <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
                Gyakorlati útmutató az AI bevezetéséhez a vállalkozásodban
              </p>
            </CardContent>
          </a>
        </Card>
      </div>
    </section>
  );
}