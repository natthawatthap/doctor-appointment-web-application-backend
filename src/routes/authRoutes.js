const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Sign-in route
router.post('/signin', authController.signIn);
router.post('/signup', authController.signUp);

module.exports = router;
