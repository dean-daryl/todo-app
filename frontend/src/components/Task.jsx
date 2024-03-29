import React, { useState } from 'react';

function Task() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleTaskComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = `✅ ${updatedTasks[index]}`;
    setTasks(updatedTasks);
  };

  return (
    <div className="task-section">
      <div className="task-tracker">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter task name"
        />
        <textarea placeholder="Enter task description"></textarea>
        <input type="file" />
        <button className="add-task" onClick={handleAddTask}>
          Add Task
        </button>
      </div>
      
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleTaskComplete(index)}>Complete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Task;
