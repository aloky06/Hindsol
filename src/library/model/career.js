import mongoose from "mongoose";

const careerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a unique username."],
  },
  email: {
    type: String,
    required: [true, "Please provide a email."],
    unique: true,
  },
  address: {
    type: String,
    required: [true, "Please provide Your Address."],
  },
  phone: {
    type: Number,
    required: [true, "Please provide a Phone  Number."],
    unique: true,
  },
  pincode: {
    type: Number,
    required: [true, "Please provide a pincode."],
  },
  remark: {
    type: String,
    required: [true, "Please Provide your Remark."],
  },
  resume: {
    type: String,
    required: [true, "Please Upload Your Resume."],
  },
});

export const CareerData =
  mongoose.models.careerSchema || mongoose.model("careerData", careerSchema);
