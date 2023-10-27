const mongoose = require("mongoose");
require("dotenv").config()

const url=process.env.DB_URL;
const db = process.env.DATABASE;
mongoose.connect(url+db)
.then(res=>console.log("connection is successfull"))
.catch(err=>console.log(err))