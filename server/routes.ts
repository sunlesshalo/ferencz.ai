import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { getYouTubeVideoDetails, extractYouTubeVideoId } from "./youtube";

export async function registerRoutes(app: Express): Promise<Server> {
  // YouTube video details API
  app.get('/api/youtube/video/:videoId', async (req, res) => {
    try {
      const { videoId } = req.params;
      const videoDetails = await getYouTubeVideoDetails(videoId);
      
      if (!videoDetails) {
        return res.status(404).json({ error: 'Video not found or API error' });
      }
      
      res.json(videoDetails);
    } catch (error) {
      console.error('Error in YouTube API route:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  // Extract video ID from URL
  app.get('/api/youtube/extract/:url', (req, res) => {
    try {
      const url = decodeURIComponent(req.params.url);
      const videoId = extractYouTubeVideoId(url);
      
      if (!videoId) {
        return res.status(400).json({ error: 'Invalid YouTube URL' });
      }
      
      res.json({ videoId });
    } catch (error) {
      console.error('Error extracting YouTube video ID:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
