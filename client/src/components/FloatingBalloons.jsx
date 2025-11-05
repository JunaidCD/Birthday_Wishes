const balloons = [
  { emoji: '🎈', left: '10%', size: '48px', delay: '0s', duration: '20s' },
  { emoji: '🎊', left: '25%', size: '32px', delay: '2s', duration: '18s' },
  { emoji: '🎉', left: '75%', size: '40px', delay: '1s', duration: '22s' },
  { emoji: '🎈', left: '85%', size: '36px', delay: '3s', duration: '19s' },
  { emoji: '🎊', left: '50%', size: '44px', delay: '1.5s', duration: '21s' },
];

export default function FloatingBalloons() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
      {balloons.map((balloon, index) => (
        <div
          key={index}
          className="absolute animate-float opacity-70"
          style={{
            left: balloon.left,
            bottom: '-100px',
            fontSize: balloon.size,
            animationDelay: balloon.delay,
            animationDuration: balloon.duration,
          }}
          data-testid={`balloon-${index}`}
        >
          {balloon.emoji}
        </div>
      ))}
    </div>
  );
}
