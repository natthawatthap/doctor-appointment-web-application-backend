const Schedule = require("../models/schedule.model");

exports.getSchedule = async (req, res) => {
  try {
    const specialties = req.query.specialties; // Access specialties from the query string

    let schedule;

    if (specialties) {
      // If specialties parameter is provided, filter the schedule by specialties
      schedule = await Schedule.findAll({
        where: {
          specialty: specialties
        },
        attributes: [ "date", "times", "doctorName", "location", "specialty"],
      });

      res.json(schedule);
    } else {
      res.json([]); // Return an empty array if no specialties parameter is provided
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
