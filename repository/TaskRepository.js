import TaskModel from '../model/TaskModel.js';
import fs from 'fs/promises';
const DB_PATH = './db.json';


class TaskRepository {
    static async findAll() {
        const fileContent = await fs.readFile(DB_PATH, 'utf-8');
        const json = JSON.parse(fileContent);
        const tasks = json.tasks.map(task => new TaskModel(task));
        return tasks;
    }

    static async create(taskData) {
        const fileContent = await fs.readFile(DB_PATH, 'utf-8');
        const json = JSON.parse(fileContent);

        const newTask = new TaskModel(taskData);
        json.tasks.push(newTask);
        await fs.writeFile(DB_PATH, JSON.stringify(json, null, 2), 'utf-8');
        return newTask;
    }
}

export default TaskRepository;