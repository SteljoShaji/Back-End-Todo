const projects = require('../Models/projectSchema')


//add project
exports.addProject = async (req,res)=>{
    console.log("Inside add project function");
    
    const { projectname, createdDate, userId} = req.body
 //   console.log(`${projectname}, ${task}, ${taskstatus}, ${userId}`);

 try{
    
   
        const newProject = new projects({
            projectname,createdDate,userId
        })
        await newProject.save()
        res.status(200).json(newProject)

  
 }catch(err){
    res.status(401).json(`Error!!! Transation failed: ${err}`)
 }
}
//get all user projects
exports.getAllUserProjects = async (req,res)=>{
    const userId = req.payload
    try{
      const userProjects = await projects.find({userId})
        res.status(200).json(userProjects)
  
    }catch(err)
  {
    res.status(401).json(`Error! Transaction failed: ${err}`)
  }}