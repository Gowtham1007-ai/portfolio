const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
const app = express();
const PORT = process.env.PORT || 5000;

/* =======================
   Middleware
======================= */
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://portfolio-1-5jqk.onrender.com'
  ]
}));
app.use(express.json());

/* =======================
   MongoDB Connection
======================= */
const MONGO_URI = process.env.MONGODB_URI;

if (!MONGO_URI) {
  console.error('❌ MONGODB_URI is not defined');
  process.exit(1);
}

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch(err => {
    console.error('❌ MongoDB connection failed:', err.message);
    process.exit(1);
  });

    // Define Portfolio schema
    const portfolioSchema = new mongoose.Schema({
      name: String,
      title: String,
      email: String,
      phone: String,
      github: String,
      summary: String,
      technicalSkills: Object,
      workExperience: Array,
      projects: Array,
      education: Array,
      additionalInfo: Array
    });

    // Create model only if it doesn't exist
    const Portfolio = mongoose.models.Portfolio || mongoose.model('Portfolio', portfolioSchema);
    
    // Check if data already exists
    const existingData = await Portfolio.findOne();
    if (!existingData) {
      // Create initial data
      const portfolioData = new Portfolio({
        name: "M. GOWTHAM",
        title: "Full Stack Developer",
        email: "gowthamm8743@gmail.com",
        phone: "+91-9360678266",
        github: "https://github.com/Gowtham1007-ai",
        summary: "Full Stack Developer with hands-on experience in building scalable web applications and API integrations. Proficient in React.js, Node.js, Express.js, TypeScript, JavaScript, MongoDB, and MySQL. Experienced in implementing OAuth 2.0 authentication, RESTful API development, and automated workflow solutions.",
        technicalSkills: {
          frontend: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Bootstrap", "Responsive Design"],
          backend: ["Node.js", "Express.js", "RESTful APIs", "OAuth 2.0", "API Integration", "Microservices"],
          programming: ["JavaScript", "TypeScript", "Python", "Java"],
          databases: ["MongoDB", "MySQL", "Database Design", "Data Modeling"],
          tools: ["Git", "GitHub", "VS Code", "Postman", "NPM", "API Testing", "Version Control"],
          other: ["IoT", "Embedded Systems", "Agile Methodology", "Problem Solving", "Debugging"]
        },
        workExperience: [{
          role: "Intern – Xapplets Automation Project",
          company: "Smackcoders Inc.",
          duration: "May 2025 – Nov 2025",
          description: [
            "Integrated 4+ third-party applications including Reddit, Clockify, Google Books, and Team Calendar into Xapplets Automation Platform",
            "Implemented secure API connections using OAuth 2.0 authentication",
            "Collaborated with cross-functional development teams to automate workflows reducing manual processing time by 30%",
            "Performed debugging and validation using Postman",
            "Developed and tested RESTful API endpoints for application integration"
          ]
        }],
        projects: [{
          name: "Smart Home Automation and Energy Management System",
          technologies: "IoT, Embedded Systems, Sensors, Wireless",
          description: [
            "Designed and implemented embedded-based smart home automation system",
            "Enabled real-time energy monitoring and automated power optimization",
            "Enhanced energy efficiency by 25% through automated appliance scheduling",
            "Developed wireless communication protocols for seamless device connectivity"
          ]
        }, {
          name: "Student Management System",
          technologies: "Node.js, Express.js, MongoDB, HTML, CSS, JavaScript",
          description: [
            "Developed full-stack web application for managing student records",
            "Built RESTful backend using Node.js and Express.js with MongoDB",
            "Created intuitive responsive frontend interface",
            "Implemented data validation, error handling, and authentication"
          ]
        }],
        education: [{
          institution: "Jayaraj Annapackiam CSI College of Engineering",
          degree: "Bachelor of Engineering (B.E.) in Computer Science",
          year: "2020–2024"
        }, {
          institution: "D.M.N.S. Dr. Sivanthi Adithanar Matriculation School",
          degree: "Higher Secondary Education (Class 12)",
          year: "2020"
        }, {
          institution: "Hindu Higher Secondary School",
          degree: "Secondary Education (Class 10)",
          year: "2018"
        }],
        additionalInfo: [
          "Strong interest in web application development, IoT automation, and API-based integration systems",
          "Actively learning new frameworks including Next.js and cloud technologies",
          "Passionate about building scalable user-centric applications",
          "Experience with Agile development methodology and collaborative team environments"
        ]
      });
      
      await portfolioData.save();
      console.log('✅ Initial portfolio data created in MongoDB');
    } try {
      console.log('✅ Portfolio data already exists in MongoDB');
    }
   catch (err) {
    console.log('❌ MongoDB Connection Error:', err.message);
    console.log('⚠️ Using in-memory data instead');
  };

