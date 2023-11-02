const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user");

exports.signIn = async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    try {
      const user = await User.findOne({
        where: {
          email,
        },
      });

      if (user) {
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (passwordMatch) {
          const token = jwt.sign({ email: user.email }, "your_secret_key", {
            expiresIn: "1h",
          });
          res.status(200).json({ message: "Sign-in successful", token });
        } else {
          res.status(401).json({ message: "Invalid credentials" });
        }
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.status(400).json({ message: "Invalid request" });
  }
};

exports.signUp = async (req, res) => {
  const { email, password } = req.body;

  if (email && password) {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "Sign-up successful" });
  } else {
    res.status(400).json({ message: "Invalid request" });
  }
};
