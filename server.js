const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static(__dirname));

// Parse JSON data
app.use(express.json());

// POST route to handle booking
app.post('/submit-booking', (req, res) => {
    const booking = req.body;
    
    // Append user data to bookings.txt
    fs.appendFileSync('bookings.txt', JSON.stringify(booking) + '\n', 'utf8');
    
    // Send success response
    res.send('Booking received!');
});

// Start server
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
