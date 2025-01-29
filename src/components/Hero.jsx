import React from "react";
import prodImage from "../assets/dashboard.jpg";

const Hero = () => {
  return (
    <div className="relative mt-10 bg-transparent flex items-center justify-center overflow-hidden">
      <div className="image-wrapper p-4 rounded-lg">
        <img
          src={prodImage}
          alt="Dashboard Image"
          className="relative w-full max-w-5xl m-8 md:max-w-2xl lg:max-w-4xl rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hero;