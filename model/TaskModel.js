import { v4 as uuidv4 } from 'uuid'
export default class TaskModel {
    
    constructor({
        id = uuidv4(),
        name,
        description = "",
        status = "pending",
        priority = "normal",
        createdAt = new Date().toISOString(),
        dueDate = null,
        }
    ) {
        this.id = id;
        if (!name) {
            throw new Error("Task name is required");
        }
        this.name =name;
        this.status = status;
        this.priority = priority;;
        this.description=description;
        this.createdAt = createdAt;
        this.dueDate = dueDate;

    }
}