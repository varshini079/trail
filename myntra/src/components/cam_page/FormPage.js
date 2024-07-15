import React, { useState } from 'react';
import { Container, TextField, MenuItem, Button, Chip, Box } from '@mui/material';

const FormPage = () => {
  const [description, setDescription] = useState('');
  const [bodyType, setBodyType] = useState('');
  const [categories, setCategories] = useState([]);
  const [categoryInput, setCategoryInput] = useState('');
  const [urls, setUrls] = useState([]);
  const [urlInput, setUrlInput] = useState('');
  const [review, setReview] = useState('');
  const [isUploaded, setIsUploaded] = useState(false);

  const bodyTypes = [
    "Dramatic", "Soft Dramatic", "Flamboyant Natural", "Natural",
    "Soft Natural", "Dramatic Classic", "Classic", "Soft Classic",
    "Flamboyant Gamine", "Gamine", "Soft Gamine", "Theatrical Romantic", "Romantic"
  ];

  const handleAddCategory = () => {
    if (categoryInput && !categories.includes(categoryInput)) {
      setCategories([...categories, categoryInput]);
      setCategoryInput('');
    }
  };

  const handleAddUrl = () => {
    if (urlInput && !urls.includes(urlInput)) {
      setUrls([...urls, urlInput]);
      setUrlInput('');
    }
  };

  const handleUpload = () => {
    setIsUploaded(true);
  };

  return (
    <Container className="form-page">
      <Box sx={{ mt: 4 }}>
        <TextField
          fullWidth
          label="Description"
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          helperText={`${description.length}/200`}
          inputProps={{ maxLength: 200 }}
          margin="normal"
        />
        <TextField
          fullWidth
          select
          label="Body Type"
          value={bodyType}
          onChange={(e) => setBodyType(e.target.value)}
          margin="normal"
        >
          {bodyTypes.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <TextField
            fullWidth
            label="Category"
            value={categoryInput}
            onChange={(e) => setCategoryInput(e.target.value)}
            margin="normal"
          />
          <Button onClick={handleAddCategory} sx={{ ml: 2, mt: 2 }} variant="contained">+</Button>
        </Box>
        <Box sx={{ mb: 2 }}>
          {categories.map((category, index) => (
            <Chip key={index} label={category} sx={{ mr: 1, mb: 1 }} />
          ))}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <TextField
            fullWidth
            label="URL"
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            margin="normal"
          />
          <Button onClick={handleAddUrl} sx={{ ml: 2, mt: 2 }} variant="contained">+</Button>
        </Box>
        <Box sx={{ mb: 2 }}>
          {urls.map((url, index) => (
            <Chip key={index} label={url} sx={{ mr: 1, mb: 1 }} />
          ))}
        </Box>
        <TextField
          fullWidth
          label="Review"
          multiline
          rows={4}
          value={review}
          onChange={(e) => setReview(e.target.value)}
          helperText={`${review.length}/500`}
          inputProps={{ maxLength: 500 }}
          margin="normal"
        />
        <Button onClick={handleUpload} variant="contained" color="success">
          {isUploaded ? "Uploaded!" : "Upload"}
        </Button>
      </Box>
    </Container>
  );
};

export default FormPage;
