const expressAsyncHandler = require('express-async-handler');
const User = require('./../model/UserSchema');
const validateMongodbID = require('./../ValidateID');
const generateToken = require('./../GernerateToken')
require("dotenv").config();
const SECRATE_KEY = process.env.SECRATE_KEY;
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const userRegisterCtrl = expressAsyncHandler(async (req, res) => {
    try {
        let { password, email } = req.body;
        let hashedPassword = await bcrypt.hash(password, 10);

        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ status: "Failed", field: "email", message: "Email already exist!!" })
        let newUser = await new User({
            ...req.body,
            password: hashedPassword
        });
        newUser = await newUser.save();
        res.status(201).json({ status: "Success", user: newUser });
    } catch (err) {
        res.status(400).json({ status: "Failed", message: err.message });
    }

})

const loginUserCtrl = expressAsyncHandler(async (req, res) => {
    try{
        let user = await User.findOne({email:req.body.email})//
        if(user){
            let matchPass = await bcrypt.compare(req.body.password, user.password)//true
            if(matchPass){
              const token = await jwt.sign({_id:user._id}, SECRATE_KEY);
              res.status(200).send({status:"Successfully login" , token:token , name:user.Name , userId:user._id})
            }else{
                res.status(401).send({status:"fail",massage:"User Details Not Match"})
            }
        }else{
            res.status(401).send({status:"fail",massage:"User Details Not Match"})
        }
    
    }catch(err){
        res.status(400).send(err.message);
    }
});


module.exports = {userRegisterCtrl,loginUserCtrl};