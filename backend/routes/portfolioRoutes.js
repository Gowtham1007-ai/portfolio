const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolioController');

// Get portfolio data
router.get('/', portfolioController.getPortfolio);

// Create portfolio (for initial setup)
router.post('/create', portfolioController.createPortfolio);

module.exports = router;