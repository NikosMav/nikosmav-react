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
        <h3 className="h3 cv-title">My Curriculum Vitae</h3>
        <div className="cv-container">
          <div className="cv-thumbnail">
            <button onClick={openModal} className="cv-thumbnail-button">
              <img src="assets/cv/cv-image.png" alt="CV Thumbnail" />
            </button>
          </div>
          <div className="cv-download">
            <a
              href="assets/cv/Nikolaos-Mavrapidis-New-Resume.pdf"
              download
              className="download-btn"
            >
              <ion-icon name="download-outline"></ion-icon>
              <span>Download CV</span>
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
        <h3 className="h3 where-to-find-me-title">Where to Find Me</h3>

        <ul className="where-to-find-me-list">
          <li className="where-to-find-me-item">
            <a
              href="https://www.linkedin.com/in/nikolaos-mavrapidis"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="image-container">
                <img src="./assets/images/linkedin.jpg" alt="LinkedIn" />
              </div>
            </a>
          </li>

          <li className="where-to-find-me-item">
            <a
              href="https://github.com/NikosMav"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="image-container">
                <img src="./assets/images/github.png" alt="GitHub" />
              </div>
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default About; 