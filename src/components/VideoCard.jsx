import React from 'react';
import Dashboard from "../assets/Dashboard.jpg";

const VideoCard = () => {
  return (
    <div className="mx-4 sm:mx-auto max-w-4xl sm:max-w-2xl md:max-w-4xl bg-black text-white rounded-lg shadow-lg overflow-hidden my-8">
      <div className="relative h-48 sm:h-72 md:h-96 bg-gray-800 flex items-center justify-center">
        {/* Placeholder for the video */}
        <div className="w-full h-full bg-black flex items-center justify-center">
          <img src={Dashboard} alt="" />
        </div>
        <p className="absolute bottom-2 text-xs sm:text-sm text-gray-400">Coming Soon</p>
      </div>
      <div className="p-3 sm:p-4">
        <h2 className="text-lg sm:text-xl md:text-2xl text-center font-semibold mb-2">
          Introducing (De)Fin
        </h2>
      </div>
    </div>
  );
};

export default VideoCard;