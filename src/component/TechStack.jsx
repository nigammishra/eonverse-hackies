import { useState, useEffect } from 'react';
import './techstack.css';
import { FaReact, FaGithub } from 'react-icons/fa'; // Import icons from react-icons
import { IoLogoJavascript } from 'react-icons/io';
import { SiPostgresql, SiTailwindcss, SiSpringboot } from 'react-icons/si'; // Add more icons as needed

const services = [
  {
    href: "#",
    icon: <FaReact size={100} color="#fff" />, // React blue
    title: "Frontend: React.js",
    description: "Building dynamic UIs and components with React.js for an interactive experience."
  },
  {
    href: "#",
    icon: <SiSpringboot size={100} color="#fff" />, // Spring Boot green
    title: "Backend: Spring Boot",
    description: "Developing robust and scalable backend services with Spring Boot (optional)."
  },
  {
    href: "#",
    icon: <IoLogoJavascript size={100} color="#fff" />, // JavaScript yellow
    title: "Frontend: JavaScript",
    description: "Building dynamic client-side functionality with JavaScript."
  },
  {
    href: "#",
    icon: <SiPostgresql size={100} color="#fff" />, // PostgreSQL blue
    title: "Database: PostgreSQL",
    description: "Managing relational data with PostgreSQL for secure and reliable storage (optional)."
  },
  {
    href: "#",
    icon: <SiTailwindcss size={100} color="#fff" />, // TailwindCSS light blue
    title: "UI/UX: TailwindCSS",
    description: "Using TailwindCSS for utility-first CSS framework to design a modern, responsive UI."
  },
  {
    href: "#",
    icon: <FaGithub size={100} color="#fff" />, // GitHub black
    title: "Version Control: GitHub",
    description: "Using GitHub for version control and collaboration in projects."
  }
];

const TechStack = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // Simulate loading time
    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <div className="sci-fi-loader"></div>
        </div>
      ) : (
        <section className="techstack-section">
          <div className="techstack-main">
            <div className="techstack-heading" style={{ marginTop: '100px' }}>
              <h2 style={{ color: '#fff' }}>Tech Stack</h2>
            </div>
            <div className="techstack-grid">
              {services.map((service, index) => (
                <a key={index} className="techstack-box" href={service.href} title={service.title}>
                  <div className="techstack-icon">{service.icon}</div>
                  <h3 className="techstack-title">{service.title}</h3>
                  <p className="techstack-description">{service.description}</p>
                  <span className="techstack-readmore">Read More</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default TechStack;
