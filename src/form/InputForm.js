import React, { useState } from 'react'; // Import React and useState hook
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Button.css'; // Import custom CSS for button styling

function InputForm(){
    const [name, setName] = useState(''); // State for name 
    const [email, setEmail] = useState(''); // State for email
    const [password, setPassword] = useState(''); // State for password

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
        alert(`Name: ${name}, Email: ${email}, Password: ${password}`); // Alert with data inputted
    };

 return (
    <div className="container mt-5">
      <h3 className="mb-4">Enter your details</h3>
      <form onSubmit={handleSubmit} className="inputForm">
        <div className="userInput">
          <label className="form-label">Name</label>
          <input 
            type="text"
            className="form-control"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)} 
            required
          />
        </div>

        <div className="userInput">
          <label className="form-label">Email</label>
          <input 
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
        </div>

        <div className="userInput">
          <label className="form-label">Password</label>
          <input 
            type="password"
            className="form-control"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required
          />
        </div>

        <button type="submit" className="submitButton">Submit</button>
      </form>
    </div>
  );
}

export default InputForm;



