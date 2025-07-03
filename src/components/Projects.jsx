import { FiGithub, FiExternalLink } from 'react-icons/fi';
import '../styles/projects.css';

const projects = [
  {
    title: "CineBurst",
    description: "A responsive movie booking website with showtime, theatre, and seat selection features.",
    tech: ["React", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Rajputsaiyam/CineBurst-MovieBooking-App",
    live: "https://cine-burst-movie-booking-app.vercel.app/",
    image:"https://i.ibb.co/d42b2TKk/cineburst.png"

  },
  {
    title: "MamaGiggles",
    description: "A prenatal tele-health platform for expectant mothers, featuring appointment booking and gynecologist locator.",
    tech: ["React", "Node.js", "MongoDB", "Material UI"],
    github: "#",
    live: "https://incandescent-sopapillas-507acc.netlify.app/",
    image:"https://i.ibb.co/dJQW3ssM/mama-giggles.png"
  },
  {
    title: "AgroSmart",
    description: "AI-driven platform for smart farming recommendations and crop planning using integrated ML models.",
    tech: ["React", "Flask", "Python", "Machine Learning"],
    github: "https://github.com/Rajputsaiyam/AgroSmart-ML-Driven-Crop-Recommender",
    live: "#",
    image:"https://i.ibb.co/rGPhzYwP/Agro.jpg"
  },
  {
    title: "Nyayadheesh",
    description: "Legal aid portal allowing users to upload documents, consult lawyers, and track case updates.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    github: "https://github.com/Rajputsaiyam/NyayaDheesh",
    live: "https://nyaya-dheesh-e3kn.vercel.app/",
    image:"https://i.ibb.co/tTNqXPqs/nyayadheesh.png"
  },
  {
    title: "TeleMed",
    description: "Hackathon project for remote doctor consultations with video calling and prescription features.",
    tech: ["HTML", "CSS", "JavaScript", "WebRTC"],
    github: "https://github.com/Rajputsaiyam/Telemedicine",
    live: "https://brilliant-cascaron-c57211.netlify.app/",
    image:"https://i.ibb.co/84x700QS/telemed.png"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">
          My <span>Projects</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <div className="project-image">
                  <img src={project.image} alt={project.title} className="project-img" />
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-item">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FiGithub className="link-icon" /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FiExternalLink className="link-icon" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;