import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Button.css';

function NoGoals() {
  return <p className="text-muted">No goals set yet.</p>;
}

function GoalList({ goals }) {
  return (
    <ul className="list-group mt-3">
      {goals.map((goal, index) => (
        <li key={index} className="list-group-item">{goal}</li>
      ))}
    </ul>
  );
}

function GoalDisplay({ goals }) {
  if (goals.length === 0) {
    return <NoGoals />;
  }
  return <GoalList goals={goals} />;
}

function Goals() {
  const [goal, setGoal] = useState('');
  const [goals, setGoals] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setGoals([...goals, goal]);
    setGoal('');
  };

  return (
    <div className="container mt-5">
      <h4 className="mb-3">Set Your Goals</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Enter a goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        
        />
        <button type="submit" className="submitButton">Add Goal</button>
      </form>
      <GoalDisplay goals={goals} />
    </div>
  );
}

export default Goals;
