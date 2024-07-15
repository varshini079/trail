const express = require('express');
const styleBuddyController = require('../Controllers/SocialController');

const router = express.Router();

router.post('/styleBuddies', styleBuddyController.createStyleBuddy);
router.get('/styleBuddies/:uid', styleBuddyController.getStyleBuddy);
router.put('/styleBuddies/:uid', styleBuddyController.updateStyleBuddy);
router.delete('/styleBuddies/:uid', styleBuddyController.deleteStyleBuddy);

module.exports = router;
