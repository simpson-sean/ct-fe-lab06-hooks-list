import React, {useState, useEffect} from 'react';
import { findCharacters } from '../services/LastAirbenderAPI';
import CharacterList from '../components/characters/CharacterList';

const LastAirbenderContainer = () => {
    
    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([])

    useEffect( () => {
        findCharacters().then((characters) => {
            setCharacters(characters);
            setLoading(false);
        })
    }, [] )

    if(loading)return<img src="https://powerusers.microsoft.com/t5/image/serverpage/image-id/118082i204C32E01666789C?v=v2"
    alt="loading spinner" />
            
    return(
        <CharacterList characters={characters} />
        )
};

export default LastAirbenderContainer;