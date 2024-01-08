import React, { useState } from 'react';
import './header.css';
import Web from './web';
import Mobile from './mobile';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='header'>
      <div className='logo'>Yatharth</div>
      <div className='menu'>
        <div className='web-menu'>
          <Web />
        </div>
        <div className='mobile-menu'>
          <div onClick={() => setIsOpen(!isOpen)}>
            <i class='fa-solid fa-bars menu-icon'></i>
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
