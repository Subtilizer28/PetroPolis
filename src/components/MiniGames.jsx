import React from 'react';
import { Link } from 'react-router-dom';
import './MiniGames.css';

const MiniGames = () => {
  return (
    <div className="miniGamesContainer">
      <h1>Cat Mini Games</h1>
      <div className="gamesList">
        <div className="gameCard">
          <h2>Chase the Laser</h2>
          <p>Help your cat chase the laser pointer on the screen.</p>
        </div>
        <div className="gameCard">
          <h2>Feather Tease</h2>
          <p>Wave a virtual feather and watch your cat go wild!</p>
        </div>
        <div className="gameCard">
          <h2>Fish Tank</h2>
          <p>Your cat can interact with the animated fish in the tank.</p>
        </div>
        <div className="gameCard">
          <h2>Mouse Hunt</h2>
          <p>Let your cat hunt the mice as they pop up randomly.</p>
        </div>
      </div>
      <Link to="/" className="homeButton">Home</Link>
    </div>
  );
};

export default MiniGames;
