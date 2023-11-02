const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000; // You can choose any available port

app.use(bodyParser.json());

// Define routes
app.use('/api/appointments', require('./src/routes/appointments')); // Example route

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
