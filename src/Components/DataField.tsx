import React from 'react';

interface FieldData {
  labelName: string;
  placeHolder: string | undefined;
  type: string | undefined;
  changeFunc: React.Dispatch<React.SetStateAction<string>>;
}

const DataField = ({ labelName, placeHolder, changeFunc, type }: FieldData) => {
  return (
    <div>
      <label htmlFor={labelName}>{labelName}</label>
      <input
        type={type || 'text'}
        placeholder={placeHolder}
        id={labelName}
        onChange={(e) => changeFunc(e.target.value)}
        required
      />
    </div>
  );
};

export default DataField;
