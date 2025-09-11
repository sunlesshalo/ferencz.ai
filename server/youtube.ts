export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
}

export async function getYouTubeVideoDetails(videoId: string): Promise<YouTubeVideo | null> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  
  if (!apiKey) {
    console.warn('YouTube API key not found');
    return null;
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet`
    );

    if (!response.ok) {
      console.error('YouTube API error:', response.status, response.statusText);
      return null;
    }

    const data = await response.json();
    
    if (!data.items || data.items.length === 0) {
      console.warn('No video found for ID:', videoId);
      return null;
    }

    const video = data.items[0];
    const snippet = video.snippet;

    return {
      id: videoId,
      title: snippet.title,
      description: snippet.description.substring(0, 200) + (snippet.description.length > 200 ? '...' : ''),
      thumbnailUrl: snippet.thumbnails?.maxres?.url || snippet.thumbnails?.high?.url || snippet.thumbnails?.medium?.url
    };
  } catch (error) {
    console.error('Error fetching YouTube video details:', error);
    return null;
  }
}

export function extractYouTubeVideoId(url: string): string | null {
  const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
}