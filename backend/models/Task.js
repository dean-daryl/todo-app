import mongoose, { Schema, model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  cover: {
    type: String,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Task = model('Task', taskSchema);

export default Task;
