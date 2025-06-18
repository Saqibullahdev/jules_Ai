import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'> {/* Changed class name */}
      <p>&copy; {new Date().getFullYear()} Computer Cell Society. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
