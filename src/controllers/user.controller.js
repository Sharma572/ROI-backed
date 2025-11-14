import User from "../schemas/user.schema.js"
export const registerUser = async (req, res, next) => {
  try {
    const { user_id } = req.body;
    const userData = req.body;
     let existingUser = await User.findOne({ user_id });
    console.log("User Data from",userData);
    
    if (existingUser) {
      return res.status(200).json({
        message: "User already exists",
        user: existingUser,
      });
    }
    const newUser = new User(userData);
    const saveUser = await newUser.save();
    res.status(201).json(saveUser);
    console.log("User has been created")
  } catch (error) {
    // Pass the error to the next middleware (e.g., error handler)
    next(error);
  }
};

export const getUserByID = async (req, res) => {
  try {
    const { user_id } = req.params;

    // Validate input
    if (!user_id) {
      return res.status(400).json({ message: "user_id is required" });
    }

    // Find user by user_id
    const user = await User.findOne({ user_id });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User fetched successfully",
      user,
    });
  } catch (error) {
    console.error("❌ Error fetching credit:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// User Credit Deduction
export const deductUserCredit = async (req, res) => {
  try {
    const { user_id, amount } = req.body;

    // Basic validation
    if (!user_id || !amount) {
      return res.status(400).json({ message: "user_id and amount are required" });
    }

    if (amount <= 0) {
      return res.status(400).json({ message: "Amount must be greater than 0" });
    }

    // Find user by user_id
    const user = await User.findOne({ user_id });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check credit balance
    if (user.credit < amount) {
      return res.status(400).json({
        message: "Insufficient credits",
        currentCredit: user.credit,
      });
    }

    // Deduct credit
    user.credit -= amount;
    await user.save();

    // Respond
    res.status(200).json({
      message: "Credits deducted successfully",
      remainingCredit: user.credit,
      user,
    });
  } catch (error) {
    console.error("❌ Error deducting credits:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getUserCredit = async (req, res) => {
  try {
    const { user_id } = req.params;

    // Validate input
    if (!user_id) {
      return res.status(400).json({ message: "user_id is required" });
    }

    // Find user by user_id
    const user = await User.findOne({ user_id });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Respond with credit info
    res.status(200).json({
      message: "User credit fetched successfully",
      credit: user.credit,
      user,
    });
  } catch (error) {
    console.error("❌ Error fetching credit:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};