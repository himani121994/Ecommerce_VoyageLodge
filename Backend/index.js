require('dotenv').config()
const express = require("express")
const app =  express();
const cors = require("cors")
const bodyparser = require("body-parser")


const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL)


app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());




app.listen(8000,()=>{
   console.log("app is running")
})