import { Router } from "express";
import authControllers from "../controllers/auth.controllers.js";
import authenticateUser from "../middlewares/auth.js";

const authRouter = Router();

authRouter.post("/register", authControllers.register);
authRouter.post("/login", authControllers.login);
authRouter.patch("/update-user", authenticateUser, authControllers.updateUser);

export default authRouter;