// src/components/Footer.jsx
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>Designed & Built by Harprosad Mandal</p>
      <p>© {currentYear}</p>
    </footer>
  );
};

export default Footer;