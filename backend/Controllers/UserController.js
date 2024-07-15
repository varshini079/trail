const User = require('../Models/User');

const createUser = async (req, res) => {
  try {
    const user = await User.createUser(req.body);
    res.status(201).send(user);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.getUser(req.params.uid);
    res.status(200).send(user);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    await User.updateUser(req.params.uid, req.body);
    res.status(200).send({ message: 'User updated successfully' });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};


module.exports = {
  createUser,
  getUser,
  updateUser
};
