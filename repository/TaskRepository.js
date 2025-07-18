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
    static async findById(id) {
        const fileContent = await fs.readFile(DB_PATH, 'utf-8');
        const json = JSON.parse(fileContent);
        const task = json.tasks.find(t => t.id === id);
        if (!task) return null;
        return new TaskModel(task);
    }

    static async create(taskData) {
        const fileContent = await fs.readFile(DB_PATH, 'utf-8');
        const json = JSON.parse(fileContent);

        const newTask = new TaskModel(taskData);
        json.tasks.push(newTask);
        await fs.writeFile(DB_PATH, JSON.stringify(json, null, 2), 'utf-8');
        return newTask;
    }

    static async update(id, updatedData) {
        const fileContent = await fs.readFile(DB_PATH, 'utf-8');
        const json = JSON.parse(fileContent);
        const index = json.tasks.findIndex(t => t.id === id);
        if (index === -1) return null;

        json.tasks[index] = { ...json.tasks[index], ...updatedData };

        await fs.writeFile(DB_PATH, JSON.stringify(json, null, 2), 'utf-8');
        return new TaskModel(json.tasks[index]);
    }

    static async delete(id) {
        const fileContent = await fs.readFile(DB_PATH, 'utf-8');
        const json = JSON.parse(fileContent);
        const index = json.tasks.findIndex(t => t.id === id);
        if (index === -1) return false;

        json.tasks.splice(index, 1);
        await fs.writeFile(DB_PATH, JSON.stringify(json, null, 2), 'utf-8');
        return true;
    }

}

export default TaskRepository;