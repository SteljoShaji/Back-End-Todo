const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({

    projectname:{
        type:String,
        required:true
    },
    createdDate: {
        type: Date,
        default: Date.now,
        
    },
    userId:{
        type:String,
        required:true
    }
   })

    const projects = mongoose.model('projects',projectSchema)
     module.exports = projects 