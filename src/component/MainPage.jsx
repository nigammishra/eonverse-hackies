
import React, { useEffect } from 'react';
import Hero from './Hero';

const MainPage = () => {
  useEffect(() => {
    // Initialize particles.js with enhanced options
    window.particlesJS("particle-container", {
      particles: {
        number: {
          value: 150,  // Increased particle count for a more vibrant effect
          density: {
            enable: true,
            value_area: 1000  // Increased density for more particles
          }
        },
        color: {
          value: "#00bfff"  // Changed to a blue color for a cooler effect
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000"
          },
          polygon: {
            nb_sides: 5
          }
        },
        opacity: {
          value: 0.6,  // Slightly higher opacity for more visibility
          random: true,  // Added randomness to opacity for variation
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 5,  // Increased size of particles for better visibility
          random: true,
          anim: {
            enable: true,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#fff",  // Changed line color to purple for contrast
          opacity: 0.6,  // Increased opacity for a more solid connection line
          width: 2
        },
        move: {
          enable: true,
          speed: 6,
          direction: "none",
          random: true,  // Made movement a bit more random for a dynamic effect
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false
          }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse"
          },
          onclick: {
            enable: true,
            mode: "push"
          },
          resize: true
        }
      },
      retina_detect: true
    });
  }, []);

  return (
    <div>
      <div
        id="particle-container"
        style={{
          width: "100%",
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          background: "linear-gradient(to bottom, #2c3e50, #3498db)"  // Added gradient background
        }}
      />
      <>
      <Hero/>
      </>
    </div>
  );
};

export default MainPage;

