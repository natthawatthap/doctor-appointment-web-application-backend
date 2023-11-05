const Schedule = require("../models/schedule.model");

exports.getSchedule = async (req, res) => {
  try {
    const specialties = req.query.specialties; 

    let schedule;

    if (specialties) {
    
      schedule = await Schedule.findAll({
        where: {
          specialty: specialties
        },
        attributes: [ "date", "times", "doctorName", "location", "specialty"],
      });

      res.json(schedule);
    } else {
      res.json([]); 
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
