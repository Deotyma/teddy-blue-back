import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const MongoDBteddy = async () => {
    try {
      await mongoose.connect(process.env.MONGO);
      console.log("Connected to mongoDB.");
    } catch (error) {
      throw error;
    }
    
    mongoose.connection.on("disconnected", () => {
        console.log("mongoDB disconnected!");
      });
  };

export default MongoDBteddy