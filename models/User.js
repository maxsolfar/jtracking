import mongoose from "mongoose";
import validator from "validator";
const { Schema, model } = mongoose;

const userSchema = new Schema({
    email:{
      type: String,
      required: [true,"Please provide email"],
      trim: true,
      lowercase: true,
      validate:{
        validator: validator.isEmail,
        message:"Please provide a valid email",
      },
      unique: true,
    },
    password:{
      type: String,
      required: [true,"Please provide password"],
      required: true,
    },
    name:{
      type: String,
      required: [true,"Please provide name"],
      trim: true,
      minlength: 5,
      maxlength: 30
    },
    lastName:{
      type: String,
      trim: true,
      maxlength: 30
    },
    location:{
      type: String,
      trim: true,
      maxlength: 30
    }
},{
  timestamps: true,
  versionKey: false
});

export const User = model("User", userSchema);