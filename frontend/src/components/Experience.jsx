import { FaBriefcase } from 'react-icons/fa'

const Experience = ({ data }) => {
  const styles = {
    section: {
      padding: '80px 20px',
      background: 'white'
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
    timeline: {
      position: 'relative',
      maxWidth: '800px',
      margin: '0 auto'
    },
    timelineItem: {
      position: 'relative',
      marginBottom: '50px',
      paddingLeft: '60px'
    },
    timelineIcon: {
      position: 'absolute',
      left: '0',
      top: '0',
      width: '40px',
      height: '40px',
      background: '#2563eb',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white'
    },
    timelineContent: {
      background: '#f8fafc',
      padding: '25px',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    },
    role: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#1f2937',
      marginBottom: '5px'
    },
    company: {
      fontSize: '1.1rem',
      color: '#2563eb',
      fontWeight: '500',
      marginBottom: '5px'
    },
    duration: {
      fontSize: '0.9rem',
      color: '#6b7280',
      marginBottom: '15px',
      display: 'flex',
      alignItems: 'center',
      gap: '5px'
    },
    list: {
      listStyle: 'none',
      padding: '0',
      margin: '0'
    },
    listItem: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '8px',
      color: '#4b5563',
      lineHeight: '1.5'
    },
    bullet: {
      width: '8px',
      height: '8px',
      background: '#2563eb',
      borderRadius: '50%',
      marginTop: '8px',
      marginRight: '12px',
      flexShrink: '0'
    }
  }

  return (
    <section id="experience" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>
          Work Experience
          <div style={styles.titleUnderline}></div>
        </h2>
        
        <div style={styles.timeline}>
          {data.workExperience.map((exp, index) => (
            <div key={index} style={styles.timelineItem}>
              <div style={styles.timelineIcon}>
                <FaBriefcase />
              </div>
              
              <div style={styles.timelineContent}>
                <h3 style={styles.role}>{exp.role}</h3>
                <div style={styles.company}>{exp.company}</div>
                <div style={styles.duration}>
                  <span>📅</span> {exp.duration}
                </div>
                
                <ul style={styles.list}>
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} style={styles.listItem}>
                      <div style={styles.bullet}></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience