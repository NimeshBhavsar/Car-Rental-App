const express =require("express");
const Router = express.Router();
const {userRegisterCtrl, loginUserCtrl} = require("./../Controllers/UserController")
const cors = require("cors");

Router
  .route('/signup')
  .post(userRegisterCtrl)

Router
   .route('/login')
   .post(cors(), loginUserCtrl)

// Router
//   .route('/')
//   .get()

// Router
//   .route('/:id')
//   .get()
//   .delete()



module.exports = Router;
