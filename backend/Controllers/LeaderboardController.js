const Leaderboard = require('../Models/Leaderboard');

const createLeaderboardEntry = async (req, res) => {
  try {
    const { userId, score, rank } = req.body;
    const leaderboardEntry = new Leaderboard({ userId, score, rank });
    await leaderboardEntry.save();
    res.status(201).send(leaderboardEntry);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const getLeaderboard = async (req, res) => {
  try {
    const leaderboard = await Leaderboard.findAll();
    res.status(200).send(leaderboard);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const updateLeaderboardEntry = async (req, res) => {
  try {
    const leaderboardEntry = await Leaderboard.findById(req.params.uid);
    await leaderboardEntry.update(req.body);
    res.status(200).send({ message: 'Leaderboard entry updated successfully' });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const deleteLeaderboardEntry = async (req, res) => {
  try {
    const leaderboardEntry = await Leaderboard.findById(req.params.uid);
    await leaderboardEntry.delete();
    res.status(200).send({ message: 'Leaderboard entry deleted successfully' });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  createLeaderboardEntry,
  getLeaderboard,
  updateLeaderboardEntry,
  deleteLeaderboardEntry
};
