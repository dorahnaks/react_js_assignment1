import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Button.css'; // Import custom CSS for button styling

function SelectForm() {
  const [course, setCourse] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Selected course:', course);
  };

  return (
    <div className="container mt-5">
      <h4 className="mb-3">Course Selection</h4>
      <form onSubmit={handleSubmit} className="border p-4 bg-light shadow rounded">
        <div className="mb-3">
          <label className="form-label">Choose a Course</label>
          <select
            className="form-select"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
          >
            <option value="">-- Select --</option>
            <option value="React">React JS</option>
            <option value="Angular">Python</option>
            <option value="Vue">HTML & CSS</option>
          </select>
        </div>
        <button type="submit" className="submitButton">Submit</button>
      </form>
    </div>
  );
}

export default SelectForm;
// This component allows users to select a course from a dropdown menu and submit their choice.
// I have used Bootstrap for styling to ensure a consistent and responsive design.
// Bootstrap has certain key words for styling that one should use
// Bootstrap uses class names for styling, such as "form-select" for dropdowns and "btn btn-info" for buttons.