import React from 'react';
import GreetingCard from './GreetingCard';
import './GreetingCard.css';
import InputForm from './form/InputForm'
import TextareaForm from './form/TextAreaForm';
import SelectForm from './form/SelectForm';
import Goals from './form/GoalForm';
import Garage from './form/GarageForm';
import Parking from './form/Parking';

function App() {
  return (
    <div>

      <InputForm/>
      <TextareaForm/>
      <SelectForm/>
      <Goals/>
      <Garage/>
      <Parking/>

      <div className="card-container">
        <GreetingCard name="JULIET" age={22}
         school="ELITE" address="ENTEBBE" />
        <GreetingCard name="DORAH" age={21}
         school="OUR LADY" address="MUKONO" />
        <GreetingCard name="WITNEY" age={22}
        school="St. Mary's SS" address="Jinja" />
      </div>
    </div>    
  );
}



export default App;
