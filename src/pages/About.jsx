// src/components/About.jsx
import React from 'react';
import '../styles/About.css'; // Import the CSS for styling

const About = () => {
  return (
    <section id="about" className="section">
      <h2 className="section-heading">About Me</h2>
      <div className="about-content">
        <p>
          Hello! I'm Harprosad Mandal, a developer with a passion for building clean, efficient, and user-centric digital experiences. My journey into code started with a simple "Hello, World!" and has grown into a love for solving complex problems and bringing ideas to life on the web.
        </p>
        <p>
          My current toolkit includes React, Node.js, and TypeScript for building robust applications. I thrive in environments that challenge me to learn and adapt, and I'm always excited to explore new technologies and frameworks to improve my craft.
        </p>
      </div>
    </section>
  );
};

export default About;