import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export default function MusicPlayer({ audioUrl, onPlayingChange }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio(audioUrl);
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;

    const attemptAutoplay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        onPlayingChange(true);
      } catch (error) {
        console.log('Autoplay blocked, showing play button');
        setShowPlayButton(true);
      }
    };

    attemptAutoplay();

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, [audioUrl, onPlayingChange]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      onPlayingChange(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
      onPlayingChange(true);
      setShowPlayButton(false);
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed top-6 right-6 md:top-16 md:right-16 z-50">
      {showPlayButton && (
        <Button
          onClick={togglePlay}
          size="lg"
          variant="default"
          className="mb-4 animate-pulse shadow-lg"
          data-testid="button-tap-to-play"
        >
          <Volume2 className="w-5 h-5 mr-2" />
          Tap to Play Music
        </Button>
      )}
      
      <div className="flex gap-2">
        <Button
          onClick={togglePlay}
          size="icon"
          variant="secondary"
          className="rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg"
          data-testid="button-play-pause"
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </Button>
        
        <Button
          onClick={toggleMute}
          size="icon"
          variant="secondary"
          className="rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg"
          data-testid="button-mute"
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </Button>
      </div>
    </div>
  );
}
