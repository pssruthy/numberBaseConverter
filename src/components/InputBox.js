import React from 'react';

const InputBox = ({ onChange, base, value }) => {
  return (
    <input
      value={value}
      onChange={(event) => {
        onChange(event.target.value, base);
      }}
    ></input>
  );
};

export default InputBox;
