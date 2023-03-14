// connecting database mongodb to application shoes-house
import mongoose from "mongoose";
import morgan from "morgan";
import Colors from "colors";

const connectDB = async()=>{
try{
     const conn = await mongoose.connect(process.env.MONGO_URL)
     console.log(`connected to mongodb database ${conn.connection.host}`)
}catch(error){
  console.log(`Error in mongodb ${error}`.bgRed.white)
}
};
export default connectDB;