const authControllers = {
  register: async (req, res, next) => {
    res.send("Register User");
  },
  login: async (req, res, next) => {
    res.send("Login User");
  },
  updateUser: async (req, res, next) => {
    res.send("Update User");
  }
};

export default authControllers;