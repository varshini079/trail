const express = require('express');
const leaderboardController = require('../Controllers/LeaderboardController');

const router = express.Router();

router.post('/leaderboard', leaderboardController.createLeaderboardEntry);
router.get('/leaderboard', leaderboardController.getLeaderboard);
router.put('/leaderboard/:uid', leaderboardController.updateLeaderboardEntry);
router.delete('/leaderboard/:uid', leaderboardController.deleteLeaderboardEntry);

module.exports = router;
