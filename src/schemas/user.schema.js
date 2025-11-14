
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    email_verified: {
      type: Boolean,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    company_name:{
      type:String
    },
    mobile_number:{
      type:Number,
      // require:true
    },
    profile_pic:{
     type: String,
    },
     credit: {
      type: Number,
      default: 100,
      min: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
