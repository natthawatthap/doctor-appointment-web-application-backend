const Appointment = require("../models/appointment.model");

exports.getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.findAll({
      attributes: ["id", "date", "time", "doctorName", "location", "specialty"],
    });

    res.status(200).json({ appointments });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
