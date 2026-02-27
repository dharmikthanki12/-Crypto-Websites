const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware - Open CORS for Vercel environment
app.use(cors({
    origin: true, // Echoes the origin of the request
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB function
const connectDB = async () => {
    if (mongoose.connection.readyState >= 1) return;
    try {
        const uri = process.env.MONGODB_URI;
        if (!uri) {
            console.error('❌ ERROR: MONGODB_URI is MISSING in Environment Variables.');
            return;
        }
        await mongoose.connect(uri);
        console.log('✅ Connected to MongoDB Atlas');
    } catch (err) {
        console.error('❌ MongoDB connection failed!', err.message);
    }
};

// Ensure DB is connected before handling routes
app.use(async (req, res, next) => {
    await connectDB();
    next();
});

// Routes
const submitRoute = require('../server/routes/submit');
app.use('/api/submit', submitRoute);

// Catch-all for API to help debugging 405/404 errors
app.all('/api/(.*)', (req, res) => {
    res.status(404).json({
        error: 'API Route Not Found',
        path: req.url,
        method: req.method
    });
});

module.exports = app;
