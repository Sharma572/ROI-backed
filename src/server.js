import dotenv from "dotenv";
import mongoose from 'mongoose';
dotenv.config();
import app from "./app.js";

const PORT = process.env.PORT || 5000;
const MONGODB_URI = "mongodb+srv://raunak:4IaADBlEHxfCmu4Y@cluster0.fln5dtu.mongodb.net/"
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      // useNewUrlParser: true, // These options are no longer necessary in Mongoose 6+
      // useUnifiedTopology: true,
    });
    console.log('MongoDB Connected...');
  } catch (error) {
    console.error('MongoDB Connection Error:', error);
    process.exit(1); // Exit process with failure
  }
};

connectDB(); // Connect to MongoDB

const server = app.listen(PORT, () => {
  console.log(`Calculator API running on http://localhost:${PORT}`);
});

// Handle Unhandled Rejections
process.on('unhandledRejection', (err, promise) => {
  console.error(`Unhandled Rejection: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});

export default server;
