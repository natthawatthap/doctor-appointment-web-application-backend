const Appointment = require("../models/appointment.model");
const jwt = require("jsonwebtoken"); // Assuming you're using JWT for token-based authentication
const Schedule = require("../models/schedule.model");

exports.getAppointments = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedToken.userId;

    const appointments = await Appointment.findAll({
      where: { userId: userId },
      attributes: ["id", "date", "time", "doctorName", "location", "specialty"],
    });

    res.status(200).json({ appointments });
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      res.status(401).json({ message: "Token has expired" });
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};

exports.createAppointment = async (req, res) => {
  try {
    const { specialty, date, time } = req.body;
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    const userId = decodedToken.userId;

    const doctorInfo = await getDoctorName(specialty, date, time);

    if (!doctorInfo) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    const { doctorName, location } = doctorInfo;

    const appointment = new Appointment({
      userId,
      specialty,
      date,
      time,
      doctorName,
      location,
    });

    await appointment.save();

    res
      .status(201)
      .json({ message: "Appointment created successfully", appointment });
  } catch (error) {
    console.error("Error creating appointment:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getDoctorName = async (specialty, date, time) => {
  try {
    const doctor = await Schedule.findOne({
      where: {
        specialty,
        date,
      },
      attributes: ["doctorName", "location"],
    });

    return doctor
      ? { doctorName: doctor.doctorName, location: doctor.location }
      : null;
  } catch (error) {
    console.error("Error fetching doctor name:", error);
    throw new Error("Internal Server Error");
  }
};
