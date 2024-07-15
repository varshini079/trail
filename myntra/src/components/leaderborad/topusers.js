import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../backend_services/firebaseconfig';
import './TopUsers.css'; // Import your CSS file for styling

const TopUsers = () => {
  const [topUsers, setTopUsers] = useState([]);

  const fetchTopUsers = async () => {
    const usersRef = collection(db, 'users_collections');
    const usersSnapshot = await getDocs(usersRef);
    const usersData = usersSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    // Sort users by score in descending order
    const sortedUsers = usersData.sort((a, b) => b.score - a.score).slice(0, 10);
    setTopUsers(sortedUsers);
  };

  useEffect(() => {
    fetchTopUsers();
  }, []);

  return (
    <div className="top-users-container">
      <h2 className="top-users-title">Top Users</h2>
      <div className="users-wrapper">
        {topUsers.map((user, index) => (
          <div className="user-info" key={index}>
            <Avatar alt={user.name} src={user.profile} sx={{ width: 56, height: 56 }} className="avatar" />
            <p>{user.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopUsers;
