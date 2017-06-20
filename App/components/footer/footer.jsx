import React from 'react';
import ReactDOM from 'react-dom';
import classes from './footer.scss';

const Footer = () => {
  return (
    <footer>
      <div style={{ width: '50%', margin: '0 auto', color: '#bb00ff' }} >Design with: Velocity.js、flexgridcss、sass、RWD table、timeline、react、redux、Fabric.js</div>
      {'©2017 Ernie Yang.All rights reserved.'}
    </footer>
  )
}

export default Footer;
