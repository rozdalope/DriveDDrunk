import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import HomeHeader from '../components/HomeHeader';
import '../styles/HomePageStyles.css';
import Footer from '../components/Footer';
import image from '../assets/hero-logo.gif';


const HomePage = () => {

    const [loginOpen, setLoginOpen] = useState(false);
    const [registerOpen, setRegisterOpen] = useState(false);

    return (
        <div>
            <HomeHeader />
            <div className='homepage-container'>
                {/* Hero Section */}
                <div className='hero-container'>
                    <div className='hero-subtitle'>
                        <p>Do not drink and drive.</p>
                    </div>
                    <div>
                        <img src={image}
                            className='hero-logo'></img>
                    </div>
                    <div className='service-headline'>
                        <h1 className='hero-section-headline'>
                            <span className='hero-span'>Drunk?</span> Hire a driver.
                        </h1>
                    </div>
                    <div className='hero-section-text'>
                        Get home safely
                    </div>
                </div>

                {/* Buttons */}
                <div className='button-container'>
                    <div className='buttons'>
                        <Link
                            to='/login'>
                            <button
                                className='btn-icon btn-login'
                                onClick={() => {
                                    setLoginOpen(true);
                                }}
                            >Login
                            </button>
                            {loginOpen &&
                                <LoginPage
                                    setLoginOpenProps={() => setLoginOpen(false)} />}
                        </Link>
                        <Link
                            to='/register'>
                            <button
                                className='btn-icon btn-register'
                                onClick={() => {
                                    setRegisterOpen(true);
                                }}
                            >Register
                            </button>
                            {registerOpen &&
                                <RegisterPage
                                    setRegisterOpenProps={() => setRegisterOpen(false)} />}
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomePage;