import { Job } from '../models/Job.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';
import checkPermissions from '../utils/checkPermissions.js';
import mongoose from 'mongoose';
import moment from 'moment';

const jobsControllers = {
  getAllJobs: async (req, res, next) => {
    const { search, status, jobType, sort } = req.query;
    console.log(search, status, jobType, sort);
    const queryObject = { createdBy: req.user.userId };
    if (search) {
      queryObject.company = { $regex: search, $options: 'i' };
    }
    if (status && status !== 'All') {
      queryObject.status = status;
    }
    if (jobType && jobType !== 'All') {
      queryObject.jobType = jobType;
    }

    let result = Job.find(queryObject);

    if (sort === 'Lastest') {
      result = result.sort('-createdAt');
    }
    if (sort === 'Oldest') {
      result = result.sort('createdAt');
    }
    if (sort === 'A-Z') {
      result = result.sort('company');
    }
    if (sort === 'Z-A') {
      result = result.sort('-company');
    }
    // setup pagination
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 6;
    const skip = (page - 1) * limit;

    result = result.skip(skip).limit(limit);

    const jobs = await result;
    const totalJobs = await Job.countDocuments(queryObject);
    const numOfPages = Math.ceil(totalJobs / limit);
    res.status(StatusCodes.OK).json({ jobs, totalJobs, numOfPages });
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
      pending: stats.Pending || 0,
      interview: stats.Interview || 0,
      declined: stats.Declined || 0,
    };

    console.log(stats.Pending);

    let monthlyApplications = await Job.aggregate([
      { $match: { createdBy: mongoose.Types.ObjectId(req.user.userId) } },
      {
        $group: {
          _id: {
            year: {
              $year: '$createdAt',
            },
            month: {
              $month: '$createdAt',
            },
          },
          count: { $sum: 1 },
        },
      },
      { $sort: { '_id.year': -1, '_id.month': -1 } },
      { $limit: 6 },
    ]);

    monthlyApplications = monthlyApplications
      .map((item) => {
        const {
          _id: { year, month },
          count,
        } = item;
        // accepts 0-11
        const date = moment()
          .month(month - 1)
          .year(year)
          .format('MMM Y');
        return { date, count };
      })
      .reverse();

    let lastApplications = await Job.aggregate([
      { $match: { createdBy: mongoose.Types.ObjectId(req.user.userId) } },
      { $sort: { _id: 1 } },
      { $limit: 5 },
    ]);
    // console.log(lastApplications);
    res
      .status(StatusCodes.OK)
      .json({ defaultStats, monthlyApplications, lastApplications });
  },
};

export default jobsControllers;
