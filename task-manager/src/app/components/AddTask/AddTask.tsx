'use client';

import React, {useState} from 'react';
import TaskList from '../TaskList/TaskList';
import styles from './AddTask.module.css'

interface Task {
    id: number;
    name: string;
  }

const AddTask: React.FC = () => {

    const [tasks, setTasks] = useState<Task[]>([]);
    const [showTaskList, setShowTaskList] = useState(false);
  
    const addTask = () => {
        const newTask: Task = {
          id: tasks.length + 1,
          name: `Task ${tasks.length + 1}`,
        };
        setTasks([...tasks, newTask]);
        setShowTaskList(true);
      };
    

            return(
                <div>
                <button onClick={addTask}>Add Task</button>
                          {showTaskList && <TaskList tasks={tasks} />}
              </div>
    )
} 

export default AddTask