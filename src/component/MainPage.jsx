import React, { useEffect, useState } from 'react';
import Hero from './Hero';
import Chat from './ChatBox.js';

const MainPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Effect running...');
    window.particlesJS("particle-container", {
      particles: {
        number: { value: 150, density: { enable: true, value_area: 1000 } },
        color: { value: "#00bfff" },
        shape: { type: "circle" },
        opacity: { value: 0.6, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } },
        size: { value: 5, random: true, anim: { enable: true, speed: 40, size_min: 0.1, sync: false } },
        line_linked: { enable: true, distance: 150, color: "#fff", opacity: 0.6, width: 2 },
        move: { enable: true, speed: 6, random: true, out_mode: "out" }
      },
      interactivity: {
        events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" } },
        detect_on: "canvas"
      },
      retina_detect: true
    });
  
    setTimeout(() => setLoading(false), 3000); // Simulate loading time
  }, []);
  

  return (
    <div>
      <>
      </>
      <div id="particle-container" className="particle-bg" style={{background: 'linear-gradient(to bottom, #2c3e50, #3498db)', }} />
      {loading ? (
        <div className="loader-container">
          <div className="sci-fi-loader"></div>
        </div>
      ) : (
        <Hero />
        
      )}
      <Chat/>
    </div>
  );
};

export default MainPage;
