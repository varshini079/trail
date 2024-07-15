const { db } = require('../firebase.js');

const styleBuddyCollection = db.collection('styleBuddies');

class SocialBuddy {
  constructor(data) {
    this.uid = data.uid;
    this.userId = data.userId;
    this.buddyName = data.buddyName;
    this.buddyProfilePicture = data.buddyProfilePicture;
  }

  async save() {
    try {
      const styleBuddyRef = await styleBuddyCollection.add(this);
      this.uid = styleBuddyRef.id;
      return this;
    } catch (error) {
      console.error('Error creating style buddy:', error);
      throw error;
    }
  }

  static async findById(uid) {
    try {
      const styleBuddyDoc = await styleBuddyCollection.doc(uid).get();
      if (!styleBuddyDoc.exists) {
        throw new Error('Style buddy not found');
      }
      return new StyleBuddy(styleBuddyDoc.data());
    } catch (error) {
      console.error('Error getting style buddy:', error);
      throw error;
    }
  }

  async update(data) {
    try {
      await styleBuddyCollection.doc(this.uid).update(data);
    } catch (error) {
      console.error('Error updating style buddy:', error);
      throw error;
    }
  }

  async delete() {
    try {
      await styleBuddyCollection.doc(this.uid).delete();
    } catch (error) {
      console.error('Error deleting style buddy:', error);
      throw error;
    }
  }
}

module.exports = SocialBuddy;
