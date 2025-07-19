// src/components/Contact.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2 className="section-heading">Let's Connect</h2>
      <div className="contact-content">
        <p>
          I'm currently open to new opportunities and collaborations. My inbox is always open, whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <a href="mailto:harprosadmandal@gmail.com" className="contact-button">
          Say Hello
        </a>
        <div className="social-links">
          <a href="https://github.com/prasodium" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/harprosad" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;