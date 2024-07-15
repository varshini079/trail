const express = require('express');
const bodyParser = require('body-parser');
const userroutes = require('./routes/UserRoutes');
const socialroutes = require('./routes/SocialRoutes');
const postroutes= require('./routes/PostRoutes');
const likeroutes= require('./routes/LikeRoutes')
const rewardroutes= require('./routes/RewardRoutes');
const leaderboardroutes= require('./routes/LeaderBoardRoutes');



const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/api/v1', userroutes);
app.use('/api/v1', socialroutes);
app.use('/api/v1', postroutes);
app.use('/api/v1', likeroutes);
app.use('/api/v1', rewardroutes);
app.use('/api/v1', leaderboardroutes);

app.listen(port, () => {
  console.log(`Server is running on {port}`);
});
