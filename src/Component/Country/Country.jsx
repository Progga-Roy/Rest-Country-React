import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name,flags,population,area} = props.country
    return (
        <div className='country'>
            <h3>{name.common}</h3>
            <img src={flags.png} alt="" />
            <h4>Area: {area}</h4>
            <p>Population: {population}</p>

        </div>
    );
};

export default Country;