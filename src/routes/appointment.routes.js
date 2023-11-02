const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/appointments.controller');


router.get('/', bookingController.getAppointments);

module.exports = router;