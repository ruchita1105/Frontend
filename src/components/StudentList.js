import React, { useEffect, useState } from 'react';
import { getAllStudents, deleteStudent } from '../services/studentService';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = () => {
    getAllStudents()
      .then(response => setStudents(response.data))
      .catch(error => console.log("Error loading students:", error));
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      deleteStudent(id)
        .then(() => loadStudents())
        .catch(error => console.log("Error deleting:", error));
    }
  };

  return (
    <div className="card shadow p-3 mt-4">
      <h4 className="text-center mb-3">Student List</h4>
      <div className="table-responsive">
        <table className="table table-striped table-hover table-bordered">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 ? (
              students.map(student => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.age}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(student.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center text-muted">
                  No students found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentList;
