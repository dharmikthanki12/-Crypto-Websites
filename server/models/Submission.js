const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
    websiteName: {
        type: String,
        required: true,
        trim: true
    },
    websiteUrl: {
        type: String,
        required: true,
        trim: true
    },
    officialEmail: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    isOfficialSubmission: {
        type: Boolean,
        required: true
    },
    agreedToTerms: {
        type: Boolean,
        required: true
    },
    acknowledgesVerification: {
        type: Boolean,
        required: true
    },
    submittedAt: {
        type: Date,
        default: Date.now
    }
}, { collection: 'submissions' });

module.exports = mongoose.models.Submission || mongoose.model('Submission', submissionSchema);
