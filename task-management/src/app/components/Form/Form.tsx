'use client';
import React, { useState } from 'react';
import styles from './form.module.css'; 

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
    <div className={styles.formContainer}>
      <h1 className={styles.heading}>Create New Task</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="task" className={styles.label}>Task Name:</label>
          <input
            type="text"
            id="task"
            name="task"
            value={formData.task}
            onChange={handleChange}
            className={styles.inputField}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="action" className={styles.label}>Action:</label>
          <input
            type="text"
            id="action"
            name="action"
            value={formData.action}
            onChange={handleChange}
            className={styles.inputField}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>

      {submittedData && (
        <div>
          <h2 className={styles.submittedDataHeading}>Time To Get To Work:</h2>
          <p className={styles.submittedDataText}>Task Name: {submittedData.task}</p>
          <p className={styles.submittedDataText}>Action: {submittedData.action}</p>
        </div>
      )}
    </div>
  );
};

export default SimpleForm;
