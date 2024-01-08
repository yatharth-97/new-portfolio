import React from 'react';
import './web.css';

const Web = () => {
  return (
    <div className='web'>
      <div className='web-option'>
        <a href='#project'>
          <i class='fa-solid fa-palette option-icon'></i> Projects
        </a>
      </div>
      <div className='web-option'>
        <a href='#skills'>
          <i class='fa-solid fa-laptop-code option-icon'></i> Skills
        </a>
      </div>
      <div className='web-option'>
        <a href='#work'>
          <i class='fa-solid fa-briefcase option-icon'></i>Work
        </a>
      </div>
      <div className='web-option'>
        <a href='#contact'>
          <i class='fa-solid fa-user option-icon'></i> Contact
        </a>
      </div>
    </div>
  );
};

export default Web;
