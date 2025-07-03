import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} Saiyam Rajput. All rights reserved.</p>
          </div>
          
          <div className="footer-links">
            <a 
              href="mailto:saiyamrajput71@gmail.com" 
              className="footer-link"
            >
              Email
            </a>
            <a 
              href="https://linkedin.com/in/saiyam-rajput-b415642ba" 
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/Rajputsaiyam" 
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              GitHub
            </a>
          </div>
        </div>
        
        <div className="footer-built">
          <p>Built with React and CSS. Deployed on Vercel.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;