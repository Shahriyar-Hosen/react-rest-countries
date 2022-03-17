import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, capital, population, region, timezones, flags} = props.country;
    return (
        <div className='country'>
            <h1>{name}</h1>
            <img src={flags.png} alt="" />
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p>Time zones: {timezones}</p>
        </div>
    );
};

export default Country;