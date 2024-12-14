import { emailRegex } from "@/lib/utils";
import { Document, model, models, Schema } from "mongoose";

// Define the interface for the Contact
export interface IContact extends Document {
  name: string;
  email: string;
  message: string;
}

// Create the Mongoose schema
const ContactSchema = new Schema<IContact>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: [50, "Name cannot be more than 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [emailRegex, "Please fill a valid email address"],
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
      maxlength: [500, "Message cannot be more than 500 characters"],
    },
  },
  {
    timestamps: true,
  }
);

// Create and export the model
export default models.Contact || model<IContact>("Contact", ContactSchema);
