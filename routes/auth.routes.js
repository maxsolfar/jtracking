import { Router } from "express";
import authControllers from "../controllers/auth.controllers.js";

const authRouter = Router();

authRouter.post("/register", authControllers.register);
authRouter.post("/login", authControllers.login);
authRouter.post("/updateUser", authControllers.updateUser);

export default authRouter;