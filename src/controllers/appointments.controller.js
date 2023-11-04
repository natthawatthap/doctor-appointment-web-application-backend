const Appointment = require("../models/appointment.model");
const jwt = require("jsonwebtoken"); // Assuming you're using JWT for token-based authentication

exports.getAppointments = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1]; // Assuming the token is in the format "Bearer <token>"

    // Verify and decode the token to get the email address
    const decodedToken = jwt.verify(token, "your_secret_key"); // Replace "your_secret_key" with your actual secret key
    const userId = decodedToken.userId; // Assuming the email is stored in the token
    console.log(userId);
    const appointments = await Appointment.findAll({
      where: { userId: userId }, // Filter appointments by email
      attributes: ["id", "date", "time", "doctorName", "location", "specialty"],
    });

    res.status(200).json({ appointments });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};


exports.createAppointment = async (req, res) => {
 
};

