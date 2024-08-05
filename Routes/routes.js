const express= require('express')

const userController =require('../Controllers/userController')
const projectController = require('../Controllers/projectController')
const todoController = require('../Controllers/todoController')
const jwtMiddleware = require('../Middleware/jwtMiddleware')

const router = new express.Router()


//routes for server app
//register
router.post('/user/register',userController.register)
//login
router.post('/user/login',userController.login)

//addProjects
router.post('/projects/add',jwtMiddleware,projectController.addProject)

//addTodos
router.post('/todos/add',jwtMiddleware,todoController.addTodos)

//getUserTodos
router.get('/user/all-todos',jwtMiddleware,todoController.getAllUserTodos)

//getUserprojects
router.get('/user/all-projects',jwtMiddleware,projectController.getAllUserProjects)

//editTodo
router.put('/todo/edit/:id',jwtMiddleware,todoController.editTodo)


//deleteTodo
router.delete('/todo/remove/:id',jwtMiddleware,todoController.deleteTodo)

//deleteProject
router.delete('/project/remove/:id',jwtMiddleware,projectController.deleteProject)

module.exports = router