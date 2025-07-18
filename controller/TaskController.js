import TaskRepository from '../repository/TaskRepository.js';
export default class TaskController {

    static async getAllTasks(req, res) {
        try {
            const tasks = await TaskRepository.findAll();
            res.status(200).json(tasks);
        } catch (err) {
            console.error(err)
            res.status(500).json({ message: 'Error fetching tasks' })
        }
    }

    static async getTaskById(req, res) {
        try {
            const { id } = req.params;
            const task = await TaskRepository.findById(id);

            if (!task) {
                return res.status(404).json({ message: 'Task not found' });
            }

            res.status(200).json(task);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    static async createTask(req, res) {
        try {
            const taskData = req.body;
            const newTask = await TaskRepository.create(taskData);
            res.status(201).json(newTask)
        } catch (err) {
            console.error(err);
            res.status(400).json({ message: err.message })
        }
    }
    static async editTask(req, res) {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const updatedTask = await TaskRepository.update(id, updatedData);

        if (!updatedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.status(200).json(updatedTask);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

    static async deleteTask(req, res) {
        try {
            const { id } = req.params
            const success = await TaskRepository.delete(id);
            if (!success) {
                return res.status(404).json({ message: 'Task not found' });
            }
            res.status(200).json({ message: 'Task deleted successfully' });

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' })
        }

    }
}