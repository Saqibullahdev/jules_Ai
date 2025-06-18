import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <a href='/' className='navbar-logo'>CompCell Society</a>
        <ul className='navbar-menu'>
          <li><a href='#mission'>Mission</a></li>
          <li><a href='#members'>Members</a></li>
          <li><a href='#workshops'>Workshops</a></li>
          <li><a href='#events'>Events</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
