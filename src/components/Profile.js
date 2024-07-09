import React from 'react';
import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';

const Profile = () => {
  return (
    <div>
      <Helmet>
          <title>Sophie Codes</title>
        </Helmet>
      {/* START NAV */}
      <nav id="navbar" className="nav">
        <ul className="nav-list">
          <li><a href="#welcome-section">About</a></li>
          <li><a href="#projects">Work</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      {/* END NAV */}

      {/* START WELCOME SECTION */}
      <section id="welcome-section" className="welcome-section">
        <h1>Hey, I am Sophie</h1>
        <p>a former early childhood teacher turning into a developer</p>
        <div>
          <a href="/Sophie-CV.pdf" target="_blank" className="btn btn-cv">View My CV</a>
        </div>
      </section>
      {/* END WELCOME SECTION */}

      {/* START PROJECTS SECTION */}
      <section id="projects" className="projects-section">
        <h2 className="projects-section-header">These are some of my projects</h2>
        <div className="projects-grid">
          <a href="/steve-jobs" target="_blank" rel="noopener noreferrer" className="project project-tile">
            <img className="project-image" src="https://cdn.britannica.com/04/171104-050-5B714956/Steve-Jobs-iPhone-2010.jpg" alt="project"/>
            <p className="project-title"><span className="code">&lt;</span>Tribute Page<span className="code">&#47;&gt;</span></p>
          </a>
          <a href="/RoadReadyNZ" target="_blank" rel="noopener noreferrer" className="project project-tile">
    <video className="project-video" controls>
        <source src="https://drive.google.com/uc?export=download&id=10GPTzjLVQ7yhSeO_uLsFGQhYkOahvqNg" type="video/mp4" />
        Your browser does not support the video tag.
    </video>
    <p className="project-title"><span className="code">&lt;</span>RoadReadyNZ<span className="code">&#47;&gt;</span></p>
</a>
<a href="/LexiCan" target="_blank" rel="noopener noreferrer" className="project project-tile">
    <video className="project-video" controls>
        <source src="https://drive.google.com/uc?export=download&id=1bK2RaG4MidxL61CA1LpplirRCQmM1S8R" type="video/mp4" />
        Your browser does not support the video tag.
    </video>
    <p className="project-title"><span className="code">&lt;</span>LexiCan<span className="code">&#47;&gt;</span></p>
</a>
        </div>
        <a href="https://github.com/Sophie-coffee-addict" className="btn btn-show-all" target="_blank" rel="noopener noreferrer">See more<i className="fas fa-chevron-right"></i></a>
      </section>
      {/* END PROJECTS SECTION */}

      {/* START CONTACT SECTION */}
      <section id="contact" className="contact-section">
        <div className="contact-section-header">
          <h2>Let's work together...</h2>
          <p>How do you like your coffee?</p>
        </div>
        <div className="contact-links">
          <a href="https://www.linkedin.com/in/sophie-cao/" target="_blank" rel="noopener noreferrer" className="btn contact-details">
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
          <a id="profile-link" href="https://github.com/Sophie-coffee-addict" target="_blank" rel="noopener noreferrer" className="btn contact-details">
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
          <a href="mailto:your-email@example.com" className="btn contact-details">
            <FontAwesomeIcon icon={faAt} /> Email me
          </a>
        </div>
      </section>
      {/* END CONTACT SECTION */}

      {/* START FOOTER SECTION */}
      <footer>
        <p>&copy; Created by Sophie</p>
      </footer>
      {/* END FOOTER SECTION */}
    </div>
  );
};

export default Profile;
