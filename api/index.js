const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:3000', 'http://localhost:3001'],
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes - Pointing to the existing server folder
const submitRoute = require('../server/routes/submit');
app.use('/api/submit', submitRoute);

// Health check
app.get('/api', (req, res) => {
    res.json({ message: 'CrptoSuggest API is running ✅', status: 'OK' });
});

// Connect to MongoDB
const connectDB = async () => {
    if (mongoose.connection.readyState >= 1) return;
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ Connected to MongoDB Atlas');
    } catch (err) {
        console.error('❌ MongoDB connection failed!', err.message);
    }
};

// Middleware to ensure DB connection on every request (serverless compatible)
app.use(async (req, res, next) => {
    await connectDB();
    next();
});

module.exports = app;
