import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './Icons';
import { Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            Harish <span>R.</span>
            <p className="footer-copy" style={{ marginTop: '4px' }}>
              Java Full Stack Developer • Bangalore, India
            </p>
          </div>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center' }}
              title="GitHub"
            >
              <GithubIcon size={20} color="var(--text-secondary)" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center' }}
              title="LinkedIn"
            >
              <LinkedinIcon size={20} color="var(--text-secondary)" />
            </a>
            <a
              href={personalInfo.socials.leetcode}
              target="_blank"
              rel="noreferrer"
              style={{ display: 'flex', alignItems: 'center' }}
              title="LeetCode"
            >
              <LeetcodeIcon size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center' }}
              title="Email"
            >
              <Mail size={20} color="var(--text-secondary)" />
            </a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <p className="footer-copy">© 2026 Harish R. Built with React & Spring Boot Mindset.</p>
            <a href="#home" className="back-to-top" aria-label="Back to top" title="Back to top">
              <ArrowUp size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
