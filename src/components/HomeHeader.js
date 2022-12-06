import React from 'react';
import { Link } from 'react-router-dom';
// import whitelogo from '../assets/images/logo-white.png';
import '../styles/HomeHeaderStyles.css';
// import '../styles/Hero.css';
import logo from '../assets/logo_white.png';



const HomeHeader = () => {

    return (
        <nav className='nav-header'>
            <div className='nav-header-mid'>
                <Link
                    to='/'>
                    <img src={logo} className='homeHeader-logo' />
                </Link>
            </div>
        </nav >
    )
}

export default HomeHeader;