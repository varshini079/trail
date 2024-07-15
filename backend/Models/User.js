const db= require('../firebase.js');

const userCollection = db.collection('users');

class User {
  constructor(data) {
    this.uid = data.uid;
    this.name = data.name;
    this.email = data.email;
    this.bio = data.bio;
  }

  static async createUser(data) {
    try {
      const userRef = await userCollection.add(data);
      return new User({ uid: userRef.id, ...data });
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }

  static async getUser(uid) {
    try {
      const userDoc = await userCollection.doc(uid).get();
      if (!userDoc.exists) {
        throw new Error('User not found');
      }
      return new User({ uid: userDoc.id, ...userDoc.data() });
    } catch (error) {
      console.error('Error getting user:', error);
      throw error;
    }
  }

  static async updateUser(uid, data) {
    try {
      await userCollection.doc(uid).update(data);
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  }

  static async deleteUser(uid) {
    try {
      await userCollection.doc(uid).delete();
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
  }
}

module.exports = User;
