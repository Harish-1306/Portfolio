import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { TechIcon, GithubIcon } from './Icons';
import {
  Boxes,
  ChartLine,
  Users,
  Coins,
  GraduationCap,
  Building2,
  Hand,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

function getProjectIcon(iconName) {
  switch (iconName) {
    case 'chart-line':
      return <ChartLine size={32} />;
    case 'users':
      return <Users size={32} />;
    case 'coins':
      return <Coins size={32} />;
    case 'graduation-cap':
      return <GraduationCap size={32} />;
    case 'building-columns':
      return <Building2 size={32} />;
    case 'hand':
      return <Hand size={32} />;
    default:
      return <Boxes size={32} />;
  }
}

export default function Projects({ onOpenModal }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'enterprise', label: 'Enterprise Systems (QuGates)' },
    { id: 'fullstack', label: 'Web & Full Stack' },
    { id: 'core', label: 'Core Java & IoT' },
  ];

  const filteredProjects = projects.filter((proj) => {
    if (activeFilter === 'all') return true;
    return proj.category === activeFilter;
  });

  return (
    <section id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Boxes size={14} style={{ marginRight: '4px' }} />
            Portfolio Showcase
          </span>
          <h2 className="section-title">Featured <span>Projects</span></h2>
          <p className="section-subtitle">
            Mission-critical enterprise software systems engineered for scale, reliability, and business impact.
          </p>
        </div>

        {/* Project Tabs Filter */}
        <div className="skills-tabs" id="project-filters">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-btn ${activeFilter === tab.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div className="project-card" key={project.id}>
              <div
                className="project-banner"
                style={
                  project.image
                    ? { background: `url('${project.image}') center/cover no-repeat` }
                    : {}
                }
              >
                {project.image ? (
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(13, 18, 31, 0.75)' }}></div>
                ) : (
                  <div className="project-banner-pattern"></div>
                )}

                <div className="project-icon-badge">
                  {getProjectIcon(project.icon)}
                </div>
                <span className="project-badge-top">{project.badge}</span>
              </div>

              <div className="project-body">
                <span className="project-category">{project.categoryLabel}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-summary">{project.summary}</p>

                <div className="project-feature-list">
                  {project.features.map((feature, fIdx) => (
                    <div className="project-feature-item" key={fIdx}>
                      <CheckCircle2 size={16} color="var(--accent-cyan)" style={{ minWidth: '16px', marginTop: '2px' }} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="project-tech-stack">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      className="tech-tag"
                      key={tIdx}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                    >
                      <TechIcon name={tech} size={13} />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>

                <div className="project-footer">
                  {project.specs ? (
                    <button className="btn-detail" onClick={() => onOpenModal(project)}>
                      <span>View Architecture & Specs</span>
                      <ExternalLink size={16} />
                    </button>
                  ) : project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-detail"
                    >
                      <span>View on GitHub</span>
                      <GithubIcon size={16} />
                    </a>
                  ) : (
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      Assistive IoT Research
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
