// server2formongo.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5001; // Alag port

// Middleware
app.use(cors());
app.use(express.json());

// ✅ MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/studydb')
    .then(() => console.log('✅ MongoDB connected'))
    .catch(err => console.error('❌ MongoDB connection error:', err));

// ------------------- SCHEMAS -------------------

// Booking Schema
const bookingSchema = new mongoose.Schema({
    bundleId: String,    // Jo hum URL se bhejte hain
    name: String,
    email: String,
    phone: String,
    payment: String,     // Card / UPI / NetBanking
    created_at: { type: Date, default: Date.now }
});
const Booking = mongoose.model('Booking', bookingSchema);

// ------------------- ROUTES -------------------

// Test route
app.get('/', (req, res) => {
    res.send('✅ Backend is working! Use /api/bookings to save data');
});

// Save booking
app.post('/api/bookings', async (req, res) => {
    try {
        const booking = new Booking(req.body);
        await booking.save();
        res.json({ message: '✅ Booking saved in MongoDB!' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ------------------- START SERVER -------------------
app.listen(port, () => {
    console.log(`🚀 MongoDB Server running at http://localhost:${port}`);
});
