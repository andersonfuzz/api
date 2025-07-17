import { uuid as uuidv4 } from 'uuid'
export default class TaskModel {
    id = '';
    name = '';
    status = 'pending';
    priority = 'normal'
    description = '';
    createdAt = '';
    dueDate = '';
    constructor(
        name,
        status,
        priority,
        description,
        createdAt,
        dueDate
    ) {
        this.id=uuidv4()
        this.name=name
        this.status='pending'
        this.priority=priority
    }
}