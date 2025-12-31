import { useState, useEffect } from 'react'
import { FaGithub, FaEnvelope, FaPhone, FaCode } from 'react-icons/fa'

const Hero = ({ data }) => {
  const [imageError, setImageError] = useState(false)

  const styles = {
    hero: {
      padding: '120px 20px 60px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    },
    heroOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.3)',
      zIndex: 1
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '60px',
      alignItems: 'center',
      position: 'relative',
      zIndex: 2
    },
    textSection: {
      paddingRight: '20px',
      color: 'white'
    },
    greeting: {
      fontSize: '1.1rem',
      color: '#fbbf24',
      fontWeight: '600',
      marginBottom: '15px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    title: {
      fontSize: '4rem',
      fontWeight: '800',
      marginBottom: '15px',
      lineHeight: '1.1',
      background: 'linear-gradient(90deg, #fff, #fbbf24)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    subtitle: {
      fontSize: '2rem',
      color: '#e2e8f0',
      marginBottom: '25px',
      fontWeight: '600'
    },
    description: {
      fontSize: '1.2rem',
      color: '#cbd5e0',
      marginBottom: '35px',
      lineHeight: '1.7',
      maxWidth: '90%'
    },
    buttons: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      marginBottom: '40px'
    },
    btnPrimary: {
      padding: '15px 35px',
      background: 'linear-gradient(135deg, #f59e0b, #d97706)',
      color: 'white',
      textDecoration: 'none',
      borderRadius: '8px',
      fontWeight: '600',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      transition: 'all 0.3s',
      fontSize: '1rem',
      boxShadow: '0 4px 15px rgba(245, 158, 11, 0.3)',
      border: 'none',
      cursor: 'pointer'
    },
    btnSecondary: {
      padding: '15px 35px',
      background: 'rgba(255, 255, 255, 0.1)',
      color: 'white',
      textDecoration: 'none',
      borderRadius: '8px',
      fontWeight: '600',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      transition: 'all 0.3s',
      fontSize: '1rem',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    },
    contactInfo: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '30px',
      marginTop: '30px'
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      color: '#e2e8f0',
      fontSize: '1rem',
      textDecoration: 'none',
      transition: 'color 0.3s'
    },
    iconContainer: {
      width: '45px',
      height: '45px',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fbbf24'
    },
    techStack: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '15px',
      marginTop: '30px'
    },
    techItem: {
      padding: '8px 18px',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '20px',
      fontSize: '0.9rem',
      color: '#e2e8f0',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      backdropFilter: 'blur(5px)',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    },
    imageSection: {
      textAlign: 'center',
      position: 'relative'
    },
    profileContainer: {
      position: 'relative',
      display: 'inline-block'
    },
    profileImage: {
      width: '380px',
      height: '380px',
      borderRadius: '50%',
      objectFit: 'cover',
      border: '8px solid rgba(255, 255, 255, 0.2)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
      transition: 'transform 0.3s'
    },
    profileInitials: {
      width: '380px',
      height: '380px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #667eea, #764ba2)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      border: '8px solid rgba(255, 255, 255, 0.2)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
      fontSize: '6rem',
      fontWeight: 'bold'
    },
    profileRing: {
      position: 'absolute',
      top: '-20px',
      left: '-20px',
      right: '-20px',
      bottom: '-20px',
      border: '3px solid rgba(251, 191, 36, 0.3)',
      borderRadius: '50%',
      animation: 'pulse 2s infinite'
    },
    statsContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '40px',
      marginTop: '30px',
      flexWrap: 'wrap'
    },
    statItem: {
      textAlign: 'center'
    },
    statNumber: {
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#fbbf24',
      marginBottom: '5px'
    },
    statLabel: {
      fontSize: '0.9rem',
      color: '#cbd5e0',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    }
  }

  // CORRECT IMAGE PATH - Your image is in: frontend/public/image/gowtham.jpg
  const profileImageUrl = '/image/gowtham.jpg'

  return (
    <section id="hero" style={styles.hero}>
      <div style={styles.heroOverlay}></div>
      
      <div style={styles.container}>
        <div style={styles.textSection}>
          <div style={styles.greeting}>
            <FaCode /> Hello World! I'm
          </div>
          
          <h1 style={styles.title}>
            M. {data.name.split(' ')[1]}
          </h1>
          
          <h2 style={styles.subtitle}>
            {data.title} & Digital Creator
          </h2>
          
          <p style={styles.description}>
            {data.summary} Passionate about building innovative solutions 
            that make a real impact.
          </p>
          
          <div style={styles.buttons}>
            <a href="#contact" style={styles.btnPrimary}>
              <FaEnvelope /> Hire Me
            </a>
            <a 
              href={data.github} 
              target="_blank" 
              rel="noopener noreferrer"
              style={styles.btnSecondary}
            >
              <FaGithub /> View Projects
            </a>
            <a 
              href="#projects"
              style={{
                ...styles.btnSecondary,
                background: 'rgba(255, 255, 255, 0.05)'
              }}
            >
              <FaCode /> View Portfolio
            </a>
          </div>

          <div style={styles.contactInfo}>
            <a href={`mailto:${data.email}`} style={styles.contactItem}>
              <div style={styles.iconContainer}>
                <FaEnvelope size={20} />
              </div>
              <span>{data.email}</span>
            </a>
            
            <a href={`tel:${data.phone}`} style={styles.contactItem}>
              <div style={styles.iconContainer}>
                <FaPhone size={20} />
              </div>
              <span>{data.phone}</span>
            </a>
          </div>

          <div style={styles.techStack}>
            <div style={styles.techItem}>
              <FaCode /> React.js
            </div>
            <div style={styles.techItem}>
              <FaCode /> Node.js
            </div>
            <div style={styles.techItem}>
              <FaCode /> MongoDB
            </div>
            <div style={styles.techItem}>
              <FaCode /> TypeScript
            </div>
          </div>
        </div>
        
        <div style={styles.imageSection}>
          <div style={styles.profileContainer}>
            <div style={styles.profileRing}></div>
            
            {/* Your Photo - Only show one at a time */}
            {!imageError ? (
              <img 
                src={profileImageUrl} 
                alt="M. GOWTHAM - Full Stack Developer"
                style={styles.profileImage}
                onError={() => setImageError(true)}
                onLoad={() => setImageError(false)}
              />
            ) : (
              <div style={styles.profileInitials}>
                MG
              </div>
            )}
          </div>
          
          
          <div style={{
            background: '#10b981',
            color: 'white',
            padding: '12px 25px',
            borderRadius: '25px',
            fontSize: '1rem',
            fontWeight: '600',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            marginTop: '25px',
            boxShadow: '0 5px 15px rgba(16, 185, 129, 0.4)'
          }}>
            <span style={{
              width: '10px',
              height: '10px',
              background: 'white',
              borderRadius: '50%',
              animation: 'blink 1.5s infinite'
            }}></span>
            Available for Full-time Opportunities
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.05); opacity: 0.3; }
          100% { transform: scale(1); opacity: 0.5; }
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        
        /* Responsive styles */
        @media (max-width: 1024px) {
          .container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 40px;
          }
          
          .textSection {
            padding-right: 0;
          }
          
          .description {
            max-width: 100%;
            margin-left: auto;
            margin-right: auto;
          }
          
          .contactInfo {
            justify-content: center;
          }
          
          .techStack {
            justify-content: center;
          }
        }
        
        @media (max-width: 768px) {
          .title {
            font-size: 3rem;
          }
          
          .subtitle {
            font-size: 1.5rem;
          }
          
          .profileImage,
          .profileInitials {
            width: 280px;
            height: 280px;
            font-size: 4rem;
          }
        }
        
        @media (max-width: 480px) {
          .title {
            font-size: 2.5rem;
          }
          
          .buttons {
            flex-direction: column;
          }
          
          .btnPrimary, .btnSecondary {
            width: 100%;
            justify-content: center;
          }
          
          .profileImage,
          .profileInitials {
            width: 220px;
            height: 220px;
            font-size: 3rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero