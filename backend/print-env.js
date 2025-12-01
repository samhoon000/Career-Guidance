import dotenv from "dotenv";
dotenv.config();

console.log("Loaded MONGO_URI:", process.env.MONGO_URI || "<MISSING>");
