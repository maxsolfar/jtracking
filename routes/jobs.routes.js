import { Router } from "express";
import jobsControllers from "../controllers/jobs.controllers.js";

const jobsRouter = Router();

jobsRouter.get("/", jobsControllers.getAllJobs);
jobsRouter.post("/", jobsControllers.createJob);
jobsRouter.patch("/:id", jobsControllers.updateJob);
jobsRouter.delete("/:id", jobsControllers.deleteJob);
jobsRouter.get("/stats", jobsControllers.showStats);

export default jobsRouter;