import { FiBookmark } from 'react-icons/fi';
import '../styles/education.css';

const education = [
  {
    degree: "B.Tech in Artificial Intelligence & Machine Learning",
    institution: "ADGIPS, Guru Gobind Singh Indraprastha University",
    duration: "2023 - 2027 (Expected)",
    description: "Current CGPA: 9.2/10",
    courses: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Machine Learning Fundamentals",
      "Computer Networks",
      "Operating Systems"
    ]
  }
];

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">
          My <span>Education</span>
        </h2>
        
        <div className="education-list">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-icon">
                <FiBookmark />
              </div>
              <div className="education-content">
                <h3 className="education-degree">{edu.degree}</h3>
                <p className="education-institution">{edu.institution}</p>
                <p className="education-duration">{edu.duration}</p>
                <p className="education-cgpa">{edu.description}</p>
                
                <div className="education-courses">
                  <h4>Relevant Coursework:</h4>
                  <div className="courses-list">
                    {edu.courses.map((course, i) => (
                      <span key={i} className="course-item">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;