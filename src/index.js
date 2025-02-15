// require("dotenv").config();

import dotenv from "dotenv";


import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
});

connectDB().
then(() =>{
    app.listen(process.env.PORT ||4000,()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    })

})
.catch((err)=>{
   console.log("MongoDB connection error: ", err);
});













/*
import express from "express";
const app = express();
(async ()=>{
    try{
      await  mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}` )
      app.on("error",(error)=>{
        console.log("ERROR: ", error);
        throw error;
      })
        app.listen(process.env.PORT,()=>{
            console.log(`Server is running on port ${process.env.PORT}`)
        })
    }

    catch(error){
        console.error("ERROR: ", error)
        throw error
    }
})()
    */