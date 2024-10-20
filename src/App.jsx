import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import PetProfile from './components/PetProfile';
import FeedingMenu from './components/FeedingMenu';
import ChatBox from './components/ChatBox'
import MiniGames from './components/MiniGames';
import Social from './components/Social';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/profile" element={<PetProfile />} />
      <Route path="/feed" element={<FeedingMenu />} />
      <Route path="/chat" element={<ChatBox />} />
      <Route path="/mini-games" element={<MiniGames />} />
      <Route path="/social" element={<Social />} />
      {/* Add other routes for Feed, Chat, Mini Games, Social here */}
    </Routes>
  </Router>
);

export default App;
