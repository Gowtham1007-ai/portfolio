import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv'; // Add this

const app = express();
const PORT = process.env.PORT || 5000;

// Load environment variables
dotenv.config();

/* ================= Middleware ================= */
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:3000', // Add this for React dev server
    'https://portfolio-1-5jqk.onrender.com',
    'https://portfolio-12-tvbc.onrender.com/' // Add your frontend URL
  ],
  credentials: true
}));
app.use(express.json());

/* ================= MongoDB ================= */
const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://gowthamm8743_db_user:9TEWIajUCcnuAuHu@cluster0.gbkarlu.mongodb.net/gowtham_portfolio";

// Connect to MongoDB with error handling
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('✅ MongoDB connected');
    
    // Seed data after connection
    await seedDatabase();
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    process.exit(1);
  }
};

/* ================= Schema ================= */
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
}, { timestamps: true });

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

/* ================= Seed Function ================= */
const seedDatabase = async () => {
  try {
    const exists = await Portfolio.findOne();
    if (!exists) {
      await Portfolio.create({
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
      });
      console.log('✅ Portfolio data seeded');
    }
  } catch (error) {
    console.error('❌ Seeding error:', error);
  }
};

/* ================= Routes ================= */
app.get('/', (_, res) => {
  res.json({ 
    status: 'API running',
    message: 'Portfolio Backend API',
    endpoints: {
      portfolio: '/api/portfolio',
      health: '/api/health',
      sendEmail: '/api/send-email (POST)'
    }
  });
});

app.get('/api/health', (_, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    mongodb: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
  });
});

app.get('/api/portfolio', async (_, res) => {
  try {
    const data = await Portfolio.findOne();
    if (!data) {
      return res.status(404).json({ error: 'Portfolio data not found' });
    }
    res.json(data);
  } catch (error) {
    console.error('❌ Error fetching portfolio:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

/* ================= Email ================= */
app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Check if email credentials are configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.warn('⚠️ Email credentials not configured');
      return res.status(200).json({ 
        success: true, 
        message: 'Email simulation successful (credentials not configured)',
        data: { name, email, message }
      });
    }

    // Configure transporter only if credentials exist
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Portfolio Message from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('❌ Email error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

/* ================= Error Handling ================= */
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

/* ================= Start Server ================= */
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`📄 API Endpoint: http://localhost:${PORT}/api/portfolio`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
  }
};

startServer();