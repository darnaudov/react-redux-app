import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../utils/routes';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <Link to={routes.home()}>home</Link>
      <Link to={routes.login()}>login</Link>
    </div>
  );
}

export default Header;
