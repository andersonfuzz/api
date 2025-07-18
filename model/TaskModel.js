import { v4 as uuidv4 } from 'uuid'
import { TaskPriority, TaskStatus } from '../constants/TaskEnum.js'
export default class TaskModel {

    constructor({
        id = uuidv4(),
        name,
        description = "",
        status = TaskStatus.PENDING,
        priority = TaskPriority.NORMAL,
        createdAt = new Date().toISOString(),
        dueDate = 'indeterminate',
    }
    ) {
        if (!name) {
            throw new Error("Task name is required");
        }
        if (!Object.values(TaskPriority).includes(priority)) {
            throw new Error(`Invalid priority:${priority}`)
        }
        if (!Object.values(TaskStatus).includes(status)) {
            throw new Error(`Invalid status:${status}`)

        }
        this.id = id;
        this.name = name;
        this.status = status;
        this.priority = priority;
        this.description = description;
        this.createdAt = createdAt;
        this.dueDate = dueDate;

    }
    markAsDone() {
        this.status = TaskStatus.DONE;
        return this;
    }

    isOverdue() {
        if (this.dueDate === "indeterminate") {
            return false;
        }

        const due = new Date(this.dueDate);
        const now = new Date();

        return due < now;
    }

    changePriority(priority) {
        if (!Object.values(TaskPriority).includes(priority)) {
            throw new Error(`Invalid priority:${priority}`)
        }
        this.priority = priority
        return this;
    }
}