// Call the connection function
connectDB();

// In-memory fallback data (in case MongoDB fails)
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
};

// Routes
app.get('/', (req, res) => {
  res.json({ 
    message: '🎉 Gowtham Portfolio Backend API', 
    endpoints: ['/api/portfolio', '/api/health'],
    status: 'running',
    database: 'MongoDB connected',
    mongoDB: 'gowtham_portfolio database'
  });
});

app.get('/api/health', (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    database: dbStatus,
    mongodb: mongoose.connection.readyState === 1 ? '✅ Connected' : '❌ Disconnected'
  });
});

app.get('/api/portfolio', async (req, res) => {
  try {
    // Try to get data from MongoDB
    const Portfolio = mongoose.models.Portfolio || mongoose.model('Portfolio', 
      new mongoose.Schema({
        name: String,
        title: String,
        email: String,
        phone: String,
        github: String,
        summary: String,
        technicalSkills: Object,
        workExperience: Array,
        projects: Array,
        education: Array,
        additionalInfo: Array
      })
    );
    
    const portfolio = await Portfolio.findOne();
    
    if (portfolio && mongoose.connection.readyState === 1) {
      console.log('✅ Serving data from MongoDB');
      res.json(portfolio);
    } else {
      console.log('⚠️ Serving fallback data');
      res.json(fallbackData);
    }
  } catch (err) {
    console.log('❌ Database error, using fallback:', err.message);
    res.json(fallbackData);
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Backend Server running on http://localhost:${PORT}`);
  console.log(`📡 API Endpoint: http://localhost:${PORT}/api/portfolio`);
  console.log(`🏥 Health Check: http://localhost:${PORT}/api/health`);
  console.log(`🗄️  MongoDB Database: gowtham_portfolio`);
  console.log(`🔗 MongoDB URI: mongodb://localhost:27017/gowtham_portfolio`);
});



// Create a transporter (using Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'gowthamm8743@gmail.com', // Your email
    pass: 'ewag ptgl okoj mvwp'     // Google App Password
  }
});

// Add this route before app.listen()
app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Email options
    const mailOptions = {
      from: `"Portfolio Contact" <your-email@gmail.com>`,
      to: 'gowthamm8743@gmail.com', // Your email where you want to receive messages
      replyTo: email,
      subject: `Portfolio Message: ${subject || 'No Subject'}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #2563eb; color: white; padding: 20px; border-radius: 5px 5px 0 0; }
            .content { background: #f8fafc; padding: 20px; border-radius: 0 0 5px 5px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #4b5563; }
            .value { color: #1f2937; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>📧 New Message from Portfolio</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">👤 Name:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">📧 Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              <div class="field">
                <div class="label">📝 Subject:</div>
                <div class="value">${subject || 'No Subject'}</div>
              </div>
              <div class="field">
                <div class="label">💬 Message:</div>
                <div class="value" style="white-space: pre-wrap;">${message}</div>
              </div>
              <hr style="margin: 20px 0; border: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 12px;">
                This message was sent from your portfolio website at ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `New message from portfolio:
      
Name: ${name}
Email: ${email}
Subject: ${subject || 'No Subject'}

Message:
${message}

Sent from portfolio website at ${new Date().toLocaleString()}`
    };

    // Send email
    await transporter.sendMail(mailOptions);
    
    res.json({ 
      success: true, 
      message: 'Email sent successfully!',
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Email send error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send email',
      error: error.message 
    });
  }
});