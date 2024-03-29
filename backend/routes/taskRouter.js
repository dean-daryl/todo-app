import { Router } from 'express';
import taskController from '../controllers/taskController.js';

const taskRouter = Router();
// Create a new task
taskRouter.post('/tasks/create', async (req, res) => {
  return taskController.createTask(req, res);
});

// Get all tasks
taskRouter.get('/tasks', async (req, res) => {
  return taskController.getAllTasks(req, res);
});

// Get a single task by ID
taskRouter.get('/tasks/:id', async (req, res) => {
  return taskController.getTaskById(req, res);
});

// Update a task by ID
taskRouter.put('/tasks/:id', async (req, res) => {
  return taskController.updateTask(req, res);
});

// Delete a task by ID
taskRouter.delete('/tasks/:id', async (req, res) => {
  return taskController.deleteTask(req, res);
});
taskRouter.put('/tasks/:id/complete', async (req, res) => {
  return taskController.toggleCompleteTask(req, res);
});

export default taskRouter;
