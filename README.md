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
  <img src="https://img.shields.io/badge/ESLint-9-4b32c3?style=flat-square&labelColor=112240" alt="ESLint 9">
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

This repository contains the personal portfolio website of Harprosad Mandal, a full-stack developer. It is a single-page React application that introduces the developer, lists their skills, showcases projects and makes it easy to get in touch.

The site uses a dark theme with a teal accent color and is responsive down to mobile screens. It is built with React and Vite, and the hero section renders a WebGL particle field behind the headline.

<p align="right"><a href="#harprosad-mandal-portfolio">Back to top</a></p>

## At a Glance

| Feature | Summary | Details |
| --- | --- | --- |
| Hero | Animated particle background, typewriter headline and a call-to-action button | [Hero Section](#hero-section) |
| About | Short introduction and current toolkit | [About Section](#about-section) |
| Skills | Frontend, Backend and Tools cards | [Skills Section](#skills-section) |
| Projects | Project cards with description, tech list, source code and live demo links | [Projects Section](#projects-section) |
| Contact | Email button and social links | [Contact Section](#contact-section) |
| Navigation | Fixed navbar that becomes a hamburger menu on small screens | [Navigation](#navigation) |
| Scroll effects | Sections fade in on scroll, smooth scrolling, console greeting | [Scroll Effects](#scroll-effects) |

<p align="right"><a href="#harprosad-mandal-portfolio">Back to top</a></p>

## Features

### Hero Section

A full-height landing section. A WebGL particle field in teal and light slate drifts behind the content. The headline reads "Hello, I'm Harprosad Mandal." with a blinking cursor, followed by the subheadline "I'm a Full-Stack Developer who builds things for the web." A typewriter effect cycles through "React Apps", "Cool Projects" and "Smart Robots", and the "View My Work" button jumps to the projects section.

### About Section

A short introduction covering who the developer is, how they got started with code and the toolkit they currently use.

### Skills Section

Titled "Tech Stack" on the page. Three cards, Frontend, Backend and Tools, each with a list of technologies.

### Projects Section

Titled "Featured Projects" on the page. Each project is a card with an image, a description, a list of technologies and links to the source code and the live demo. On wide screens the image and text alternate sides from card to card, and images are dimmed until hovered. The cards are generated from a data array, so adding a project does not require touching the markup.

### Contact Section

Titled "Let's Connect" on the page. A short message, a "Say Hello" button that opens an email to the developer, and icon links to GitHub, LinkedIn and Twitter.

### Navigation

A fixed, translucent navbar with the HP logo and links to About, Skills, Projects and Contact. On screens 768px wide or narrower it collapses into a hamburger menu that opens a full-screen overlay and closes when a link is tapped.

### Scroll Effects

The About, Skills, Projects and Contact sections fade and slide in once, when 10% of the section becomes visible. Scrolling to a section is smooth, and the browser console shows a greeting message for developers who inspect the page.

<p align="right"><a href="#harprosad-mandal-portfolio">Back to top</a></p>

## Tech Stack

| Area | Technology | Purpose |
| --- | --- | --- |
| UI framework | React 19 | Component-based user interface |
| Build tool | Vite 7 with the React plugin | Development server and production bundling |
| Graphics | OGL | WebGL particle background in the hero section |
| Scroll detection | react-intersection-observer | Triggers the fade-in effect for sections |
| Icons | react-icons | Navbar, project and social icons |
| Styling | Plain CSS with custom properties | One stylesheet per component, theme colors and fonts defined in `src/index.css` |
| Fonts | Inter and Fira Code | Loaded from Google Fonts |
| Linting | ESLint 9 | Code quality, with the React Hooks and React Refresh plugins |

<p align="right"><a href="#harprosad-mandal-portfolio">Back to top</a></p>

## Getting Started

<details>
<summary>Show setup instructions</summary>

Follow these instructions to set up and run the project on your local machine for development and testing purposes.

### Prerequisites

| Requirement | Version | Notes |
| --- | --- | --- |
| Node.js | 20.19 or higher, or 22.12 or higher | Required by Vite 7 |
| npm | Bundled with Node.js | This project uses `npm` for package management |

### Local Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/prasodium/portfolio.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd portfolio
    ```

3.  **Install the dependencies:**
    ```bash
    npm install
    ```

4.  **Start the development server:**
    ```bash
    npm run dev
    ```

### Environment Variables

None. The project does not need any environment variables or API keys.

</details>

<p align="right"><a href="#harprosad-mandal-portfolio">Back to top</a></p>

## Available Scripts

<details>
<summary>Show available scripts</summary>

In the project directory, you can run the following commands:

| Command | Description |
| --- | --- |
| `npm run dev` | Runs the app in development mode. Open [http://localhost:5173](http://localhost:5173) to view it in your browser. The page will reload when you make changes. |
| `npm run build` | Builds the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance. |
| `npm run lint` | Lints the project files for code quality and style issues using ESLint. |
| `npm run preview` | Serves the production build from the `dist` folder locally to preview it before deployment. |

</details>

<p align="right"><a href="#harprosad-mandal-portfolio">Back to top</a></p>

## Folder Structure

<details>
<summary>Show folder structure</summary>

The project follows a standard React component-based architecture.

| Path | Contents |
| --- | --- |
| `index.html` | HTML entry point, loads `src/main.jsx` |
| `public/` | Static files served as-is, such as the favicon |
| `src/main.jsx` | The main entry point for the React application |
| `src/App.jsx` | Assembles the page, wraps sections in the fade-in animation and logs the console greeting |
| `src/pages/` | Page sections: Hero, About, Skills, Projects and Contact |
| `src/components/` | Reusable UI components: Navbar, Footer, Particles and RotatingText |
| `src/styles/` | One CSS file per section or component |
| `src/index.css` | Global styles, theme variables, fonts and the fade-in classes |
| `src/assets/` | Static assets like images |
| `vite.config.js` | Vite configuration |
| `eslint.config.js` | ESLint configuration |

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
| Projects | The `projectsData` array in `src/pages/Projects.jsx`, which currently holds two placeholder entries |
| Email address and social links | `src/pages/Contact.jsx` |
| Colors and fonts | The custom properties at the top of `src/index.css` |
| Page title and favicon | `index.html` and `public/icon.svg` |

</details>

<p align="right"><a href="#harprosad-mandal-portfolio">Back to top</a></p>

## Contributing

<details>
<summary>Show contribution steps</summary>

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

</details>

<p align="right"><a href="#harprosad-mandal-portfolio">Back to top</a></p>
