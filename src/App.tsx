import React, { useState } from 'react';
import styles from './styles/app.module.css';
import Button from './Components/Button';
import DataField from './Components/DataField';

function App() {
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [bmi, setBmi] = useState<string | null>('');
  const [result, setResult] = useState<string>('');

  const generateSpec = (BMI: number): string => {
    if (BMI <= 18.5) return 'underweight';
    else if (BMI > 18.5 && BMI < 24.9) return 'normal';
    else if (BMI > 25 && BMI < 29.9) return 'overweight';
    else return 'obese';
  };

  //function to remove background color added
  const removeBgc = () => {
    document.body.classList.remove(`body--underweight`);
    document.body.classList.remove(`body--normal`);
    document.body.classList.remove(`body--overweight`);
    document.body.classList.remove(`body--obese`);
  };

  //function to genrate bmi from the weight & height
  const generateBmi = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (height && weight) {
      e.preventDefault();
      const BMI: number = Number(weight) / (Number(height) / 100) ** 2;
      let speculation: string = '';

      speculation = generateSpec(BMI);
      removeBgc();
      document.body.classList.add(`body--${speculation}`);

      setBmi(BMI.toFixed(2));
      setResult(`${speculation[0].toUpperCase()}${speculation.slice(1)}`);
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
