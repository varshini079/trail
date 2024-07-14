// src/ProductCard.js
import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Box, IconButton, Menu, MenuItem, Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ProductCard = ({ product, curations, addCuration }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [newCurationName, setNewCurationName] = useState('');

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
    handleMenuClose();
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setNewCurationName('');
  };

  const handleAddCuration = (curation) => {
    // Implement logic to add product to curation
    console.log(`Add product to ${curation}`);
    handleMenuClose();
  };

  const handleCreateCuration = () => {
    // Implement logic to create a new curation
    console.log(`Create new curation: ${newCurationName}`);
    addCuration(newCurationName);
    handleDialogClose();
  };

  return (
    <Card sx={{ maxWidth: 500, marginBottom: '10px' }}>
      <CardMedia
        component="img"
        height="700"
        image={product.image}
        alt={product.name}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div">
            {product.brand}
          </Typography>
          <IconButton onClick={handleMenuOpen}>
            <MoreVertIcon />
          </IconButton>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {product.name}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <Typography variant="body1" component="div">
            Rs. {product.price}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
            Rs. {product.originalPrice}
          </Typography>
        </Box>
        <Typography variant="body2" color="error">
          {product.discount}
        </Typography>
      </CardContent>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => handleAddCuration('ethnic')}>Add to Ethnic</MenuItem>
        <MenuItem onClick={() => handleAddCuration('casuals')}>Add to Casuals</MenuItem>
        <MenuItem onClick={() => handleAddCuration('for home')}>Add to For Home</MenuItem>
        <MenuItem onClick={handleDialogOpen}>Create New Collection</MenuItem>
      </Menu>

      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Create New Collection</DialogTitle>
        <DialogContent  style={{ width: '500px', height: '100px' }}>
          <TextField
            autoFocus
            margin="dense"
            label="Collection Name"
            fullWidth
            variant="standard"
            value={newCurationName}
            onChange={(e) => setNewCurationName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleCreateCuration}>Create</Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default ProductCard;
