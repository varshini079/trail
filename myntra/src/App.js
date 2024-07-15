import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route} from 'react-router-dom';
import FetchApi from './components/homepage/fetch';
import CardApp from './components/rewards/reward_card';
import TopNav from './components/top_nav_bar/nav';
import CamPage from './components/cam_page/cam'; 
import SideNav from './components/side_nav_bar/sidenav';
import UserProfile from './components/top_nav_bar/userprofile';
import SinglePost from './components/homepage/singlepost';
import Profile from './components/profile_page/profiledata';
import FilterSidebar from './components/myntra_page/FilterSidebar';
//import Leaderboard from './components/leaderborad/leaderboard';
import MyntraPage from './components/myntra_page/home';
import MainPage from './components/myntra_page/MainPage';
const App = () => {
  return (
    <>
     <div style={{ zoom: 0.5 }}>
    <TopNav />
    <Routes>
    <Route path="/" element={<MyntraPage />} /> 
    <Route path="/filters" element={<FilterSidebar />} />{/* Default Route showing only TopNav */}
    <Route path="/shop" element={<MainPage />} />
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
      {/*
      <Route 
        path="/leaderboard" 
        element={
          <div>
            <SideNav />
            <Leaderboard />
          </div>
        } 
      />*/}

     <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/user/:userId" element={<Profile />} />

    </Routes>
    </div>
  </>
  );
};

export default App;
