
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


// updateTodoStatus
exports.updateTodoStatus = async (req, res) => {
  const { id } = req.params;
  const { todoStatus } = req.body;
  try {
    const updatedTodo = await todos.findByIdAndUpdate(
      { _id: id },
      { todoStatus },
      { new: true }
    );
    res.status(200).json(updatedTodo);
  } catch (err) {
    res.status(401).json(`Error! Transaction failed: ${err}`);
  }
};



//edit todo
exports.editTodo = async (req,res)=>{
  const userId = req.payload
  const { description, todoStatus, createdDate } = req.body
  const {id} = req.params
  try{
    const updateTodo = await todos.findByIdAndUpdate({_id:id},{
      description,createdDate,todoStatus,userId
    },{new:true})
  await updateTodo.save()
  res.status(200).json(updateTodo)
  }catch(err){
    res.status(401).json(`Error! Transaction failed: ${err}`)
  }

}

//deleteTodo
exports.deleteTodo = async (req,res)=>{
  const {id} = req.params
  try{
    const removeTodo = await todos.findByIdAndDelete({_id:id})
    res.status(200).json(removeTodo)
  }catch(err){
    res.status(401).json(`Error!!!Transation failed: ${err}`)
  }
}

