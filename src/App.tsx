import React, { useEffect, useState } from 'react';
import styles from './styles/app.module.css';
import Button from './Components/Button';
import DataField from './Components/DataField';

function App() {
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');

  const generateBmi = () => {
    console.log(height, weight);
  };
  useEffect(() => {
    const body = document.body;
    console.log(body.style);
  });
  return (
    <div className={styles.app}>
      <form className='form'>
        <DataField
          labelName='Weight'
          placeHolder='Enter your weight in kg'
          changeFunc={setWeight}
          type='text'
          isRequired={true}
        />
        <DataField
          labelName='Height'
          placeHolder='Enter your height in cm'
          changeFunc={setHeight}
          type='text'
          isRequired={true}
        />
        <Button type='submit' value='Calculate BMI' clickFunc={generateBmi} />
      </form>
    </div>
  );
}

export default App;
