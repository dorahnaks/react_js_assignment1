import React from 'react';
import GreetingCard from './GreetingCard';
import './GreetingCard.css';

function App() {
  return (
     <div className='greetings-card'>
        <GreetingCard  
        name = 'Dorothy'
        age = '21'
        school = 'BRIGHT COLLEGE NANSANA'
        address = 'Nansana'
        />

        <GreetingCard  
        name = 'Whitney'
        age = '21'
        school = 'MENGO SENIOR SCHOOL'
        address = 'Mengo'
        />

        <GreetingCard  
        name = 'Julie'
        age = '22'
        school = 'BUDDO SS'
        address = 'Masaka'
        />
    </div>
  );
}

export default App;
