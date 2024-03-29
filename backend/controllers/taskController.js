import { default as taskService } from '../services/taskService.js';

const getAllTasks = (req, res) => {
  taskService
    .getAllTasks()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch((error) => {
      res.status(500).json({
        error: error.message,
      });
    });
};

const getTaskById = (req, res) => {
  taskService
    .getTaskById(req.params.id)
    .then((task) => {
      res.status(200).json(task);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

const createTask = (req, res) => {
  taskService
    .createTask(req.body)
    .then((task) => {
      res.status(200).json(task);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

const updateTask = (req, res) => {
  taskService
    .updateTaskById(req.params.id, req.body)
    .then((task) => {
      res.status(200).json(task);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};
const deleteTask = (req, res) => {
  taskService
    .deleteTaskById(req.params.id)
    .then(() => {
      res.status(200).json({ message: 'Task deleted successfully' });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};
const toggleCompleteTask = (req, res) => {
  taskService
    .toggleCompleteTask(req.params.id)
    .then((task) => {
      res.status(200).json(task);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

export default {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  toggleCompleteTask,
};
