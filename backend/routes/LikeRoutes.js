const express = require('express');
const likeController = require('../Controllers/LikeController');

const router = express.Router();

router.post('/likes', likeController.createLike);
router.get('/likes/:uid', likeController.getLike);
router.delete('/likes/:uid', likeController.deleteLike);

module.exports = router;
