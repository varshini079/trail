const { db } = require('../firebase.js');

const likeCollection = db.collection('likes');

class Like {
  constructor(data) {
    this.uid = data.uid;
    this.postId = data.postId;
    this.userId = data.userId;
    this.timestamp = data.timestamp;
  }

  async save() {
    try {
      const likeRef = await likeCollection.add(this);
      this.uid = likeRef.id;
      return this;
    } catch (error) {
      console.error('Error creating like:', error);
      throw error;
    }
  }

  static async findById(uid) {
    try {
      const likeDoc = await likeCollection.doc(uid).get();
      if (!likeDoc.exists) {
        throw new Error('Like not found');
      }
      return new Like(likeDoc.data());
    } catch (error) {
      console.error('Error getting like:', error);
      throw error;
    }
  }

  async delete() {
    try {
      await likeCollection.doc(this.uid).delete();
    } catch (error) {
      console.error('Error deleting like:', error);
      throw error;
    }
  }
}

module.exports = Like;
