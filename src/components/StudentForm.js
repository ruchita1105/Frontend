import React, { useState } from 'react';
import { createStudent } from '../services/studentService';

const StudentForm = ({ onStudentAdded }) => {
  const [student, setStudent] = useState({ name: '', email: '', age: '' });

  const handleChange = e => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    createStudent(student)
      .then(() => {
        setStudent({ name: '', email: '', age: '' });
        onStudentAdded();
      })
      .catch(error => console.log("Error creating student:", error));
  };

  return (
    <div className="card shadow p-3 mb-4">
      <h4 className="text-center mb-3">Add New Student</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label"><b>Name</b></label>
          <input
            name="name"
            className="form-control"
            placeholder="Enter student name"
            value={student.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label"><b>Email</b></label>
          <input
            name="email"
            type="email"
            className="form-control"
            placeholder="Enter student email"
            value={student.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label"><b>Age</b></label>
          <input
            name="age"
            type="number"
            className="form-control"
            placeholder="Enter student age"
            value={student.age}
            onChange={handleChange}
            required
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">Add Student</button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;
