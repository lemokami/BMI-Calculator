import React from 'react';
import styles from '../styles/button.module.css';
interface Buttonprops {
  type?: 'button' | 'submit' | 'reset' | undefined;
  value?: string | null;
  clickFunc: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({ type, value, clickFunc }: Buttonprops) => {
  return (
    <button
      type={type || 'button'}
      onClick={(e) => clickFunc(e)}
      className={styles.btn}
    >
      {value || 'Enter'}
    </button>
  );
};

export default Button;
