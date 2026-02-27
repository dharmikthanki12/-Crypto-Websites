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

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 10000,
    connectTimeoutMS: 10000,
})
    .then(() => {
        console.log('✅ Connected to MongoDB Atlas');
        app.listen(PORT, () => {
            console.log(`🚀 Server running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error('\n❌ MongoDB connection failed!');
        console.error('Error:', err.message);
        if (err.message.includes('ETIMEDOUT') || err.message.includes('querySrv')) {
            console.error('\n⚠️  DNS/Network issue detected. Please try:');
            console.error('  1. Go to cloud.mongodb.com → Security → Network Access');
            console.error('  2. Add IP: 0.0.0.0/0 (Allow all)');
            console.error('  3. Try changing DNS to 8.8.8.8 (Google DNS) in your network settings');
            console.error('  4. If on a VPN or firewall, try disabling it temporarily');
        }
        process.exit(1);
    });
