// src/pages/Experience.jsx
import React from 'react';
import { FaBriefcase, FaUsers, FaTheaterMasks } from 'react-icons/fa';
import '../styles/Experience.css';

const experienceData = [
  {
    icon: <FaBriefcase />,
    role: 'IoT System Developer Intern',
    org: 'BlueCurrent Solution Pvt. Ltd.',
    period: 'May 2026 – Jul 2026',
    type: 'Internship',
    points: [
      'Engineered an IoT platform to configure, monitor and control connected devices through live dashboards.',
      'Implemented remote transformer monitoring for Tata Power Delhi — tracking dissolved gas, current and voltage.',
      'Integrated real-time alerts and dashboards so field engineers spot abnormal readings without manual checks.',
    ],
  },
  {
    icon: <FaBriefcase />,
    role: 'Embedded Systems Developer',
    org: 'Elecson',
    period: 'May 2025 – Apr 2026',
    type: 'Part-time',
    points: [
      'Designed a low-cost touch-based switching system for electric bicycles that skips the microcontroller entirely.',
      'Engineered an anti-theft alert system that detects unauthorized access and improves e-bike security.',
      'Developed an RF-based wireless locking system for secure, convenient access control.',
    ],
  },
  {
    icon: <FaUsers />,
    role: 'President (prev. Electronics Lead)',
    org: 'CYBORG — NIT Rourkela',
    period: 'May 2024 – Present',
    type: 'Leadership',
    points: [
      'Lead a 120+ member robotics club across technical and non-technical teams.',
      'Mentored 20+ students as Electronics Lead and organized a robotics workshop attended by 400+ participants.',
    ],
  },
  {
    icon: <FaTheaterMasks />,
    role: 'Member — Acting',
    org: 'RITVIC — NIT Rourkela',
    period: 'May 2024 – Present',
    type: 'Extracurricular',
    points: [
      'Performed street plays (nukkad natak) promoting mental health awareness on campus.',
      'Collaborated with the team to develop socially relevant theatrical acts for campus events.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <h2 className="section-heading">Experience</h2>
      <div className="timeline">
        {experienceData.map((item) => (
          <div className="timeline-item" key={item.role}>
            <div className="timeline-marker">
              <span className="timeline-icon">{item.icon}</span>
            </div>
            <div className="timeline-card">
              <div className="timeline-card-header">
                <h3 className="timeline-role">{item.role}</h3>
                <span className="timeline-type">{item.type}</span>
              </div>
              <p className="timeline-org">{item.org}</p>
              <p className="timeline-period">{item.period}</p>
              <ul className="timeline-points">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
