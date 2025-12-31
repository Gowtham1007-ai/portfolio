const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  github: { type: String, required: true },
  
  summary: { type: String, required: true },
  
  technicalSkills: {
    frontend: [String],
    backend: [String],
    programming: [String],
    databases: [String],
    tools: [String],
    other: [String]
  },
  
  workExperience: [{
    role: String,
    company: String,
    duration: String,
    description: [String]
  }],
  
  projects: [{
    name: String,
    technologies: String,
    description: [String]
  }],
  
  education: [{
    institution: String,
    degree: String,
    year: String
  }],
  
  additionalInfo: [String]
});

module.exports = mongoose.model('Portfolio', portfolioSchema);