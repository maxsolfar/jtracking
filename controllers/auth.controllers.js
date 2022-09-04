import { User } from "../models/User.js";

const authControllers = {
  register: async (req, res, next) => {
    const {name, email, password} = req.body;
    try {
      const newUser = await User.create({name, email, password});
      res.status(201).json({ newUser });
    } catch (error) {
      console.log(error);
    }
  },
  login: async (req, res, next) => {
    res.send("Login User");
  },
  updateUser: async (req, res, next) => {
    res.send("Update User");
  }
};

export default authControllers;