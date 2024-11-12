import './Portfolio.css';
import { projectList } from '../data/projects';

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <h1 className="portfolio-header">Portfolio</h1>
      
      <div className="projects-grid">
        {projectList && projectList.map((project, index) => (
          <div key={index} className="project-card">
            <img 
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link github-link"
                >
                  GitHub
                </a>
                {project.deployed && (
                  <a 
                    href={project.deployed} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link demo-link"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;