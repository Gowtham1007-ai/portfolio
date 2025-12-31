import { FaUserTie, FaRocket, FaLightbulb, FaGraduationCap, FaCode, FaTools } from 'react-icons/fa'

const About = ({ data }) => {
  const styles = {
    section: {
      padding: '100px 20px',
      background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
      position: 'relative'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    title: {
      fontSize: '3.2rem',
      fontWeight: '800',
      color: '#1e293b',
      marginBottom: '3.5rem',
      textAlign: 'center',
      position: 'relative'
    },
    titleHighlight: {
      background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    titleUnderline: {
      position: 'absolute',
      bottom: '-15px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '100px',
      height: '4px',
      background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
      borderRadius: '2px'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '40px'
    },
    card: {
      background: 'white',
      borderRadius: '16px',
      padding: '40px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
      transition: 'all 0.3s ease',
      border: '1px solid rgba(226, 232, 240, 0.6)',
      position: 'relative',
      overflow: 'hidden'
    },
    cardHover: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)',
      opacity: 0,
      transition: 'opacity 0.3s ease',
      zIndex: 1
    },
    cardContent: {
      position: 'relative',
      zIndex: 2
    },
    cardHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '25px',
      gap: '15px'
    },
    cardIcon: {
      width: '60px',
      height: '60px',
      background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '24px',
      flexShrink: 0,
      boxShadow: '0 8px 20px rgba(59, 130, 246, 0.2)'
    },
    cardTitle: {
      fontSize: '1.6rem',
      fontWeight: '700',
      color: '#1e293b',
      margin: 0
    },
    cardSubtitle: {
      fontSize: '0.9rem',
      color: '#64748b',
      fontWeight: '500',
      marginTop: '5px'
    },
    paragraph: {
      color: '#475569',
      lineHeight: '1.8',
      marginBottom: '20px',
      fontSize: '1.05rem'
    },
    highlight: {
      color: '#3b82f6',
      fontWeight: '600',
      background: 'rgba(59, 130, 246, 0.1)',
      padding: '2px 6px',
      borderRadius: '4px'
    },
    list: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    listItem: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '15px',
      color: '#475569',
      lineHeight: '1.6'
    },
    bullet: {
      width: '20px',
      height: '20px',
      background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
      borderRadius: '50%',
      marginRight: '15px',
      marginTop: '3px',
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    bulletInner: {
      width: '6px',
      height: '6px',
      background: 'white',
      borderRadius: '50%'
    },
    skillsGrid: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '12px',
      marginTop: '25px'
    },
    skillBadge: {
      padding: '8px 16px',
      background: 'rgba(59, 130, 246, 0.1)',
      color: '#3b82f6',
      borderRadius: '20px',
      fontSize: '0.9rem',
      fontWeight: '500',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'all 0.2s ease'
    },
    floatingElement: {
      position: 'absolute',
      width: '80px',
      height: '80px',
      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
      borderRadius: '20px',
      transform: 'rotate(45deg)',
      top: '-40px',
      right: '-40px',
      opacity: 0.3
    }
  }

  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>
          About <span style={styles.titleHighlight}>Me</span>
          <div style={styles.titleUnderline}></div>
        </h2>
        
        <div style={styles.grid}>
          {/* Professional Summary Card */}
          <div 
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)'
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.12)'
              e.currentTarget.querySelector('.hover-overlay').style.opacity = '1'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)'
              e.currentTarget.querySelector('.hover-overlay').style.opacity = '0'
            }}
          >
            <div className="hover-overlay" style={styles.cardHover}></div>
            <div style={styles.floatingElement}></div>
            
            <div style={styles.cardContent}>
              <div style={styles.cardHeader}>
                <div style={styles.cardIcon}>
                  <FaUserTie />
                </div>
                <div>
                  <h3 style={styles.cardTitle}>Professional Summary</h3>
                  <div style={styles.cardSubtitle}>Full Stack Developer</div>
                </div>
              </div>
              
              <p style={styles.paragraph}>
                {data.summary}
              </p>
              
              <p style={styles.paragraph}>
                Proficient in <span style={styles.highlight}>React.js</span>, <span style={styles.highlight}>Node.js</span>, <span style={styles.highlight}>Express.js</span>, 
                <span style={styles.highlight}> TypeScript</span>, <span style={styles.highlight}>JavaScript</span>, <span style={styles.highlight}>MongoDB</span>, and <span style={styles.highlight}>MySQL</span>.
              </p>
              
              <p style={styles.paragraph}>
                Experienced in implementing <span style={styles.highlight}>OAuth 2.0 authentication</span>, 
                <span style={styles.highlight}> RESTful API development</span>, and 
                <span style={styles.highlight}> automated workflow solutions</span>.
              </p>
              
              <div style={styles.skillsGrid}>
                <div style={styles.skillBadge}>
                  <FaCode /> React.js
                </div>
                <div style={styles.skillBadge}>
                  <FaTools /> Node.js
                </div>
                <div style={styles.skillBadge}>
                  <FaCode /> MongoDB
                </div>
                <div style={styles.skillBadge}>
                  <FaTools /> Express.js
                </div>
              </div>
            </div>
          </div>
          
          {/* Interests & Goals Card */}
          <div 
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)'
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.12)'
              e.currentTarget.querySelector('.hover-overlay').style.opacity = '1'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)'
              e.currentTarget.querySelector('.hover-overlay').style.opacity = '0'
            }}
          >
            <div className="hover-overlay" style={styles.cardHover}></div>
            <div style={{...styles.floatingElement, background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(217, 119, 6, 0.1))'}}></div>
            
            <div style={styles.cardContent}>
              <div style={styles.cardHeader}>
                <div style={{...styles.cardIcon, background: 'linear-gradient(135deg, #f59e0b, #d97706)'}}>
                  <FaRocket />
                </div>
                <div>
                  <h3 style={styles.cardTitle}>Interests & Goals</h3>
                  <div style={styles.cardSubtitle}>Vision & Aspirations</div>
                </div>
              </div>
              
              <ul style={styles.list}>
                {data.additionalInfo.map((info, index) => (
                  <li key={index} style={styles.listItem}>
                    <div style={styles.bullet}>
                      <div style={styles.bulletInner}></div>
                    </div>
                    <span>{info}</span>
                  </li>
                ))}
                {/* Additional goal */}
                <li style={styles.listItem}>
                  <div style={styles.bullet}>
                    <div style={styles.bulletInner}></div>
                  </div>
                  <span>Building scalable SaaS products that solve real-world problems</span>
                </li>
              </ul>
              
              <div style={styles.paragraph}>
                <strong>Current Focus:</strong> Expanding knowledge in cloud architecture, 
                microservices, and DevOps practices to build more robust applications.
              </div>
              
              <div style={styles.skillsGrid}>
                <div style={{...styles.skillBadge, background: 'rgba(245, 158, 11, 0.1)', color: '#d97706'}}>
                  <FaLightbulb /> Web Development
                </div>
                <div style={{...styles.skillBadge, background: 'rgba(245, 158, 11, 0.1)', color: '#d97706'}}>
                  <FaCode /> IoT Automation
                </div>
                <div style={{...styles.skillBadge, background: 'rgba(245, 158, 11, 0.1)', color: '#d97706'}}>
                  <FaTools /> API Integration
                </div>
              </div>
            </div>
          </div>
          
          {/* Education & Methodology Card (New) */}
          <div 
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)'
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.12)'
              e.currentTarget.querySelector('.hover-overlay').style.opacity = '1'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)'
              e.currentTarget.querySelector('.hover-overlay').style.opacity = '0'
            }}
          >
            <div className="hover-overlay" style={styles.cardHover}></div>
            <div style={{...styles.floatingElement, background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.1))'}}></div>
            
            <div style={styles.cardContent}>
              <div style={styles.cardHeader}>
                <div style={{...styles.cardIcon, background: 'linear-gradient(135deg, #10b981, #059669)'}}>
                  <FaGraduationCap />
                </div>
                <div>
                  <h3 style={styles.cardTitle}>Education & Approach</h3>
                  <div style={styles.cardSubtitle}>Learning & Development</div>
                </div>
              </div>
              
              <div style={styles.paragraph}>
                <strong>🎓 Bachelor of Engineering in Computer Science</strong><br />
                Jayaraj Annapackiam CSI College of Engineering (2020-2024)
              </div>
              
              <div style={styles.paragraph}>
                <strong>📚 Continuous Learning:</strong> Actively exploring modern frameworks 
                including Next.js, cloud platforms (AWS, Azure), and containerization technologies.
              </div>
              
              <div style={styles.paragraph}>
                <strong>🔄 Development Philosophy:</strong> Strong believer in Agile methodologies, 
                clean code principles, and test-driven development for building maintainable applications.
              </div>
              
              <ul style={styles.list}>
                <li style={styles.listItem}>
                  <div style={{...styles.bullet, background: 'linear-gradient(135deg, #10b981, #059669)'}}>
                    <div style={styles.bulletInner}></div>
                  </div>
                  <span>Agile & Scrum methodologies for efficient project management</span>
                </li>
                <li style={styles.listItem}>
                  <div style={{...styles.bullet, background: 'linear-gradient(135deg, #10b981, #059669)'}}>
                    <div style={styles.bulletInner}></div>
                  </div>
                  <span>Strong focus on user-centered design and experience</span>
                </li>
                <li style={styles.listItem}>
                  <div style={{...styles.bullet, background: 'linear-gradient(135deg, #10b981, #059669)'}}>
                    <div style={styles.bulletInner}></div>
                  </div>
                  <span>Collaborative team environments and knowledge sharing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About