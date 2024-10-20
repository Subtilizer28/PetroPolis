import React from 'react';
import { Link } from 'react-router-dom';
import './HomeScreen.css';

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <header className="header">
        <div className="logo">PETROPOLIS</div>
        <nav className="nav">
          <Link to="/profile" className='headerProfileButton'>Profile</Link>
          <Link to="/feed" className="headerFeedButton">Feed</Link>
          <Link to="/chat" className="headerChatButton">Chat</Link>
          <Link to="/mini-games" className="miniGameButton">Mini Games</Link>
          <Link to="/social" className="socialButton">Social</Link>
        </nav>
      </header>
      <main className="mainContent">
        <div className="textContent">
          <h1 className="title">Welcome to Your Pet's Room</h1>
          <p className="description">
            Here, you can take care of your beloved pet, play mini-games, and connect with friends. Make sure your pet stays happy and well-fed!
          </p>
        </div>
        <div className="imageContent">
          <img src="images/pet.png" alt="Pet Avatar" className="image" />
          <div className="petProfile">
            <div className="chip happinessChip">Happiness: 80%</div>
            <div className="chip hungerChip">Hunger: 20%</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomeScreen;