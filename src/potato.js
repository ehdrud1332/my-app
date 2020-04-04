import React from 'react';

function Potato({ name, picture }) {
    return (
        <div>
            <h1> i love {name} </h1>
            <img src={picture}/>
        </div>
    );
}

export default Potato;