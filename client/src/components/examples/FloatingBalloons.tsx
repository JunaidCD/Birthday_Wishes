import FloatingBalloons from '../FloatingBalloons';

export default function FloatingBalloonsExample() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-300 via-orange-300 to-yellow-300 relative">
      <FloatingBalloons />
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center text-gray-800 bg-white/80 backdrop-blur-sm p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-2">Floating Balloons Demo</h2>
          <p className="text-sm">Watch the balloons float upward!</p>
        </div>
      </div>
    </div>
  );
}
