// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');

// Initialize the express app
const app = express();
const PORT = 5000;

// Use body-parser to parse JSON data in requests
app.use(bodyParser.json());

// Define the route to receive data from ESP32
app.post('/data', (req, res) => {
  const analogValue = req.body.Analog; // Extract the "Analog" field from the JSON data

  if (analogValue !== undefined) {
    console.log(`Incomming Data!!!`);
    console.log(`Received New Analog Value: ${analogValue}`);
    res.status(200).send('Data received successfully');
  } else {
    console.log('No Analog value found in request');
    res.status(400).send('Bad Request: No Analog value found');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
