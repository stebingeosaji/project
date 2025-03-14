const express = require('express');
const { registerUser, verifyOTP, authUser } = require('../controllers/authController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/verify-otp', verifyOTP); // Ensure the OTP verification route is defined
router.post('/login', authUser);

module.exports = router;