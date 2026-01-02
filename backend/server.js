import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
const PORT = process.env.PORT || 5000;

/* ================= Middleware ================= */
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://portfolio-1-5jqk.onrender.com'
  ]
}));
app.use(express.json());

/* ================= MongoDB ================= */
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error('❌ MONGODB_URI missing');
  process.exit(1);
}

await mongoose.connect(MONGO_URI);
console.log('✅ MongoDB connected');

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
});

const Portfolio = mongoose.models.Portfolio || mongoose.model('Portfolio', portfolioSchema);

/* ================= Seed ================= */
const exists = await Portfolio.findOne();
if (!exists) {
  await Portfolio.create({
    name: "M. GOWTHAM",
    title: "Full Stack Developer",
    email: "gowthamm8743@gmail.com",
    github: "https://github.com/Gowtham1007-ai"
  });
  console.log('✅ Portfolio seeded');
}

/* ================= Routes ================= */
app.get('/', (_, res) => {
  res.json({ status: 'API running' });
});

app.get('/api/health', (_, res) => {
  res.json({
    mongodb: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
  });
});

app.get('/api/portfolio', async (_, res) => {
  const data = await Portfolio.findOne();
  res.json(data);
});

/* ================= Email ================= */
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  await transporter.sendMail({
    from: `"Portfolio" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `Message from ${name}`,
    text: message
  });

  res.json({ success: true });
});

/* ================= Start ================= */
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
