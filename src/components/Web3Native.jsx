import React from "react";
import decentralised from "../assets/crypto-decentralized.png";
import friendly from "../assets/male-check.png";
import multiModal from "../assets/multi-colors.png";
import ubiquitous from "../assets/lightning.png";

const Web3Native = () => {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-6">
      <div className="relative bg-black border-4 border-green-500 rounded-lg p-8 max-w-3xl shadow-lg retro-card">
        {/* Main container - column on mobile, row on desktop */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-16">
            <div className="lg:w-1/2 mt-4 mb-8">
              <div className="text-green text-4xl font-bold mb-4 tracking-wide mt-4">
                WEB3 NATIVE
              </div>
              <p className="text-white text-lg mb-8 lg:mb-0 text-justify max-w-xl">
                (De)Fin AI is designed specifically for Web3, enabling users to
                query Web3, crypto, and blockchain topics with smart agent
                integration for a unique interaction experience.
              </p>
            </div>

            {/* Right section - Features Grid */}
          <div className="lg:w-1/2 mt-8 nativeGrid">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Feature 1 */}
              <div className="flex items-center gap-2">
                <img src={decentralised} className="w-10 h-10"></img>

                <span className="text-green">Decentralized</span>
              </div>

              <div className="flex items-center gap-2">
                <img src={friendly} className="w-10 h-10"></img>

                <span className="text-green">User-Friendly</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={multiModal} className="w-10 h-10"></img>

                <span className="text-green">Multi-modal</span>
              </div>

              <div className="flex items-center gap-2">
                <img src={ubiquitous} className="w-10 h-10"></img>

                <span className="text-green">Ubiquitous</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Web3Native;