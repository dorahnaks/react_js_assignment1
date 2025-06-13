import React from 'react';
import './GreetingCard.css';

const GreetingCard = ({ name, age, school, address }) => {
  return (
    <div className="card">
      <h2 className="card-title">Hi there, I'm called {name}</h2>
      <ul className="card-details">
        <li><strong>I am </strong> {age} years old</li>
        <li><strong>I went to</strong> {school}</li>
        <li><strong>Its located in</strong> {address}</li>
      </ul>
    </div>
  );
};

export default GreetingCard;