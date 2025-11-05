import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import BirthdayCard from '@/components/BirthdayCard';
import FloatingBalloons from '@/components/FloatingBalloons';
import Sparkles from '@/components/Sparkles';
import MusicPlayer from '@/components/MusicPlayer';
import confetti from 'canvas-confetti';
import { RotateCcw, MessageCircle } from 'lucide-react';

export default function BirthdayPage() {
  const [isPlaying, setIsPlaying] = useState(false);

  const fireConfetti = () => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);
  };

  useEffect(() => {
    setTimeout(() => {
      fireConfetti();
    }, 1000);
  }, []);

  const handleReplayMusic = () => {
    fireConfetti();
    console.log('Replay music triggered');
  };

  const handleSendWish = () => {
    const message = encodeURIComponent("Happy Birthday, Soheli! 🎉 Wishing you an amazing year ahead!");
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-pink-300 via-orange-300 to-yellow-300">
      <FloatingBalloons />
      <Sparkles />
      
      <MusicPlayer 
        audioUrl="/assets/happy_birthday.mp3"
        onPlayingChange={setIsPlaying}
      />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center py-8">
        <BirthdayCard
          name="Soheli"
          photoUrl="/assets/soheli.jpg"
          message="Wishing you a year full of sunshine, laughter, and every slice of cake you want. You deserve all the good things life has to offer."
          signature="— Junaid"
          isPlaying={isPlaying}
        />
        
        <div 
          className="flex flex-col sm:flex-row gap-4 mt-10 animate-fade-in"
          style={{ animationDelay: '1.2s', animationFillMode: 'both' }}
        >
          <Button
            onClick={handleReplayMusic}
            size="lg"
            variant="default"
            className="rounded-full px-8 shadow-lg"
            data-testid="button-replay-music"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Replay Music
          </Button>
          
          <Button
            onClick={handleSendWish}
            size="lg"
            variant="outline"
            className="rounded-full px-8 bg-white/80 backdrop-blur-sm hover:bg-white shadow-lg"
            data-testid="button-send-wish"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Send Wish
          </Button>
        </div>
      </div>
    </div>
  );
}
