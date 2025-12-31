const Skills = ({ data }) => {
  const skillCategories = [
    { title: "Frontend Development", skills: data.technicalSkills.frontend, color: "#3b82f6" },
    { title: "Backend Development", skills: data.technicalSkills.backend, color: "#10b981" },
    { title: "Programming Languages", skills: data.technicalSkills.programming, color: "#8b5cf6" },
    { title: "Databases", skills: data.technicalSkills.databases, color: "#f59e0b" },
    { title: "Tools & Platforms", skills: data.technicalSkills.tools, color: "#ef4444" },
    { title: "Other Skills", skills: data.technicalSkills.other, color: "#6366f1" }
  ]

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
      gap: '25px'
    },
    card: {
      background: 'white',
      borderRadius: '10px',
      padding: '25px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease'
    },
    cardHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '20px',
      paddingBottom: '15px',
      borderBottom: '2px solid #e5e7eb'
    },
    cardIcon: {
      width: '40px',
      height: '40px',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '15px',
      fontSize: '20px',
      color: 'white'
    },
    cardTitle: {
      fontSize: '1.3rem',
      fontWeight: '600',
      color: '#1f2937'
    },
    skillsGrid: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px'
    },
    skillBadge: {
      padding: '8px 16px',
      borderRadius: '20px',
      fontSize: '0.9rem',
      fontWeight: '500',
      display: 'inline-block'
    }
  }

  return (
    <section id="skills" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>
          Technical Skills
          <div style={styles.titleUnderline}></div>
        </h2>
        
        <div style={styles.grid}>
          {skillCategories.map((category, index) => (
            <div key={index} style={styles.card}>
              <div style={styles.cardHeader}>
                <div style={{ ...styles.cardIcon, background: category.color }}>
                  {index + 1}
                </div>
                <h3 style={styles.cardTitle}>{category.title}</h3>
              </div>
              
              <div style={styles.skillsGrid}>
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    style={{
                      ...styles.skillBadge,
                      background: `${category.color}15`,
                      color: category.color,
                      border: `1px solid ${category.color}30`
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills