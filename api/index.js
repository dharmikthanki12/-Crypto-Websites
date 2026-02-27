const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors({
    origin: true,
    credentials: true
}));
app.use(express.json());

// Singleton connection to prevent multiple connections in serverless
let isConnected = false;

const connectDB = async () => {
    if (isConnected) return;

    const uri = process.env.MONGODB_URI;
    if (!uri) throw new Error('MONGODB_URI is missing');

    try {
        const db = await mongoose.connect(uri, {
            serverSelectionTimeoutMS: 5000,
            connectTimeoutMS: 5000,
        });
        isConnected = db.connections[0].readyState;
        console.log('✅ Connected to MongoDB');
    } catch (err) {
        console.error('❌ Connection failed:', err.message);
        throw err;
    }
};

// Routes
const submitRoute = require('../backend/routes/submit');

// Wrap the route to ensure DB is connected BEFORE processing
app.use('/api/submit', async (req, res, next) => {
    try {
        await connectDB();
        next();
    } catch (err) {
        res.status(500).json({ success: false, message: "Database connection failed", error: err.message });
    }
}, submitRoute);

app.get('/api', (req, res) => {
    res.json({ message: 'API is alive', connected: isConnected });
});

module.exports = app;
