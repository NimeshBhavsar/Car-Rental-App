const express =require("express");
const Router = express.Router();
const { getImages , getCars, PostCars, putCarData, deleteCarData,  GetDataByAdminId} =  require("../Controllers/CarController");
require("dotenv").config();
const multer = require("multer");
const {GridFsStorage} = require("multer-gridfs-storage");
const {GridFSBucket, MongoClient} = require("mongodb");
const { model } = require( "mongoose" );


// ****---------------We Use Multer for add Images----------------******//

const storage = new GridFsStorage({
    url:process.env.DB_URL+process.env.DATABASE,
    file:(req,file)=>{
        return{
            bucketName:process.env.CAR_IMAGES,
            fileName:`${Date.now()}_${file.originalname}`
        }
    }
})
const upload = multer({
    storage
})

const middleware= upload.single("image")

// *****************************Routes ****************************//

Router
.route('/:image')
.get(getImages)
 
Router
.route('/')
.get(getCars)
.post(middleware, PostCars )



Router
.route('/:id')
.put(middleware,putCarData)
.delete(deleteCarData)

Router
.route("/:id")
.get(GetDataByAdminId)

module.exports = Router;