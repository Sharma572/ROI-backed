export const registerUser = async (req, res, next) => {
  try {
    const userData = req.body;
    const newUser = new Investment(userData);
    const saveUser = await newUser.save();
    res.status(201).json(saveUser);
    console.log("User has been created")
  } catch (error) {
    // Pass the error to the next middleware (e.g., error handler)
    next(error);
  }
};