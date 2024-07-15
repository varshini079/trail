import React from 'react';
import TopUsers from './topusers';
import TopCollections from './topwardrobes';
import './leaderboard.css';

const Leaderboard = () => {
  return (
    <div className="leaderboard">
      <div className="top-users">
        <TopUsers />
      </div>
      <TopCollections/>
    </div>
  );
};

export default Leaderboard;
