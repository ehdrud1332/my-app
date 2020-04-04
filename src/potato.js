import React from 'react';
import PropTypes from 'prop-types';

function Potato({ name, picture, rating }) {
    return (
        <div>
            <h1> i love {name} </h1>
            <h4>{rating} / 5.0</h4>
            <img src={picture}/>
        </div>
    );
}
// potato propTypes를 선언
Potato.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number
};


export default Potato;