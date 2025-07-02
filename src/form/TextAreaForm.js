import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Button.css'; // Import custom CSS for button styling

function TextareaForm() {
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Textarea value:', message);
  };

  return (
    <div className="container mt-5">
      <h4 className="mb-3">Feedback Form</h4>
      <form onSubmit={handleSubmit} className="border p-4 bg-light shadow rounded">
        <div className="mb-3">
          <label className="form-label">Your Message</label>
          <textarea
            className="form-control"
            rows="4"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submitButton">Submit</button>
      </form>
    </div>
  );
}

export default TextareaForm;
