import app from "./app.js";

//Database Connection
import connectDB from "./db/connect.js";
//Port
const port = process.env.PORT || 5000;

const start = async() =>{
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port,()=>{
      console.log(`Server is listening PORT: ${port}`);
    });
  } catch (error) {
    console.log(`No connection with DB ${error}`);
  }
};

start();