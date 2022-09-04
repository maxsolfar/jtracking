const jobsControllers = {
  getAllJobs: async (req, res, next) => {
    res.send("All Jobs");
  },
  createJob: async (req, res, next) => {
    res.send("Create Job");
  },
  updateJob: async (req, res, next) => {
    res.send("Update Job");
  },
  deleteJob: async (req, res, next) => {
    res.send("Delete Job");
  },
  showStats: async (req, res, next) => {
    res.send("Show Stats");
  }
};

export default jobsControllers;