import { FiDownload } from 'react-icons/fi';
import '../styles/hero.css';


const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="hero-name">Saiyam Rajput</span>
            </h1>
            <h2 className="hero-subtitle">
              Full Stack Developer | AI-ML Enthusiast | Hackathon Finalist
            </h2>
            <p className="hero-description">
              Passionate about building innovative web solutions with MERN stack and exploring the possibilities of AI/ML.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Contact Me</a>
              <a href="/SaiyamNewResume (1).pdf" download className="btn btn-outline">
                <FiDownload className="btn-icon" /> Download Resume
              </a>
            </div>
          </div>
          <div className="hero-image-container">
            <div className="hero-image-wrapper">
              <div className="hero-image-placeholder">
                <img
                  src="https://i.ibb.co/0phSHstY/saiyam-rajput.jpg"
                  alt="Saiyam Rajput"
                  className="hero-image"
              />
              </div>
              <div className="hero-image-badge">
                <span>Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;