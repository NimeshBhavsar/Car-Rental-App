const express =require("express");
const router = express.Router();
const {create_booking,getbooking,getSingleUser}=require('../controller/booking_cont');
router.post('/',create_booking);
router.get('/',getbooking);
router.get('/:id',getSingleUser);
module.exports = router;
