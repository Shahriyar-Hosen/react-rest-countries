import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

const Country = (props) => {
  console.log(props.country);
  const { name, flags, capital, population, region, continents,maps,startOfWeek } =
    props.country;
  console.log(props.country);
  return (
    <div>
      <div className="col">
        <div className="card h-100 p-4 bg-info bg-gradient bg-opacity-10">
          <img src={flags.png} alt={name.common} />
          <div className="card-body">
            <h1 className="card-title">{name.common}</h1>
            <h4 className="card-text">Capital:{capital}</h4>
            <p className="card-text fs-5">Population:{population}</p>
            <div className="d-flex justify-content-around flex-wrap m-3 p-3 ">
            <p className="card-text mx-1">Continents:{continents}</p>
            <p className="card-text mx-1">Region:{region}</p>
            <p className="card-text mx-1">Start Of Week: {startOfWeek}</p>
            </div>

            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
              <Dropdown.Item href={maps.googleMaps}>Google Maps</Dropdown.Item>
              <Dropdown.Item href={maps.openStreetMaps}>Street Maps</Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
