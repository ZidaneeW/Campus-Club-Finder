import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    
    <div
      className="min-h-screen flex flex-col items-center justify-center text-white text-center px-6 font-poppins"
      style={{
        backgroundImage: "url('/images/superhero.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-10 text-center">
  <h1 class="text-blue-600/100 dark:text-sky-400/100">
    Welcome to Campus Club Finder
  </h1>
  <p class="text-blue-600/100 dark:text-sky-400/100">
    Discover and join amazing student clubs that match your interests!
  </p>
  <button
    onClick={() => navigate('/clubs')}
    className="bg-blue-600 text-white px-6 py-3 rounded text-lg hover:bg-blue-700 transition"
  >
    Explore Clubs
  </button>
</div>
      <button
        onClick={() => navigate('/clubs')}
        className="bg-blue-600 text-white px-6 py-3 rounded text-lg hover:bg-blue-700 transition"
      >
        Explore Clubs
      </button>
    </div>
  );
}