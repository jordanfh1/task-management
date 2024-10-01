'use client';
import React, { useState } from 'react';
import './form.module.css';

interface FormData {
  task: string;
  action: string;
}

const SimpleForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ task: '', action: '' });
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
 
 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({ task: '', action: '' });
  };


  return (
    <div>
      <h1>Create New Task</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="task">Task Name:</label>
          <input
            type="text"
            id="task"
            name="task"
            value={formData.task}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="action">Action:</label>
          <input
            type="action"
            id="action"
            name="action"
            value={formData.action}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div>
          <h2>Time To Get To Work:</h2>
          <p>Task Name: {submittedData.task}</p>
          <p>Action: {submittedData.action}</p>
        </div>
      )}
    </div>
  );
};

export default SimpleForm;
