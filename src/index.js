import dotenv from "dotenv"
import mongoose, { connect } from "mongoose";
import { DB_NAME } from "./constant.js";
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})


connectDB()
.then(() =>{
    app.listen(process.env.PORT || 8000 , () => {
        comsole.log(`SERVER is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})










/*
import express from "express";
import dotenv from "dotenv";


dotenv.config(); 

const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    console.log("✅ MongoDB connected");

    app.on("error", (error) => {
      console.log("❌ Server Error:", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`🚀 App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("mongodb Connection Failed:", error);
    throw error;
  }
})();
*/
