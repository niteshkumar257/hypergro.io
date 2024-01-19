import mongoose from "mongoose";
import { DB_Name } from "../Constants/constant.js";

const connectDb = async () => {
  try {
    
    const connectionInfo =await mongoose.connect(
      `mongodb+srv://niteshreddy257:W6LC8f24rKTJ3ynY@cluster0.codkbwj.mongodb.net/`
    );
     console.log(`Db connected ${connectionInfo.connection.host}`)
  } catch (err) {
    console.log(`Error in database connection , ${err}`);
    process.exit(1);
  }
};

export default connectDb;
