import { User } from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/index.js";

const authControllers = {
  register: async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
      throw new BadRequestError("Please provide all values");

    const userAlreadyExist = await User.findOne({ email });
    if (userAlreadyExist) throw new BadRequestError("Email already in use");

    const newUser = await User.create({ name, email, password });
    const token = newUser.createJWT();
    res
      .status(StatusCodes.CREATED)
      .json({
        user: {
          name: newUser.name,
          lastName: newUser.lastName,
          location: newUser.location,
          email: newUser.email,
        },
        token,
        location: newUser.location,
      });
  },
  login: async (req, res, next) => {
    res.send("Login User");
  },
  updateUser: async (req, res, next) => {
    res.send("Update User");
  },
};

export default authControllers;
