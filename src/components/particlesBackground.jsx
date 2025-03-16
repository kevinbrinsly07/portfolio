// src/components/ParticlesBackground.jsx
import React from 'react';
import Particles from 'react-particles-js'; // Import particles.js library

const ParticlesBackground = () => {
  return (
    <Particles
      className="particles" // Optional: Add a custom class for styling
      params={{
        particles: {
          number: {
            value: 100, // Number of particles
            density: {
              enable: true,
              value_area: 800, // Defines the area where particles are created
            },
          },
          shape: {
            type: 'circle', // Particle shape
            stroke: {
              width: 0, // No stroke
            },
          },
          opacity: {
            value: 0.5, // Transparency of particles
            random: true,
            anim: {
              enable: true,
              speed: 1, // Speed of opacity animation
              opacity_min: 0.1, // Minimum opacity
            },
          },
          size: {
            value: 3, // Particle size
            random: true, // Randomizes particle size
            anim: {
              enable: true,
              speed: 40, // Speed of particle size animation
              size_min: 0.1, // Minimum size of particles
            },
          },
          move: {
            enable: true,
            speed: 1, // Speed of particle movement
            direction: 'none', // No specific direction for movement
            random: true, // Particles move randomly
            out_mode: 'out', // Particles disappear when they move out of the screen
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;