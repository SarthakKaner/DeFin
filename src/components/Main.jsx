import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Main.css"; // Import the CSS file

const Main = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("Jan 26, 2025 00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const dynamicTexts = [
    "research agents",
    "trading agents",
    "LLM",
    "neural language",
    "text commands",
    "voice commands",
  ];
  const [dynamicTextIndex, setDynamicTextIndex] = useState(0);

  useEffect(() => {
    const textTimer = setInterval(() => {
      setDynamicTextIndex((prev) => (prev + 1) % dynamicTexts.length);
    }, 2000);

    return () => clearInterval(textTimer);
  }, [dynamicTexts.length]);

  return (
    <div className="mainContainer">
      <div className="typewriter-container">
        <div className="py-4 px-4 sm:px-6">
          <h1 className="typewriter-heading">
            <Typewriter 
              words={["(De)Fin: THE POWERHOUSE OF AI AGENTS"]}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              className="inline-block"
            />
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-white text-center mt-4">
            EMPOWERING CRYPTO RESEARCH WITH MULTI-AGENT REASONING
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-8 px-4">
        {/* AI Agent Button */}
        <div className="relative group">
          <button className="btn btnP">
            Research Agent
          </button>
          <div className="opacity-0 group-hover:opacity-100 absolute left-1/2 transform -translate-x-1/2 mt-2 w-max bg-gray-800 text-white text-xs rounded-lg py-2 px-3 transition-all duration-300 border border-gray-600 shadow-lg z-50 pointer-events-none group-hover:pointer-events-auto">
            Coming Soon
          </div>
        </div>
        
        {/* Research Agent Button */}
        <div className="relative group">
          <button className="btn btn-secondary">
            Trading Agent
          </button>
          <div className="opacity-0 group-hover:opacity-100 absolute left-1/2 transform -translate-x-1/2 mt-2 w-max bg-gray-800 text-white text-xs rounded-lg py-2 px-3 transition-all duration-300 border border-gray-600 shadow-lg z-50 pointer-events-none group-hover:pointer-events-auto">
            Coming Soon
          </div>
        </div>
      </div>

      <div className="footer w-full py-4 px-6 text-center">
        <p className="text-lg text-[rgb(80,210,193)] font-mono">
          <span>DeFi trading hub powered by </span>
          <span id="dynamic-text" className="no-wrap">{dynamicTexts[dynamicTextIndex]}</span>
        </p>
        <div className="flex justify-center items-center mt-4">
          <svg className="w-5 h-5 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482A13.944 13.944 0 011.671 3.149a4.916 4.916 0 001.523 6.573 4.897 4.897 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.918 4.918 0 004.6 3.417A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A9.935 9.935 0 0024 4.557z"></path>
          </svg>
          <a href="https://x.com/defin_one" className="text-blue-500" target="_blank">@defin_one</a>
        </div>
      </div>
    </div>
  );
};

export default Main;