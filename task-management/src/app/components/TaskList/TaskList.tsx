'use client';
import React from 'react';
import SimpleForm from '../Form/Form'

interface FormData {
    name: string;
    email: string;
  };

interface ChildComponentsProps {
    formData: FormData;
}

const ChildComponent: React.FC<ChildComponentsProps> =({ formData }) => {
    return (
        <div>
            <h2>Child Component</h2>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>



        </div>
    )
}