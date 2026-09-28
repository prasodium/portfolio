// src/pages/About.jsx
import React from 'react';
import { FaUsers, FaMicrochip, FaCode, FaGithub } from 'react-icons/fa';
import '../styles/About.css'; // Import the CSS for styling

const facts = [
  { icon: <FaCode />, label: 'Full-Stack SDE', detail: 'React, TypeScript, Node' },
  { icon: <FaMicrochip />, label: 'Embedded + Edge AI', detail: 'ESP32, Raspberry Pi' },
  { icon: <FaUsers />, label: 'CYBORG President', detail: '120+ member robotics club' },
  { icon: <FaGithub />, label: 'Open Source', detail: '40+ repos on GitHub' },
];

const About = () => {
  return (
    <section id="about" className="section">
      <h2 className="section-heading">About Me</h2>
      <div className="about-content">
        <p>
          I'm a Computer Science undergrad at NIT Rourkela who builds full-stack
          products end to end, with a focus on shipping AI-powered features.
          I integrate LLMs into real products: AI storefronts, mock interview
          practice, voice-driven robots. I also work close to the hardware, with
          embedded C++ on ESP32 and edge AI on Raspberry Pi.
        </p>
        <p>
          Beyond the code, I lead CYBORG, our 120+ member robotics club, where I
          mentor students and run hands-on workshops. I love seeing people laugh
          around me. Building things that delight is kind of the point.
        </p>
        <div className="about-facts">
          {facts.map((fact) => (
            <div className="about-fact" key={fact.label}>
              <span className="about-fact-icon">{fact.icon}</span>
              <span className="about-fact-label">{fact.label}</span>
              <span className="about-fact-detail">{fact.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
