import React from 'react';

const Button = ({ text, onBtnClick}) => {
  return (
    <button className="Button" onClick={onBtnClick}>{text}</button>
  );
};

export default Button;