import Sparkles from '../Sparkles';

export default function SparklesExample() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 relative">
      <Sparkles />
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Sparkles Demo</h2>
          <p className="text-sm">Watch the twinkling stars!</p>
        </div>
      </div>
    </div>
  );
}
