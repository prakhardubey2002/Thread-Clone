require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json());
const jwt = require("jsonwebtoken");
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to Mongodb")
}).catch((err) => {
    console.log(`Error Connecting to Mongodb : ${err}`)
})
app.listen(port, () => {
    console.log(`Server conneted and running on port : ${port}`)
})

const User = require("./models/user");
const Post = require("./models/post");

//Endpoints to register a user in backend
app.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUSer = await User.findOne({ email });
        if (existingUSer) {
            return res.status(400).json({ message: "Email already exist" })
        }
        //create a new user
        const newUSer = new User({ name, email, password });
        //generate and store the verification token
        newUSer.verificationToken = crypto.randomBytes(20).toString("hex");//give us 20 character hex string for verification purpose

        //save user to database
        await newUSer.save();
        //send verification email to user
        sendVerificationEmail(newUSer.email, newUSer.verificationToken);

        res.status(200).json({ message: "Registration succesful" })
    }
    catch (error) {
        console.log(`Error : ${error}`);
        res.status(500).json({ message: "error registering the user" })
    }
});
const sendVerificationEmail = async (email, verificationToken) => {
    //create a nodemailer transporter

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GOOGLE_EMAIL,
            password: process.env.GOOGLE_PASSWORD
        }
    })
    //compose the email message
    const mailOptions = {
        from: "thread.com",
        to: email,
        subject: "Email Verification",
        text: `Please click on the following link to verify your email http://localhost:3000/verify/${verificationToken}`
    }
    try{
        await transporter.sendMail(mailOptions);
    }catch(error){
        console.log("error sending email",error);
    }
}