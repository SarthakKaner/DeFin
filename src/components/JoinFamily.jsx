import React from 'react';

const JoinFamily = () => {
  return (
    <div className="joinFamilyContainer relative z-10 min-h-screen bg-black flex items-center justify-center py-16 px-4">
      <div className="relative max-w-4xl w-full mx-auto bg-black  p-8 sm:p-12">
        {/* Main content */}
        <div className="space-y-8">
          {/* Heading */}
          <h2 className="text-2xl sm:text-2xl md:text-2xl font-bold text-center ">
            JOIN THE (De)FIN FAMILY
          </h2>

          <h1 className="text-2xl md:text-4xl font-bold text-center mb-8 font-mono">
          <span className="text-green">(De)Fin </span>
          <span className="text-yellow-500 ">AI </span>
          <span className="text-white">OPERATES </span>
          <span className="text-white">LIKE A POWERHOUSE</span>
        </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-200 text-center max-w-2xl mx-auto">
            Be part of the revolution in decentralized finance. Join our community
            and experience the future of AI-powered trading.
          </p>

          {/* Action buttons */}
          <div className=" flex flex-wrap justify-center gap-4">
            {['Research  Agent', 'Trading Agent', '(De)Fin Social Protocol'].map((text) => (
              <div key={text} className="relative group">
                <button
                  disabled
                  className="bg-green200 text-black px-6 py-2 font-mono
                    cursor-not-allowed opacity-35
                    transition-all duration-300 flex items-center gap-2
                    disabled:hover:bg-green-500"
                >
                  {text} <span className="font-mono">›</span>
                </button>
                <div className="opacity-0 group-hover:opacity-100 
                  absolute left-1/2 transform -translate-x-1/2 mt-2 
                  w-max bg-gray-800 text-white text-xs rounded-lg 
                  py-2 px-3 transition-all duration-300 
                  border border-gray-600 shadow-lg z-50">
                  Coming Soon
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Corner accents */}
        <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-green-500"></div>
        <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-green-500"></div>
      </div>
    </div>
  );
};

export default JoinFamily;