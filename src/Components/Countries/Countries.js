import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
        .then(res=>res.json())
        .then(data =>setCountries(data))
    },[])
    return (
        <div>
            <h1>All country in tha world</h1>
            {
                countries.map((country) => <Country country = {country}></Country>)
            }
        </div>
    );
};

export default Countries;