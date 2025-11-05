import { useState } from 'react';

export default function BirthdayCard({ name, photoUrl, message, signature, isPlaying }) {
  return (
    <div 
      className="relative bg-white/90 backdrop-blur-md rounded-3xl p-8 md:p-12 max-w-xl w-full mx-4 shadow-2xl animate-fade-in"
      style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
      data-testid="card-birthday"
    >
      <h1 
        className="text-3xl md:text-5xl font-bold text-center mb-3 animate-bounce-in"
        style={{ letterSpacing: '-1px' }}
        data-testid="text-headline"
      >
        Happy Birthday, {name}!
      </h1>
      
      <p 
        className="text-sm md:text-lg font-medium text-center text-gray-600 mb-8 animate-fade-in"
        style={{ letterSpacing: '0.5px', animationDelay: '0.6s', animationFillMode: 'both' }}
        data-testid="text-tagline"
      >
        Made with love and a little bit of code 💻❤️
      </p>
      
      <div className="flex justify-center mb-8">
        <div 
          className={`relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-6 border-white shadow-xl animate-scale-in ${isPlaying ? 'animate-pulse-glow' : ''}`}
          style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
          data-testid="img-profile"
        >
          <img 
            src={photoUrl} 
            alt={`${name}'s photo`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <p 
        className="text-base md:text-lg text-center leading-relaxed text-gray-700 mb-4 animate-fade-in"
        style={{ animationDelay: '0.8s', animationFillMode: 'both' }}
        data-testid="text-message"
      >
        {message}
      </p>
      
      <p 
        className="text-sm md:text-base text-right font-light italic text-gray-600 animate-fade-in"
        style={{ animationDelay: '1s', animationFillMode: 'both' }}
        data-testid="text-signature"
      >
        {signature}
      </p>
    </div>
  );
}
