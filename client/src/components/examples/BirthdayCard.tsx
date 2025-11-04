import BirthdayCard from '../BirthdayCard';

export default function BirthdayCardExample() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-300 via-orange-300 to-yellow-300">
      <BirthdayCard
        name="Soheli"
        photoUrl="/assets/soheli.jpg"
        message="Wishing you a year full of sunshine, laughter, and every slice of cake you want. You deserve all the good things life has to offer."
        signature="— Junaid"
        isPlaying={true}
      />
    </div>
  );
}
