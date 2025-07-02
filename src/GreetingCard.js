import React from 'react';
import './GreetingCard.css';

const GreetingCard = ({ name, age, school, address }) => {
  return (
    <div className="card">
      <h2 className="card-title">Hello, my name is {name}</h2>
      <ul className="card-details">
        <li><strong>Age:</strong> {age}</li>
        <li><strong>School:</strong> {school}</li>
        <li><strong>Address:</strong> {address}</li>
      </ul>
    </div>
  );
};

export default GreetingCard;