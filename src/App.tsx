import React, { useState } from 'react';
import styles from './styles/app.module.css';
import Button from './Components/Button';
import DataField from './Components/DataField';

function App() {
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [bmi, setBmi] = useState<string | null>();

  const generateBmi = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (height && weight) {
      e.preventDefault();
      const BMI: number = Number(weight) / (Number(height) / 100) ** 2;
      setBmi(BMI.toFixed(2));
    }
  };

  return (
    <div className={styles.app}>
      <form className='form'>
        <DataField
          labelName='Weight'
          placeHolder='Enter your weight in kg'
          changeFunc={setWeight}
          type='number'
          isRequired={true}
        />
        <DataField
          labelName='Height'
          placeHolder='Enter your height in cm'
          changeFunc={setHeight}
          type='number'
          isRequired={true}
        />
        <Button type='submit' value='Calculate BMI' clickFunc={generateBmi} />
      </form>
      <h3>{bmi}</h3>
    </div>
  );
}

export default App;
