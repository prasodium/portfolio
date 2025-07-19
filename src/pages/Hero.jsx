// File: src/components/Hero.jsx
"use client";
import React from 'react';
import Particles from '../components/Particles';
import RotatingText from '../components/RotatingText';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-background">
        <Particles
          particleColors={['#64ffda', '#ccd6f6']}
          particleCount={250}
          particleSpread={20}
          speed={0.25}
          particleBaseSize={80}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={false}
          particleHoverFactor={1.5}
          sizeRandomness={0.8}
          cameraDistance={15}
        />
      </div>

      <div className="hero-content">
        <h1 className="hero-headline">
          Hello, I'm <span className="highlighted-name">Harprosad Mandal</span>.
          <span className="blinking-cursor">|</span>
        </h1>

        <h2 className="hero-subheadline">
          I'm a Full-Stack Developer who builds things for the web.
        </h2>

        <p className="hero-description">
          <span className="hero-description-text">I build</span>
          <RotatingText
            texts={['React Apps', 'Cool Projects', 'Smart Robots']}
            // No margin class needed here!
            mainClassName="px-3 bg-[var(--accent-color)] text-[var(--dark-bg)] rounded-md inline-block align-middle"
            splitLevelClassName="overflow-hidden"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-120%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            rotationInterval={2000}
          />
        </p>
        <a href="#projects" className="hero-cta-button">
          <span>View My Work</span>
        </a>
        
      </div>
    </section>
  );
};

export default Hero;