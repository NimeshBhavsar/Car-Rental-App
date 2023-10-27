const express =require("express");
const Router = express.Router();
const {AdminRegisterCtrl, AdminLoginCtrl} = require("./../Controllers/AdminController")
const cors = require("cors");

Router
  .route('/signup')
  .post(AdminRegisterCtrl)

Router
   .route('/login')
   .post(cors(),AdminLoginCtrl)




module.exports = Router;