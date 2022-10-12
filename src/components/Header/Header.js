import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/ideas.png'
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>  
                <img src={logo} alt=''/>          
            <div className='nav-link'>
                <Link to='/home'>Home</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/about'>About</Link>
            </div>
        </nav>
    );
};

export default Header;