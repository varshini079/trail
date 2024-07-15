const Reward = require('../Models/Reward');

const createReward = async (req, res) => {
  try {
    const { userId, rewardType, rewardValue, timestamp } = req.body;
    const reward = new Reward({ userId, rewardType, rewardValue, timestamp });
    await reward.save();
    res.status(201).send(reward);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const getReward = async (req, res) => {
  try {
    const reward = await Reward.findById(req.params.uid);
    res.status(200).send(reward);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

const updateReward = async (req, res) => {
  try {
    const reward = await Reward.findById(req.params.uid);
    await reward.update(req.body);
    res.status(200).send({ message: 'Reward updated successfully' });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const deleteReward = async (req, res) => {
  try {
    const reward = await Reward.findById(req.params.uid);
    await reward.delete();
    res.status(200).send({ message: 'Reward deleted successfully' });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  createReward,
  getReward,
  updateReward,
  deleteReward
};
