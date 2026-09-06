import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './Icons';
import { ArrowRight, Download, MapPin, Mail, Phone, Server, Layers } from 'lucide-react';

export default function Hero({ onCopy }) {
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = personalInfo.roles[roleIndex];
    let timer;

    if (isDeleting) {
      if (charIndex > 0) {
        timer = setTimeout(() => {
          setTypedText(currentRole.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % personalInfo.roles.length);
      }
    } else {
      if (charIndex < currentRole.length) {
        timer = setTimeout(() => {
          setTypedText(currentRole.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 90);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="hero-grid">
          
          {/* Hero Left Content */}
          <div className="hero-content">
            <div className="status-badge" id="hero-status-badge">
              <span className="status-pulse"></span>
              <span>Available for Opportunities</span>
            </div>

            <p className="hero-greeting">// Hello World, I'm</p>
            <h1 className="hero-name">
              Harish <span className="highlight">R.</span>
            </h1>

            <div className="hero-role-wrapper">
              <span>Specializing in:</span>
              <span className="typed-text">{typedText}</span>
            </div>

            <p className="hero-description">
              Hands-on <strong>Java Full Stack Developer</strong> engineering robust enterprise applications with{' '}
              <strong>Spring Boot, REST APIs, React, JPA/Hibernate, and SQL</strong>. Proven expertise in designing workflow & approval engines,{' '}
              automated calculation ledgers, and scalable enterprise applications at <strong>QuGates Technologies</strong>.
            </p>

            <div className="hero-cta-group">
              <a href="#projects" className="btn btn-primary" id="btn-explore-projects">
                <span>Explore Enterprise Projects</span>
                <ArrowRight size={18} />
              </a>
              <a
                href="asset/Harish_R_Resume.pdf"
                className="btn btn-secondary"
                id="btn-download-resume"
                download="Harish_R_Resume.pdf"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-cyan"
                id="hero-github-link"
                title="GitHub Profile (Harish-1306)"
                style={{ width: '48px', height: '48px', padding: 0 }}
              >
                <GithubIcon size={22} color="var(--accent-cyan)" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-cyan"
                id="hero-linkedin-link"
                title="LinkedIn Profile"
                style={{ width: '48px', height: '48px', padding: 0 }}
              >
                <LinkedinIcon size={22} color="var(--accent-cyan)" />
              </a>
              <a
                href={personalInfo.socials.leetcode}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-cyan"
                id="hero-leetcode-link"
                title="LeetCode Profile"
                style={{ width: '48px', height: '48px', padding: 0 }}
              >
                <LeetcodeIcon size={22} />
              </a>
            </div>

            <div className="hero-quick-meta">
              <div className="meta-chip" id="chip-location">
                <MapPin size={15} style={{ color: 'var(--accent-cyan)' }} />
                <span>{personalInfo.location}</span>
              </div>
              <div
                className="meta-chip copyable"
                id="chip-email"
                onClick={() => onCopy(personalInfo.email)}
                title="Click to copy email"
              >
                <Mail size={15} style={{ color: 'var(--accent-cyan)' }} />
                <span>{personalInfo.email}</span>
              </div>
              <div
                className="meta-chip copyable"
                id="chip-phone"
                onClick={() => onCopy(personalInfo.phone)}
                title="Click to copy phone"
              >
                <Phone size={15} style={{ color: 'var(--accent-cyan)' }} />
                <span>+91 {personalInfo.phone}</span>
              </div>
            </div>
          </div>

          {/* Hero Right Code Showcase Visual */}
          <div className="hero-visual">
            <div className="code-window">
              <div className="code-header">
                <div className="code-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className="code-title">EnterpriseEngineer.java</span>
                <span className="code-badge">Spring Boot</span>
              </div>
              <div className="code-body">
                <p><span className="code-annotation">@Service</span></p>
                <p><span className="code-keyword">public class</span> <span className="code-class">HarishPortfolioService</span> &#123;</p>
                <br />
                <p>&nbsp;&nbsp;<span className="code-annotation">@Autowired</span></p>
                <p>&nbsp;&nbsp;<span className="code-keyword">private</span> EnterpriseWorkflowEngine engine;</p>
                <br />
                <p>&nbsp;&nbsp;<span className="code-comment">// Enterprise competencies</span></p>
                <p>&nbsp;&nbsp;<span className="code-keyword">public</span> DeveloperProfile <span className="code-method">getProfile</span>() &#123;</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">return new</span> DeveloperProfile()</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.setName(<span className="code-string">"Harish R"</span>)</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.setCurrentRole(<span className="code-string">"Java Full Stack Dev @ QuGates"</span>)</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.setBackendStack(<span className="code-string">"Spring Boot, Spring Data JPA, REST, OpenFeign"</span>)</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.setFrontendStack(<span className="code-string">"React, HTML5, CSS3, JS (ES6+)"</span>)</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.setDatabases(<span className="code-string">"MySQL, PostgreSQL"</span>)</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.setSpecialties(<span className="code-string">"PMS, Workflows, Caching, Scheduling"</span>);</p>
                <p>&nbsp;&nbsp;&#125;</p>
                <p>&#125;</p>
              </div>
            </div>

            {/* Floating Stats Pills */}
            <div className="hero-floating-stat stat-pos-1">
              <div className="stat-icon">
                <Server size={20} color="var(--accent-cyan)" />
              </div>
              <div className="stat-details">
                <h4>3+ Enterprise</h4>
                <p>Mission-Critical Systems</p>
              </div>
            </div>

            <div className="hero-floating-stat stat-pos-2">
              <div className="stat-icon">
                <Layers size={20} color="var(--accent-cyan)" />
              </div>
              <div className="stat-details">
                <h4>Full Stack</h4>
                <p>Spring Boot & React</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
