import pool from '../db.js';
import TaskModel from '../model/TaskModel.js';

class TaskRepository {
    static async findAll() {
        const result = await pool.query('SELECT * FROM tasks');
        return result.rows.map(row => new TaskModel({
            id: row.id,
            name: row.name,
            description: row.description,
            status: row.status,
            priority: row.priority,
            createdAt: row.created_at,
            dueDate: row.due_date
        }));
    }

    static async findById(id) {
        const result = await pool.query('SELECT * FROM tasks WHERE id = $1', [id]);
        if (result.rows.length === 0) return null;

        const row = result.rows[0];
        return new TaskModel({
            id: row.id,
            name: row.name,
            description: row.description,
            status: row.status,
            priority: row.priority,
            createdAt: row.created_at,
            dueDate: row.due_date
        });
    }

    static async create(taskData) {
        const task = new TaskModel(taskData);

        const query = `
            INSERT INTO tasks (id, name, description, status, priority, created_at, due_date)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING *
        `;

        const values = [
            task.id,
            task.name,
            task.description,
            task.status,
            task.priority,
            task.createdAt,
            task.dueDate === 'indeterminate' ? null : task.dueDate
        ];

        const result = await pool.query(query, values);

        const row = result.rows[0];
        return new TaskModel({
            id: row.id,
            name: row.name,
            description: row.description,
            status: row.status,
            priority: row.priority,
            createdAt: row.created_at,
            dueDate: row.due_date
        });
    }

    static async update(id, updatedData) {
        const columns = [];
        const values = [];
        let index = 1;

        for (const [key, value] of Object.entries(updatedData)) {
            columns.push(`${key} = $${index}`);
            values.push(value);
            index++;
        }

        values.push(id);

        const query = `
            UPDATE tasks
            SET ${columns.join(', ')}
            WHERE id = $${index}
            RETURNING *
        `;

        const result = await pool.query(query, values);

        if (result.rows.length === 0) return null;

        const row = result.rows[0];
        return new TaskModel({
            id: row.id,
            name: row.name,
            description: row.description,
            status: row.status,
            priority: row.priority,
            createdAt: row.created_at,
            dueDate: row.due_date
        });
    }

    static async delete(id) {
        const result = await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
        return result.rowCount > 0;
    }
}

export default TaskRepository;
