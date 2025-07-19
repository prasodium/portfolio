// src/components/Projects.jsx
import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/Projects.css';

// Import your project images
// import Project1Img from '../assets/projects/project1.png';

const projectsData = [
  {
    title: 'Project One Title',
    description: 'A brief 1-2 sentence description of your project. Explain the problem it solves and your role in building it.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    liveDemo: 'https://example.com',
    sourceCode: 'https://github.com/your-username/project-one',
    
    // THE FIX: Replaced the old placeholder URL with a new, reliable one.
    // This new placeholder is styled to match your portfolio's theme.
    image: 'https://placehold.co/600x400/112240/64ffda?text=Project+One',
  },
  {
    title: 'Project Two Title',
    description: 'This project showcases my ability to work with third-party APIs and manage asynchronous state.',
    techStack: ['Vue', 'Firebase', 'Chart.js'],
    liveDemo: 'https://example.com',
    sourceCode: 'https://github.com/your-username/project-two',
    
    // THE FIX: Replaced the second placeholder URL as well.
    image: 'https://placehold.co/600x400/112240/64ffda?text=Project+Two',
  },
  // Add more projects here...
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2 className="section-heading">Featured Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.title} />
              </a>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="project-tech-stack">
                {project.techStack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className="project-links">
                <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" aria-label="Source Code">
                  <FaGithub />
                </a>
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;