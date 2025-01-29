import React, { useEffect, useRef, useState } from "react";
import aws from "../assets/aws.png";
import binance from "../assets/binance.png";
import google from "../assets/google.png";
import apple from "../assets/apple.png";

const Companies = () => {
  const [isInView, setIsInView] = useState(false);
  const textContainerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textContainerRef.current) {
      observer.observe(textContainerRef.current);
    }

    return () => {
      if (textContainerRef.current) {
        observer.unobserve(textContainerRef.current);
      }
    };
  }, []);

  return (
    <div className="companiesContainer bg-black text-white min-h-[90vh] flex flex-col justify-center py-16 sm:py-24 px-24 mt-8 mb-8">
      {/* Companies Grid */}
      {/* <div className="logoContainer max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-12 sm:gap-16 md:gap-20 mb-16">
        <div className="flex items-center transform hover:scale-110 transition-transform duration-300">
          <img 
            src={aws} 
            alt="AWS" 
            className="h-10 sm:h-12 md:h-16 object-contain mr-3" 
          />
          <span className="text-base sm:text-lg md:text-xl font-medium">AWS</span>
        </div>
        <div className="flex items-center transform hover:scale-110 transition-transform duration-300">
          <img 
            src={binance} 
            alt="Binance" 
            className="h-10 sm:h-12 md:h-16 object-contain mr-3" 
          />
          <span className="text-base sm:text-lg md:text-xl font-medium">Binance</span>
        </div>
        <div className="flex items-center transform hover:scale-110 transition-transform duration-300">
          <img 
            src={google} 
            alt="Google" 
            className="h-10 sm:h-12 md:h-16 object-contain mr-3" 
          />
          <span className="text-base sm:text-lg md:text-xl font-medium">Google</span>
        </div>
        <div className="flex items-center transform hover:scale-110 transition-transform duration-300">
          <img 
            src={apple} 
            alt="Apple" 
            className="h-10 sm:h-12 md:h-16 object-contain mr-3" 
          />
          <span className="text-base sm:text-lg md:text-xl font-medium">Apple</span>
        </div>
      </div> */}

      <div className="border-t border-gray-800 mx-8 mt-8 mb-8 my-16"></div>

      <div
        ref={textContainerRef}
        className={`textContainer p-6 max-w-7xl mx-auto mt-16 mb-16 flex flex-col md:flex-row justify-center items-center md:items-center gap-8 md:gap-16 transition-opacity duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}
      >
        {/* Heading */}
        <h2 className={`text-3xl md:text-5xl font-bold text-[rgb(80,210,193)] leading-tight max-w-2xl ${isInView ? 'slide-in-left' : ''}`}>
          POWERED BY TOP-NOTCH AGENTIC FRAMEWORK
        </h2>

        {/* Text */}
        <p className={`text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed text-justify ${isInView ? 'slide-in-right' : ''}`}>
          (De)Fin is an advanced AI designed specifically for blockchain
          users. Harnessing cutting-edge AI technology, (De)Fin offers a
          robust solution tailored for crypto investors.
        </p>
      </div>
    </div>
  );
};

export default Companies;