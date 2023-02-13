import React from 'react';
import './Header.css';
import logo from './Images/logo.png'

function Header() {
  return (
    <>
        <div className='header'>
          <img className='logo' src={logo} alt='logo' width="60" height="60"/>
          <h1 className='logo_name'> Keep Notes</h1>
        </div>
    </>
  );              
}

export default Header;
