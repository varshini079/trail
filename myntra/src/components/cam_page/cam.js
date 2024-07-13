// App.js

import React, { useState } from 'react';
import DragNdrop from './DragNdrop'; 
import FormPage from './FormPage'; 
import './App.css';

function CamPage() {
  const [filesSelected, setFilesSelected] = useState(false);

  const handleFilesSelected = (files) => {
    console.log('Selected files:', files);
    setFilesSelected(files.length > 0);
  };

  return (
    <div className="App">
      <DragNdrop
        onFilesSelected={handleFilesSelected}
        
        width="100%"
        height="300px"
        imageWidth="500px"
        imageHeight="auto"
      />
      {filesSelected && <div style={{ marginBottom: '20px' }}></div>}
      <FormPage />
    </div>
  );
}

export default CamPage;
