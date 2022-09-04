const errorHandlerMiddleware = (err,req,res,next) => {
  res.status(500).json({msg:"There was an Error"});
};

export default errorHandlerMiddleware;