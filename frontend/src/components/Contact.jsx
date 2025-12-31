import { useState } from 'react'
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaPaperPlane, FaMapMarkerAlt } from 'react-icons/fa'
import axios from 'axios'

const Contact = ({ data }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    setSubmitError('')
    
    try {
      // Send data to backend Nodemailer endpoint
      const response = await axios.post('http://localhost:5000/api/send-email', {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      })
      
      if (response.data.success) {
        setSubmitSuccess(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000)
      } else {
        throw new Error(response.data.message || 'Failed to send email')
      }
    } catch (error) {
      console.error('Email error:', error)
      setSubmitError(
        error.response?.data?.message || 
        error.message || 
        'Failed to send message. Please email me directly at ' + data.email
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      })
    }
    // Clear submit error when user starts typing
    if (submitError) {
      setSubmitError('')
    }
  }

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
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '40px'
    },
    card: {
      background: 'white',
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
    },
    cardTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#1f2937',
      marginBottom: '25px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '25px'
    },
    contactIcon: {
      width: '50px',
      height: '50px',
      background: '#dbeafe',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '15px',
      color: '#2563eb'
    },
    contactText: {
      flex: '1'
    },
    contactLabel: {
      fontSize: '0.9rem',
      color: '#6b7280',
      marginBottom: '5px'
    },
    contactValue: {
      fontSize: '1rem',
      color: '#1f2937',
      fontWeight: '500'
    },
    socialIcons: {
      display: 'flex',
      gap: '15px',
      marginTop: '30px',
      flexWrap: 'wrap'
    },
    socialIcon: {
      width: '45px',
      height: '45px',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '1.2rem',
      textDecoration: 'none',
      transition: 'transform 0.3s ease'
    },
    formGroup: {
      marginBottom: '20px'
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      color: '#4b5563',
      fontWeight: '500'
    },
    input: {
      width: '100%',
      padding: '12px 15px',
      border: `1px solid ${errors.name || errors.email ? '#ef4444' : '#d1d5db'}`,
      borderRadius: '5px',
      fontSize: '1rem',
      transition: 'border-color 0.3s ease'
    },
    textarea: {
      width: '100%',
      padding: '12px 15px',
      border: `1px solid ${errors.message ? '#ef4444' : '#d1d5db'}`,
      borderRadius: '5px',
      fontSize: '1rem',
      minHeight: '120px',
      resize: 'vertical'
    },
    errorText: {
      color: '#ef4444',
      fontSize: '0.8rem',
      marginTop: '5px'
    },
    submitButton: {
      padding: '12px 30px',
      background: isSubmitting ? '#6b7280' : '#2563eb',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: isSubmitting ? 'not-allowed' : 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      transition: 'all 0.3s ease',
      opacity: isSubmitting ? 0.7 : 1
    },
    successMessage: {
      background: '#d1fae5',
      color: '#065f46',
      padding: '15px',
      borderRadius: '5px',
      marginBottom: '20px',
      textAlign: 'center',
      border: '1px solid #10b981',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px'
    },
    errorMessage: {
      background: '#fee2e2',
      color: '#991b1b',
      padding: '15px',
      borderRadius: '5px',
      marginBottom: '20px',
      textAlign: 'center',
      border: '1px solid #ef4444',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px'
    }
  }

  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>
          Get In Touch
          <div style={styles.titleUnderline}></div>
        </h2>
        
        <div style={styles.grid}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>
              <FaEnvelope /> Contact Information
            </h3>
            
            <div style={styles.contactItem}>
              <div style={styles.contactIcon}>
                <FaEnvelope />
              </div>
              <div style={styles.contactText}>
                <div style={styles.contactLabel}>Email</div>
                <div style={styles.contactValue}>
                  <a 
                    href={`mailto:${data.email}`}
                    style={{ color: '#2563eb', textDecoration: 'none' }}
                  >
                    {data.email}
                  </a>
                </div>
              </div>
            </div>
            
            <div style={styles.contactItem}>
              <div style={styles.contactIcon}>
                <FaPhone />
              </div>
              <div style={styles.contactText}>
                <div style={styles.contactLabel}>Phone</div>
                <div style={styles.contactValue}>
                  <a 
                    href={`tel:${data.phone}`}
                    style={{ color: '#2563eb', textDecoration: 'none' }}
                  >
                    {data.phone}
                  </a>
                </div>
              </div>
            </div>
            
            <div style={styles.contactItem}>
              <div style={styles.contactIcon}>
                <FaGithub />
              </div>
              <div style={styles.contactText}>
                <div style={styles.contactLabel}>GitHub</div>
                <div style={styles.contactValue}>
                  <a 
                    href={data.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: '#2563eb', textDecoration: 'none' }}
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
            
            <div style={styles.contactItem}>
              <div style={styles.contactIcon}>
                <FaMapMarkerAlt />
              </div>
              <div style={styles.contactText}>
                <div style={styles.contactLabel}>Location</div>
                <div style={styles.contactValue}>Tamil Nadu, India</div>
              </div>
            </div>
            
            <div style={styles.socialIcons}>
              <a 
                href={`mailto:${data.email}`}
                style={{ ...styles.socialIcon, background: '#2563eb' }}
                title="Send Email"
              >
                <FaEnvelope />
              </a>
              <a 
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...styles.socialIcon, background: '#333' }}
                title="GitHub Profile"
              >
                <FaGithub />
              </a>
              <a 
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...styles.socialIcon, background: '#0077b5' }}
                title="LinkedIn Profile"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>
              <FaPaperPlane /> Send Message
            </h3>
            
            {/* Success Message */}
            {submitSuccess && (
              <div style={styles.successMessage}>
                <span style={{ fontSize: '1.2rem' }}>✅</span>
                <div>
                  <strong>Message sent successfully!</strong>
                  <div style={{ fontSize: '0.9rem', marginTop: '5px' }}>
                    I'll get back to you within 24 hours.
                  </div>
                </div>
              </div>
            )}
            
            {/* Error Message */}
            {submitError && (
              <div style={styles.errorMessage}>
                <span style={{ fontSize: '1.2rem' }}>❌</span>
                <div>
                  <strong>Failed to send message</strong>
                  <div style={{ fontSize: '0.9rem', marginTop: '5px' }}>
                    {submitError}
                  </div>
                  <div style={{ fontSize: '0.8rem', marginTop: '10px' }}>
                    Try emailing directly: 
                    <a 
                      href={`mailto:${data.email}`}
                      style={{ color: '#2563eb', marginLeft: '5px' }}
                    >
                      {data.email}
                    </a>
                  </div>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    style={styles.input}
                    required
                    placeholder="Your Name"
                    disabled={isSubmitting}
                  />
                  {errors.name && <div style={styles.errorText}>{errors.name}</div>}
                </div>
                
                <div style={styles.formGroup}>
                  <label style={styles.label}>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={styles.input}
                    required
                    placeholder="your@email.com"
                    disabled={isSubmitting}
                  />
                  {errors.email && <div style={styles.errorText}>{errors.email}</div>}
                </div>
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  style={styles.input}
                  placeholder="Subject (Optional)"
                  disabled={isSubmitting}
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  style={styles.textarea}
                  required
                  placeholder="Your message here..."
                  disabled={isSubmitting}
                ></textarea>
                {errors.message && <div style={styles.errorText}>{errors.message}</div>}
              </div>
              
              <button type="submit" style={styles.submitButton} disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <div style={{
                      width: '16px',
                      height: '16px',
                      border: '2px solid white',
                      borderTop: '2px solid transparent',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite'
                    }}></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>
              
              <div style={{ 
                marginTop: '15px', 
                fontSize: '0.8rem', 
                color: '#6b7280',
                textAlign: 'center'
              }}>
                Messages are sent to <strong>gowthamm8743@gmail.com</strong>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  )
}

export default Contact