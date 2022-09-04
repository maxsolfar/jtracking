import { Router } from "express";
import authRouter from "./auth.routes.js";
import jobsRouter from "./jobs.routes.js";

const router = Router();

router.use("/auth", authRouter);
router.use("/jobs", jobsRouter);

export default router;