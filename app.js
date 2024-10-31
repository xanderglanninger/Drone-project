const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const port = process.env.PORT || 5000;


const tempHtml = fs.readFileSync(path.join(__dirname, "index.html"), "utf-8");
app.use(express.json());

app.get('/', function (req, res) {
    res.send(tempHtml)
})

app.get('/data', (req, res) => {
    const sensorData = req.body;
    console.log('Received sensor data:', sensorData);
    
    // Here you can process the data (e.g., save to database)
    
    res.json({
        status: 'success',
        message: 'Data received successfully'
    });
res.send(sensorData);
});

app.listen(port, "0.0.0.0", () => {
    console.log(`Server running at http://localhost:${port}`);
});
