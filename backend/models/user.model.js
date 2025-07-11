const mongoose  = require('mongoose')


const userschema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,'please enter your username']
    },
    email:{
        type:String,
        required:[true,'please enter your email']
    },
    password:{
        type:String,
        required:[true,'please enter your password']
    },
    createdAt:{
        type:Date,
        default:new Date(),
    }
},{timestamps:true})

module.exports  = mongoose.model('User',userschema)

