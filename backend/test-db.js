const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

console.log('URI:', process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected!'))
    .catch(err => console.error('Error:', err.message));
