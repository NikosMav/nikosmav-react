import React from 'react';
import { usePage } from '../context/PageContext';

const Navbar = () => {
  const { activePage, setActivePage, toggleTheme, theme } = usePage();

  const handleNavClick = (page) => {
    setActivePage(page.toLowerCase());
    window.scrollTo(0, 0);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {['About', 'Resume', 'Portfolio', 'Contact'].map((page) => (
          <li key={page} className="navbar-item">
            <button
              className={`navbar-link ${activePage === page.toLowerCase() ? 'active' : ''}`}
              onClick={() => handleNavClick(page)}
            >
              {page}
            </button>
          </li>
        ))}

        <li className="navbar-item">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <ion-icon name={theme === 'dark' ? 'moon-outline' : 'sunny-outline'} />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar; 