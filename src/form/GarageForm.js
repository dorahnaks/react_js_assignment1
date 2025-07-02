import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Button.css';

function EmptyGarage() {
  return <p className="text-muted">Garage is empty.</p>;
}

function GarageList({ cars }) {
  return (
    <ul className="list-group mt-3">
      {cars.map((car, index) => (
        <li key={index} className="list-group-item">{car}</li>
      ))}
    </ul>
  );
}

function GarageDisplay({ cars }) {
  if (cars.length === 0) {
    return <EmptyGarage />;
  }
  return <GarageList cars={cars} />;
}

function Garage() {
  const [car, setCar] = useState('');
  const [cars, setCars] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCars([...cars, car]);
    setCar('');
  };

  return (
    <div className="container mt-5">
      <h4 className="mb-3">Garage Inventory</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Enter a car"
          value={car}
          onChange={(e) => setCar(e.target.value)}
          required
        />
        <button type="submit" className="submitButton">Add Car</button>
      </form>
      <GarageDisplay cars={cars} />
    </div>
  );
}

export default Garage;
// Worked on the GarageForm component to manage a list of cars in a garage.
// It includes functionality to add cars and display them in a list.