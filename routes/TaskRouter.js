import express from 'express';
const TaskRouter=express.Router();

TaskRouter.get('/',(req,res)=>res.send('TaskRouter'))

export default TaskRouter;