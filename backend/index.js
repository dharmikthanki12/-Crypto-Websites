const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const dns = require('dns');

dotenv.config();

// Force Google DNS to resolve MongoDB Atlas SRV records
dns.setServers(['8.8.8.8', '8.8.4.4']);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:3000', 'http://localhost:3001'],
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const submitRoute = require('./routes/submit');
app.use('/api/submit', submitRoute);

// Health check
app.get('/', (req, res) => {
    res.json({ message: 'CrptoSuggest API is running ✅', time: new Date() });
});

// Connect to MongoDB
const connectDB = async () => {
    try {
        if (mongoose.connection.readyState >= 1) return;
        await mongoose.connect(process.env.MONGODB_URI, {
            serverSelectionTimeoutMS: 10000,
            connectTimeoutMS: 10000,
        });
        console.log('✅ Connected to MongoDB Atlas');
    } catch (err) {
        console.error('\n❌ MongoDB connection failed!', err.message);
    }
};

// Middleware to ensure DB connection
app.use(async (req, res, next) => {
    await connectDB();
    next();
});

// Start server if run directly
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
}

module.exports = app;
