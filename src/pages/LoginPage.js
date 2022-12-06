import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/LoginPageStyles.css';

const LoginPage = ({ setLoginOpenProps }) => {
    return (
        <div className='login-modal-container'>
            {/* Modal */}
            <div className='login-modal-content'>
                <h2 className="modal-title fs-5"
                    id="staticBackdropLabel">
                    Welcome back!
                </h2>
                <div className="modal-body">
                    <form>
                        <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                        >Email address:</label>
                        <input
                            type="email"
                            required
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp" />
                        <label
                            htmlFor="exampleInputPassword1"
                            className="form-label"
                        >Password:</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1" />
                        <div>
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck1" />
                            <label
                                className="form-check-label"
                                htmlFor="exampleCheck1">
                                Remember me
                            </label>
                        </div>
                        <div className='login-button'>
                            <Link
                                to='/book'>
                                <button className='btn-login'>
                                    Login
                                </button>
                            </Link>
                            <Link
                                to='/'>
                                < button
                                    className='btn-cancel'
                                >Cancel
                                </button>
                            </Link>
                        </div>
                    </form>
                    <br />No account yet? <Link to='/register' className='link'>Register here</Link>
                </div>
            </div >
        </div >

    )
}

export default LoginPage;