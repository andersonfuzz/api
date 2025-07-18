import express from 'express';
import TaskRouter from './routes/TaskRouter.js';
const app = express();
app.use(express.json());
app.use('/api', TaskRouter)


export default app;