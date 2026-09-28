// src/pages/Skills.jsx
import React from 'react';
import { SiTypescript, SiJavascript, SiPython, SiCplusplus, SiReact, SiElectron, SiNodedotjs, SiExpress, SiFastapi, SiPostgresql, SiSqlite, SiPrisma, SiOpenai, SiLangchain, SiGit, SiGithub, SiArduino, SiRaspberrypi, SiVitest } from 'react-icons/si';
import { FaRobot } from 'react-icons/fa';
import '../styles/Skills.css';

const skills = {
  Languages: [
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'Python', icon: <SiPython /> },
    { name: 'C / C++', icon: <SiCplusplus /> },
    { name: 'SQL', icon: null },
  ],
  'Frontend & Desktop': [
    { name: 'React', icon: <SiReact /> },
    { name: 'Electron', icon: <SiElectron /> },
  ],
  'Backend & Data': [
    { name: 'Node.js', icon: <SiNodedotjs /> },
    { name: 'Express', icon: <SiExpress /> },
    { name: 'FastAPI', icon: <SiFastapi /> },
    { name: 'REST APIs', icon: null },
    { name: 'PostgreSQL', icon: <SiPostgresql /> },
    { name: 'SQLite', icon: <SiSqlite /> },
    { name: 'Prisma', icon: <SiPrisma /> },
  ],
  'AI & ML': [
    { name: 'OpenAI API', icon: <SiOpenai /> },
    { name: 'LangChain', icon: <SiLangchain /> },
    { name: 'RAG', icon: null },
    { name: 'Prompt Engineering', icon: null },
  ],
  Embedded: [
    { name: 'ESP32', icon: <SiArduino /> },
    { name: 'Arduino', icon: <SiArduino /> },
    { name: 'Raspberry Pi', icon: <SiRaspberrypi /> },
    { name: 'Robotics', icon: <FaRobot /> },
  ],
  'Tools & Testing': [
    { name: 'Git', icon: <SiGit /> },
    { name: 'GitHub', icon: <SiGithub /> },
    { name: 'VS Code', icon: null },
    { name: 'Vitest', icon: <SiVitest /> },
    { name: 'Pytest', icon: null },
  ],
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
                <li key={skill.name}>
                  {skill.icon && <span className="skill-icon">{skill.icon}</span>}
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
