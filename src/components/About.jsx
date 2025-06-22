import React, { useState } from 'react';
import SkillMatrix from './SkillMatrix';

const About = ({ className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <article className={`about ${className}`} data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <ul>
          <li>
            <strong>Software Engineer</strong> with a Bachelor of Science in Informatics & Computer Science from the{' '}
            <strong>National Kapodistrian University of Athens</strong>, currently specializing in{' '}
            <strong>Industrial Printing Systems</strong> at{' '}
            <strong>Software Competitiveness International S.A.</strong>
          </li>
          <li>
            Proven experience across diverse domains: from developing high-performance{' '}
            <strong>Linux-based network software</strong> for telecommunications to designing{' '}
            <strong>enterprise-grade industrial printing solutions</strong>.
          </li>
          <li>
            Technical expertise spans{' '}
            <strong>C/C++, Java, Python, Spring Framework, Spring Boot</strong>, with hands-on experience in{' '}
            <strong>Jenkins, GitLab CI/CD, networking protocols,</strong> and automated testing frameworks.
          </li>
          <li>
            Notable achievement: Contributed to developing{' '}
            <strong>hitless software upgrade</strong> capabilities, eliminating service outages and significantly enhancing system availability.
          </li>
          <li>
            Expanding expertise in{' '}<strong>cybersecurity</strong> through the{' '}
            <strong>IBM Cybersecurity Analyst Professional Certificate</strong>, while maintaining active involvement in full-stack development.
          </li>
          <li>
            Creator of{' '}<strong>Worthify</strong> — an AI-driven car valuation platform achieving{' '}
            <strong>97% accuracy</strong> across 200,000+ vehicle listings.
          </li>
        </ul>
      </section>

      <SkillMatrix />

      <section className="cv-section">
        <div className="cv-header">
          <h3 className="h3 cv-title">
            <ion-icon name="document-text-outline"></ion-icon>
            Professional Resume (old)
          </h3>
          <p className="cv-description">
            Comprehensive overview of my professional journey, skills, and achievements
          </p>
        </div>

        <div className="cv-showcase">
          <div className="cv-preview-card">
            <div className="cv-preview-wrapper">
              <button onClick={openModal} className="cv-preview-button">
                <div className="cv-thumbnail-container">
                  <img src="assets/cv/CV-thumbnail.png" alt="Resume Preview" />
                  <div className="cv-overlay">
                    <div className="cv-overlay-content">
                      <ion-icon name="eye-outline"></ion-icon>
                      <span>Quick Preview</span>
                    </div>
                  </div>
                </div>
              </button>
            </div>
            
            <div className="cv-info">
              <h4 className="cv-info-title">Resume Highlights</h4>
              <div className="cv-stats">
                <div className="cv-stat-item">
                  <ion-icon name="briefcase-outline"></ion-icon>
                  <span>2+ Years Experience</span>
                </div>
                <div className="cv-stat-item">
                  <ion-icon name="school-outline"></ion-icon>
                  <span>CS Degree</span>
                </div>
                <div className="cv-stat-item">
                  <ion-icon name="code-slash-outline"></ion-icon>
                  <span>8+ Technologies</span>
                </div>
                <div className="cv-stat-item">
                  <ion-icon name="trophy-outline"></ion-icon>
                  <span>5+ Certifications</span>
                </div>
              </div>
            </div>
          </div>

          <div className="cv-actions">
            <a
              href="assets/cv/Nikolaos-Mavrapidis-New-Resume.pdf"
              download
              className="cv-action-btn primary"
            >
              <div className="btn-icon">
                <ion-icon name="download-outline"></ion-icon>
              </div>
              <div className="btn-content">
                <span className="btn-title">Download PDF</span>
                <span className="btn-subtitle">Ready to print</span>
              </div>
            </a>

            <button onClick={openModal} className="cv-action-btn secondary">
              <div className="btn-icon">
                <ion-icon name="eye-outline"></ion-icon>
              </div>
              <div className="btn-content">
                <span className="btn-title">View Online</span>
                <span className="btn-subtitle">Quick preview</span>
              </div>
            </button>

            <a
              href="https://www.linkedin.com/in/nikolaos-mavrapidis"
              target="_blank"
              rel="noopener noreferrer"
              className="cv-action-btn tertiary"
            >
              <div className="btn-icon">
                <ion-icon name="logo-linkedin"></ion-icon>
              </div>
              <div className="btn-content">
                <span className="btn-title">LinkedIn Profile</span>
                <span className="btn-subtitle">Full details</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CV Modal */}
      {isModalOpen && (
        <div className="modal show" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <iframe
              src="assets/cv/Nikolaos-Mavrapidis-New-Resume.pdf"
              title="CV Preview"
              width="100%"
              height="100%"
              style={{ border: 'none' }}
            />
          </div>
        </div>
      )}

      <section className="where-to-find-me">
        <h3 className="h3 where-to-find-me-title">Let's Connect</h3>
        <p className="where-to-find-me-description">
          Feel free to reach out and connect with me on these platforms
        </p>

        <div className="social-connect-grid">
          <div className="social-connect-card">
            <a
              href="https://www.linkedin.com/in/nikolaos-mavrapidis"
              target="_blank"
              rel="noopener noreferrer"
              className="social-connect-link"
            >
              <div className="social-icon-wrapper">
                <ion-icon name="logo-linkedin"></ion-icon>
              </div>
              <div className="social-content">
                <h4 className="social-platform">LinkedIn</h4>
                <p className="social-description">Professional networking & career updates</p>
              </div>
              <div className="social-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
            </a>
          </div>

          <div className="social-connect-card">
            <a
              href="https://github.com/NikosMav"
              target="_blank"
              rel="noopener noreferrer"
              className="social-connect-link"
            >
              <div className="social-icon-wrapper">
                <ion-icon name="logo-github"></ion-icon>
              </div>
              <div className="social-content">
                <h4 className="social-platform">GitHub</h4>
                <p className="social-description">Open source projects & code repositories</p>
              </div>
              <div className="social-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
            </a>
          </div>

          <div className="social-connect-card">
            <a
              href="mailto:mavrapidisnikolaos@gmail.com"
              className="social-connect-link"
            >
              <div className="social-icon-wrapper">
                <ion-icon name="mail-outline"></ion-icon>
              </div>
              <div className="social-content">
                <h4 className="social-platform">Email</h4>
                <p className="social-description">Direct communication & inquiries</p>
              </div>
              <div className="social-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
            </a>
          </div>

          <div className="social-connect-card">
            <a
              href="https://pypi.org/user/NikosMav/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-connect-link"
            >
              <div className="social-icon-wrapper">
                <ion-icon name="cube-outline"></ion-icon>
              </div>
              <div className="social-content">
                <h4 className="social-platform">PyPI</h4>
                <p className="social-description">Python packages & distributions</p>
              </div>
              <div className="social-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
            </a>
          </div>
        </div>
      </section>
    </article>
  );
};

export default About; 