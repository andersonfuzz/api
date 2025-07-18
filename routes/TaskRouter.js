import express from 'express';
import TaskController from '../controller/TaskController.js'
const TaskRouter = express.Router();

TaskRouter.get('/', TaskController.getAllTasks)
TaskRouter.post('/', TaskController.createTask)
TaskRouter.get('/:id', TaskController.getTaskById);
TaskRouter.delete('/:id', TaskController.deleteTask)
TaskRouter.put('/:id', TaskController.editTask)

export default TaskRouter;