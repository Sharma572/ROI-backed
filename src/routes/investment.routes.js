import express from 'express';
import { createInvestment, getAllInvestments, getInvestments } from '../controllers/investment.controller.js';
// import { validateInvestment } from '../middlewares/validate.js'; // Assuming validation middleware might be added later

const router = express.Router();

/**
 * @route   POST /api/investments
 * @desc    Create a new investment record
 * @access  Public (or Protected, depending on auth implementation)
 */
router.post('/createinvestment', createInvestment);
router.get('/getallinvestments', getAllInvestments);
router.get('/getinvestments', getInvestments);
export default router;
