import React, { useEffect, useRef } from 'react';

const Searchbar = (props) => {

    const { currLocation, setCurrLocation } = props;
    const ref = useRef();


    return (
        <div className='searchLocation'>
            <div className='setCurrLocation'></div>
        </div>
    )
}

export default Searchbar;