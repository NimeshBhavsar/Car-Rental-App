const mongoose = require('mongoose');
const bcrypt = require('bcrypt');  // for hashing password

const userSchema = new mongoose.Schema({
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

const User = mongoose.model('User', userSchema);

module.exports = User;

