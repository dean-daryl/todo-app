import Task from '../models/Task.js';

// Create a new task
const createTask = async (taskData) => {
  try {
    const task = new Task();
    task.title = taskData.title;
    task.description = taskData.description;
    task.completed = false;
    // transform image to base64
    const coverImage = Buffer.from(taskData.cover, 'base64');
    task.cover = coverImage;
    await task.save();
    return task;
  } catch (error) {
    console.log(error);
  }
};

// Get all tasks
const getAllTasks = async () => {
  try {
    const tasks = await Task.find();
    return tasks;
  } catch (error) {
    throw new Error('Failed to fetch tasks');
  }
};

// Get a task by ID
const getTaskById = async (taskId) => {
  try {
    const task = await Task.findById(taskId);
    if (!task) {
      throw new Error('Task not found');
    }
    return task;
  } catch (error) {
    throw new Error('Failed to fetch task');
  }
};

// Update a task by ID
const updateTaskById = async (taskId, taskData) => {
  try {
    const task = await Task.findByIdAndUpdate(taskId, taskData, { new: true });
    if (!task) {
      throw new Error('Task not found');
    }
    return task;
  } catch (error) {
    throw new Error('Failed to update task', );
  }
};
const toggleCompleteTask = async (taskId) => {
  try {
    const task = await Task.findById(taskId);
    if (!task) {
      throw new Error('Task not found');
    }
    if (task.completed) {
      task.completed = false;
    } else {
      task.completed = true;
    }
    await task.save();
    return task;
  } catch (error) {
    throw new Error(error);
  }
};

// Delete a task by ID
const deleteTaskById = async (taskId) => {
  try {
    const task = await Task.findByIdAndDelete(taskId);
    if (!task) {
      throw new Error('Task not found');
    }
    return task;
  } catch (error) {
    throw new Error('Failed to delete task');
  }
};

export default {
  createTask,
  getAllTasks,
  getTaskById,
  updateTaskById,
  deleteTaskById,
  toggleCompleteTask
};
