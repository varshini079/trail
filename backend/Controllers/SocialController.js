const StyleBuddy = require('../Models/Socialbuddy');

const createStyleBuddy = async (req, res) => {
  try {
    const { userId, buddyName, buddyProfilePicture } = req.body;
    const styleBuddy = new StyleBuddy({ userId, buddyName, buddyProfilePicture });
    await styleBuddy.save();
    res.status(201).send(styleBuddy);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const getStyleBuddy = async (req, res) => {
  try {
    const styleBuddy = await StyleBuddy.findById(req.params.uid);
    res.status(200).send(styleBuddy);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

const updateStyleBuddy = async (req, res) => {
  try {
    const styleBuddy = await StyleBuddy.findById(req.params.uid);
    await styleBuddy.update(req.body);
    res.status(200).send({ message: 'Style buddy updated successfully' });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const deleteStyleBuddy = async (req, res) => {
  try {
    const styleBuddy = await StyleBuddy.findById(req.params.uid);
    await styleBuddy.delete();
    res.status(200).send({ message: 'Style buddy deleted successfully' });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  createStyleBuddy,
  getStyleBuddy,
  updateStyleBuddy,
  deleteStyleBuddy
};
