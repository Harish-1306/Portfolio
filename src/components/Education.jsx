import React from 'react';
import { educationList, certifications } from '../data/portfolioData';
import { GraduationCap, Award, School } from 'lucide-react';

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <GraduationCap size={14} style={{ marginRight: '4px' }} />
            Academics & Credentials
          </span>
          <h2 className="section-title">Education & <span>Credentials</span></h2>
          <p className="section-subtitle">
            Academic achievements, engineering degree foundations, and professional technical training.
          </p>
        </div>

        {/* Formal Academic Education */}
        <div style={{ marginBottom: '40px' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '20px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <School size={20} color="var(--accent-cyan)" /> Formal Education
          </h3>
          <div className="edu-grid">
            {educationList.map((edu, idx) => (
              <div className="edu-card" key={idx}>
                <div
                  className="edu-icon-badge"
                  style={{ background: 'rgba(0, 242, 254, 0.1)', color: 'var(--accent-cyan)' }}
                >
                  <GraduationCap size={26} />
                </div>
                <h3 className="edu-degree">{edu.degree}</h3>
                <p className="edu-institution">{edu.institution}</p>
                <div className="edu-meta">
                  <span className="edu-badge">{edu.grade}</span>
                  <span className="edu-years">{edu.period}</span>
                </div>
                <p className="edu-notes">{edu.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Certifications & Specialized Training */}
        {certifications && certifications.length > 0 && (
          <div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '20px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Award size={20} color="#818cf8" /> Professional Certifications & Technical Training
            </h3>
            <div className="edu-grid">
              {certifications.map((cert, idx) => (
                <div className="edu-card" key={idx}>
                  <div
                    className="edu-icon-badge"
                    style={{ background: 'rgba(99, 102, 241, 0.12)', color: '#818cf8' }}
                  >
                    <Award size={26} />
                  </div>
                  <h3 className="edu-degree">{cert.title}</h3>
                  <p className="edu-institution">{cert.institution}</p>
                  <div className="edu-meta">
                    <span className="edu-badge">{cert.grade}</span>
                    <span className="edu-years">{cert.period}</span>
                  </div>
                  <p className="edu-notes">{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

