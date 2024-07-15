import { collection, query, orderBy, limit, getDocs, updateDoc, doc } from 'firebase/firestore';
import { db } from './firebaseconfig';

const updateUserScores = async () => {
  const usersRef = collection(db, 'users');
  const querySnapshot = await getDocs(usersRef);
  querySnapshot.forEach(async (userDoc) => {
    const userData = userDoc.data();
    const score = 2 * userData.likes + userData.views;
    await updateDoc(doc(db, 'users', userDoc.id), { score });
  });
};

const getTopUsers = async () => {
  const usersRef = collection(db, 'users');
  const q = query(usersRef, orderBy('score', 'desc'), limit(10));
  const querySnapshot = await getDocs(q);
  const users = [];
  querySnapshot.forEach((doc) => {
    users.push({ id: doc.id, ...doc.data() });
  });
  return users;
};


export { getTopUsers, updateUserScores };
