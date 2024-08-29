const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const invoiceRoute =require("./routes/invoiceRoute");
const clientRoute= require("./routes/clientRoute");
const errorHandler = require("./middleWare/errorMiddleware");
const cookieParser = require("cookie-parser");

const app=express();
app.use(cors({
    credentials:true,
    origin:process.env.FRONTEND_URL,
}));

//Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json());

//routes middleware

app.use("/api/users",userRoute)
app.use("/api/user/products",productRoute)
app.use("/api/user/invoices",invoiceRoute)
app.use("/api/user/clients",clientRoute)
app.use("/api/user/invoices",invoiceRoute)


//Error middleware
app.use(errorHandler);


//Connect to DB and start server
const PORT= process.env.PORT || 5000;

mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>{
    
        app.listen(PORT,()=>{
        console.log("server started on port " + PORT);
        })
    })
    .catch((err)=>console.log(err));
