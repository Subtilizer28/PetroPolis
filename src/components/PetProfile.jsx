import React from 'react';
import { Link } from 'react-router-dom';
import './PetProfile.css';

const PetProfile = () => {
  return (
    <div className="profileContainer">
      <h1>Lucy</h1>
      <img src="images/pet.png" alt="Pet Avatar" className="avatar" />
      <div className="stats">
        <div className="chip nameChip">Name: Lucy</div>
        <div className="chip ageChip">Age: 1 Year 2 Months</div>
        <div className="chip genderChip">Gender: Female</div>
        <div className="chip aboutChip">About: When Lucy was a kitten, we adopted her into our family. She is our beloved cat. She would debug every react code and also remembers every hook without documentation. She dedicates this success to Beyonce</div>
        <div className="chip happinessChip">Happiness: 80%</div>
        <div className="chip hungerChip">Hunger: 20%</div>
      </div>
      <br />
      <Link to="/" className="homeButton">Home</Link>
    </div>
  );
};

export default PetProfile;
