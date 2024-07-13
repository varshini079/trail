// UserProfile.js
import React from 'react';
import StandardImageList from './imagelist';
import './profile.css'; // Assuming you have CSS for styling
import UserPostCard from './post'; // Assuming you have a UserPostCard component
import Sidebar from './sidebar';

 
const userPosts = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      description: 'A delicious breakfast to start your day!',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
      description: 'A tasty burger for lunch.',
    },
    // Add more posts here
  ];
  
  const UserProfile = () => {
    return (
        <div className="user-profile">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content">
          <div className="profile-info">
            <img src="/path/to/profile-picture.jpg" alt="Profile" className="profile-picture" />
            <div className="user-name">John Doe</div>
          </div>
          <div className="user-posts">
            <h3>User Posts</h3>
            {userPosts.map((post, index) => (
              <UserPostCard key={index} post={post} />
            ))}
          </div>
          <div className="user-collection">
            <h3>User Collection</h3>
            <StandardImageList />
            <StandardImageList />
          </div>
        </div>
      </div>
    );
  };
  
  export default UserProfile;