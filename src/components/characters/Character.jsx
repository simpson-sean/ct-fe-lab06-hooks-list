import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, image }) => (
    <>
        <img src={image} alt={name}></img>
        <p>{name}</p>
    </>
);

Character.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default Character;
