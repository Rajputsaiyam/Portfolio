import '../styles/skills.css';

const skills = {
  languages: ['C++', 'Python', 'JavaScript (ES6+)', 'Java'],
  frontend: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
  backend: ['Node.js', 'Express.js', 'MongoDB'],
  tools: ['Git', 'GitHub', 'VS Code'],
  fundamentals: ['DSA', 'OOPs', 'DBMS', 'CN', 'OS']
};

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">
          Technical <span>Skills</span>
        </h2>
        
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="skill-category">
              <h3 className="skill-category-title">{category.replace('_', ' ')}</h3>
              <div className="skills-list">
                {items.map((skill) => (
                  <span key={skill} className="skill-item">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;