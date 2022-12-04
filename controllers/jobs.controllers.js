import { Job } from '../models/Job.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';
import checkPermissions from '../utils/checkPermissions.js';
import mongoose from 'mongoose';

const jobsControllers = {
  getAllJobs: async (req, res, next) => {
    const jobs = await Job.find({ createdBy: req.user.userId });
    res
      .status(StatusCodes.OK)
      .json({ jobs, totalJobs: jobs.length, numOfPages: 1 });
  },
  createJob: async (req, res, next) => {
    const { position, company } = req.body;

    if (!position || !company) {
      throw new BadRequestError('Please Provide All Values');
    }
    req.body.createdBy = req.user.userId;

    const job = await Job.create(req.body);
    res.status(StatusCodes.CREATED).json({ job: job });
  },
  updateJob: async (req, res, next) => {
    const { id: jobId } = req.params;
    const { company, position } = req.body;
    if (!company || !position) {
      throw new BadRequestError('Please Provide all Values');
    }
    const job = await Job.findOne({ _id: jobId });

    if (!job) {
      throw new NotFoundError(`No Job with id ${jobId}`);
    }
    // Check Auth
    checkPermissions(req.user, job.createdBy);
    // Update Job
    const updatedJob = await Job.findOneAndUpdate({ _id: jobId }, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(StatusCodes.OK).json({ updatedJob });
  },
  deleteJob: async (req, res, next) => {
    const { id: jobId } = req.params;
    const job = await Job.findOne({ _id: jobId });
    if (!job) {
      throw new CustomError.NotFoundError(`No Job with id: ${jobId}`);
    }
    checkPermissions(req.user, job.createdBy);

    await job.remove();
    res.status(StatusCodes.OK).json({ msg: 'Success! Job removed' });
  },
  showStats: async (req, res, next) => {
    let stats = await Job.aggregate([
      { $match: { createdBy: mongoose.Types.ObjectId(req.user.userId) } },
      { $group: { _id: '$status', count: { $sum: 1 } } },
    ]);

    stats = stats.reduce((acc, curr) => {
      const { _id: title, count } = curr;
      acc[title] = count;
      return acc;
    }, {});

    const defaultStats = {
      pending: stats.pending || 0,
      interview: stats.interview || 0,
      declined: stats.declined || 0,
    };

    let monthlyApplications = [];

    res.status(StatusCodes.OK).json({ defaultStats, monthlyApplications });
  },
};

export default jobsControllers;
