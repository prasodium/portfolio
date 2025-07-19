// src/components/Navbar.jsx
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close menu when a link is clicked
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#hero" className="navbar-logo font-bold text-2xl">
          HP
        </a>

        {/* Hamburger Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Desktop Menu */}
        <ul className="nav-menu-desktop">
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#skills" className="nav-link">Skills</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>

        {/* Mobile Menu (Overlay) */}
        <ul className={isOpen ? 'nav-menu-mobile active' : 'nav-menu-mobile'}>
          <li><a href="#hero" className="nav-link" onClick={handleLinkClick}>Home</a></li>
          <li><a href="#about" className="nav-link" onClick={handleLinkClick}>About</a></li>
          <li><a href="#skills" className="nav-link" onClick={handleLinkClick}>Skills</a></li>
          <li><a href="#projects" className="nav-link" onClick={handleLinkClick}>Projects</a></li>
          <li><a href="#contact" className="nav-link" onClick={handleLinkClick}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;