import mongoose from "mongoose";

// Define a subdocument schema for courses
const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const skilldevSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a unique username."],
    },
    email: {
      type: String,
      required: [true, "Please provide an email."],
      unique: true,
    },
    address: {
      type: String,
      required: [true, "Please provide your address."],
    },
    phone: {
      type: Number,
      required: [true, "Please provide a phone number."],
      unique: true,
    },
    pincode: {
      type: Number,
      required: [true, "Please provide a pincode."],
    },
    remark: {
      type: String,
      required: [true, "Please provide your remark."],
    },
    courses: [courseSchema],
    paymentstatus: {
      type: Boolean,
      default: false,
      required: [true, "Please provide your paymentstatus."],
    },
  },
  {
    timestamps: true, // This option adds createdAt and updatedAt fields
  }
);

export const SkilldevData =
  mongoose.models.skilldevData || mongoose.model("skilldevData", skilldevSchema);
