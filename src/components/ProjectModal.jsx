import React, { useEffect } from 'react';
import { TechIcon } from './Icons';
import { X, AlignLeft, Network, ListCheck, Layers } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-wrap">
            <h3>{project.title}</h3>
            <span>{project.categoryLabel}</span>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {project.specs && (
            <>
              <div>
                <h4 className="modal-section-title">
                  <AlignLeft size={18} style={{ marginRight: '6px' }} />
                  System Overview
                </h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.96rem' }}>
                  {project.specs.overview}
                </p>
              </div>

              <div>
                <h4 className="modal-section-title">
                  <Network size={18} style={{ marginRight: '6px' }} />
                  Architecture & Engineering Specifications
                </h4>
                <pre className="modal-arch-box">
                  <code>{project.specs.architecture}</code>
                </pre>
              </div>

              <div>
                <h4 className="modal-section-title">
                  <ListCheck size={18} style={{ marginRight: '6px' }} />
                  Key Engineering Modules Delivered
                </h4>
                <div className="modal-feature-list">
                  {project.specs.modules.map((m, idx) => (
                    <div className="modal-feature-card" key={idx}>
                      <h5 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Layers size={16} color="var(--accent-cyan)" />
                        <span>{m.name}</span>
                      </h5>
                      <p>{m.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          <div>
            <h4 className="modal-section-title">
              <Layers size={18} style={{ marginRight: '6px' }} />
              Technologies & Frameworks Utilized
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="tech-tag"
                  style={{
                    background: 'rgba(0, 242, 254, 0.08)',
                    borderColor: 'rgba(0, 242, 254, 0.2)',
                    color: 'var(--accent-cyan)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <TechIcon name={tech} size={13} />
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
