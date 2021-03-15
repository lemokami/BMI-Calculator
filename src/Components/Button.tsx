import React from 'react';

interface Buttonprops {
  type?: 'button' | 'submit' | 'reset' | undefined;
  value?: string | null;
  clickFunc?: () => void;
}

const Button = ({ type, value, clickFunc }: Buttonprops) => {
  return (
    <button type={type || 'button'} onClick={clickFunc}>
      {value || 'Enter'}
    </button>
  );
};

export default Button;
