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
            I am a recent graduate with a{' '}
            <strong>Bachelor of Science in Informatics & Computer Science</strong>{' '}
            from the{' '}<strong>National Kapodistrian University of Athens</strong>,
            where I built a solid foundation in computer science and
            software development.
          </li>
          <li>
            Currently employed as a{' '}<strong>Software Engineer</strong>{' '}at{' '}
            <strong>Software Competitiveness International S.A.</strong>,
            designing, developing and optimizing high-performance
            Linux-based software solutions for a major telecommunications
            client.
          </li>
          <li>
            Technical toolkit:{' '}
            <strong>C/C++, Python, Scala, Bash, Git</strong>, with daily use
            of GitLab and Jira for agile collaboration and project tracking.
          </li>
          <li>
            Hands-on with networking tools such as{' '}
            <strong>Spirent</strong>{' '}and{' '}<strong>Wireshark</strong>{' '}for
            performance testing and protocol analysis; experienced in
            writing unit and automated tests to guarantee robust software
            quality.
          </li>
          <li>
            Actively transitioning from networking to{' '}
            <strong>cybersecurity</strong>; currently enrolled in the{' '}
            <strong>IBM Cybersecurity Analyst Professional Certificate</strong>{' '}
            to build skills in threat analysis, incident response, and
            security operations.
          </li>
          <li>
            Project highlight:{' '}<strong>Worthify</strong>{' '}— AI-driven car
            valuation platform leveraging 200.000+ listings to reach 97%
            price-prediction accuracy.
          </li>
          <li>
            I value{' '}<strong>collaboration</strong>, continuous learning and
            challenging opportunities that push technological boundaries in
            software engineering, networking and cybersecurity.
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