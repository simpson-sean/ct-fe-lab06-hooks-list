import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
//import { link } from 'react-router-dom';

const CharacterList = ({ characters }) => (
    <ul aria-label = "characters">
        {characters.map((character) => {
         return(
            <li key={character.id}>
            <Character
                image={character.image}
                name={character.name}
            />
            </li>
         )   
        })}
    </ul>
);

CharacterList.propTypes = {
    characters: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired 
        })
    ).isRequired
};

export default CharacterList;
