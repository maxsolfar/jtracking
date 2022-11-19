import { User } from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnAuthenticatedError } from "../errors/index.js";

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
    const { email, password } = req.body;
    if(!email || !password){
      throw new BadRequestError("Please provide all values");
    }
    const user = await User.findOne({ email }).select("+password");
    if(!user){
      throw new UnAuthenticatedError("Invalid Credentials");
    }
    const isPasswordCorrect = await user.comparePassword(password);
    if(!isPasswordCorrect){
      throw new UnAuthenticatedError("Invalid Credentials");
    }
    const token = user.createJWT();
    user.password = undefined;
    res.status(StatusCodes.OK).json({user, token, location: user.location});
  },
  updateUser: async (req, res, next) => {
    const {email, name, lastName, location, image, position, phone, linkedin, github } = req.body;
    if(!email || !name || !lastName || !location || !image){
      throw new BadRequestError("Please provide all values");
    }
    const user = await User.findOne({_id: req.user.userId});
    user.email = email;
    user.name = name;
    user.lastName = lastName;
    user.location = location;
    //*
    user.position = position;
    user.phone = phone;
    user.linkedin = linkedin;
    user.github = github;
    user.image = image;

    await user.save();
    const newToken = user.createJWT();
    res.status(StatusCodes.OK).json({user,newToken, location: user.location});
  },
};

export default authControllers;
