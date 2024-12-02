import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectionToDatabase = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database is connected");
    } catch(error) {
        console.error("Database connection failed: ", error);
    }
}

export default connectionToDatabase;