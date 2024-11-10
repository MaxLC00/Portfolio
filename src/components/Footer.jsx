const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
  
    // Toggle the burger menu
    const handleToggle = () => {
      setIsActive(!isActive);
    };
  
    return (
      <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <strong>My Portfolio</strong>
          </Link>
  
          {/* Burger menu for mobile */}
          <a
            role="button"
            className={`navbar-burger ${isActive ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={handleToggle}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
  
        <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
          <div className="navbar-start">
            <Link className="navbar-item" to="/about">
              About
            </Link>
            <Link className="navbar-item" to="/portfolio">
              Portfolio
            </Link>
            <Link className="navbar-item" to="/contact">
              Contact
            </Link>
          </div>
  
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a
                  className="button is-light"
                  href="https://linkedin.com/in/katherine-arenas"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="button is-light"
                  href="https://github.com/katherine-arenas"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  export default Navbar