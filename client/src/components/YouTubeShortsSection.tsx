import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import { useQuery } from '@tanstack/react-query';

const youtubeShorts = [
  {
    url: 'https://www.youtube.com/shorts/O4Vtp5xMu-8',
    videoId: 'O4Vtp5xMu-8'
  },
  {
    url: 'https://www.youtube.com/shorts/ekgLC-GYT7I',
    videoId: 'ekgLC-GYT7I'
  },
  {
    url: 'https://www.youtube.com/shorts/CqCN3FLI5T8',
    videoId: 'CqCN3FLI5T8'
  },
  {
    url: 'https://www.youtube.com/shorts/o575jMSs0fs',
    videoId: 'o575jMSs0fs'
  },
  {
    url: 'https://www.youtube.com/shorts/CBiK5U_3MT8',
    videoId: 'CBiK5U_3MT8'
  },
  {
    url: 'https://www.youtube.com/shorts/qX2cvliblx0',
    videoId: 'qX2cvliblx0'
  },
  {
    url: 'https://www.youtube.com/shorts/Pyos1855aZk',
    videoId: 'Pyos1855aZk'
  }
];

function YouTubeShortItem({ content, index }: { content: any; index: number }) {
  const { data: videoDetails, isLoading } = useQuery({
    queryKey: ['/api/youtube/video', content.videoId],
    enabled: !!content.videoId
  });

  const displayContent = videoDetails || { 
    title: 'YouTube Short',
    description: 'Loading...',
    thumbnailUrl: `https://img.youtube.com/vi/${content.videoId}/maxresdefault.jpg`
  };

  return (
    <Card className="hover-elevate overflow-hidden" data-testid={`card-short-${index}`}>
      <a 
        href={content.url} 
        target="_blank" 
        rel="noopener"
        className="block"
      >
        <div className="aspect-[9/16] w-full bg-muted relative overflow-hidden">
          <img
            src={displayContent.thumbnailUrl}
            alt={displayContent.title}
            className="w-full h-full object-cover"
            data-testid={`img-short-thumbnail-${index}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          <div className="absolute bottom-4 right-4 bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
            Shorts
          </div>
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black/50 rounded-full p-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-8 w-8">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </div>
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" className="h-4 w-4 text-red-600">
              <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.6 64 288 64 288 64S117.4 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6C16 167 16 256 16 256s0 89 10.3 131.9c6.3 23.7 24.8 42.3 48.3 48.6C117.4 448 288 448 288 448s170.6 0 213.4-11.5c23.5-6.3 42-24.9 48.3-48.6C560 345 560 256 560 256s0-89-10.3-131.9zM232 336V176l144 80-144 80z"/>
            </svg>
            <span className="text-xs text-muted-foreground">YouTube Shorts</span>
          </div>
          <h3 className="font-medium text-sm leading-snug line-clamp-3" data-testid={`text-short-title-${index}`}>
            {isLoading ? 'Loading...' : displayContent.title}
          </h3>
          <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
            {isLoading ? 'Loading description...' : displayContent.description}
          </p>
        </CardContent>
      </a>
    </Card>
  );
}

export default function YouTubeShortsSection() {
  return (
    <section id="youtube-shorts" className="space-y-6">
      <h2 className="text-xl font-bold tracking-tight" data-testid="heading-shorts">
        YouTube Shorts
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
            {youtubeShorts.map((content, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <YouTubeShortItem content={content} index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <CarouselPrevious 
            className="z-20 push-effect"
            data-testid="button-shorts-carousel-previous"
            onClick={(e) => e.stopPropagation()}
          />
          <CarouselNext 
            className="z-20 push-effect"
            data-testid="button-shorts-carousel-next"
            onClick={(e) => e.stopPropagation()}
          />
        </Carousel>
      </div>
    </section>
  );
}