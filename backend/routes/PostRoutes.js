const express = require('express');
const postController = require('../Controllers/PostController');

const router = express.Router();

router.post('/posts', postController.createPost);
router.get('/posts/:uid', postController.getPost);
router.put('/posts/:uid', postController.updatePost);
router.delete('/posts/:uid', postController.deletePost);

module.exports = router;
