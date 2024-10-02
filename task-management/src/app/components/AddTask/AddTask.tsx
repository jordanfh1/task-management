'use client';

import React, {useState} from 'react';
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
         <button className={styles.button}>
        +
        </button>
    )
} 

export default AddTask