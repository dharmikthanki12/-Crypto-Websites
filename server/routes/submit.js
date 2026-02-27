const express = require('express');
const router = express.Router();
const Submission = require('../models/Submission');

// POST /api/submit
router.post('/', async (req, res) => {
    try {
        const {
            websiteName,
            websiteUrl,
            officialEmail,
            category,
            description,
            role,
            isOfficialSubmission,
            agreedToTerms,
            acknowledgesVerification
        } = req.body;

        // Basic validation
        if (!websiteName || !websiteUrl || !officialEmail || !category || !description || !role) {
            return res.status(400).json({ success: false, message: 'All fields are required.' });
        }
        if (!isOfficialSubmission || !agreedToTerms || !acknowledgesVerification) {
            return res.status(400).json({ success: false, message: 'All confirmations must be checked.' });
        }

        const submission = new Submission({
            websiteName,
            websiteUrl,
            officialEmail,
            category,
            description,
            role,
            isOfficialSubmission,
            agreedToTerms,
            acknowledgesVerification
        });

        await submission.save();

        res.status(201).json({
            success: true,
            message: 'Website submitted successfully! It will be reviewed within 3-5 business days.',
            submissionId: submission._id
        });

    } catch (error) {
        console.error('Submission error:', error);
        res.status(500).json({ success: false, message: 'Server error. Please try again.' });
    }
});

// GET /api/submit - fetch all submissions (admin use)
router.get('/', async (req, res) => {
    try {
        const submissions = await Submission.find().sort({ submittedAt: -1 });
        res.json({ success: true, count: submissions.length, data: submissions });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error.' });
    }
});

module.exports = router;
