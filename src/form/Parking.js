import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Button.css';

function EmptyParking() {
  return <p className="text-muted">No cars parked.</p>;
}

function ParkingList({ plates }) {
  return (
    <ul className="list-group mt-3">
      {plates.map((plate, index) => (
        <li key={index} className="list-group-item">Slot {index + 1}: {plate}</li>
      ))}
    </ul>
  );
}

function ParkingDisplay({ plates }) {
  if (plates.length === 0) {
    return <EmptyParking />;
  }
  return <ParkingList plates={plates} />;
}

function Parking() {
  const [plate, setPlate] = useState('');
  const [plates, setPlates] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlates([...plates, plate]);
    setPlate('');
  };

  return (
    <div className="container mt-5">
      <h4 className="mb-3">Parking Slots</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Enter plate number"
          value={plate}
          onChange={(e) => setPlate(e.target.value)}
          required
        />
        <button type="submit" className="submitButton">Park Car</button>
      </form>
      <ParkingDisplay plates={plates} />
    </div>
  );
}

export default Parking;
// Worked on the Parking component to manage a list of parked cars.
// It includes functionality to add cars by their plate numbers and display them in a list.