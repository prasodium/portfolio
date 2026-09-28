// src/pages/About.jsx
import React from 'react';
import { FaUsers, FaMicrochip, FaCode, FaGithub, FaGraduationCap, FaTheaterMasks, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/About.css'; // Import the CSS for styling

const facts = [
  { icon: <FaCode />, label: 'Full-Stack SDE', detail: 'React, TypeScript, Node' },
  { icon: <FaMicrochip />, label: 'Embedded + Edge AI', detail: 'ESP32, Raspberry Pi' },
  { icon: <FaUsers />, label: 'CYBORG President', detail: '120+ member robotics club' },
  { icon: <FaGithub />, label: 'Open Source', detail: '40+ repos on GitHub' },
];

const coursework = [
  'Data Structures',
  'Algorithms',
  'DBMS',
  'Operating Systems',
  'Computer Networks',
  'Software Engineering',
];

const education = [
  {
    school: 'National Institute of Technology, Rourkela',
    degree: 'B.Tech, Computer Science and Engineering',
    period: '2023 - 2027',
    note: 'Final year. Coursework below.',
    courses: coursework,
  },
  {
    school: 'Govt. Science College, Tejgaon, Dhaka',
    degree: 'Higher Secondary Certificate (HSC)',
    period: '2023',
    note: 'Graduated with 90%.',
    courses: [],
  },
  {
    school: 'Dhanmondi Govt. Boys High School, Dhaka',
    degree: 'Secondary School Certificate (SSC)',
    period: '2020',
    note: 'Graduated with 90%.',
    courses: [],
  },
];

const beyond = [
  {
    icon: <FaTheaterMasks />,
    title: 'Street theatre',
    text: 'I act with RITVIC, performing nukkad natak on social themes like mental health awareness.',
  },
  {
    icon: <FaUsers />,
    title: 'Mentoring',
    text: 'I mentor juniors in electronics and robotics, and have run workshops for 400+ participants.',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Roots',
    text: 'I grew up in Dhaka, Bangladesh and now live in Rourkela, Odisha, India.',
  },
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
        <p className="about-current">
          Currently in my final year at NIT Rourkela and open to full-time
          Software Engineer roles.
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

        <h3 className="about-subheading">
          <FaGraduationCap className="about-subheading-icon" /> Education
        </h3>
        <div className="education-grid">
          {education.map((edu) => (
            <div className="education-card" key={edu.school}>
              <p className="education-period">{edu.period}</p>
              <h4 className="education-degree">{edu.degree}</h4>
              <p className="education-school">{edu.school}</p>
              <p className="education-note">{edu.note}</p>
              {edu.courses.length > 0 && (
                <div className="coursework-chips">
                  {edu.courses.map((course) => (
                    <span className="coursework-chip" key={course}>{course}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <h3 className="about-subheading">Beyond the code</h3>
        <div className="beyond-grid">
          {beyond.map((item) => (
            <div className="beyond-card" key={item.title}>
              <span className="beyond-icon">{item.icon}</span>
              <div>
                <h4 className="beyond-title">{item.title}</h4>
                <p className="beyond-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <blockquote className="about-quote">
          "I love seeing people laugh around me."
        </blockquote>
      </div>
    </section>
  );
};

export default About;
