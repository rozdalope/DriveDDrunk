import React from 'react';
import { Link } from 'react-router-dom';
// import whitelogo from '../assets/images/logo-white.png';
import '../styles/PagesHeaderStyles.css';
// import '../styles/Hero.css';
import logo from '../assets/logo_secondary_white.png';
import { HiOutlineLogout } from "react-icons/hi";

const PagesHeader = () => {

    return (
        <nav className='nav-header'>
            <div className='nav-header-left'>
                <Link
                    to='/'>
                    <img src={logo}
                        className='pagesHeader-logo' />
                </Link>
            </div>
            <div className='nav-header-right'>
                <Link
                    to='/'>
                    < HiOutlineLogout
                        className='navHeader-right-icon' />
                </Link>
            </div>
        </nav >
    )
}

export default PagesHeader;