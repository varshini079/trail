import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CombinedImageLists from './CombinedImageLists';
import ImageDetailPage from './ImageDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CombinedImageLists />} />
        <Route path="/detail/:wardrobe/:index" element={<ImageDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
