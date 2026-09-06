import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [toasts, setToasts] = useState([]);

  // Toast helper
  const showToast = (message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3800);
  };

  // Copy helper
  const handleCopy = (text) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(`Copied to clipboard: ${text}`);
      }).catch(() => {
        showToast(`Selected: ${text}`);
      });
    } else {
      showToast(`Selected: ${text}`);
    }
  };

  // Scroll spy to detect active section
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 140;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio-app">
      {/* Background Ambient Grid */}
      <div className="bg-grid-pattern"></div>

      {/* Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Sections */}
      <main>
        <Hero onCopy={handleCopy} />
        <About />
        <Experience />
        <Projects onOpenModal={(project) => setSelectedProject(project)} />
        <Skills />
        <Education />
        <Contact onCopy={handleCopy} showToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Architectural Specs Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Toast Container */}
      <Toast toasts={toasts} />
    </div>
  );
}
