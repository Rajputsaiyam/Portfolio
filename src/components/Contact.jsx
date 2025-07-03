import { FiMail, FiPhone, FiLinkedin, FiGithub } from 'react-icons/fi';
import '../styles/contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">
          Get In <span>Touch</span>
        </h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <h3>Contact Information</h3>
              
              <div className="info-item">
                <div className="info-icon">
                  <FiMail />
                </div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:saiyamrajput71@gmail.com">saiyamrajput71@gmail.com</a>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <FiPhone />
                </div>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+919354429850">+91 9354429850</a>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <FiLinkedin />
                </div>
                <div>
                  <h4>LinkedIn</h4>
                  <a 
                    href="https://linkedin.com/in/saiyam-rajput-b415642ba" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/saiyam-rajput-b415642ba
                  </a>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <FiGithub />
                </div>
                <div>
                  <h4>GitHub</h4>
                  <a 
                    href="https://github.com/Rajputsaiyam" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/Rajputsaiyam
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <div className="form-card">
              <h3>Send Me a Message</h3>
              
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Your name" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Your email" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows="5" placeholder="Your message"></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;