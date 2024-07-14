import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import AutoGridNoWrap from './autogrid'; // Adjust path as needed
import './profile.css'; // Adjust path as needed

const userData = {
  profileImage: 'https://via.placeholder.com/150',
  name: 'John Doe',
};

const userPosts = [
  { id: 1, image: 'https://via.placeholder.com/100', category: 'Category 1' },
  { id: 2, image: 'https://via.placeholder.com/100', category: 'Category 2' },
];

const collections = [
  { id: 1, name: 'Collection 1' },
  { id: 2, name: 'Collection 2' },
];

const following = [
  { id: 1, name: 'User 1', profileImage: 'https://via.placeholder.com/50' },
  { id: 2, name: 'User 2', profileImage: 'https://via.placeholder.com/50' },
];

const followers = [
  { id: 1, name: 'Follower 1', profileImage: 'https://via.placeholder.com/50' },
  { id: 2, name: 'Follower 2', profileImage: 'https://via.placeholder.com/50' },
];

const Profile = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="user-profile">
      <div className="profile-sidebar">
        <div className="profile-header">
          <img className="profile-image" src={userData.profileImage} alt={userData.name} />
          <h2 className="profile-name">{userData.name}</h2>
        </div>
      </div>
      <div className="profile-content">
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Posts" value="1" />
                <Tab label="Collections" value="2" />
                <Tab label="Following" value="3" />
                <Tab label="Followers" value="4" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <div className="posts-list">
                {userPosts.map(post => (
                  <div key={post.id} className="post-item">
                    <img src={post.image} alt={post.category} />
                    <p>{post.category}</p>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel value="2">
              <div className="collections-list">
                {collections.map(collection => (
                  <div key={collection.id} className="collection-item">
                    <p>{collection.name}</p>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel value="3">
              <AutoGridNoWrap data={following} />
            </TabPanel>
            <TabPanel value="4">
              <AutoGridNoWrap data={followers} />
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  );
};

export default Profile;
