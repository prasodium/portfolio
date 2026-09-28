// File: src/pages/Hero.jsx
import React from 'react';
import RotatingText from '../components/RotatingText';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <p className="hero-eyebrow">Hi, my name is</p>
        <h1 className="hero-headline">
          <span className="highlighted-name">Harprosad Mandal</span>.
          <span className="blinking-cursor">|</span>
        </h1>

        <h2 className="hero-subheadline">
          Software Engineer building full-stack products end to end, with a focus on shipping AI-powered features.
        </h2>

        <p className="hero-description">
          <span className="hero-description-text">I build</span>
          <RotatingText
            texts={['AI-Powered Products', 'Full-Stack Apps', 'Embedded Systems']}
            mainClassName="px-3 bg-[var(--accent-color)] text-[var(--dark-bg)] rounded-md inline-block align-middle"
            splitLevelClassName="overflow-hidden"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-120%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            rotationInterval={2000}
          />
        </p>

        <div className="hero-ctas">
          <a href="#projects" className="hero-cta-button">
            <span>View My Work</span>
          </a>
          <a href="https://github.com/prasodium" target="_blank" rel="noopener noreferrer" className="hero-cta-button hero-cta-secondary">
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
