const express = require('express');
const { getProtected } = require('../controllers/protectedController');
const { protect } = require('../middleware/authMiddleware'); // Ensure correct import

const router = express.Router();

router.get('/', protect, getProtected);

module.exports = router;