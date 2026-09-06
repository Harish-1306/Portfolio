import React from 'react';
import { experiences } from '../data/portfolioData';
import { TechIcon } from './Icons';
import { Briefcase, Building2, MapPin } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" style={{ background: 'rgba(13, 18, 31, 0.3)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Briefcase size={14} style={{ marginRight: '4px' }} />
            Experience
          </span>
          <h2 className="section-title">Career <span>Trajectory</span></h2>
          <p className="section-subtitle">
            Proven track record of engineering scalable enterprise systems and collaborating in agile teams.
          </p>
        </div>

        <div className="timeline-container">
          {experiences.map((exp, idx) => (
            <div className="timeline-item" key={idx}>
              <div className={`timeline-dot ${!exp.active ? 'intern' : ''}`}></div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="role-title">{exp.role}</h3>
                    <p className="company-name" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Building2 size={16} /> {exp.company}
                    </p>
                  </div>
                  <div className="timeline-meta">
                    <span className={`timeline-date ${exp.active ? 'active' : ''}`}>
                      {exp.period}
                    </span>
                    <span className="timeline-location" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <MapPin size={13} /> {exp.location}
                    </span>
                  </div>
                </div>

                <div className="timeline-bullets">
                  {exp.bullets.map((b, bIdx) => (
                    <div className="timeline-bullet" key={bIdx}>
                      <span className="bullet-icon"></span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <div className="timeline-tags">
                  {exp.tags.map((tag, tIdx) => (
                    <span
                      className="timeline-tag"
                      key={tIdx}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                    >
                      <TechIcon name={tag} size={13} />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
