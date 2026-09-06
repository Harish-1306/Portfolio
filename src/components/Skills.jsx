import React from 'react';
import { skillCategories } from '../data/portfolioData';
import { CategoryHeaderIcon, TechIcon } from './Icons';
import { Layers } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" style={{ background: 'rgba(13, 18, 31, 0.3)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Layers size={14} style={{ marginRight: '4px' }} />
            Competencies
          </span>
          <h2 className="section-title">Technical <span>Expertise</span></h2>
          <p className="section-subtitle">
            Engineered around modern backend frameworks, scalable databases, frontend responsiveness, and enterprise design patterns.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <div className="skill-card" key={idx}>
              <div className="skill-card-header">
                <div className="skill-card-icon">
                  <CategoryHeaderIcon icon={cat.icon} size={22} />
                </div>
                <h3 className="skill-card-title">{cat.title}</h3>
                <span className="skill-card-badge">{cat.badge}</span>
              </div>

              <div className="skill-items-list">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className={`skill-badge ${skill.featured ? 'featured' : ''}`}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                  >
                    <TechIcon name={skill.name} size={15} />
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
