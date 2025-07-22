import React from 'react';

const Aboutbanner = () => {
  return (
    <div
      className="mt-px h-[300px] md:h-[500px] bg-fixed bg-center bg-cover flex items-center justify-center text-white"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80')`,
      }}
    >
      <div className="text-center px-4">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">Explore the World with Us</h1>
        <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Find the best hotels and travel blogs to inspire your next journey
        </p>
      </div>
    </div>
  );
};

export default Aboutbanner;