import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';

export default function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`} id="header">
      <div className="container nav-container">
        <a href="#home" className="brand-logo" id="nav-brand-link">
          <div className="logo-badge">H</div>
          <div>
            <span className="brand-name">Harish R</span>
            <span className="brand-role">Java Full Stack Dev</span>
          </div>
        </a>

        <nav className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`} id="nav-links">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a href="#contact" className="btn btn-primary btn-sm" id="btn-header-hire">
            <Send size={15} style={{ marginRight: '6px' }} />
            <span>Let's Talk</span>
          </a>
          <button
            className={`mobile-toggle ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
