import React from "react";
import ParticlesBackground from "./ParticlesBackground";

const DefinManifesto = () => {
  return (
    <>
    <ParticlesBackground />
    <div className="manifestoContainer bg-black text-white min-h-screen p-6 sm:p-12 z-10">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-green">(De)Fin: Research and Trading Agents</h1>
          <p className="text-lg mt-2 text-gray-400 ">
            Transforming decision-making in crypto and Web3 with cutting-edge AI agents.
          </p>
        </header>

        {/* Overview */}
        <section className="bg-black text-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl text-green font-semibold">Overview</h2>
          <p className="mt-2">
            (De)Fin exists to transform decision-making in the crypto and Web3 space with cutting-edge AI agents designed
            for research and trading. Built to simplify, accelerate, and optimize, (De)Fin provides a seamless experience
            for users to navigate and capitalize on the dynamic world of blockchain and decentralized finance.
          </p>
        </section>

        {/* Vision & Mission */}
        <section className="grid sm:grid-cols-2 gap-6">
          <div className="bg-black shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-green">Vision</h2>
            <p className="mt-2 text-white">
              Empowering smarter crypto and Web3 decisions through clarity, speed, and precision.
            </p>
          </div>
          <div className="bg-black shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-green">Mission</h2>
            <p className="mt-2 text-white">
              To revolutionize blockchain finance by delivering actionable insights and automated execution for
              individuals and organizations.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="bg-black text-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-green">Features</h2>
          <div className="mt-4 space-y-6">
            {/* Research Agent */}
            <div>
              <h3 className="text-xl font-semibold text-green">Research Agent</h3>
              <p className="mt-2">
                Simplify complex blockchain and Web3 data into actionable insights.
              </p>
              <ul className="mt-2 list-disc pl-6 space-y-2">
                <li>Data Aggregation: Pulls and integrates data from diverse sources.</li>
                <li>Natural Language Processing: Breaks down jargon into clear insights.</li>
                <li>Trend Analysis: Detects shifts and trends to identify opportunities.</li>
                <li>Simulation Tools: Models scenarios to recommend optimal strategies.</li>
                <li>Real-Time Dashboards: Presents data visually and interactively.</li>
              </ul>
            </div>
            {/* Trading Agent */}
            <div>
              <h3 className="text-xl mt-2 font-semibold text-green">Trading Agent</h3>
              <p className="mt-2">
                Automate and optimize trade execution in the crypto and Web3 markets.
              </p>
              <ul className="mt-2 list-disc pl-6 space-y-2">
                <li>Market Monitoring: Scans exchanges in real-time to identify opportunities.</li>
                <li>AI-Driven Strategies: Executes strategies tailored to user preferences.</li>
                <li>Risk Management: Incorporates safeguards like stop-loss triggers.</li>
                <li>Cross-Platform Compatibility: Works across blockchain networks.</li>
                <li>Learning Mechanisms: Refines strategies based on performance.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why (De)Fin? */}
        <section className="bg-black text-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-green">Why (De)Fin?</h2>
          <p className="mt-2">
            In the ever-evolving world of crypto and Web3, (De)Fin levels the playing field by offering:
          </p>
          <ul className="mt-4 list-disc pl-6 space-y-2">
            <li>Advanced Tools: Cutting-edge AI for blockchain research and trading.</li>
            <li>User Empowerment: Transparent and customizable solutions.</li>
            <li>Effortless Execution: Automated processes that save time and reduce errors.</li>
          </ul>
        </section>
      </div>
    </div>
    </>
  );
};

export default DefinManifesto;