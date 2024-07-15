const { db } = require('../firebase');

const rewardCollection = db.collection('rewards');

class Reward {
  constructor(data) {
    this.uid = data.uid;
    this.userId = data.userId;
    this.rewardType = data.rewardType;
    this.rewardValue = data.rewardValue;
    this.timestamp = data.timestamp;
  }

  async save() {
    try {
      const rewardRef = await rewardCollection.add(this);
      this.uid = rewardRef.id;
      return this;
    } catch (error) {
      console.error('Error creating reward:', error);
      throw error;
    }
  }

  static async findById(uid) {
    try {
      const rewardDoc = await rewardCollection.doc(uid).get();
      if (!rewardDoc.exists) {
        throw new Error('Reward not found');
      }
      return new Reward(rewardDoc.data());
    } catch (error) {
      console.error('Error getting reward:', error);
      throw error;
    }
  }

  async update(data) {
    try {
      await rewardCollection.doc(this.uid).update(data);
    } catch (error) {
      console.error('Error updating reward:', error);
      throw error;
    }
  }

  async delete() {
    try {
      await rewardCollection.doc(this.uid).delete();
    } catch (error) {
      console.error('Error deleting reward:', error);
      throw error;
    }
  }
}

module.exports = Reward;
