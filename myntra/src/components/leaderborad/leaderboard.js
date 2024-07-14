import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { getTopUsers, updateUserScores } from '../../backend_services/api';
import './leaderboard.css';


export default function Leaderboard() {
    const [topUsers, setTopUsers] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        await updateUserScores();
        const users = await getTopUsers();
        setTopUsers(users);
      };
      fetchData();
    }, []);
  
    return (
      <div className="container">
        <div className="section">
          <h2 className="heading">Top Users</h2>
          <Stack direction="row" spacing={2} className="avatarContainer">
            {topUsers.map((user) => (
              <Avatar key={user.id} alt={user.name} src={user.profile} />
            ))}
          </Stack>
        </div>
      </div>
    );
  }