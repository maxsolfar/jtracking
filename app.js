import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();

//middlewares
import notFoundMiddleware from "./middlewares/notFound.js";
import errorHandlerMiddleware from "./middlewares/errorHandler.js";
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

//Routes
import routes from "./routes/index.routes.js";
app.use('/api/v1', routes);

export default app;

