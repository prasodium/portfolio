// src/pages/Projects.jsx
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import '../styles/Projects.css';

const projectsData = [
  {
    title: 'RetailFlow',
    repo: 'prasodium/RetailFlow',
    description:
      'An AI-powered full-stack retail platform: customer storefront with AI recommendations plus a POS and inventory admin dashboard, with JWT auth and role-based permissions.',
    pipeline: 'Browse → AI recommendations → Cart → Checkout → POS sale → Inventory sync',
    techStack: ['React', 'TypeScript', 'Express', 'Prisma', 'PostgreSQL', 'OpenAI'],
    initials: 'RF',
    artClass: 'art-1',
  },
  {
    title: 'AI Interviewer',
    repo: 'prasodium/ai-interviewer',
    description:
      'A desktop app that turns a resume, job description, role and experience level into a personalized mock interview — adaptive questioning, answer evaluation and scoring, with speech-to-text and text-to-speech.',
    pipeline: 'Resume + JD → Adaptive questions → Voice answers → AI scoring → Study tips',
    techStack: ['Electron', 'React', 'TypeScript', 'OpenAI API', 'SQLite'],
    initials: 'AI',
    artClass: 'art-2',
  },
  {
    title: 'ResumeForge',
    repo: 'prasodium/ResumeForge',
    description:
      'A local-first desktop app that reads a job description and generates a tailored, ATS-friendly LaTeX resume — semantic retrieval, job-skill matching, automated LaTeX compilation with error repair.',
    pipeline: 'Job description → Skill matching → LaTeX draft → Auto-compile + error repair',
    techStack: ['Electron', 'React', 'TypeScript', 'OpenAI API', 'LaTeX'],
    initials: 'RF',
    artClass: 'art-3',
  },
  {
    title: 'agentshield',
    repo: 'prasodium/agentshield',
    description:
      'An AI Agent Security Gateway & Red-Team Platform — a safety layer that inspects what autonomous agents do before they act, and probes them for weaknesses.',
    pipeline: 'Agent request → Policy check → Red-team probes → Allow / block',
    techStack: ['Python', 'LLM Agents', 'Security'],
    initials: 'AS',
    artClass: 'art-4',
  },
  {
    title: 'nova-bot',
    repo: 'prasodium/nova-bot',
    description:
      'An ESP32 robot car with a cloud LLM brain — sees with a camera, navigates with encoder PID + IMU, obeys voice commands by name, and talks back.',
    pipeline: 'Camera → Vision LLM planner → FastAPI backend → Encoder PID + IMU → Voice',
    techStack: ['C++', 'ESP32', 'FastAPI', 'Vision LLM'],
    initials: 'NB',
    artClass: 'art-5',
  },
  {
    title: 'edge-fire-detection',
    repo: 'prasodium/edge-fire-detection',
    description:
      'Real-time edge AI fire and smoke detection for Raspberry Pi 5 — lightweight YOLO models on CPU-only ONNX Runtime with temporal verification to cut false alarms.',
    pipeline: 'Camera → Lightweight YOLO → ONNX Runtime → Temporal verification → Alert',
    techStack: ['Python', 'YOLO', 'ONNX Runtime', 'Raspberry Pi'],
    initials: 'EF',
    artClass: 'art-6',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2 className="section-heading">Featured Projects</h2>
      <p className="section-subheading">
        Real things I built and shipped — sourced straight from my GitHub.
      </p>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div className="project-card" key={project.title}>
            <a
              className={`project-art ${project.artClass}`}
              href={`https://github.com/${project.repo}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub`}
            >
              <span className="project-art-initials">{project.initials}</span>
              <span className="project-art-repo">{project.repo}</span>
            </a>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-pipeline">
                <span className="pipeline-label">$ how it works</span>
                <span className="pipeline-flow">{project.pipeline}</span>
              </p>
              <ul className="project-tech-stack">
                {project.techStack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className="project-links">
                <a
                  href={`https://github.com/${project.repo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Source Code"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="projects-more">
        <a
          href="https://github.com/prasodium?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="projects-more-link"
        >
          See all 40+ repositories on GitHub →
        </a>
      </div>
    </section>
  );
};

export default Projects;
