import React, { useState } from 'react';

const Resume = ({ className }) => {
  const [visibleDetails, setVisibleDetails] = useState({});

  const toggleDetails = (id) => {
    setVisibleDetails(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <article className={`resume ${className}`} data-page="resume">
        <header>
            <h2 className="h2 article-title">Resume</h2>
        </header>

        <section className="timeline">
            <div className="title-wrapper">
              <div className="icon-box">
                <ion-icon name="briefcase-outline"></ion-icon>
              </div>

              <h3 className="h3">Experience</h3>
            </div>

            <ol className="timeline-list">
              <li className="timeline-item">
                <div className="timeline-item-content">
                  <img
                    className="timeline-item-image"
                    src="assets/images/softcom_logo.jpg"
                    alt="Software Competitiveness International Logo"
                  />
                  <div className="text-content">
                    <h4 className="h4 timeline-item-title">
                      <a
                        href="https://www.softcom-int.com/el/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="university-link"
                      >
                        Software Engineer
                      </a>
                    </h4>
                    <h5 className="h5 timeline-item-subtitle">
                      Software Competitiveness International S.A.
                    </h5>
                    <span>Dec 2023 — Present</span>
                    <div style={{ display: visibleDetails['experience'] ? 'block' : 'none' }}>
                      <p className="timeline-text">
                        Currently, I am working as a{' '}
                        <strong>Software Engineer</strong>{' '}at{' '}
                        <strong>Software Competitiveness International S.A.</strong>{' '}
                        in Marousi, Attiki, Greece. In this role, I design,
                        develop, and optimize high-performance software
                        solutions that enhance our company's competitiveness in
                        the global market.
                      </p>
                      <p className="timeline-text">
                        I specialize in maintaining and enhancing{' '}
                        <strong>Linux-based software</strong>{' '}for a major
                        telecommunications client, leveraging a diverse tech
                        stack that includes{' '}
                        <strong>C/C++, Scala, Bash, Python</strong>, and{' '}
                        <strong>Git</strong>. I also employ advanced tools like{' '}
                        <strong>Spirent</strong>{' '}to rigorously test and validate
                        the performance of our networking solutions, while
                        continuously expanding my expertise in emerging
                        protocols, unit testing, and automation.
                      </p>
                    </div>
                    <button
                      onClick={() => toggleDetails('experience')}
                      className="details-button"
                    >
                      {visibleDetails['experience'] ? 'Show Less' : 'Show More'}
                    </button>
                  </div>
                </div>
              </li>
            </ol>
        </section>

        <section className="timeline">
            <div className="title-wrapper">
            <div className="icon-box">
                <ion-icon name="book-outline"></ion-icon>
            </div>
            <h3 className="h3">Education</h3>
            </div>

            <ol className="timeline-list">
            <li className="timeline-item">
                <div className="timeline-item-content">
                  <img
                    className="timeline-item-image"
                    src="assets/images/nkua.jpg"
                    alt="National and Kapodistrian University of Athens Logo"
                  />
                  <div className="text-content">
                    <h4 className="h4 timeline-item-title">
                      <a
                        href="https://www.di.uoa.gr/en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="university-link"
                      >
                        National and Kapodistrian University of Athens
                      </a>
                    </h4>
                    <h5 className="h5 timeline-item-subtitle">
                      Bachelor of Science in Informatics and Computer Science
                    </h5>
                    <span>2017 — 2022</span>
                    <div style={{ display: visibleDetails['education'] ? 'block' : 'none' }}>
                      <p className="timeline-text">
                        <strong>Transformative Education:</strong>{' '}My journey at
                        the National Kapodistrian University of Athens was an
                        enlightening chapter that went beyond acquiring a
                        Bachelor of Science in Informatics and
                        Telecommunications. Surrounded by a thriving community
                        of scholars, I was propelled into a world of research
                        and innovation, sparking a profound enthusiasm for
                        technology that extended well beyond academic confines.
                      </p>

                      <p className="timeline-text">
                        <strong>Mentorship and Expertise:</strong>{' '}The esteemed
                        faculty, renowned for their industry influence, provided
                        unparalleled mentorship. Their guidance was instrumental
                        in deepening my understanding of complex subjects such
                        as algorithmic complexity, machine learning, software
                        development and the intricate facets of cybersecurity.
                      </p>

                      <p className="timeline-text">
                        <strong>Practical Application:</strong>{' '}The curriculum's
                        emphasis on big projects and interactive workshops
                        allowed me to translate theory into practice.
                      </p>

                      <p className="timeline-text">
                        <strong>A Foundation for the Future:</strong>{' '}The fusion
                        of stringent academics, real-world application, and
                        active community engagement at the National Kapodistrian
                        University of Athens has been indispensable. It has
                        endowed me with a versatile toolkit and a
                        forward-thinking outlook, poised to make a significant
                        impact on technological progress and to navigate the
                        complexities of our digital era.
                      </p>
                    </div>
                    <button
                      onClick={() => toggleDetails('education')}
                      className="details-button"
                    >
                      {visibleDetails['education'] ? 'Show Less' : 'Show More'}
                    </button>
                  </div>
                </div>
              </li>
            </ol>
        </section>

        <section className="timeline">
            <div className="title-wrapper">
              <div className="icon-box">
                <ion-icon name="code-slash-outline"></ion-icon>
              </div>
              <h3 className="h3">Projects</h3>
            </div>
            <ol className="timeline-list">
              <li className="timeline-item">
                <div className="timeline-item-content">
                  <img
                    className="timeline-item-image"
                    src="assets\images\wortify_logo.png"
                    alt="Worthify Platform Logo"
                  />
                  <div className="text-content">
                    <h4 className="h4 timeline-item-title">
                      <a
                        href="https://www.worthify.gr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="university-link"
                      >
                        Worthify – AI-Driven Car Valuation Platform
                      </a>
                    </h4>

                    <span>Nov 2023</span>
                    <div style={{ display: visibleDetails['worthify'] ? 'block' : 'none' }}>
                      <p className="timeline-text">
                        Worthify is an innovative platform designed to
                        revolutionize the car valuation process using{' '}
                        <strong>artificial intelligence</strong>{' '}and{' '}
                        <strong>data analytics</strong>. The platform provides
                        highly accurate, real-time car valuations for
                        individuals, car resellers, insurance companies, and
                        other stakeholders in the automobile market.
                      </p>
                      <p className="timeline-text">
                        By leveraging{' '}<strong>predictive modeling</strong>{' '}and{' '}
                        <strong>advanced algorithms</strong>, Worthify ensures
                        transparency and empowers users to make well-informed
                        decisions about car purchases, sales, and insurance. Our
                        AI model is trained on over{' '}
                        <strong>200,000 car listings</strong>, achieving an
                        exceptional{' '}<strong>97% accuracy</strong>{' '}in price
                        estimation.
                      </p>
                      <p className="timeline-text">
                        Our vision is to expand into new markets and regions,
                        aiming to become the{' '}<strong>global standard</strong>{' '}
                        for resale value estimation and automotive pricing
                        intelligence.
                      </p>
                    </div>

                    <button
                      onClick={() => toggleDetails('worthify')}
                      className="details-button"
                    >
                      {visibleDetails['worthify'] ? 'Show Less' : 'Show More'}
                    </button>
                  </div>
                </div>
              </li>

              <li className="timeline-item">
                <div className="timeline-item-content">
                  <img
                    className="timeline-item-image"
                    src="assets/images/ubicomp_logo.jpg"
                    alt="Certificate Thumbnail"
                  />
                  <div className="text-content">
                    <h4 className="h4 timeline-item-title">
                      <a
                        href="https://pergamos.lib.uoa.gr/uoa/dl/object/3362706/file.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="university-link"
                      >
                        Bachelor's Thesis: Museum of IT of the Department of
                        Informatics & Telecommunications of NKUA
                      </a>
                    </h4>

                    <span>Apr 2022</span>
                    <div style={{ display: visibleDetails['more-info2'] ? 'block' : 'none' }}>
                      <p className="timeline-text">
                        During my academic journey, I had the valuable
                        opportunity to work on a significant
                        <strong>thesis project</strong> that contributed to the
                        creation of the Museum of IT of the Department of
                        Informatics & Telecommunications of NKUA. This endeavor
                        revolved around my specialized task of developing a web
                        application dedicated to the exploration of Ubiquitous
                        Computing.
                      </p>
                    </div>

                    <button
                      onClick={() => toggleDetails('more-info2')}
                      className="details-button"
                    >
                      {visibleDetails['more-info2'] ? 'Show Less' : 'Show More'}
                    </button>
                  </div>
                </div>
              </li>
            </ol>
        </section>

        <section className="timeline">
        <div className="title-wrapper">
            <div className="icon-box">
            <ion-icon name="document-outline"></ion-icon>
            </div>

            <h3 className="h3">Certificates</h3>
        </div>

        <ol className="timeline-list">
            <li className="timeline-item">
            <div className="timeline-item-content">
                <img
                className="timeline-item-image"
                src="assets/images/cisco_logo.jpg"
                alt="Cisco Logo"
                />
                <div className="text-content">
                <h4 className="h4 timeline-item-title">
                    <a
                    href="https://www.netacad.com/career-paths/cybersecurity?courseLang=en-US"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="university-link"
                    >
                    Junior Cybersecurity Analyst Career Path (in progress)
                    </a>
                </h4>

                <h5 className="h5 timeline-item-subtitle">Cisco</h5>

                <span>Enrolled Apr 2025 — Present</span>
                </div>
            </div>
            </li>

            <li className="timeline-item">
            <div className="timeline-item-content">
                <img
                className="timeline-item-image"
                src="assets/images/ibm_logo.svg"
                alt="IBM Logo"
                />
                <div className="text-content">
                <h4 className="h4 timeline-item-title">
                    <a
                    href="http://credentials.edx.org/records/programs/shared/c6ca3390ca744440ae9c8b23e75893b7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="university-link"
                    >
                    IBM Cybersecurity Analyst – Professional Certificate (in
                    progress)
                    </a>
                </h4>

                <h5 className="h5 timeline-item-subtitle">IBM</h5>

                <span>Enrolled Apr 2025 — Present</span>
                <p className="timeline-text">
                    Program Record ID 57e4cbf46b8a4cd2a164380453d5c424
                </p>
                </div>
            </div>
            </li>

            <li className="timeline-item">
            <div className="timeline-item-content">
                <img
                className="timeline-item-image"
                src="assets\images\ibm_logo.svg"
                alt="Certificate Thumbnail"
                />
                <div className="text-content">
                <h4 className="h4 timeline-item-title">
                    <a
                    href="https://courses.edx.org/certificates/b9780090bc0d42a38eab8b2781834dff"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="university-link"
                    >
                    Certificate for Software Engineering Basics for Everyone
                    </a>
                </h4>

                <h5 className="h5 timeline-item-subtitle">IBM</h5>

                <span>Issued Nov 2023</span>

                <p className="timeline-text">
                    Credential ID b9780090bc0d42a38eab8b2781834dff
                </p>
                </div>
            </div>
            </li>

            <li className="timeline-item">
            <div className="timeline-item-content">
                <img
                className="timeline-item-image"
                src="assets\images\Harvard_x_logo.png"
                alt="Certificate Thumbnail"
                />
                <div className="text-content">
                <h4 className="h4 timeline-item-title">
                    <a
                    href="https://courses.edx.org/certificates/702a001c324b47549d7ef5bf39f5266a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="university-link"
                    >
                    Certificate for High-Dimensional Data Analysis
                    </a>
                </h4>

                <h5 className="h5 timeline-item-subtitle">HarvardX</h5>

                <span>Issued Oct 2023</span>

                <p className="timeline-text">
                    Credential ID 702a001c324b47549d7ef5bf39f5266a
                </p>
                </div>
            </div>
            </li>

            <li className="timeline-item">
            <div className="timeline-item-content">
                <img
                className="timeline-item-image"
                src="assets\images\coursera_logo.jpg"
                alt="Certificate Thumbnail"
                />
                <div className="text-content">
                <h4 className="h4 timeline-item-title">
                    <a
                    href="https://www.coursera.org/account/accomplishments/certificate/3Y5SP5UWTK67"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="university-link"
                    >
                    Data Visualization
                    </a>
                </h4>

                <h5 className="h5 timeline-item-subtitle">Coursera</h5>

                <span>Issued Nov 2021</span>

                <p className="timeline-text">Credential ID 3Y5SP5UWTK67</p>
                </div>
            </div>
            </li>
        </ol>
        </section>

        <section className="timeline">
        <div className="title-wrapper">
            <div className="icon-box">
            <ion-icon name="code-outline"></ion-icon>
            </div>

            <h3 className="h3">Technology Courses</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <div className="timeline-item-content">
                <img
                className="timeline-item-image"
                src="assets/images/scrimba_logo.jpg"
                alt="Scrimba Logo"
                />
                <div className="text-content">
                <h4 className="h4 timeline-item-title">
                    <a
                    href="https://scrimba.com/certificate-cert2ffentAFN4JENbSKHeZufvLD6a5ojyNw82iYfDfDD7aiMF"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="university-link"
                    >
                    Intro to Vite
                    </a>
                </h4>

                <h5 className="h5 timeline-item-subtitle">Scrimba</h5>

                <span>Jun 2025</span>
                </div>
            </div>
            </li>
            <li className="timeline-item">
            <div className="timeline-item-content">
                <img
                className="timeline-item-image"
                src="assets/images/scrimba_logo.jpg"
                alt="Scrimba Logo"
                />
                <div className="text-content">
                <h4 className="h4 timeline-item-title">
                    <a
                    href="https://scrimba.com/certificate-cert2uNjgWdv7QkzUzk2dW7g2mT18r9rQQKFedX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="university-link"
                    >
                    Learn Python
                    </a>
                </h4>

                <h5 className="h5 timeline-item-subtitle">Scrimba</h5>

                <span>May 2025</span>
                </div>
            </div>
            </li>

            <li className="timeline-item">
            <div className="timeline-item-content">
                <img
                className="timeline-item-image"
                src="assets/images/scrimba_logo.jpg"
                alt="Scrimba Logo"
                />
                <div className="text-content">
                <h4 className="h4 timeline-item-title">
                    <a
                    href="https://scrimba.com/certificate-cert2ffentAFN4JENbSKHeZufvCvGhBF2RmQYtutVtEeQ6xrVW"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="university-link"
                    >
                    Learn Node.js
                    </a>
                </h4>

                <h5 className="h5 timeline-item-subtitle">Scrimba</h5>

                <span>May 2025</span>
                </div>
            </div>
            </li>
        </ol>
        </section>

        <section className="timeline">
        <div className="title-wrapper">
            <div className="icon-box">
            <ion-icon name="bulb-outline"></ion-icon>
            </div>

            <h3 className="h3">Competitions & Conferences</h3>
        </div>

        <ol className="timeline-list">
            <li className="timeline-item">
            <div className="timeline-item-content">
                <img
                className="timeline-item-image"
                src="assets/images/athens_center_for_entrepreneurship_and_innovation_aueb_logo.jpg"
                alt="Athens Center for Entrepreneurship and Innovation | AUEB logo"
                />
                <div className="text-content">
                <h4 className="h4 timeline-item-title">
                    <a
                    href="https://drive.google.com/file/d/10C1RQVWAZdPgWcAZe-jNDUawI7eaMgNk/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="university-link"
                    >
                    Participant in the 1st Greek AI Hackathon
                    </a>
                </h4>
                <h5 className="h5 timeline-item-subtitle">
                    Athens Center for Entrepreneurship and Innovation | AUEB
                </h5>
                <span>Feb 2024</span>
                <div style={{ display: visibleDetails['more-info7'] ? 'block' : 'none' }}>
                    <p className="timeline-text">
                    <strong>Certificate of Participation</strong> in the
                    <em>First Greek AI Hackathon</em>, the biggest and first
                    AI-oriented hackathon in Greece, hosted by the Athens
                    Center for Entrepreneurship and Innovation (AUEB).
                    </p>
                    <p className="timeline-text">
                    The event spanned from
                    <strong>February 16th to 18th, 2024</strong>, filled
                    with inspirational speeches, intensive coding sessions,
                    expert mentoring, and valuable networking opportunities.
                    As a participant, I was immersed in a collaborative and
                    innovative environment, working on AI solutions that
                    push the boundaries of technology.
                    </p>
                    <p className="timeline-text">
                    This involvement underscored the importance of
                    interdisciplinary collaboration and innovation in the
                    field of AI, offering a unique blend of academic rigor
                    and practical experience in tackling real-world
                    challenges.
                    </p>
                </div>
                <button
                    onClick={() => toggleDetails('more-info7')}
                    className="details-button"
                >
                    {visibleDetails['more-info7'] ? 'Show Less' : 'Show More'}
                </button>
                </div>
            </div>
            </li>
            <li className="timeline-item">
            <div className="timeline-item-content">
                <img
                className="timeline-item-image"
                src="assets\images\mobilehci_logo.jpg"
                alt="Certificate Thumbnail"
                />
                <div className="text-content">
                <h4 className="h4 timeline-item-title">Student Volunteer</h4>

                <h5 className="h5 timeline-item-subtitle">
                    MobileHCI 2023 - ACM SIGCHI
                </h5>

                <span>Sep 2023</span>

                <div style={{ display: visibleDetails['more-info3'] ? 'block' : 'none' }}>
                    <p className="timeline-text">
                    <strong
                        >Participated in MobileHCI 2023 as a student
                        volunteer.</strong
                    >
                    Coordinated with other volunteers and organizers to
                    ensure smooth functioning of sessions and events,
                    managing duties spanning approximately 16-20 hours
                    throughout the conference. Networked with global
                    attendees, researchers, and industry professionals,
                    fostering connections and enhancing understanding of the
                    latest in mobile human-computer interaction. Assisted in
                    on-site equipment testing and supported presenters
                    during their talks and demos. Participated in
                    orientation and training sessions, demonstrating
                    commitment and responsibility towards the success of the
                    conference.
                    </p>
                </div>

                <button
                    onClick={() => toggleDetails('more-info3')}
                    className="details-button"
                >
                    {visibleDetails['more-info3'] ? 'Show Less' : 'Show More'}
                </button>
                </div>
            </div>
            </li>

            <li className="timeline-item">
            <div className="timeline-item-content">
                <img
                className="timeline-item-image"
                src="assets\images\google_logo.jpg"
                alt="Certificate Thumbnail"
                />
                <div className="text-content">
                <h4 className="h4 timeline-item-title">
                    Competition Participant
                </h4>

                <h5 className="h5 timeline-item-subtitle">
                    Google Hash Code 2022
                </h5>

                <span>Feb 2022</span>

                <div style={{ display: visibleDetails['more-info4'] ? 'block' : 'none' }}>
                    <p className="timeline-text">
                    <strong
                        >Participated in Google Hash Code 2022 hosted by NTUA
                        in Athens.</strong
                    >
                    Challenged with an intricate optimization problem, my
                    team and I collaborated intensely to devise an effective
                    solution, successfully meeting the competition's target
                    goals.
                    </p>
                </div>

                <button
                    onClick={() => toggleDetails('more-info4')}
                    className="details-button"
                >
                    {visibleDetails['more-info4'] ? 'Show Less' : 'Show More'}
                </button>
                </div>
            </div>
            </li>
        </ol>
        </section>

        <section className="timeline">
        <div className="title-wrapper">
            <div className="icon-box">
            <ion-icon name="language-outline"></ion-icon>
            </div>

            <h3 className="h3">Languages</h3>
        </div>

        <ol className="timeline-list">
            <li className="timeline-item">
            <div className="timeline-item-content">
                <img
                className="timeline-item-image"
                src="assets\images\michigan_logo.jpg"
                alt="Certificate Thumbnail"
                />
                <div className="text-content">
                <h4 className="h4 timeline-item-title">
                    Certificate of proficiency in English
                </h4>

                <h5 className="h5 timeline-item-subtitle">
                    University of Michigan
                </h5>

                <span>Issued Dec 2015</span>

                <p className="timeline-text">Credential ID 8852001853</p>
                </div>
            </div>
            </li>

            <li className="timeline-item">
            <div className="timeline-item-content">
                <img
                className="timeline-item-image"
                src="assets\images\osd_logo.jpg"
                alt="Certificate Thumbnail"
                />
                <div className="text-content">
                <h4 className="h4 timeline-item-title">
                    B1 Zertificat Deutsch
                </h4>

                <h5 className="h5 timeline-item-subtitle">
                    ÖSD – Österreichisches Sprachdiplom Deutsch
                </h5>

                <span>Issued Oct 2013</span>

                <p className="timeline-text">Credential ID B1ZDj1301239</p>
                </div>
            </div>
            </li>
        </ol>
        </section>
    </article>
  );
};

export default Resume; 