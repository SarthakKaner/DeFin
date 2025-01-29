import React from "react";
import ParticlesBackground from "./ParticlesBackground";

const Timeline = () => {
  const phases = [
    {
      color: "bg-green-500",
      title: "Phase 1",
      year: "2025",
      description: "Launching research Agent, which lays the foundation of advanced research features, capable of reading all hyperliquid related contextual information.",
    },
    {
      color: "bg-yellow-400",
      title: "Phase 2",
      year: "2025",
      description: "Trading agent (25%).",
    },
    {
      color: "bg-red-500",
      title: "Phase 3",
      year: "2025",
      description: "Trading agent talking to research agent for seamless trade execution.",
    },
    {
      color: "bg-blue-500",
      title: "Phase 4",
      year: "2026",
      description: "Companions, think of it like your AI agents as advisors for whale alerts, yields, trade & goal optimisation, bridging gap with friends and influencers and more.",
    },
  ];

  return (
    <>
    <ParticlesBackground/>
    <div className="timelineContainer bg-black text-white mt-8 py-10 px-5">
      {/* Title */}
      <h1 className="text-center text-4xl font-bold mb-16">
        ONE <span className="text-green">STEP</span> AT A TIME
      </h1>

      {/* Timeline */}
      <div className="relative w-full max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-green h-full"></div>

        {phases.map((phase, index) => (
          <div key={index} className="phase flex items-center mb-16 relative">
            {/* Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full"></div>

            {/* Left Side */}
            <div className="left w-1/2 flex justify-end">
              {/* Icon / Circle */}
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-full ${phase.color} text-black text-xl font-bold`}
              >
                {index + 1}
              </div>
              <div className="text-container text-right">
                <h2 className="text-xl font-bold">{phase.title}</h2>
                <h3 className="text-green text-center text-lg">{phase.year}</h3>
              </div>
            </div>

            {/* Right Side */}
            <div className="right w-1/2 ml-16 text-justify">
              <p>{phase.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Timeline;