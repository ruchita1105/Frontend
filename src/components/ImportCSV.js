import React from 'react';
import { importCSV } from '../services/studentService';

const ImportCSV = ({ onImport }) => {
  const handleImport = () => {
    importCSV()
      .then(() => {
        alert("CSV Imported successfully");
        onImport();
      })
      .catch(() => alert("Error importing CSV"));
  };

  return (
    <div className="text-center mt-4">
      <button className="btn btn-primary btn-lg" onClick={handleImport}>
        📥 Import Students from CSV
      </button>
    </div>
  );
};

export default ImportCSV;
