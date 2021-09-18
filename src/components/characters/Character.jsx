import React from 'react';
import PropTypes from 'prop-types';


const Character = ({ name, image, gender, profession }) => (
    <>
        <img src={image} alt={name}></img>
        <h1>{name}</h1>
        <h3>{gender}</h3>
        <h3>{profession}</h3>
    </>
);

Character.propTypes = {
    id: PropTypes.string,
    image: PropTypes.string.isRequired,
};

export default Character;
