import React from 'react';
import styles from '../styles/datafield.module.css';
interface FieldData {
  labelName: string;
  placeHolder: string | undefined;
  type: string | undefined;
  changeFunc: React.Dispatch<React.SetStateAction<string>>;
  isRequired?: boolean;
}

const DataField = ({
  labelName,
  placeHolder,
  changeFunc,
  type,
  isRequired,
}: FieldData) => {
  return (
    <div className={styles.field}>
      <label htmlFor={labelName} className={styles.field__label}>
        {labelName}
      </label>
      <input
        type={type || 'text'}
        placeholder={placeHolder}
        id={labelName}
        onChange={(e) => changeFunc(e.target.value)}
        required={isRequired || false}
        className={styles.field__input}
      />
    </div>
  );
};

export default DataField;
