const mongoose = require('mongoose')
const connectionString = process.env.DATABASE
mongoose.connect(connectionString).then(()=>{
    console.log("MongoDb Atlas connected successfully with server");
}).catch(err=>{
    console.log("MongoDB Connection failed:"+err);
})

