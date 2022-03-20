import React, { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  /*  const [countries, setCountries] = useState([]);
    
     useEffect(() => {
     fetch('https://restcountries.com/v3.1/all')
     .then(res => res.json())
     .then(data => setCountries(data))
     }, []) */

  return (
    <div>
      <h1>Welcome to my rest countries</h1>
      <div className="container mx-auto row row-cols-1 row-cols-md-3 g-4 mt-5">
          {
              countries.map((country) => <Country country = {country} key = {country.ccn3}></Country>)
          }
      </div>
      
    </div>
  );
};

export default Countries;
