
const todos = require('../Models/todoSchema');

// Add todos
exports.addTodos = async (req, res) => {
  console.log("inside add todo function");

  const { description, todoStatus, createdDate, userId } = req.body;

  try {
    const newTodo = new todos({
      description,todoStatus,createdDate,userId,
    });
    await newTodo.save();
    res.status(200).json(newTodo);
  } catch (err) {
    res.status(401).json(`Error! Transaction failed: ${err}`);
  }
};

//get all user todos
exports.getAllUserTodos = async (req,res)=>{
  const userId = req.payload
  try{
    const userTodos = await todos.find({userId})
      res.status(200).json(userTodos)

  }catch(err)
{
  res.status(401).json(`Error! Transaction failed: ${err}`)
}}