// src/App.jsx
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Hero from './pages/Hero';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

// Helper component for the fade-in effect
const AnimatedSection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animate only once
    threshold: 0.1,    // Trigger when 10% of the element is visible
  });

  return (
    <div ref={ref} className={`fade-in-section ${inView ? 'is-visible' : ''}`}>
      {children}
    </div>
  );
};


function App() {
  // Console Log Easter Egg
  useEffect(() => {
    console.log(
      "%cHey, fellow developer! Thanks for checking out my portfolio's code. Let's connect!",
      "color: #64ffda; font-family: 'Fira Code', monospace; font-size: 16px; padding: 10px;"
    );
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <main>
        <AnimatedSection>
          <About />
        </AnimatedSection>
        <AnimatedSection>
          <Skills />
        </AnimatedSection>
        <AnimatedSection>
          <Projects />
        </AnimatedSection>
        <AnimatedSection>
          <Contact />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}

export default App;