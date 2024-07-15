const { db } = require('../firebase.js');

const postCollection = db.collection('posts');

class Post {
  constructor(data) {
    this.uid = data.uid;
    this.userId = data.userId;
    this.media = data.media;
    this.caption = data.caption;
    this.timestamp = data.timestamp;
    this.likes = data.likes;
  }

  async save() {
    try {
      const postRef = await postCollection.add(this);
      this.uid = postRef.id;
      return this;
    } catch (error) {
      console.error('Error creating post:', error);
      throw error;
    }
  }

  static async findById(uid) {
    try {
      const postDoc = await postCollection.doc(uid).get();
      if (!postDoc.exists) {
        throw new Error('Post not found');
      }
      return new Post(postDoc.data());
    } catch (error) {
      console.error('Error getting post:', error);
      throw error;
    }
  }

  async update(data) {
    try {
      await postCollection.doc(this.uid).update(data);
    } catch (error) {
      console.error('Error updating post:', error);
      throw error;
    }
  }

  async delete() {
    try {
      await postCollection.doc(this.uid).delete();
    } catch (error) {
      console.error('Error deleting post:', error);
      throw error;
    }
  }
}

module.exports = Post;
