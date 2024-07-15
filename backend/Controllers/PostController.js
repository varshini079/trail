const Post = require('../Models/Post');

const createPost = async (req, res) => {
  try {
    const { userId, media, caption, timestamp, likes } = req.body;
    const post = new Post({ userId, media, caption, timestamp, likes });
    await post.save();
    res.status(201).send(post);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.uid);
    res.status(200).send(post);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.uid);
    await post.update(req.body);
    res.status(200).send({ message: 'Post updated successfully' });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.uid);
    await post.delete();
    res.status(200).send({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  createPost,
  getPost,
  updatePost,
  deletePost
};
