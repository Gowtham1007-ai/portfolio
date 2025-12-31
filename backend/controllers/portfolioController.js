const Portfolio = require('../models/Portfolio');

// Get portfolio data
exports.getPortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne();
    if (!portfolio) {
      return res.status(404).json({ message: 'Portfolio not found' });
    }
    res.json(portfolio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create portfolio data (one-time setup)
exports.createPortfolio = async (req, res) => {
  try {
    // Check if portfolio already exists
    const existingPortfolio = await Portfolio.findOne();
    if (existingPortfolio) {
      return res.status(400).json({ message: 'Portfolio already exists' });
    }

    const portfolioData = {
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
    };

    const portfolio = new Portfolio(portfolioData);
    await portfolio.save();
    res.status(201).json({ message: 'Portfolio created successfully', portfolio });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
