const jwt = require('jsonwebtoken');
// Define signIn function and export it
exports.signIn = (req, res) => {
    const { email, password } = req.body;
    // Dummy authentication logic for demonstration
    if (email === 'test@example.com' && password === 'P@ssw0rd') {
      // Generate JWT token upon successful authentication
      const token = jwt.sign({ email: email }, 'your_secret_key', { expiresIn: '1h' });
      res.status(200).json({ message: 'Sign-in successful', token: token });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  };
  
  // Define signUp function and export it
  exports.signUp = (req, res) => {
    const { email, password } = req.body;
    // Dummy sign-up logic for demonstration
    // Here, you might add validation, check if the user already exists, etc.
    if (email && password) {
      // In a real scenario, you would save this user to a database
      // For demonstration, let's assume sign-up is successful
  
      // Generate JWT token upon successful sign-up
      const token = jwt.sign({ email: email }, 'your_secret_key', { expiresIn: '1h' });
      res.status(201).json({ message: 'Sign-up successful', token: token });
    } else {
      res.status(400).json({ message: 'Invalid request' });
    }
  };