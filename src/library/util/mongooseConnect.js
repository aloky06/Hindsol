import mongoose from "mongoose";
import {connectionSrc} from "./db";

export default async function connectToMongoDB() {
  try {
   await mongoose.connect(connectionSrc, {
      useNewUrlParser: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
}


