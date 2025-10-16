import Investment from '../schemas/investment.schema.js';

/**
 * @description Create a new investment record
 * @route POST /api/investments
 * @access Public (or Protected, depending on auth implementation)
 */
export const createInvestment = async (req, res, next) => {
  try {
    const investmentData = req.body;
    const newInvestment = new Investment(investmentData);
    const savedInvestment = await newInvestment.save();
    res.status(201).json(savedInvestment);
    console.log("Investment has been created")
  } catch (error) {
    // Pass the error to the next middleware (e.g., error handler)
    next(error);
  }
};


export const getAllInvestments = async (req, res, next) => {
  try {
    const investments = await Investment.find(); // Fetch all investments
    res.status(200).json(investments);
    console.log("All Investment ");
    
  } catch (error) {
    next(error);
  }
};

export const getInvestments = async (req, res, next) => {
  try {
    const { user_id } = req.query; // Get user_id from query parameters
    let filter = {};

    if (user_id) {
      filter.user_id = user_id; // filter by user_id if provided
    }

    const investments = await Investment.find(filter);
    res.status(200).json(investments);
    console.log(`${user_id} Investment Data has been fetched`);
    
  } catch (error) {
    next(error);
  }
};