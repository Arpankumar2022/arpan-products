import React from 'react';
import './Header.css';

const Menu = ({ children }) => {
  return (
    <div className="menu">
      {children}
    </div>
  );
};

export default Menu;
