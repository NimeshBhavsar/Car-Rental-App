const mongoose = require("mongoose")

const carSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    type:{
        type:String,
        require:true
    },
    model:{
        type:String,
        require:true
    },
    milage:{
        type:String,
        require:true
    },
    image:{
        type:String,
    },
    avalableFrom:{
       type:String
    },
    availableTill:{
        type:String
    },
    perKm:{
        type:String
    },
    description:{
        type:String
    },
    carDetails:{
        type:String
    },
    Details:{
        type:String
    },
   AdminId:{
        type:String
    }
})

const carDetails = new mongoose.model("cardata" , carSchema)

module.exports=carDetails