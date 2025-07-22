import express from 'express';
import cors from "cors";
import TaskRouter from './routes/TaskRouter.js';
const app = express();
app.use(cors());
app.use(express.json());
app.use('/tasks', TaskRouter)


export default app;