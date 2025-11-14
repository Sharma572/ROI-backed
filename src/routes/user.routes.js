import express from 'express';
import { deductUserCredit, getUserByID, getUserCredit, registerUser } from '../controllers/user.controller.js';

const router = express.Router();

/**
 * @route   POST /api/investments
 * @desc    Create a new investment record
 * @access  Public (or Protected, depending on auth implementation)
 */
router.post('/register-user', registerUser);
router.post('/deduct',deductUserCredit)
router.get("/getuser/:user_id", getUserByID);
router.get("/credit/:user_id", getUserCredit);
export default router;
