import { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaEnvelope } from 'react-icons/fa'

const Header = ({ data }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const styles = {
    header: {
      background: 'white',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      position: 'fixed',
      width: '100%',
      top: 0,
      zIndex: 1000
    },
    nav: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    logoCircle: {
      width: '40px',
      height: '40px',
      background: '#2563eb',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '18px'
    },
    logoText: {
      display: 'flex',
      flexDirection: 'column'
    },
    name: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#1f2937'
    },
    title: {
      fontSize: '14px',
      color: '#6b7280'
    },
    desktopMenu: {
      display: 'flex',
      gap: '30px',
      listStyle: 'none'
    },
    menuLink: {
      color: '#4b5563',
      textDecoration: 'none',
      fontWeight: '500',
      fontSize: '16px',
      transition: 'color 0.3s'
    },
    mobileMenuButton: {
      display: 'none',
      background: 'none',
      border: 'none',
      fontSize: '24px',
      color: '#4b5563',
      cursor: 'pointer'
    },
    mobileMenu: {
      display: 'none',
      padding: '20px',
      borderTop: '1px solid #e5e7eb'
    },
    mobileMenuLinks: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px'
    },
    socialIcons: {
      display: 'flex',
      gap: '15px',
      marginTop: '20px'
    }
  }

  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <div style={styles.logo}>
          <div style={styles.logoCircle}>MG</div>
          <div style={styles.logoText}>
            <div style={styles.name}>{data.name}</div>
            <div style={styles.title}>{data.title}</div>
          </div>
        </div>

        {/* Desktop Menu */}
        <div style={{ ...styles.desktopMenu, display: window.innerWidth > 768 ? 'flex' : 'none' }}>
          <a href="#about" style={styles.menuLink}>About</a>
          <a href="#skills" style={styles.menuLink}>Skills</a>
          <a href="#experience" style={styles.menuLink}>Experience</a>
          <a href="#projects" style={styles.menuLink}>Projects</a>
          <a href="#contact" style={styles.menuLink}>Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          style={{ ...styles.mobileMenuButton, display: window.innerWidth <= 768 ? 'block' : 'none' }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && window.innerWidth <= 768 && (
        <div style={styles.mobileMenu}>
          <div style={styles.mobileMenuLinks}>
            <a href="#about" style={styles.menuLink} onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#skills" style={styles.menuLink} onClick={() => setIsMenuOpen(false)}>Skills</a>
            <a href="#experience" style={styles.menuLink} onClick={() => setIsMenuOpen(false)}>Experience</a>
            <a href="#projects" style={styles.menuLink} onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#contact" style={styles.menuLink} onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
          <div style={styles.socialIcons}>
            <a href={`mailto:${data.email}`} style={{ color: '#6b7280' }}>
              <FaEnvelope size={20} />
            </a>
            <a href={data.github} target="_blank" rel="noopener noreferrer" style={{ color: '#6b7280' }}>
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header