import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import { Link } from 'react-router-dom';

const CharacterList = ({ characters }) => (
    <ul aria-label = "characters">
        {characters.map((character) => (
            <div key={character.id}>
                <li> 
                    <Link to={`/${character.id}`}>          
                    <Character
                        image={character.image}
                        name={character.name}
                    />
                    </Link>
                </li>
            </div>
        )
        )}
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
