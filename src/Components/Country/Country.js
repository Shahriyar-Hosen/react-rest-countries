import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, capital, population, region, timezones} = props.country;
    console.log(props.country);
    return (
        <div className='country'>
            <h1>Name: {name}</h1>
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p>Time zones: {timezones}</p>
        </div>
    );
};

export default Country;