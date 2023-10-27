const express =require("express");
 const router = express.Router();
const bookingDetails = require("../model/NewBookingSchema");
require("dotenv").config();


router.post('./bookNow',async function(req,res){
    try{
        let data = new bookingDetails({...req.body});
        let createData = await data.save();
        res.status(201).send(createData)
       }catch(err){
           res.status(400).json({message:err.message})
       }
   })
   router.get("/myBookings/:id" , async(req,res)=>{
    try {
       const readData = await bookingDetails.find();
       res.send(readData)
    } catch (error) {
       res.status(400).json({message:error.message})
    }
   })


     
    
    

