import { Link } from 'react-router-dom';
import { useState } from 'react'
import './Navigation.css'

function NavBar() {
  const [isActive, setIsActive] = useState(false);
  
  // Toggle the burger menu
  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="nav">
      <div className="nav-brand">
        <Link className="nav-link" to="/">MaxLC</Link>
        <button 
          className={`hamburger ${isActive ? 'active' : ''}`} 
          onClick={handleToggle}
          aria-label="menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <ul className={`nav-list ${isActive ? 'active' : ''}`}>
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/resume">Resume</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/portfolio">Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )};
export default NavBar;

