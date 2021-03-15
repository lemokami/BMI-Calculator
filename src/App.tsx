import React, { useState } from 'react';
import Button from './Components/Button';
import DataField from './Components/DataField';

function App() {
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');

  const generateBmi = () => {
    console.log(height, weight);
  };
  return (
    <div className='app'>
      <form className='form'>
        <DataField
          labelName='Weight'
          placeHolder='Enter your weight in kg'
          changeFunc={setWeight}
          type='number'
        />
        <DataField
          labelName='Height'
          placeHolder='Enter your height in cm'
          changeFunc={setHeight}
          type='number'
        />
      </form>
      <Button type='submit' value='Calculate BMI' clickFunc={generateBmi} />
    </div>
  );
}

export default App;
