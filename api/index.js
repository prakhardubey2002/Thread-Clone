const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const crypto=require('crypto');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;
const cors=require('cors');
app.use(cors());
app.use(bodyParser.urlencoded({
    extended:false
}))
app.use(bodyParser.json());
const jwt = require("jsonwebtoken");
mongoose.connect("mongodb+srv://Thread:Thread@cluster0.b61s0jk.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("Connected to Mongodb")
}).catch((err)=>{
    console.log(`Error Connecting to Mongodb : ${err}`)
})
app.listen(port,()=>{
    console.log(`Server conneted and running on port : ${port}`)
})