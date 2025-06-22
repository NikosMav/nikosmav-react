import React, { useState, useEffect, useRef } from 'react';
import '../assets/css/Portfolio.css';

const Portfolio = ({ className }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const selectBoxRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectBoxRef.current && !selectBoxRef.current.contains(event.target)) {
        setIsSelectOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "code2pdf",
      category: "Software development",
      imageUrl: "./assets/images/Python-logo.png",
      link: "https://github.com/NikosMav/code2pdf",
      alt: "code2pdf CLI Tool"
    },
    {
      id: 2,
      title: "Worthify",
      category: "Web development",
      imageUrl: "./assets/images/worthify.png",
      link: "https://worthify.gr/",
      alt: "Worthify"
    },
    {
      id: 3,
      title: "Contact form app using React",
      category: "Web development",
      imageUrl: "./assets/images/react-logo.png",
      link: "https://github.com/NikosMav/React-Patient-Contact-App",
      alt: "React App"
    },
    {
      id: 4,
      title: "Camelia Wellness Center",
      category: "Web development",
      imageUrl: "./assets/images/camelia.png",
      link: "https://www.cameliawellnesscenter.com/",
      alt: "Camelia"
    },
    {
      id: 5,
      title: "Ubiquitous Computing",
      category: "Web development",
      imageUrl: "./assets/images/ubicomp.png",
      link: "https://nikosmav.github.io/ubiquitous-computing.github.io/",
      alt: "Ubicomp"
    },
    {
      id: 6,
      title: "Netflix movies and series",
      category: "Data analysis",
      imageUrl: "./assets/images/netflix.jpg",
      link: "https://github.com/NikosMav/DataAnalysis-Netflix",
      alt: "Netflix"
    },
    {
      id: 7,
      title: "Fake news classification",
      category: "Data analysis",
      imageUrl: "./assets/images/fake-news.jpg",
      link: "https://github.com/NikosMav/FakeNews-Classification",
      alt: "Fake News"
    },
    {
      id: 8,
      title: "Compilers assignment",
      category: "Software development",
      imageUrl: "./assets/images/code.jpg",
      link: "https://github.com/NikosMav/Compilers-2",
      alt: "compilers"
    },
    {
      id: 9,
      title: "Compilers assignment",
      category: "Software development",
      imageUrl: "./assets/images/code.jpg",
      link: "https://github.com/NikosMav/Compilers-1",
      alt: "compilers"
    },
    {
      id: 10,
      title: "System programming assignment",
      category: "Software development",
      imageUrl: "./assets/images/code.jpg",
      link: "https://github.com/NikosMav/System-Programming-3",
      alt: "system programming"
    },
    {
      id: 11,
      title: "System programming assignment",
      category: "Software development",
      imageUrl: "./assets/images/code.jpg",
      link: "https://github.com/NikosMav/System-Programming-2",
      alt: "system programming"
    },
    {
      id: 12,
      title: "Operating systems assignment",
      category: "Software development",
      imageUrl: "./assets/images/code.jpg",
      link: "https://github.com/NikosMav/Operating-Systems-2",
      alt: "operating systems"
    },
    {
      id: 13,
      title: "Greek Ministry of Labour website",
      category: "Web development",
      imageUrl: "./assets/images/upourgio.png",
      link: "https://github.com/NikosMav/Greek-Ministry-of-Labour-website",
      alt: "Ministry of Labour"
    }
  ];

  const handleFilterClick = (category) => {
    setSelectedCategory(category);
    setIsSelectOpen(false);
  };

  const toggleSelect = () => {
    setIsSelectOpen(!isSelectOpen);
  };

  const filteredProjects = projects.filter(project => 
    selectedCategory === 'All' || project.category === selectedCategory
  );

  return (
    <article className={`portfolio ${className}`} data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          <li className="filter-item">
            <button 
              className={selectedCategory === 'All' ? 'active' : ''} 
              onClick={() => handleFilterClick('All')}
            >
              All
            </button>
          </li>

          <li className="filter-item">
            <button 
              className={selectedCategory === 'Software development' ? 'active' : ''} 
              onClick={() => handleFilterClick('Software development')}
            >
              Software development
            </button>
          </li>

          <li className="filter-item">
            <button 
              className={selectedCategory === 'Data analysis' ? 'active' : ''} 
              onClick={() => handleFilterClick('Data analysis')}
            >
              Data analysis
            </button>
          </li>

          <li className="filter-item">
            <button 
              className={selectedCategory === 'Web development' ? 'active' : ''} 
              onClick={() => handleFilterClick('Web development')}
            >
              Web development
            </button>
          </li>
        </ul>

        <div className={`filter-select-box ${isSelectOpen ? 'active' : ''}`} ref={selectBoxRef}>
          <button 
            className="filter-select" 
            onClick={toggleSelect}
            aria-expanded={isSelectOpen}
            aria-label="Filter projects by category"
          >
            <div className="select-value">
              {selectedCategory}
            </div>

            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>

          <ul className={`select-list ${isSelectOpen ? 'active' : ''}`} role="listbox">
            <li className="select-item">
              <button onClick={() => handleFilterClick('All')} role="option">All</button>
            </li>

            <li className="select-item">
              <button onClick={() => handleFilterClick('Software development')} role="option">Software development</button>
            </li>

            <li className="select-item">
              <button onClick={() => handleFilterClick('Data analysis')} role="option">Data analysis</button>
            </li>

            <li className="select-item">
              <button onClick={() => handleFilterClick('Web development')} role="option">Web development</button>
            </li>
          </ul>
        </div>

        <ul className="project-list">
          {filteredProjects.map((project) => (
            <li
              key={project.id}
              className="project-item active"
              data-filter-item
              data-category={project.category}
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img
                    src={project.imageUrl}
                    alt={project.alt}
                    loading="lazy"
                  />
                </figure>

                <h3 className="project-title">{project.title}</h3>

                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Portfolio; 