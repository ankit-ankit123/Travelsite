import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link

const Banner = () => {
  return (
    <section
      className="relative w-full h-[450px] md:h-[650px] bg-center bg-cover flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?fit=crop&w=1600&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/40"></div>

      {/* Glass card */}
      <div className="relative z-10 bg-white/20 backdrop-blur-lg rounded-xl p-8 sm:p-10 max-w-xl text-center shadow-2xl border border-white/30 animate-fadeInUp">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4">
          Explore Paradise
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl mb-6 drop-shadow-md opacity-90">
          Find your perfect hotel or travel destination — let the journey begin!
        </p>
        {/* ✅ Use Link to navigate to hotel page */}
        <Link
          to="/hotel"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-xl transition-transform transform hover:scale-105"
        >
          Explore Hotels
        </Link>
      </div>
    </section>
  );
};

export default Banner;