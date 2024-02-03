import {Router} from "express"
import { addTodo,displayTodo } from "../controller/Todo.controller.js";

const router=Router();
router.post('/add-todo',addTodo)
router.get('/display-todo',displayTodo)
export default router;