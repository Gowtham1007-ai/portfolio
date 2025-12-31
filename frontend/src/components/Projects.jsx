import { FaCode, FaGithub } from 'react-icons/fa'

const Projects = ({ data }) => {
  const styles = {
    section: {
      padding: '80px 20px',
      background: '#f8fafc'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#1e40af',
      marginBottom: '3rem',
      textAlign: 'center',
      position: 'relative'
    },
    titleUnderline: {
      position: 'absolute',
      bottom: '-10px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '80px',
      height: '4px',
      background: '#3b82f6',
      borderRadius: '2px'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '30px'
    },
    card: {
      background: 'white',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease'
    },
    cardHeader: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '25px',
      color: 'white'
    },
    cardIcon: {
      fontSize: '2.5rem',
      marginBottom: '15px'
    },
    projectName: {
      fontSize: '1.5rem',
      fontWeight: '600',
      marginBottom: '10px'
    },
    techStack: {
      fontSize: '0.9rem',
      opacity: '0.9',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '5px',
      marginBottom: '15px'
    },
    techBadge: {
      background: 'rgba(255, 255, 255, 0.2)',
      padding: '3px 10px',
      borderRadius: '12px',
      fontSize: '0.8rem'
    },
    cardBody: {
      padding: '25px'
    },
    list: {
      listStyle: 'none',
      padding: '0',
      margin: '0'
    },
    listItem: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '12px',
      color: '#4b5563',
      lineHeight: '1.5'
    },
    checkIcon: {
      color: '#10b981',
      marginRight: '10px',
      marginTop: '3px',
      flexShrink: '0'
    },
    cardFooter: {
      padding: '20px 25px',
      background: '#f9fafb',
      borderTop: '1px solid #e5e7eb'
    },
    githubLink: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      color: '#2563eb',
      textDecoration: 'none',
      fontWeight: '500'
    }
  }

  return (
    <section id="projects" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>
          Projects
          <div style={styles.titleUnderline}></div>
        </h2>
        
        <div style={styles.grid}>
          {data.projects.map((project, index) => (
            <div key={index} style={styles.card}>
              <div style={styles.cardHeader}>
                <div style={styles.cardIcon}>
                  <FaCode />
                </div>
                <h3 style={styles.projectName}>{project.name}</h3>
                <div style={styles.techStack}>
                  {project.technologies.split(', ').map((tech, i) => (
                    <span key={i} style={styles.techBadge}>{tech}</span>
                  ))}
                </div>
              </div>
              
              <div style={styles.cardBody}>
                <ul style={styles.list}>
                  {project.description.map((item, itemIndex) => (
                    <li key={itemIndex} style={styles.listItem}>
                      <span style={styles.checkIcon}>✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div style={styles.cardFooter}>
                <a 
                  href={data.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={styles.githubLink}
                >
                  <FaGithub /> View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects