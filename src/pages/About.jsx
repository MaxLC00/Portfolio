import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-header">About Me</h1>
      
      <div className="about-content">
        <div className="profile-section">
          <img 
            src="imgs/profile.png" 
            alt="Maxwell Laskey-Cthaeh" 
            className="profile-image"
          />
          
          <div className="social-links">
            <a href="https://github.com/MaxLC00" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github">Github</i>
            </a>
            <a href="https://www.linkedin.com/in/maxwell-laskey-cthaeh/" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin">LinkedIn</i>
            </a>
          </div>
        </div>

        <div className="bio-section">
          <h2>Hello, I'm Max LC</h2>
          <p>
            I'm an artist and sometimes social worker/EMT who loves exploring new mediums. 
            My passion lies in creating interactive projects and learning multiple programming 
            languages to find innovative ways to engage with my community.
          </p>

          <div className="interests-section">
            <h2>Interests & Hobbies</h2>
            <div className="interests-grid">
              <div className="interest-item">Programming</div>
              <div className="interest-item">Community Work</div>
              <div className="interest-item">Interactive Media</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
