import React from 'react';
import './FeedingMenu.css';
import { Link } from 'react-router-dom';

const FeedingMenu = () => {
  const foodItems = [
    { id: 1, name: 'Dodono', category: 'Fruits' },
    { id: 2, name: 'Dodome', category: 'Vegetables' },
    { id: 3, name: 'Edoom', category: 'Grains' },
    { id: 4, name: 'Dooom', category: 'Grains' },
    { id: 5, name: 'Doooo', category: 'Grains' },
    { id: 6, name: 'Edoom', category: 'Grains' },
    { id: 7, name: 'Demoom', category: 'Grains' },
    { id: 8, name: 'Demoom', category: 'Grains' },
    { id: 9, name: 'Demoom', category: 'Grains' },
    { id: 10, name: 'Demoom', category: 'Beverages' },
    { id: 11, name: 'Demoom', category: 'Bubbles' },
    { id: 12, name: 'Demoom', category: 'Bubbles' },
  ];

  return (
    <div className="feeding-menu">
      <div className="menu-header">
        <h1>Feeding Menu</h1>
      </div>
      <div className="menu-content">
        {foodItems.map(item => (
          <div key={item.id} className="food-item">
            <h3>{item.name}</h3>
            <p>{item.category}</p>
          </div>
        ))}
      </div>
      <br />
      <center><Link to="/" className="homeButton">Home</Link></center>
    </div>
  );
};

export default FeedingMenu;