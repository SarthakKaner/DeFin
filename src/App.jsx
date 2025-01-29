import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from "./components/Header";
import "./App.css";
import Main from "./components/Main";
import ParticlesBackground from "./components/ParticlesBackground";
import Companies from "./components/Companies";
import Web3Native from "./components/Web3Native";
import VideoCard from "./components/VideoCard";
import JoinFamily from "./components/JoinFamily";
import LinesAnimation from "./components/LinesAnimation";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Timeline from "./components/Timeline";
import Manifesto from "./components/Manifesto";

function App() {
  const [showLinesAnimation, setShowLinesAnimation] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const mainElement = document.querySelector('.main');
      if (mainElement) {
        const mainPosition = mainElement.getBoundingClientRect().top;
        if (mainPosition <= 90) {
          setShowLinesAnimation(false);
        } else {
          setShowLinesAnimation(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {location.pathname === '/' && showLinesAnimation && <LinesAnimation />}
      <div className="relative z-10">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <div className="main">
                <Main />
              </div>
              {!showLinesAnimation && <ParticlesBackground />}
              <Hero />
              <Companies />
              <Web3Native />
              <Cards />
              <JoinFamily />
            </>
          } />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/Manifesto" element={<Manifesto />} />
        </Routes>
      </div>
    </>
  );
}

export default App;