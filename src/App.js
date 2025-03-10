// App.js
import React, { useState } from 'react';
import ImportCSV from './components/ImportCSV';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => setRefresh(!refresh);

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">🎓 Student Management</h1>
      <ImportCSV onImport={handleRefresh} />
      <StudentForm onStudentAdded={handleRefresh} />
      <StudentList key={refresh} />
    </div>
  );
}

export default App; // ✅ THIS IS VERY IMPORTANT
