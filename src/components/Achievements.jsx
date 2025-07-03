import { FiAward } from 'react-icons/fi';
import '../styles/achievements.css';

const achievements = [
  {
    title: "Top 5 - DCG Hackathon (DTU)",
    description: "Secured top 5 position in Delhi Coding Geeks Hackathon for TeleMed project.",
    year: "2023"
  },
  {
    title: "Top 10 - AceHack 3.0",
    description: "Achieved top 10 position in AceHack 3.0 hackathon for Nyayadheesh legal aid portal.",
    year: "2023"
  },
  {
    title: "Infosys Springboard Certification",
    description: "Completed courses in Generative AI, Machine Learning, and professional skills.",
    year: "2023"
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="achievements-section">
      <div className="container">
        <h2 className="section-title">
          My <span>Achievements</span>
        </h2>
        
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-badge">
                <FiAward />
              </div>
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-description">{achievement.description}</p>
              <span className="achievement-year">{achievement.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;