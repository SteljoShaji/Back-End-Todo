const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
   
    description: {
        type: String,
        required: true
    },
    todoStatus: {
        type: Boolean,
        default: false,
        required:true
        
    },
    createdDate: {
        type: Date,
        default: Date.now,
        required:true
    },
    userId:{
        type: String,
        required:true
       
    }
})
const todos = mongoose.model('todos',todoSchema)
module.exports = todos