import MusicPlayer from '../MusicPlayer';

export default function MusicPlayerExample() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-300 via-orange-300 to-yellow-300 flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Music Player Demo</h2>
        <p className="text-sm text-gray-700">Controls appear in the top-right corner</p>
        <p className="text-xs text-gray-600 mt-2">Note: Requires happy_birthday.mp3 file</p>
      </div>
      <MusicPlayer 
        audioUrl="/assets/happy_birthday.mp3" 
        onPlayingChange={(playing) => console.log('Playing:', playing)}
      />
    </div>
  );
}
