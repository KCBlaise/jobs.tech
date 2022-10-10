import React from 'react';
import { ReactComponent as HamburgerMenu } from '../icons/icons8-menu.svg';
import { ReactComponent as Logo } from '../icons/logo.svg';
import { Link } from 'react-router-dom';

const Nav = ({ children }) => {
  return (
    <>
    <nav>
        <Link to='/'>
          <figure className="logo"><Logo/></figure>
        </Link>
        <ul>
            <Link to='/'>
              <li>Home</li>
            </Link>
            <Link to='/jobs'>
              <li>Jobs</li>
            </Link>
            <li><HamburgerMenu/></li>
        </ul>
    </nav>
    {children}
    </>
  )
}

export default Nav