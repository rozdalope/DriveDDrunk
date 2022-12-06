import React from 'react';
import { CREATE_OWNER } from '../redux/types'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';


const RegisterPage = () => {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    const dispatch = useDispatch();

    const onChangeFNameHandler = (event) => {
        setFirstName(event.target.value);
    }

    const onChangeLNameHandler = (event) => {
        setLastName(event.target.value);
    }

    const onChangePhoneHandler = (event) => {
        setPhoneNumber(event.target.value);
    }

    const onChangeEmailHandler = (event) => {
        setEmail(event.target.value);
    }

    const onChangePasswordHandler = (event) => {
        setPassword(event.target.value);
    }

    const onChangeLatHandler = (event) => {
        setLatitude(event.target.value);
    }

    const onChangeLongHandler = (event) => {
        setLongitude(event.target.value);
    }

    const onSubmitFormHandler = (event) => {
        event.preventDefault();
        dispatch({
            type: CREATE_OWNER,
            payload: {
                firstName: firstName,
                lastName: lastName,
                phoneNumber: phoneNumber,
                email: email,
                password: password,
                latitude: latitude,
                longitude: longitude
            }
        });

        // reset to its default value
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setPhoneNumber(null);
        setLatitude(null);
        setLongitude(null);
        navigate('/book')
    }


    return (
        <div className='login-modal-container'>
            {/* Modal */}
            <div className='login-modal-content'>
                <h2 className="modal-title fs-5"
                    id="staticBackdropLabel">
                    Sign up
                </h2>
                <div className="modal-body-register">
                    <form onSubmit={onSubmitFormHandler}>
                        <label
                            htmlFor="exampleInputFName"
                            className="form form-label"
                        ></label>
                        <input
                            placeholder='First Name'
                            type="text"
                            className="form form-control"
                            id="exampleInputFName"
                            value={firstName}
                            onChange={onChangeFNameHandler} />
                        <label
                            htmlFor="exampleInputLName"
                            className="form form-label"
                        ></label>
                        <input
                            type="text"
                            placeholder='Last Name'
                            className="form form-control"
                            id="exampleInputLName"
                            value={lastName}
                            onChange={onChangeLNameHandler} />

                        <label
                            htmlFor="phoneNumber"
                            className="form form-label"
                        ></label>
                        <input
                            placeholder='Phone Number'
                            type="number"
                            className="form-control"
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={onChangePhoneHandler}
                            required />

                        <label
                            htmlFor="exampleInputEmail1"
                            className="form form-label"
                        ></label>
                        <input
                            placeholder='Email'
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            value={email}
                            onChange={onChangeEmailHandler}
                            required />

                        <label
                            htmlFor="exampleInputPassword1"
                            className="form form-label"
                        ></label>
                        <input
                            type="password"
                            placeholder='Password'
                            className="form-control"
                            id="exampleInputPassword1"
                            value={password}
                            onChange={onChangePasswordHandler} />
                        Home Address:
                        <div className='address-latlng'>
                            <label
                                htmlFor="address-lat"
                                className="form form-label"
                            ></label>
                            <input
                                type="number"
                                placeholder='Latitude'
                                className="form-control address"
                                id="address-lat"
                                value={latitude}
                                onChange={onChangeLatHandler} />

                            <label
                                htmlFor="address-long"
                                className="form form-label"
                            ></label>
                            <input
                                type="number"
                                placeholder='Longitude'
                                className="form-control address"
                                id="address-long1"
                                value={longitude}
                                onChange={onChangeLongHandler} />
                        </div>

                        <br></br>
                        <div className='login-button'>
                            <button type='submit'>
                                Register
                            </button>
                            <Link
                                to='/'>
                                <button
                                >Cancel
                                </button>
                            </Link>
                        </div>

                    </form>
                </div>
            </div >
        </div >
    )
}

export default RegisterPage;
