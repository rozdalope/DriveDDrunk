import React from 'react';
import { ADD_CAR } from '../redux/types'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../styles/AddCarPageStyles.css';

const AddCarPage = () => {
    const navigate = useNavigate();

    const [carModel, setCarModel] = useState('');
    const [brand, setBrand] = useState('');
    const [type, setType] = useState('');
    const [plateNumber, setPlateNumber] = useState('');
    const [color, setColor] = useState('');

    const dispatch = useDispatch();

    const onChangeCarModelHandler = (event) => {
        setCarModel(event.target.value);
    }

    const onChangeBrandHandler = (event) => {
        setBrand(event.target.value);
    }

    const onChangeTypeHandler = (event) => {
        setType(event.target.value);
    }

    const onChangePlateNumberHandler = (event) => {
        setPlateNumber(event.target.value);
    }

    const onChangeColorHandler = (event) => {
        setColor(event.target.value);
    }

    const onSubmitFormHandler = (event) => {
        event.preventDefault();
        dispatch({
            type: ADD_CAR,
            payload: {
                carModel: carModel,
                plateNumber: plateNumber,
                color: color,
                brand: brand,
                type: type
            }
        });

        // reset to its default value
        setCarModel('');
        setPlateNumber('');
        setColor('');
        setBrand('');
        setType('');
        navigate('/cars')
    }


    return (
        <div className='addCar-modal-container'>
            {/* Modal */}
            <div className='addCar-modal-content'>
                <h2 className="modal-title fs-5"
                    id="staticBackdropLabel">
                    Add Car
                </h2>
                <div className="modal-body-register">

                    <form onSubmit={onSubmitFormHandler}>

                        <label
                            htmlFor="brand"
                            className="form form-label"
                        ></label>
                        <input
                            type="text"
                            placeholder='Brand'
                            className="form-control"
                            id="brand"
                            value={brand}
                            onChange={onChangeBrandHandler} />

                        <label
                            htmlFor="carModel"
                            className="form form-label"
                        ></label>
                        <input
                            placeholder='Car Model'
                            type="text"
                            className="form form-control"
                            id="carModel"
                            value={carModel}
                            onChange={onChangeCarModelHandler} />

                        <label
                            htmlFor="type"
                            className="form form-label"
                        ></label>
                        <input
                            type="text"
                            placeholder='Car Type'
                            className="form form-control"
                            id="carType"
                            value={type}
                            onChange={onChangeTypeHandler} />

                        <label
                            htmlFor="plateNumber"
                            className="form form-label"
                        ></label>
                        <input
                            placeholder='Plate Number'
                            type="text"
                            className="form-control"
                            id="plateNumber"
                            value={plateNumber}
                            onChange={onChangePlateNumberHandler}
                            required />

                        <label
                            htmlFor="Color"
                            className="form form-label"
                        ></label>
                        <input
                            placeholder='Color'
                            type="text"
                            className="form-control"
                            id="color"
                            value={color}
                            onChange={onChangeColorHandler}
                            required />

                        <br></br>
                        <div className='addCar-button'>
                            <button type='submit'>
                                Add
                            </button>
                            <button
                            >Cancel
                            </button>
                        </div>

                    </form>
                </div>
            </div >
        </div >
    )
}

export default AddCarPage;
