//load.env files
require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const router = require('./Routes/routes')
require('./DB/connection')

const app = express()


app.use(cors())
app.use(express.json())

app.use(router)

const PORT = 4000 || process.env.PORT

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

app.get('/',(req,res) => {
    res.send(`<h1>Server Started!!</h1>`)

})