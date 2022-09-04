import dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
const app = express();
app.use(express.json());
app.use(morgan('dev'));

//Routes
import routes from "./routes/index.routes.js";
app.use('/api/v1', routes);

//middlewares
import notFoundMiddleware from "./middlewares/notFound.js";
import errorHandlerMiddleware from "./middlewares/errorHandler.js";
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

export default app;

