import React from 'react';

const Modal = ({ fullImage}) => {
  return (
    <div className="Overlay">
      <div className="Modal">
        <img src={fullImage} alt="" />
      </div>
    </div>
  );
};

export default Modal;