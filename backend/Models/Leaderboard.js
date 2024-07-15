const { db } = require('../firebase.js');

const leaderboardCollection = db.collection('leaderboard');

class Leaderboard {
  constructor(data) {
    this.uid = data.uid;
    this.userId = data.userId;
    this.score = data.score;
    this.rank = data.rank;
  }

  async save() {
    try {
      const leaderboardRef = await leaderboardCollection.add(this);
      this.uid = leaderboardRef.id;
      return this;
    } catch (error) {
      console.error('Error creating leaderboard entry:', error);
      throw error;
    }
  }

  static async findAll() {
    try {
      const leaderboardSnapshot = await leaderboardCollection.orderBy('score', 'desc').get();
      return leaderboardSnapshot.docs.map(doc => new Leaderboard(doc.data()));
    } catch (error) {
      console.error('Error getting leaderboard:', error);
      throw error;
    }
  }

  async update(data) {
    try {
      await leaderboardCollection.doc(this.uid).update(data);
    } catch (error) {
      console.error('Error updating leaderboard entry:', error);
      throw error;
    }
  }

  async delete() {
    try {
      await leaderboardCollection.doc(this.uid).delete();
    } catch (error) {
      console.error('Error deleting leaderboard entry:', error);
      throw error;
    }
  }
}

module.exports = Leaderboard;
