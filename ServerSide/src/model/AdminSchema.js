const mongoose = require('mongoose');
const bcrypt = require('bcrypt');  // for hashing password

const AdminSchema =new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true, 'you have to register email']
    },
    password: {
        type: String,
        required: [true, 'you have to register password']
    },
    contact:{
        type:Number
    },
    isAccountVerified: {
        type: Boolean,
        default: false
    },
    accountVerificationToken : String,
    accountVerificationExpires : Date,
    accountVerificationTokenExpires : Date,
    passwordChangedAt: Date,
    passwordRestToken: String,
    passwordResetExpires: Date,
},
{
    toJSON:{
        virtuals: true
    },
    toObject:{
        virtuals: true
    },
    timestamps: true
}
);



const Admin = mongoose.model('Admin', AdminSchema);

module.exports =  Admin;
