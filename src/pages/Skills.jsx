// src/components/Skills.jsx
import React from 'react';
import '../styles/Skills.css';

// Import your logos here
// Example: import ReactLogo from '../assets/logos/react.svg';

const skills = {
  Frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue', 'Svelte'],
  Backend: ['Node.js', 'Express', 'Python', 'Go', 'SQL', 'MongoDB'],
  Tools: ['Git', 'Docker', 'Webpack', 'Figma', 'CI/CD', 'Jest'],
};

const Skills = () => {
  return (
    <section id="skills" className="section">
      <h2 className="section-heading">Tech Stack</h2>
      <div className="skills-grid">
        {Object.keys(skills).map((category) => (
          <div className="skill-category" key={category}>
            <h3>{category}</h3>
            <ul>
              {skills[category].map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;