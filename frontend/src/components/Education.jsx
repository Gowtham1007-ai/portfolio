import { FaGraduationCap } from 'react-icons/fa'

const Education = ({ data }) => {
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
      marginBottom: '40px',
      paddingLeft: '60px'
    },
    timelineIcon: {
      position: 'absolute',
      left: '0',
      top: '0',
      width: '40px',
      height: '40px',
      background: '#10b981',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white'
    },
    timelineContent: {
      background: '#f0fdf4',
      padding: '25px',
      borderRadius: '10px',
      borderLeft: '4px solid #10b981'
    },
    institution: {
      fontSize: '1.4rem',
      fontWeight: '600',
      color: '#1f2937',
      marginBottom: '5px'
    },
    degree: {
      fontSize: '1.1rem',
      color: '#059669',
      fontWeight: '500',
      marginBottom: '10px'
    },
    duration: {
      display: 'inline-block',
      background: '#d1fae5',
      color: '#065f46',
      padding: '5px 15px',
      borderRadius: '15px',
      fontSize: '0.9rem',
      fontWeight: '500'
    }
  }

  return (
    <section id="education" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>
          Education
          <div style={styles.titleUnderline}></div>
        </h2>
        
        <div style={styles.timeline}>
          {data.education.map((edu, index) => (
            <div key={index} style={styles.timelineItem}>
              <div style={styles.timelineIcon}>
                <FaGraduationCap />
              </div>
              
              <div style={styles.timelineContent}>
                <h3 style={styles.institution}>{edu.institution}</h3>
                <div style={styles.degree}>{edu.degree}</div>
                <span style={styles.duration}>{edu.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education