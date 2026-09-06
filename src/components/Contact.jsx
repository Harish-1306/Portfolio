import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './Icons';
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Send,
  Loader2,
  CheckCircle2,
  Copy,
  MailCheck
} from 'lucide-react';

export default function Contact({ onCopy, showToast }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);
  const [preparedAction, setPreparedAction] = useState(null);

  const EMAILJS_SERVICE_ID = "service_9d5qqak";
  const EMAILJS_TEMPLATE_ID = "template_1t75grt";
  const EMAILJS_PUBLIC_KEY = "veCtou7AagpbItsV3";

  useEffect(() => {
    try {
      emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    } catch (err) {
      console.warn('EmailJS init note:', err);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setPreparedAction(null);

    const emailParams = {
      name: formData.name,
      from_name: formData.name,
      user_name: formData.name,
      email: formData.email,
      from_email: formData.email,
      reply_to: formData.email,
      message: formData.message,
      to_name: "Harish R"
    };

    try {
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        emailParams
      );

      if (response && response.status === 200) {
        setSentSuccess(true);
        showToast("Message sent successfully! Harish will respond soon.");
        setFormData({ name: '', email: '', message: '' });
        setIsSending(false);
        return;
      }
    } catch (error) {
      console.log('EmailJS direct send note (handling fallback):', error);
    }

    // Smooth fallback: provide instant 1-click delivery options
    setIsSending(false);
    const subject = `Portfolio Inquiry from ${formData.name}`;
    const body = `Hi Harish,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`;

    const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      personalInfo.email
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setPreparedAction({
      name: formData.name,
      gmailWebUrl,
      mailtoUrl,
      bodyText: body
    });

    showToast("Message prepared! Click below to send directly to Harish.");
  };

  const handleCopyDraft = () => {
    if (preparedAction) {
      onCopy(preparedAction.bodyText);
      showToast("Draft copied to clipboard!");
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Send size={14} style={{ marginRight: '4px' }} />
            Get In Touch
          </span>
          <h2 className="section-title">Let's <span>Connect</span></h2>
          <p className="section-subtitle">
            Have an opportunity or looking for a talented Java Full Stack Developer? Send me a message or connect directly.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left: Contact Info & Profiles */}
          <div className="contact-info-card">
            <h3>Contact Information</h3>
            <p>
              I am currently located in <strong>{personalInfo.location}</strong> and actively open to full-time opportunities, engineering collaborations, and discussions on distributed systems.
            </p>

            <div className="contact-methods">
              {/* Email */}
              <div
                className="contact-method-item"
                onClick={() => onCopy(personalInfo.email)}
                title="Click to copy email"
              >
                <div className="method-icon">
                  <Mail size={20} color="var(--accent-cyan)" />
                </div>
                <div className="method-details">
                  <div className="method-label">Email Address</div>
                  <a href={`mailto:${personalInfo.email}`} className="method-value" onClick={(e) => e.stopPropagation()}>
                    {personalInfo.email}
                  </a>
                </div>
                <button className="method-copy-btn" aria-label="Copy email">Copy</button>
              </div>

              {/* Phone */}
              <div
                className="contact-method-item"
                onClick={() => onCopy(personalInfo.phone)}
                title="Click to copy phone"
              >
                <div className="method-icon">
                  <Phone size={20} color="var(--accent-cyan)" />
                </div>
                <div className="method-details">
                  <div className="method-label">Phone Number</div>
                  <a href={`tel:+91${personalInfo.phone}`} className="method-value" onClick={(e) => e.stopPropagation()}>
                    +91 {personalInfo.phone}
                  </a>
                </div>
                <button className="method-copy-btn" aria-label="Copy phone">Copy</button>
              </div>

              {/* Location */}
              <div className="contact-method-item">
                <div className="method-icon">
                  <MapPin size={20} color="var(--accent-cyan)" />
                </div>
                <div className="method-details">
                  <div className="method-label">Location</div>
                  <div className="method-value">{personalInfo.location}</div>
                </div>
              </div>

              {/* LinkedIn */}
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="contact-method-item"
              >
                <div className="method-icon">
                  <LinkedinIcon size={22} color="var(--accent-cyan)" />
                </div>
                <div className="method-details">
                  <div className="method-label">LinkedIn Profile</div>
                  <div className="method-value">linkedin.com/in/harish-r-395116332</div>
                </div>
                <ExternalLink size={16} color="var(--text-muted)" />
              </a>

              {/* GitHub */}
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="contact-method-item"
              >
                <div className="method-icon">
                  <GithubIcon size={22} color="var(--accent-cyan)" />
                </div>
                <div className="method-details">
                  <div className="method-label">GitHub Repository</div>
                  <div className="method-value">github.com/Harish-1306</div>
                </div>
                <ExternalLink size={16} color="var(--text-muted)" />
              </a>

              {/* LeetCode */}
              <a
                href={personalInfo.socials.leetcode}
                target="_blank"
                rel="noreferrer"
                className="contact-method-item"
              >
                <div className="method-icon">
                  <LeetcodeIcon size={22} />
                </div>
                <div className="method-details">
                  <div className="method-label">LeetCode Profile</div>
                  <div className="method-value">leetcode.com/u/WSxp3yAkdq</div>
                </div>
                <ExternalLink size={16} color="var(--text-muted)" />
              </a>
            </div>
          </div>

          {/* Right: Interactive Contact Form */}
          <div className="contact-form-card">
            <h3 style={{ marginBottom: '8px' }}>Send a Direct Message</h3>
            <p style={{ marginBottom: '24px' }}>Drop a line with project details, interview requests, or greetings:</p>

            {sentSuccess ? (
              <div
                style={{
                  padding: '30px',
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  borderRadius: 'var(--radius-lg)',
                  textAlign: 'center'
                }}
              >
                <CheckCircle2 size={48} color="#34d399" style={{ margin: '0 auto 16px auto' }} />
                <h4 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '8px' }}>
                  Thank You, Your Message is Sent!
                </h4>
                <p style={{ color: '#cbd5e1', fontSize: '0.95rem', marginBottom: '20px' }}>
                  Harish has received your message and will review it promptly.
                </p>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => setSentSuccess(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : preparedAction ? (
              <div
                style={{
                  padding: '24px',
                  background: 'rgba(0, 242, 254, 0.05)',
                  border: '1px solid rgba(0, 242, 254, 0.3)',
                  borderRadius: 'var(--radius-lg)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <MailCheck size={28} color="var(--accent-cyan)" />
                  <div>
                    <h4 style={{ color: '#fff', fontSize: '1.1rem' }}>
                      Message Ready for {personalInfo.email}
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      Choose your preferred way to send your message to Harish:
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <a
                    href={preparedAction.gmailWebUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <Mail size={18} />
                    <span>Send via Gmail (Web Browser)</span>
                  </a>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    <a
                      href={preparedAction.mailtoUrl}
                      className="btn btn-secondary"
                      style={{ fontSize: '0.85rem', padding: '10px 14px', justifyContent: 'center' }}
                    >
                      <ExternalLink size={16} />
                      <span>Default Mail App</span>
                    </a>
                    <button
                      onClick={handleCopyDraft}
                      className="btn btn-secondary"
                      style={{ fontSize: '0.85rem', padding: '10px 14px', justifyContent: 'center' }}
                    >
                      <Copy size={16} />
                      <span>Copy Draft</span>
                    </button>
                  </div>
                </div>

                <button
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)',
                    textDecoration: 'underline',
                    marginTop: '4px',
                    textAlign: 'center',
                    cursor: 'pointer'
                  }}
                  onClick={() => setPreparedAction(null)}
                >
                  Edit Message Form
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="form-name">Your Full Name</label>
                  <input
                    type="text"
                    id="form-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="e.g. John Doe"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="form-email">Your Email Address</label>
                  <input
                    type="email"
                    id="form-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="e.g. john@company.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="form-message">Message</label>
                  <textarea
                    id="form-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder="Describe the opportunity, project scope, or role..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSending}
                  id="btn-submit-contact"
                >
                  {isSending ? (
                    <>
                      <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} />
                      <span>Preparing Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
