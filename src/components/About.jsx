import React from 'react';
import { personalInfo } from '../data/portfolioData';
import {
  UserCheck,
  Building2,
  Workflow,
  Calculator,
  ShieldCheck,
  Clock,
  Zap,
  Users,
  GitBranch,
  Lightbulb
} from 'lucide-react';

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <UserCheck size={14} style={{ marginRight: '4px' }} />
            Biography
          </span>
          <h2 className="section-title">Architecting <span>Enterprise Solutions</span></h2>
          <p className="section-subtitle">
            Bridging technical precision with strategic business requirements to build scalable, workflow-driven software.
          </p>
        </div>

        <div className="about-grid">
          {/* About Left Card with Profile Photo */}
          <div className="about-card">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '24px', flexWrap: 'wrap' }}>
                <div style={{
                  position: 'relative',
                  width: '110px',
                  height: '110px',
                  minWidth: '110px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: '2px solid var(--accent-cyan)',
                  boxShadow: '0 0 25px rgba(0, 242, 254, 0.3)'
                }}>
                  <img
                    src="asset/photo mine.jpg"
                    alt={personalInfo.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'rgba(7, 10, 17, 0.85)',
                    fontSize: '0.65rem',
                    textAlign: 'center',
                    color: 'var(--accent-cyan)',
                    fontFamily: 'var(--font-mono)',
                    padding: '2px 0'
                  }}>
                    HARISH R
                  </div>
                </div>
                <div>
                  <h3 style={{ marginBottom: '4px', fontSize: '1.5rem' }}>{personalInfo.name}</h3>
                  <p style={{ color: 'var(--accent-cyan)', fontWeight: '600', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', marginBottom: '6px' }}>
                    {personalInfo.role}
                  </p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Building2 size={14} /> QuGates Technologies Pvt Ltd, Bangalore
                  </p>
                </div>
              </div>

              <p className="about-text">
                I am a results-driven <strong>Java Full Stack Developer</strong> with hands-on experience developing enterprise applications across both frontend and backend domains. 
                Currently at <strong>QuGates Technologies</strong>, I engineer high-concurrency backend services, design multi-level approval workflows, and implement complex calculations for flagship enterprise platforms.
              </p>
              <p className="about-text">
                My technical expertise spans <strong>Java, Spring Boot, Spring Data JPA, Hibernate, REST APIs, OpenFeign, React, and SQL (MySQL, PostgreSQL)</strong>. 
                I pride myself on translating complex real-world requirements into clean, scalable architectures with robust validation, audit trails, and scheduled automated processing.
              </p>
            </div>

            <div className="feature-pills">
              <span className="feature-pill"><Workflow size={15} color="var(--accent-cyan)" /> Workflow Engines</span>
              <span className="feature-pill"><Calculator size={15} color="var(--accent-cyan)" /> Metric Calculations</span>
              <span className="feature-pill"><ShieldCheck size={15} color="var(--accent-cyan)" /> Auth & Authorization</span>
              <span className="feature-pill"><Clock size={15} color="var(--accent-cyan)" /> Cron Processing</span>
              <span className="feature-pill"><Zap size={15} color="var(--accent-cyan)" /> Caching & Performance</span>
            </div>
          </div>

          {/* About Right: Professional Highlights */}
          <div className="highlights-container">
            <div className="highlight-box">
              <div className="highlight-icon-box">
                <Users size={24} color="var(--accent-cyan)" />
              </div>
              <div className="highlight-info">
                <h4>Team Leadership & Collaboration</h4>
                <p>
                  Actively coordinate tasks, allocate responsibilities, foster cross-functional collaboration, and ensure timely, high-quality deliverables across fast-paced development cycles.
                </p>
              </div>
            </div>

            <div className="highlight-box">
              <div className="highlight-icon-box indigo">
                <GitBranch size={24} color="#818cf8" />
              </div>
              <div className="highlight-info">
                <h4>End-to-End Feature Ownership</h4>
                <p>
                  Demonstrated strong ownership by stewarding features from initial requirements gathering and schema modeling through API development, UI integration, testing, and delivery.
                </p>
              </div>
            </div>

            <div className="highlight-box">
              <div className="highlight-icon-box emerald">
                <Lightbulb size={24} color="#34d399" />
              </div>
              <div className="highlight-info">
                <h4>Business-to-Technical Translation</h4>
                <p>
                  Deep business understanding with an ability to formulate practical technical solutions for multi-level approval hierarchies, incentive matrices, and automated HR pipelines.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
