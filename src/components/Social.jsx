import React from 'react';
import { Link } from 'react-router-dom';
import './Social.css';

const Social = () => {
  const users = [
    { id: 1, name: 'Alice', pet: 'Bobby the Beagle' },
    { id: 2, name: 'Bob', pet: 'Milo the Maine Coon' },
    { id: 3, name: 'Charlie', pet: 'Bella the Bulldog' },
    { id: 4, name: 'Daisy', pet: 'Leo the Labrador' },
    { id: 5, name: 'Ethan', pet: 'Mittens the Siamese' },
    { id: 6, name: 'Fiona', pet: 'Rocky the Rottweiler' },
    { id: 7, name: 'George', pet: 'Chloe the Chihuahua' },
    { id: 8, name: 'Hannah', pet: 'Max the Mastiff' },
    { id: 9, name: 'Isaac', pet: 'Simba the Shiba Inu' },
    { id: 10, name: 'Jasmine', pet: 'Nala the Norwegian Forest Cat' },
  ];

  return (
    <div className="socialContainer">
      <h1>Connect with Friends</h1>
      <div className="usersList">
        {users.map(user => (
          <div key={user.id} className="userCard">
            <h2>{user.name}</h2>
            <p>Pet: {user.pet}</p>
            <button className="connectButton">Connect</button>
            <button className="visitButton">Visit Pet</button>
          </div>
        ))}
      </div>
      <Link to="/" className="homeButton">Home</Link>
    </div>
  );
};

export default Social;
