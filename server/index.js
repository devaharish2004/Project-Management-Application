import express from "express";
import dotenv from "dotenv";
import connectionToDatabase from "./config/db.js";

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

//connect to db
connectionToDatabase();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})