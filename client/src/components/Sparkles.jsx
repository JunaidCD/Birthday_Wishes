const sparkles = [
  { left: '15%', top: '20%', delay: '0s', size: '4px' },
  { left: '80%', top: '30%', delay: '1s', size: '3px' },
  { left: '45%', top: '15%', delay: '2s', size: '5px' },
  { left: '90%', top: '60%', delay: '1.5s', size: '4px' },
  { left: '20%', top: '70%', delay: '0.5s', size: '3px' },
  { left: '60%', top: '80%', delay: '2.5s', size: '4px' },
  { left: '35%', top: '50%', delay: '1.8s', size: '5px' },
  { left: '70%', top: '10%', delay: '0.8s', size: '3px' },
];

export default function Sparkles() {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 2 }}>
      {sparkles.map((sparkle, index) => (
        <div
          key={index}
          className="absolute rounded-full bg-white animate-sparkle"
          style={{
            left: sparkle.left,
            top: sparkle.top,
            width: sparkle.size,
            height: sparkle.size,
            animationDelay: sparkle.delay,
          }}
        />
      ))}
    </div>
  );
}
