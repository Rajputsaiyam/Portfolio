import '../styles/about.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">
          About <span>Me</span>
        </h2>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-card">
              <p>
                I'm a third-year B.Tech student specializing in Artificial Intelligence and Machine Learning at ADGIPS, Guru Gobind Singh Indraprastha University.
              </p>
              <p>
                As a MERN stack developer with strong foundations in AI/ML, I bring a unique perspective to web development projects. My technical skills are complemented by strong problem-solving abilities and a fast learning pace.
              </p>
              <p>
                I'm passionate about creating innovative solutions that bridge the gap between cutting-edge technology and real-world problems. My experience in hackathons has honed my ability to work under pressure and deliver impactful results.
              </p>
            </div>
          </div>
          
          <div className="about-skills">
            <div className="skill-card">
              <div className="skill-icon">
                <span>🚀</span>
              </div>
              <h3>Fast Learner</h3>
              <p>Quickly adapt to new technologies and frameworks to stay ahead in the rapidly evolving tech landscape.</p>
            </div>
            
            <div className="skill-card">
              <div className="skill-icon">
                <span>💡</span>
              </div>
              <h3>Problem Solver</h3>
              <p>Strong analytical skills to break down complex problems and implement efficient solutions.</p>
            </div>
            
            <div className="skill-card">
              <div className="skill-icon">
                <span>✨</span>
              </div>
              <h3>Innovative Mindset</h3>
              <p>Constantly exploring new ideas and approaches to create impactful applications.</p>
            </div>
            
            <div className="skill-card">
              <div className="skill-icon">
                <span>🤝</span>
              </div>
              <h3>Team Player</h3>
              <p>Collaborative approach with excellent communication skills for effective teamwork.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;