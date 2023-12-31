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
        if (res.status == 200) {
            console.log("Registration succesful");
        }
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
            pass: process.env.GOOGLE_PASSWORD
        }
    })
    //compose the email message
    const mailOptions = {
        from: "thread.com",
        to: email,
        subject: "Email Verification",
        text: `Please click on the following link to verify your email http://localhost:3000/verify/${verificationToken}`
    }
    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.log("error sending email", error);
    }
}
app.get("/verify/:token", async (req, res) => {
    try {
        const token = req.params.token;
        const user = await User.findOne({ verificationToken: token });
        if (!user) {
            return user.status(404).json({ message: "Invalid token" })
        }
        user.verified = true;
        user.verificationToken = undefined;
        await user.save();
        res.status(200).json({ message: "Email verified successfully" });

    }
    catch (error) {
        console.log("error getting token", error);
        res.status(500).json({ message: "Email verification failed" });
    }
});
const generateSecretKey = () => {
    const secretKey = crypto.randomBytes(32).toString("hex");
    return secretKey;
};
const secretKey = generateSecretKey();
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            res.status(404).json({ message: "Invalid Email" })
        }
        if (user.password !== password) {
            res.status(404).json({ message: "Invalid password" })
        }
        const token = jwt.sign({ userId: user._id }, secretKey);
        res.status(200).json({ token });
        console.log("Login Success")
    } catch (error) {
        res.status(500).json({ message: "Login Failed" })
    }
})

//endpoint to access all users except the logged in user
app.get("/user/:userid", (req, res) => {
    try {
        const loggedInUserId = req.params.userid;
        User.find({ _id: { $ne: loggedInUserId } })//$ne mean not equal to
            .then((users) => {
                res.status(200).json(users);
            })
            .catch((error) => {
                console.log("Error", error);
                res.status(500).json("error");
            })
    } catch (error) {
        res.status(500).json({ message: `Error : ${error}` })
    }
})

//endpoint to follow a user
app.post("/follow", async (req, res) => {
    const { currentUserId, selectedUserID } = req.body;

    try {
        await User.findByIdAndUpdate(selectedUserID, {//find user by that id
            $push: { followers: currentUserId },// push user id in followers array
        });
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "error in following a user" });
    }
});
//endpoint to unfollow a user
app.post("/users/unfollow",async (req,res)=>{
    const {loggedInUserId,targetUserId}=req.body;
    try{
        await User.findByIdAndUpdate(targetUserId,{
            $pull:{followers:loggedInUserId},//remove logged in userid from followers array of targetuserid 
        });
    }catch(error){
        res.status(500).json({ message: "error in unfollowing a user" });
    }
});