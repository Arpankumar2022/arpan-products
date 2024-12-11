import React, { useState } from 'react';
import './Header.css';

const MenuItem = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="menu-item">
      <div className="menu-title" onClick={() => setOpen(!open)}>
        {title}
      </div>
      {open && <div className="submenu">{children}</div>}
    </div>
  );
};

export default MenuItem;
