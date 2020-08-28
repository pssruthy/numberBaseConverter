import React from 'react';
import InputBox from './InputBox';

const Base = ({ base, onChange, decimal }) => {
  return (
    <div>
      <label> Base {base}</label>
      <InputBox
        base={base}
        onChange={onChange}
        value={decimal.toString(base)}
      ></InputBox>
    </div>
  );
};

export default Base;
