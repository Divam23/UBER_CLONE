import { configDotenv } from "dotenv"
import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

configDotenv();

const connectDB = async()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\nMongoDB Connected!! DB HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MONGO DB Connection error", error)
        process.exit();
    }
}

export default connectDB