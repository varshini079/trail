const Like = require('../Models/Like');

const createLike = async (req, res) => {
  try {
    const { postId, userId, timestamp } = req.body;
    const like = new Like({ postId, userId, timestamp });
    await like.save();
    res.status(201).send(like);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const getLike = async (req, res) => {
  try {
    const like = await Like.findById(req.params.uid);
    res.status(200).send(like);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

const deleteLike = async (req, res) => {
  try {
    const like = await Like.findById(req.params.uid);
    await like.delete();
    res.status(200).send({ message: 'Like deleted successfully' });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  createLike,
  getLike,
  deleteLike
};
