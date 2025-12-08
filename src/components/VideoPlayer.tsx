import { useEffect, useRef, useState } from 'react';
import Player from '@vimeo/player';
import { Play, Pause } from 'lucide-react';

interface VideoPlayerProps {
  videoId: string;
  title?: string;
  vertical?: boolean;
  appId?: string;
}

function VideoPlayer({ videoId, title = 'Video', vertical = false, appId = '58479' }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<Player | null>(null);

  useEffect(() => {
    if (!iframeRef.current) return;

    const player = new Player(iframeRef.current);
    playerRef.current = player;

    player.on('play', () => {
      setIsPlaying(true);
    });

    player.on('pause', () => {
      setIsPlaying(false);
    });

    player.on('ended', () => {
      setIsPlaying(false);
    });

    player.ready().then(() => {
      setPlayerReady(true);
    });

    return () => {
      player.off('play');
      player.off('pause');
      player.off('ended');
    };
  }, []);

  const handlePlayPause = async () => {
    if (!playerRef.current) return;

    try {
      const paused = await playerRef.current.getPaused();
      if (paused) {
        await playerRef.current.play();
      } else {
        await playerRef.current.pause();
      }
    } catch (error) {
      console.error('Error toggling play/pause:', error);
    }
  };

  const handleInitialPlay = async () => {
    if (!playerRef.current) return;

    try {
      await playerRef.current.setMuted(false);
      await playerRef.current.play();
    } catch (error) {
      console.error('Error starting video:', error);
    }
  };

  return (
    <div
      className={`relative w-full bg-black rounded-lg overflow-hidden group ${vertical ? '' : 'aspect-video'}`}
      style={vertical ? { paddingTop: '177.78%' } : {}}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <iframe
        ref={iframeRef}
        src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=${appId}&muted=1`}
        className={vertical ? "absolute top-0 left-0 w-full h-full" : "w-full h-full"}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
        allowFullScreen
        title={title}
      />

      {!isPlaying && playerReady && (
        <button
          onClick={handleInitialPlay}
          className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-all duration-300 cursor-pointer z-10"
          aria-label="Play video"
        >
          <div className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl">
            <Play className="w-10 h-10 text-slate-900 ml-1" fill="currentColor" />
          </div>
        </button>
      )}

      {isPlaying && isHovering && (
        <button
          onClick={handlePlayPause}
          className="absolute inset-0 flex items-center justify-center bg-transparent cursor-pointer z-10"
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          <div
            className="w-16 h-16 bg-black/70 hover:bg-black/80 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 shadow-xl"
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 text-white" fill="currentColor" />
            ) : (
              <Play className="w-8 h-8 text-white ml-0.5" fill="currentColor" />
            )}
          </div>
        </button>
      )}
    </div>
  );
}

export default VideoPlayer;
