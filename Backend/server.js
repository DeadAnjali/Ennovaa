//This is a server-main entry point of the application
const express=require("express");
const app=express();
const dotenv=require("dotenv");
const {errorHandler,notFound}=require("./middlewares/error/errorHandler")
dotenv.config();

const dbConnect=require("./config/db");
const userRoute = require("./route/user/userRoute");
dbConnect();

const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend origin
    optionsSuccessStatus: 200 // Set to 200 to avoid issues with legacy browsers

app.use(express.json());//this is a middleware used to communicate between request and response
app.use("/api/users",userRoute);


app.use(notFound);
app.use(errorHandler);
const PORT=process.env.PORT||5000;
app.listen(PORT,console.log(`the port ${PORT}is running`));

