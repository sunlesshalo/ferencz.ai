import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';

const featuredContent = [
  {
    type: 'substack',
    url: 'https://ferenczai.substack.com/p/gpt-5-promptolas-mesterfokon-3-technika',
    image: 'https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe0b5c4a4-f0e1-4dc5-ac11-bdf314cfd741_2816x1536.jpeg',
    title: 'GPT-5 promptolás mesterfokon: 3 technika + 3 hack + 15 sablon',
    description: 'Self-consistency, Program of Thought, Plan & Solve – így lesz a GPT-5 a legjobb partnered'
  },
  {
    type: 'youtube',
    url: 'https://www.youtube.com/watch?v=YSNXaX0rwUw',
    image: 'https://img.youtube.com/vi/YSNXaX0rwUw/maxresdefault.jpg',
    title: 'AI Stratégia és Megvalósítás Vállalkozásoknak',
    description: 'Gyakorlati útmutató az AI bevezetéséhez a vállalkozásodban'
  },
  {
    type: 'substack',
    url: 'https://ferenczai.substack.com/p/a-gpt-5-felterkepezese-routing-es',
    image: 'https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5f29b20c-c655-42d5-bf6a-de6d29d40284_2816x1536.jpeg',
    title: 'A GPT-5 feltérképezése: routing és promptolás az alapoktól',
    description: 'Útmutató a reasoning finomhangolásához és a következetes, skálázható eredményekhez'
  },
  {
    type: 'youtube',
    url: 'https://www.youtube.com/watch?v=gylVeQk-Liw',
    image: 'https://img.youtube.com/vi/gylVeQk-Liw/maxresdefault.jpg',
    title: 'GPT-5 Gyakorlati Alkalmazások',
    description: 'Hogyan használd a GPT-5-öt hatékonyan a mindennapi feladataidhoz'
  },
  {
    type: 'substack',
    url: 'https://ferenczai.substack.com/p/gpt-5-viselkedeskontroll-6-kapcsolo',
    image: 'https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6316b392-38f9-45f3-b259-c3e84d10cf40_700x481.jpeg',
    title: 'GPT-5 viselkedéskontroll: 6 kapcsoló a tökéletes eredményért',
    description: 'Egyszerű kulcsszavak, nagy különbség: így szabályozhatod a GPT-5 viselkedését'
  }
];

export default function FeaturedContent() {
  return (
    <section id="kiemelt-tartalom" className="space-y-6">
      <h2 className="text-xl font-bold tracking-tight" data-testid="heading-featured">
        Kiemelt tartalom
      </h2>
      
      <div className="space-y-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            watchDrag: true,
          }}
          plugins={[WheelGesturesPlugin()]}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {featuredContent.map((content, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2">
                <Card className="hover-elevate overflow-hidden" data-testid={`card-${content.type}-${index}`}>
                  <a 
                    href={content.url} 
                    target="_blank" 
                    rel="noopener"
                    className="block"
                  >
                    <div className="aspect-video w-full bg-muted relative overflow-hidden">
                      <img
                        src={content.image}
                        alt={content.title}
                        className="w-full h-full object-cover"
                        data-testid={`img-${content.type}-thumbnail-${index}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      {content.type === 'youtube' && (
                        <div className="absolute bottom-4 right-4 bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                          YouTube
                        </div>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        {content.type === 'substack' ? (
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="h-4 w-4 text-muted-foreground">
                            <path d="M448 32v96H0V32h448zm0 160v96H0v-96h448zM0 352h192v128l-96-48-96 48V352z"/>
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" className="h-4 w-4 text-red-600">
                            <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.6 64 288 64 288 64S117.4 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6C16 167 16 256 16 256s0 89 10.3 131.9c6.3 23.7 24.8 42.3 48.3 48.6C117.4 448 288 448 288 448s170.6 0 213.4-11.5c23.5-6.3 42-24.9 48.3-48.6C560 345 560 256 560 256s0-89-10.3-131.9zM232 336V176l144 80-144 80z"/>
                          </svg>
                        )}
                        <span className="text-xs text-muted-foreground">
                          {content.type === 'substack' ? 'Substack' : 'YouTube'}
                        </span>
                      </div>
                      <h3 className="font-medium text-sm leading-snug line-clamp-3" data-testid={`text-${content.type}-title-${index}`}>
                        {content.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
                        {content.description}
                      </p>
                    </CardContent>
                  </a>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Arrow Navigation - Centered Below */}
          <div className="flex justify-center gap-4 mt-4">
            <CarouselPrevious 
              className="static h-8 w-8 translate-x-0 translate-y-0"
              data-testid="button-carousel-previous" 
            />
            <CarouselNext 
              className="static h-8 w-8 translate-x-0 translate-y-0"
              data-testid="button-carousel-next" 
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
}