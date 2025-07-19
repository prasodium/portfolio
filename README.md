# ✨ Kilkari - Your AI-Powered Postnatal Care Companion

Kilkari is a multilingual (English & Hindi) web application designed to be an indispensable digital health companion for Indian parents, guiding them through the crucial first 1000 days of their child's life. Our mission is to empower parents by providing reliable, personalized, and timely information, bridging the gap between parental anxiety and verified medical guidance.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

---

## Table of Contents

-   [Project Overview](#project-overview)
-   [Key Features](#key-features)
-   [Tech Stack](#tech-stack)
-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Local Installation](#local-installation)
    -   [Environment Variables](#environment-variables)
-   [Folder Structure](#folder-structure)
-   [Available Scripts](#available-scripts)
-   [Contributing](#contributing)
-   [License](#license)

## Project Overview

The first 1000 days of a child's life are critical for their long-term health and development. However, new parents in India often face a fragmented landscape of conflicting advice, misinformation, and difficulty in accessing timely healthcare.

Kilkari solves this by providing:
*   **A Single Source of Truth:** All information is vetted and aligned with guidelines from the Indian Academy of Pediatrics (IAP) and WHO.
*   **Personalized Guidance:** The app experience is tailored to the baby's specific age, ensuring parents get relevant information exactly when they need it.
*   **Actionable Support:** Kilkari doesn't just provide information; it connects parents to verified local healthcare services.

## Key Features

*   **👶 Personalized Baby Dashboard:** Register your baby to get a personalized timeline with age-specific tips, developmental milestones, and reminders.
*   **🤖 Multilingual AI Assistant ("Bal Sahayak"):** Ask questions in English or Hindi and get safe, context-aware answers from our LLM, trained on a verified medical knowledge base.
*   **📍 Healthcare Locator ("Swasthya Locator"):** Integrates Google Maps to find and navigate to nearby verified pediatricians, hospitals (public/private), and vaccination centers.
*   **💉 Interactive Vaccine Tracker:** A personalized schedule based on the IAP guidelines. Track completed vaccines and get reminders for upcoming ones.
*   **👁️ AI Vision Tool ("Drishyam AI"):** (In Development) A Vision Transformer model to provide preliminary analysis on images of infant rashes and stool, helping parents gauge urgency and seek appropriate care.

## Tech Stack

### Frontend
*   **Framework:** [React](https://reactjs.org/) (with Vite)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Routing:** [React Router DOM](https://reactrouter.com/)
*   **Animations:** [Framer Motion](https://www.framer.com/motion/)
*   **Internationalization (i18n):** [react-i18next](https://react.i18next.com/)
*   **State Management:** React Context API (`BabyContext`)
*   **Icons:** [Lucide React](https://lucide.dev/)

### Backend (Assumed)
*   **Primary Framework:** Python (with Django or FastAPI)
*   **Database:** PostgreSQL

### Services & APIs
*   **AI:** Google Gemini / OpenAI GPT APIs
*   **Maps:** Google Maps API

## Getting Started

Follow these instructions to set up and run the project on your local machine for development and testing purposes.

### Prerequisites

*   **Node.js:** Make sure you have Node.js (version 16.x or higher) installed.
*   **npm** or **yarn:** This project uses `npm` for package management.

### Local Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/kilkari-frontend.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd kilkari-frontend
    ```

3.  **Install the dependencies:**
    ```bash
    npm install
    ```

### Environment Variables

The application requires certain API keys and configuration variables to function correctly.

1.  Create a `.env` file in the root of the project directory by duplicating the example file:
    ```bash
    cp .env.example .env
    ```

2.  Open the newly created `.env` file and add your custom values.
    ```env
    # .env

    # The base URL for your backend API server
    VITE_API_BASE_URL=http://localhost:8000/api

    # Your Google Maps API key for the Healthcare Locator
    VITE_GOOGLE_MAPS_API_KEY=YOUR_GOOGLE_MAPS_API_KEY_HERE
    ```

## Folder Structure

The project follows a standard React component-based architecture.

src/
├── assets/ # Static assets like images, logos
├── components/ # Reusable UI components (Header, Footer, Button, etc.)
├── context/ # React Context for global state (e.g., BabyContext.jsx)
├── locales/ # Translation JSON files (en.json, hi.json)
├── pages/ # Page-level components (Home, Dashboard, Login, etc.)
├── App.jsx # Main application component with routing
├── i18n.js # Configuration for the i18next library
├── index.css # Global styles and Tailwind CSS imports
└── main.jsx # The main entry point for the React application



## Available Scripts

In the project directory, you can run the following commands:

*   **`npm run dev`**: Runs the app in development mode. Open [http://localhost:5173](http://localhost:5173) to view it in your browser. The page will reload when you make changes.

*   **`npm run build`**: Builds the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

*   **`npm run lint`**: Lints the project files for code quality and style issues using ESLint.

*   **`npm run preview`**: Serves the production build from the `dist` folder locally to preview it before deployment.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

This project is distributed under the MIT License. See `LICENSE` for more information.