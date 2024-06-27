const express =require ('express');
const router = express.Router();
const todoController =require('../controllers/todo')

router.get('/',todoController.getAllTodos)

router.post('/',todoController.createTodo)

router.patch('/:id',todoController.UpdateTodo)

router.delete('/:id',todoController.deleteTodo)

module.exports=router;