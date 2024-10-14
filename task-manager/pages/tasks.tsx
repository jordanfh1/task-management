'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Tasks() {
  interface Task {
    id: number;
    title: string;
    description: string;
  }

  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState({ title: '', description: '' });

  useEffect(() => {
    axios.get('/api/tasks?userId=1').then((response) => setTasks(response.data));
  }, []);

  const handleCreateTask = async () => {
    await axios.post('/api/tasks', { ...newTask, userId: 1 });
    setNewTask({ title: '', description: '' });
    // Fetch tasks again to update the list
    const response = await axios.get('/api/tasks?userId=1');
    setTasks(response.data);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      
      <input
        type="text"
        placeholder="Task title"
        value={newTask.title}
        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
      />
      
      <input
        type="text"
        placeholder="Task description"
        value={newTask.description}
        onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
      />
      
      <button onClick={handleCreateTask}>Create Task</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
