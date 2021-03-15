import React, { useState } from 'react';
import styles from './styles/app.module.css';
import Button from './Components/Button';
import DataField from './Components/DataField';

function App() {
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [bmi, setBmi] = useState<string | null>('0');
  const [result, setResult] = useState<string>('');

  const generateBmi = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (height && weight) {
      e.preventDefault();
      const BMI: number = Number(weight) / (Number(height) / 100) ** 2;
      let speculation: string = '';
      if (BMI <= 18.5) speculation = 'Underweight';
      else if (BMI > 18.5 && BMI < 24.9) speculation = 'Normal';
      else if (BMI > 25 && BMI < 29.9) speculation = 'OverWeight';
      else speculation = 'Obese';

      setBmi(BMI.toFixed(2));
      setResult(speculation);
    }
  };

  return (
    <div className={styles.app}>
      <div className={styles.app__calc}>
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
      </div>
      <div className={styles.app__result}>
        <h3 className={styles.bmi}>{bmi}</h3>
        <h4 className={styles.result}>{result}</h4>
      </div>
    </div>
  );
}

export default App;
