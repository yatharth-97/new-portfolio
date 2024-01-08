import React from 'react';
import './mobile.css';

const Mobile = ({ isOpen, setIsOpen }) => {
  return (
    <div className='mobile'>
      <div className='close-icon' onClick={() => setIsOpen(!isOpen)}>
        <i class='fa-regular fa-circle-xmark'></i>
      </div>

      <div className='mobile-options'>
        <div className='mobile-option'>
          <a href='#project'>
            <i class='fa-solid fa-palette option-icon'></i> Projects
          </a>
        </div>
        <div className='mobile-option'>
          <a href='#skills'>
            <i class='fa-solid fa-laptop-code option-icon'></i> Skills
          </a>
        </div>
        <div className='mobile-option'>
          <a href='#work'>
            <i class='fa-solid fa-briefcase option-icon'></i>Work
          </a>
        </div>
        <div className='mobile-option'>
          <a href='#contact'>
            <i class='fa-solid fa-user option-icon'></i> Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
