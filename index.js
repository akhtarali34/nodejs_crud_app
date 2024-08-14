import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import rout from "./routes/userRoutes.js";


const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL;


mongoose.connect("mongodb://localhost:27017/crud").then(()=>{
    console.log("connected to the database");
    app.listen(PORT, ()=>{
        console.log(`server running on thr port ${PORT}`)
    })
}
   
).catch((error)=> console.log(error));

app.use("/api/user/", rout);

