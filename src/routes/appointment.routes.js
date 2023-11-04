const express = require('express');
const router = express.Router();
const appointmentsController = require('../controllers/appointments.controller');


router.get('/', appointmentsController.getAppointments);
router.post('/', appointmentsController.createAppointment);

module.exports = router;