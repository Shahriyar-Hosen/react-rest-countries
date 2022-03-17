import React from 'react';

const Country = (props) => {
    const {name} = props.country;
    console.log(name);
    return (
        <div>
            <h1>Name: {name}</h1>
        </div>
    );
};

export default Country;