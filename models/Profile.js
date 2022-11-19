import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const ProfileSchema = new Schema(
  {
    avatar: {
      type: String,
      trim: true,
      default:
        'https://res.cloudinary.com/dr93y7mmk/image/upload/v1667536496/JTrackingImages/evwb3gwtox6rmcfyrmxb.png',
    },
    position: {
      type: String,
      trim: true,
      maxlength: 50,
    },
    skills: {
      type: Array[String],
      trim: true,
    },
    languages: {
      type: Array[String],
      trim: true,
    },
    summary: {
      type: String,
      trim: true,
      maxlength: 350,
    },
    phone: {
      type: String,
      trim: true,
      maxlength: 20,
    },
    linkedin: {
      type: String,
      trim: true,
      maxlength: 150,
    },
    github: {
      type: String,
      trim: true,
      maxlength: 150,
    },
    userId:{
      ref: "User",
      type: Schema.Types.ObjectId,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Profile = model('Profile', ProfileSchema);
