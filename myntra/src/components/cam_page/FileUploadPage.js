import React, { useState } from 'react';
import { Container, Box, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const FileUploadPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setFilePreview(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '50vh',
          backgroundColor: '#f0f0f0',
          border: '2px dashed #ccc',
          borderRadius: '8px',
          cursor: 'pointer',
          textAlign: 'center',
          p: 4
        }}
        onClick={() => document.getElementById('fileInput').click()}
      >
        {!filePreview ? (
          <>
            <CloudUploadIcon sx={{ fontSize: 64, color: '#ccc' }} />
            <Typography variant="h6" sx={{ mt: 2 }}>
              Click here to upload files
            </Typography>
          </>
        ) : (
          <img src={filePreview} alt="Preview" style={{ maxHeight: '100%', maxWidth: '100%' }} />
        )}
      </Box>
      <input
        id="fileInput"
        type="file"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </Container>
  );
};

export default FileUploadPage;
