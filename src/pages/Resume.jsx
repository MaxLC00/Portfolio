import './Resume.css';

export default function Resume() {
  return (
    <div className="resume-container">
      {/* Header/Contact Info */}
      <header className="resume-header">
        <h1>Maxwell Laskey-Cthaeh</h1>
        <div className="contact-info">
          <p>(216) 650-5424</p>
          <p>maxelaskey@gmail.com</p>
        </div>
      </header>

      {/* Summary */}
      <section className="section">
        <h2 className="section-title">Professional Summary</h2>
        <p>
          Hey, I'm Max LC, I'm an artist (and sometimes social worker/EMT) who loves exploring new mediums. 
          I have a love for interactive projects and have been learning multiple programming languages to find new ways to engage with my community.
        </p>
      </section>

      {/* Experience */}
      <section className="section">
        <h2 className="section-title">Experience</h2>
        
        <div className="experience-item">
          <h3>Junior Web Developer</h3>
          <div className="company">Salus Development</div>
          <div className="date-range">August 2024 - Present</div>
          <ul>
            <li>Led development of internal website for Salus Development, a low-income housing development company</li>
            <li>Implemented new system for file management, replacing outdated systems with a more efficient system</li>
            <li>Provided training and support to non-technical staff on new software</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>Emergency Medical Technician</h3>
          <div className="company">MedEx Ambulance</div>
          <div className="date-range">Oct 2022 - March 2024</div>
          <ul>
            <li>Worked as a member of a fast-paced team to provide emergency medical services to patients in the field</li>
            <li>Part of a team of pediatric advanced life support providers working with Lurie Children's Hospital</li>
            <li>Provided care and advocacy for patients in a variety of settings, including schools, homes, and hospitals</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>Assistant Producer</h3>
          <div className="company">The Annoyance Theatre</div>
          <div className="date-range">Sept 2016 - Sept 2022</div>
          <ul>
            <li>Acted as technical director and stage manager for shows of all sizes</li>
            <li>Managed a team of volunteers and interns to run house management, including ticketing and backstage operations</li>
            <li>Assisted in in the development and production of new shows, both original and contracted</li>
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section className="section">
        <h2 className="section-title">Skills</h2>
        <div className="skills-container">
          <div>
            <h3>Technical Skills</h3>
            <div className="skills-list">
              <span className="skill-item">JavaScript</span>
              <span className="skill-item">CSS</span>
              <span className="skill-item">HTML</span>
              <span className="skill-item">C#</span>
              <span className="skill-item">Express</span>
              <span className="skill-item">React</span>
              <span className="skill-item">Node.js</span>
              <span className="skill-item">MongoDB</span>
              <span className="skill-item">PostgreSQL</span>
            </div>
          </div>
          <div>
            <h3>Soft Skills</h3>
            <div className="skills-list">
              <span className="skill-item">Powerpoint & Public Speaking</span>
              <span className="skill-item">Project Management</span>
              <span className="skill-item">Speech Writing</span>
              <span className="skill-item">Problem Solving</span>
              <span className="skill-item">Teamwork</span>
              <span className="skill-item">Graphic Design</span>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section">
        <h2 className="section-title">Education</h2>
        <div className="education-item">
          <h3>Comedic Writing and Performance</h3>
          <div className="institution">Columbia College Chicago</div>
          <div className="location">Chicago, IL</div>
          <div className="year">2020</div>
        </div>

        <div className="education-item">
          <h3>Emergency Medical Treatment and Transport</h3>
          <div className="institution">RC Health Education</div>
          <div className="location">Austin, TX</div>
          <div className="year">2021</div>
        </div>

        <div className="education-item">
          <h3>Full Stack Web Development</h3>
          <div className="institution">NU Bootcamp</div>
          <div className="location">Chicago, IL</div>
          <div className="year">2024</div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section">
        <h2 className="section-title">Certifications</h2>
        <div className="certifications-list">
          <span className="certification-item">CPR/AED</span>
        </div>
      </section>
    </div>
  );
}
