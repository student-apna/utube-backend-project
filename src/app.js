import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));
// use method is used for middle ware
// data url se bhi aayega ,json mein bhi aayega

app.use(express.json({limit :"16kb"})); // json ko accept kar rhe hai
app.use(express.urlencoded({extended: true})); // form data ko accept kar rhe hai
app.use(express.static("public")); // public folder ko access karne ke liye
app.use(cookieParser()); // cookie ko access karne ke liye



export { app };