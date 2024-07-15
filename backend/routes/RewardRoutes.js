const express = require('express');
const rewardController = require('../Controllers/RewardController');

const router = express.Router();

router.post('/rewards', rewardController.createReward);
router.get('/rewards/:uid', rewardController.getReward);
router.put('/rewards/:uid', rewardController.updateReward);
router.delete('/rewards/:uid', rewardController.deleteReward);

module.exports = router;
