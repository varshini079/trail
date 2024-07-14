import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import FetchApi from './components/homepage/fetch';
import CardApp from './components/rewards/reward_card';
import TopNav from './components/top_nav_bar/nav';
import CamPage from './components/cam_page/cam'; 
import SideNav from './components/side_nav_bar/sidenav';
import UserProfile from './components/top_nav_bar/userprofile';
import SinglePost from './components/homepage/singlepost';
import MyntraPage from './components/myntra_page/home'; // Adjust the import path as necessary

const App = () => {
  return (
    <>
      <TopNav />
      <Routes>
        <Route path="/" element={<MyntraPage />} /> {/* Default Route showing HomePage */}
        <Route 
          path="/style-buddies" 
          element={
            <div>
              <SideNav />
              <FetchApi />
            </div>
          } 
        />
        <Route 
          path="/rewards" 
          element={
            <div>
              <SideNav />
              <CardApp />
            </div>
          } 
        />
        <Route 
          path="/camera" 
          element={
            <div>
              <SideNav />
              <CamPage />
            </div>
          } 
        />
        <Route 
          path="/user-profile" 
          element={<UserProfile />} 
        />
        <Route path="/post/:id" element={<SinglePost />} />
      </Routes>
    </>
  );
};

export default App;
