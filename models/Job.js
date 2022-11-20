import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const JobSchema = new Schema(
  {
    company: {
      type: String,
      trim: true,
      required: [true, 'Please provide company name'],
      maxlength: 80,
    },
    position: {
      type: String,
      trim: true,
      required: [true, 'Please provide position'],
      maxlength: 120,
    },
    description: {
      type: String,
      trim: true,
      maxlength: 700,
    },
    status: {
      type: String,
      trim: true,
      enum: ['Interview', 'Declined', 'Pending'],
      default: 'Pending',
    },
    jobType: {
      type: String,
      trim: true,
      enum: ['Full-time', 'Part-time', 'Remote', 'Internship', 'Hybrid'],
      default: 'Full-time',
    },
    jobLocation: {
      type: String,
      trim: true,
      default: 'My city',
      required: true,
    },
    postUrl: {
      type: String,
      trim: true,
      default: '',
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user'],
    },
    
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Job = model('Job', JobSchema);