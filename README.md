<div align="center">

<img src="docs/logo.svg" alt="HP logo" width="96" height="96">

# Harprosad Mandal Portfolio

A personal portfolio for a full-stack developer who builds things for the web.

<p>
  <img src="https://img.shields.io/badge/platform-web-64ffda?style=flat-square&labelColor=112240" alt="Platform: web">
  <img src="https://img.shields.io/badge/React-19-61dafb?style=flat-square&labelColor=112240" alt="React 19">
  <img src="https://img.shields.io/badge/Vite-7-b73bfe?style=flat-square&labelColor=112240" alt="Vite 7">
  <img src="https://img.shields.io/badge/WebGL-OGL-ccd6f6?style=flat-square&labelColor=112240" alt="WebGL with OGL">
  <img src="https://img.shields.io/badge/Node.js-20.19%2B-5fa04e?style=flat-square&labelColor=112240" alt="Node.js 20.19 or higher">
</p>

<p>
  <a href="#features">Features</a> |
  <a href="#tech-stack">Tech Stack</a> |
  <a href="#getting-started">Getting Started</a> |
  <a href="#available-scripts">Scripts</a> |
  <a href="#folder-structure">Structure</a> |
  <a href="#customization">Customization</a> |
  <a href="#contributing">Contributing</a>
</p>

</div>

<details>
<summary>Table of Contents</summary>

- [Overview](#overview)
- [At a Glance](#at-a-glance)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Folder Structure](#folder-structure)
- [Customization](#customization)
- [Contributing](#contributing)

</details>

## Overview

A single-page portfolio built with React and Vite. It introduces the developer, lists their skills, showcases projects and gives visitors a way to get in touch. The site uses a dark theme with a teal accent, a WebGL particle background in the hero section, and a layout that adapts to mobile screens.

<p align="right"><a href="#harprosad-mandal-portfolio">Back to top</a></p>

## At a Glance

| Feature | Summary | Details |
| --- | --- | --- |
| Hero | Landing section with a particle background | [Hero Section](#hero-section) |
| About | Short introduction | [About Section](#about-section) |
| Skills | Technologies grouped by category | [Skills Section](#skills-section) |
| Projects | Project showcase cards | [Projects Section](#projects-section) |
| Contact | Email and social links | [Contact Section](#contact-section) |
| Navigation | Fixed navbar with a mobile menu | [Navigation](#navigation) |
| Scroll effects | Fade-in sections and smooth scrolling | [Scroll Effects](#scroll-effects) |

<p align="right"><a href="#harprosad-mandal-portfolio">Back to top</a></p>

## Features

### Hero Section

A full-height landing section with a WebGL particle background. A typewriter line cycles through "React Apps", "Cool Projects" and "Smart Robots", and the "View My Work" button scrolls to the projects.

### About Section

A short introduction to the developer and their current toolkit.

### Skills Section

Three cards, Frontend, Backend and Tools, each listing technologies.

### Projects Section

Cards with an image, description, technology list and links to the source code and live demo. On wide screens the layout alternates sides from card to card. Cards are generated from a data array, so adding a project does not require changing the markup.

### Contact Section

An email button and icon links to GitHub, LinkedIn and Twitter.

### Navigation

A fixed navbar with links to each section. On screens 768px wide or narrower it turns into a hamburger menu with a full-screen overlay.

### Scroll Effects

Sections fade in once, when 10% of the section is visible. Scrolling between sections is smooth.

<p align="right"><a href="#harprosad-mandal-portfolio">Back to top</a></p>

## Tech Stack

| Technology | Used for |
| --- | --- |
| React 19 | User interface components |
| Vite 7 | Development server and production build |
| OGL | WebGL particle background |
| react-intersection-observer | Triggering the fade-in effect on scroll |
| react-icons | Navbar, project and social icons |
| Plain CSS | Styling, with theme colors and fonts defined as custom properties in `src/index.css` |
| Inter and Fira Code | Typography, loaded from Google Fonts |
| ESLint 9 | Linting |

<p align="right"><a href="#harprosad-mandal-portfolio">Back to top</a></p>

## Getting Started

<details>
<summary>Show setup instructions</summary>

You need Node.js 20.19 or higher (or 22.12 or higher, as required by Vite 7) and npm.

```bash
git clone https://github.com/prasodium/portfolio.git
cd portfolio
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. No environment variables or API keys are needed.

</details>

<p align="right"><a href="#harprosad-mandal-portfolio">Back to top</a></p>

## Available Scripts

<details>
<summary>Show available scripts</summary>

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the development server with hot reload |
| `npm run build` | Creates an optimized production build in the `dist` folder |
| `npm run preview` | Serves the production build locally so you can check it before deploying |
| `npm run lint` | Checks the code for quality and style issues with ESLint |

</details>

<p align="right"><a href="#harprosad-mandal-portfolio">Back to top</a></p>

## Folder Structure

<details>
<summary>Show folder structure</summary>

| Path | Contents |
| --- | --- |
| `src/pages/` | Page sections: Hero, About, Skills, Projects and Contact |
| `src/components/` | Navbar, Footer, Particles (WebGL background) and RotatingText (typewriter effect) |
| `src/styles/` | One stylesheet per section or component |
| `src/index.css` | Global styles, theme variables and fonts |
| `src/App.jsx` | Assembles the page and applies the fade-in effect to sections |
| `src/main.jsx` | Application entry point |
| `src/assets/` | Images |
| `public/` | Static files, including the favicon |
| `index.html` | HTML entry point |

</details>

<p align="right"><a href="#harprosad-mandal-portfolio">Back to top</a></p>

## Customization

<details>
<summary>Show where to edit content</summary>

| To change | Edit |
| --- | --- |
| Headline, subheadline and rotating words | `src/pages/Hero.jsx` |
| About text | `src/pages/About.jsx` |
| Skill categories and items | The `skills` object in `src/pages/Skills.jsx` |
| Projects | The `projectsData` array in `src/pages/Projects.jsx` |
| Email address and social links | `src/pages/Contact.jsx` |
| Colors and fonts | The custom properties at the top of `src/index.css` |
| Page title and favicon | `index.html` and `public/icon.svg` |

</details>

<p align="right"><a href="#harprosad-mandal-portfolio">Back to top</a></p>

## Contributing

<details>
<summary>Show contribution steps</summary>

Suggestions and fixes are welcome.

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a pull request

</details>

<p align="right"><a href="#harprosad-mandal-portfolio">Back to top</a></p>
