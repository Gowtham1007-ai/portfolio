import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css';

const Home = () => {
  const [featuredProjects, setFeaturedProjects] = useState([]);

  useEffect(() => {
    const fetchFeaturedProjects = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/projects');
        const featured = response.data.filter(project => project.featured).slice(0, 3);
        setFeaturedProjects(featured);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchFeaturedProjects();
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Hi, I'm <span className="highlight">M.Gowtham</span></h1>
          <h2>Full Stack Developer</h2>
          <p>I create beautiful and functional web applications using modern technologies.</p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">View My Work</Link>
            <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h2>Technologies I Use</h2>
        <div className="skills-grid">
          <div className="skill-item">React.js</div>
          <div className="skill-item">Node.js</div>
          <div className="skill-item">Express.js</div>
          <div className="skill-item">MongoDB</div>
          <div className="skill-item">JavaScript</div>
          <div className="skill-item">HTML/CSS</div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {featuredProjects.map(project => (
            <div key={project._id} className="project-card">
              <img src={project.image} alt={project.title} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link to="/projects" className="btn btn-outline">View All Projects</Link>
      </section>
    </div>
  );
};

export default Home;