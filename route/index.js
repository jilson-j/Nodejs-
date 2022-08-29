var express=require('express')
var route=express.Router();
var controller=require('../controller/index')

route.post('/create-todo',controller.create_todo)
route.post('/list-todo',controller.List_todo)
route.post('/edit-todo',controller.Edit_todo)
route.post('/update-todo',controller.Update_todo)
route.post('/delete-todo',controller.Delete_todo)




module.exports=route