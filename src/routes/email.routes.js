import express from 'express';
import { sendEmail } from '../controllers/email.controller.js';

const router = express.Router();

/**
 * @route   POST /api/email/send
 * @desc    Send an email to a user
 * @access  Public (or Protected if you add auth)
 */
router.post('/send', sendEmail);

export default router;
