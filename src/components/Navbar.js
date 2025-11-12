import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
        M.Gowtham
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'nav-links active' : 'nav-links'}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/projects" 
              className={location.pathname === '/projects' ? 'nav-links active' : 'nav-links'}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/contact" 
              className={location.pathname === '/contact' ? 'nav-links active' : 'nav-links'}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;