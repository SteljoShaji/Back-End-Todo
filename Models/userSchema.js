const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required: [true, 'User name Required']
    },
    email: {
        type: String,
        required: [true, 'Email required'],
        unique:true,
        validator(value){
        if(!validator.isEmail(value)){
            throw new Error("Invalid Email")
       }
       
    }},
    password:{
        type:String,
        required:[true, 'Password required']
    },
    projects:{
        type:String
    },
    task:{
        type:String
    },
    taskstatus:{
        type:Boolean,
        default:false
    }
   })

    const users = mongoose.model('users',userSchema)
     module.exports = users