import { Job } from "../models/Job.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";

const jobsControllers = {
  getAllJobs: async (req, res, next) => {
    res.send("All Jobs");
  },
  createJob: async (req, res, next) => {
    const { position, company } = req.body;

    if(!position || !company){
      throw new BadRequestError("Please Provide All Values");
    }
    req.body.createdBy = req.user.UserId;

    const job = await Job.create(req.body);
    res.status(StatusCodes.CREATED).json({ job: job });
  },
  updateJob: async (req, res, next) => {
    res.send("Update Job");
  },
  deleteJob: async (req, res, next) => {
    res.send("Delete Job");
  },
  showStats: async (req, res, next) => {
    res.send("Show Stats");
  }
};

export default jobsControllers;