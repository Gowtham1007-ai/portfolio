import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  const [portfolioData, setPortfolioData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [backendStatus, setBackendStatus] = useState('checking')

  useEffect(() => {
    fetchPortfolioData()
  }, [])

  const fetchPortfolioData = async () => {
    try {
      // Try to fetch from backend
      const response =  await axios.get(`https://portfolio-12-tvbc.onrender.com/api/portfolio`, {
      timeout: 5000
      })
      setPortfolioData(response.data)
      setBackendStatus('connected')
      setLoading(false)
    } catch (err) {
      console.log('Backend connection failed:', err.message)
      
      // Use fallback data
      const fallbackData = {
        name: "M. GOWTHAM",
        title: "Full Stack Developer",
        email: "gowthamm8743@gmail.com",
        phone: "+91-9360678266",
        github: "https://github.com/Gowtham1007-ai",
        summary: "Full Stack Developer with hands-on experience in building scalable web applications and API integrations.",
        technicalSkills: {
          frontend: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js"],
          backend: ["Node.js", "Express.js", "RESTful APIs", "OAuth 2.0"],
          programming: ["JavaScript", "TypeScript", "Python", "Java"],
          databases: ["MongoDB", "MySQL"],
          tools: ["Git", "GitHub", "VS Code", "Postman"],
          other: ["IoT", "Embedded Systems", "Agile Methodology"]
        },
        workExperience: [{
          role: "Intern – Xapplets Automation Project",
          company: "Smackcoders Inc.",
          duration: "May 2025 – Nov 2025",
          description: [
            "Integrated 4+ third-party applications",
            "Implemented secure API connections",
            "Collaborated with development teams"
          ]
        }],
        projects: [{
          name: "Smart Home Automation System",
          technologies: "IoT, Embedded Systems",
          description: [
            "Designed smart home automation system",
            "Enabled real-time energy monitoring",
            "Enhanced energy efficiency"
          ]
        }],
        education: [{
          institution: "Jayaraj Annapackiam CSI College of Engineering",
          degree: "B.E. in Computer Science",
          year: "2020–2024"
        }],
        additionalInfo: [
          "Strong interest in web application development",
          "Actively learning new frameworks",
          "Passionate about building scalable applications"
        ]
      }
      setPortfolioData(fallbackData)
      setBackendStatus('not-connected')
      setLoading(false)
    }
  }

  const retryConnection = () => {
    setBackendStatus('checking')
    setLoading(true)
    fetchPortfolioData()
  }

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: '#f8fafc',
        flexDirection: 'column',
        gap: '20px'
      }}>
        <div style={{
          width: '60px',
          height: '60px',
          border: '5px solid #e5e7eb',
          borderTop: '5px solid #2563eb',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }}></div>
        <div>
          <h3 style={{ color: '#2563eb', marginBottom: '10px', textAlign: 'center' }}>
            Loading Portfolio...
          </h3>
          <p style={{ color: '#6b7280', textAlign: 'center' }}>
            Connecting to backend: {backendStatus === 'checking' ? '🔍 Checking...' : '❌ Failed'}
          </p>
        </div>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    )
  }

  const appStyles = {
    minHeight: '100vh',
    backgroundColor: '#f8fafc',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  }

  return (
    <div style={appStyles}>
      {/* Connection Status Banner */}
      {backendStatus === 'not-connected' && (
        <div style={{
          background: '#fef3c7',
          color: '#92400e',
          padding: '12px 20px',
          textAlign: 'center',
          fontSize: '0.9rem',
          borderBottom: '1px solid #fbbf24',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            ⚠️ Backend not connected. Using local data. 
            <span style={{ marginLeft: '10px', fontSize: '0.8rem' }}>
              (Backend should run on <strong>http://localhost:5000</strong>)
            </span>
          </div>
          <button 
            onClick={retryConnection}
            style={{
              padding: '5px 15px',
              background: '#92400e',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '0.8rem',
              marginLeft: '10px'
            }}
          >
            Retry Connection
          </button>
        </div>
      )}

      {backendStatus === 'connected' && (
        <div style={{
          background: '#d1fae5',
          color: '#065f46',
          padding: '10px 20px',
          textAlign: 'center',
          fontSize: '0.9rem',
          borderBottom: '1px solid #10b981'
        }}>
          ✅ Backend connected successfully!
        </div>
      )}
      
      <Header data={portfolioData} />
      <Hero data={portfolioData} />
      <About data={portfolioData} />
      <Skills data={portfolioData} />
      <Experience data={portfolioData} />
      <Projects data={portfolioData} />
      <Education data={portfolioData} />
      <Contact data={portfolioData} />
      
      <footer style={{
        backgroundColor: '#1f2937',
        color: 'white',
        padding: '40px 20px',
        textAlign: 'center',
        marginTop: '60px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ fontSize: '1.1rem', marginBottom: '10px' }}>
            © {new Date().getFullYear()} M. GOWTHAM. All rights reserved.
          </p>
          <p style={{ color: '#9ca3af', fontSize: '0.9rem', marginBottom: '15px' }}>
            Built with React.js, Node.js, Express.js & MongoDB
          </p>
          <div style={{
            marginTop: '20px',
            padding: '10px',
            background: backendStatus === 'connected' ? '#10b98120' : '#ef444420',
            borderRadius: '5px',
            display: 'inline-block'
          }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.8rem'
            }}>
              {backendStatus === 'connected' ? '✅' : '❌'}
              Backend Status: 
              <strong style={{
                color: backendStatus === 'connected' ? '#10b981' : '#ef4444'
              }}>
                {backendStatus === 'connected' ? ' Connected' : ' Not Connected'}
              </strong>
            </span>
            {backendStatus === 'not-connected' && (
              <div style={{ marginTop: '5px', fontSize: '0.7rem', color: '#9ca3af' }}>
                Start backend with: <code>cd backend && npm run dev</code>
              </div>
            )}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App