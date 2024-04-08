import express from 'express';
import {config} from 'dotenv';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';

const app = express();
config({path: './config/config.env'});

app.use(cors({
    origin : [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
    methods: ["GET", "POST", "PUT","DELETE"],
    credentials: true,
}))

//! Middlewares 
app.use(cookieParser()); //# get cookies
app.use(express.json()); //# converts json to string
app.use(express.urlencoded({extended:true})); //# for example a string and date format data can be recognized
app.use(fileUpload({
    
}))

export default app;