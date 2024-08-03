//import usermodel
const users = require('../Models/userSchema')
const jwt = require('jsonwebtoken')

//register
exports.register =async (req,res)=>{
    console.log("inside register function");
    const {username,email,password} = req.body
    console.log(`Username: ${username}, Email: ${email}, Password: ${password}`);
  
    
try{
    //chek already existing user --findOne()
const existingUser = await users.findOne({email})
if(existingUser){
    
    res.status(406).json("User already exists..Please login!!")
}else{
    //register user
    const newUser = new users({
        username,email,password,projects:"",task:""
    })
    await newUser.save()
     res.status(200).json(newUser)
}

   
}catch(err){
    res.status(401).json(`Transation failed: ${err}`)
}
     


}

//login
exports.login = async (req,res)=>{
    console.log("inside login function");
    const {email,password} = req.body
    try{
        const existingUser = await users.findOne({email,password})
        if(existingUser){
            //generate token
            const token = jwt.sign({userId:existingUser._id},"superSecretKey123")
            res.status(200).json({
                existingUser,
                role:"user",
                token
            })
        }else{
            res.status(404).json("Incorrect email / password")
        }
    }catch(err){
        res.status(401).json(`Error!!! Transation failed: ${err}`)
    }

}