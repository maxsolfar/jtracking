import { Router } from "express";
import authRouter from "./auth.routes.js";
import jobsRouter from "./jobs.routes.js";
import authenticateUser from "../middlewares/auth.js";

const router = Router();

router.use("/auth", authRouter);
router.use("/jobs", authenticateUser, jobsRouter);

export default router;