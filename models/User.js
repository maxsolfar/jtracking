import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const { Schema, model } = mongoose;

const UserSchema = new Schema({
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
      select: false
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
      maxlength: 30,
      default: ""
    },
    location:{
      type: String,
      trim: true,
      maxlength: 30,
      default: ""
    }
},{
  timestamps: true,
  versionKey: false
});

UserSchema.pre("save", async function() {
  if(!this.isModified("password")) return;
  const saltPassword = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, saltPassword);
});

UserSchema.methods.createJWT = function() {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME });
};

UserSchema.methods.comparePassword = async function (entryPassword) {
  const isMatch = await bcrypt.compare(entryPassword, this.password);
  return isMatch;
}

export const User = model("User", UserSchema);