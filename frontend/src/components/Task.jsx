import React, { useEffect, useState } from 'react';
import close from '/close.svg';

function Task() {
  useEffect(() => {
    getAllTasks();
  }, []);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    cover: '',
    completed: false,
  });
  const [showTaskList, setShowTaskList] = useState(true);
  const [showAddTask, setShowAddTask] = useState(false);
  let taskList = [];

  const handleAddTask = () => {
    fetch('http://localhost:3000/api/tasks/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    })
      .then((response) => window.location.reload())
      .catch((error) => {
        console.error('Error:', error);
      });
    setShowAddTask(false);
  };
  const getAllTasks = async () => {
    await fetch('http://localhost:3000/api/tasks')
      .then((response) => response.json())
      .then((data) => {
        taskList = data;
        console.log(taskList);
        setTasks(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  const handleTaskComplete = (id) => {
    fetch(`http://localhost:3000/api/tasks/${id}/complete`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completed: true }),
    });
    window.location.reload();
  };
  const handleDelete = (id) => {
    fetch(`http://localhost:3000/api/tasks/${id}`, {
      method: 'DELETE',
    });
    window.location.reload();
  }
  return (
    <div className="task-section">
      <div
        style={{ display: showAddTask ? 'flex' : 'none' }}
        className="task-tracker"
      >
        <input
          type="text"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          placeholder="Enter task name"
        />
        <textarea
          value={newTask.description}
          onChange={(e) =>
            setNewTask({ ...newTask, description: e.target.value })
          }
          placeholder="Enter task description"
        ></textarea>
        <input
          type="file"
          value={newTask.file}
          onChange={(e) => setNewTask({ ...newTask, cover: e.target.value })}
        />
        <button className="add-task" onClick={handleAddTask}>
          Add Task
        </button>
      </div>
      {!showAddTask && (
        <button
          className="add-task-btn"
          style={{ display: showAddTask ? 'none' : 'block' }}
          onClick={() => setShowAddTask(true)}
        >
          Add Task +
        </button>
      )}
      {tasks.length > 0 && showTaskList ? (
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className="">
              <div className="task-card">
                <div className="task-content">
                  <p
                    style={{
                      textDecoration: task.completed ? 'line-through' : 'none',
                    }}
                  >
                    {task.completed ? '✅ ' : ''}
                    {task.title}
                  </p>
                  <button onClick={() => handleTaskComplete(task._id)}>
                    {task.completed ? 'Undo ' : 'Complete'}
                  </button>
                </div>
                  <img src={close}  onClick={() => handleDelete(task._id)}  alt="" className="delete" />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default Task;
