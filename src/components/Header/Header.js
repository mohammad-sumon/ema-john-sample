import React from 'react';
import logo from '../../logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
           <img src={logo} alt="" />
           <div className='menu-items'>
            <a href="/home">Home</a>
            <a href="/products">Products</a>
            <a href="/services">Services</a>
            <a href="/about">About Us</a>
           </div>
        </nav>
    );
};

export default Header;