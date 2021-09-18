import React, { useState, useEffect } from 'react';
import { findCharacterById } from '../services/LastAirbenderAPI';
import { Link, useParams } from 'react-router-dom';
import Character from '../components/characters/Character';


const LastAirbenderDetailsContainer = () => {

    const [loading, setLoading] = useState(true);
    const [character, setCharacter] = useState({});
    const {id} = useParams()

    useEffect( () => {
        findCharacterById(id).then((character) => {
            setCharacter(character);
            setLoading(false);
        })
    }, [] )

        if(loading)return<img src="https://powerusers.microsoft.com/t5/image/serverpage/image-id/118082i204C32E01666789C?v=v2"
        alt="loading spinner" />

        return (
            <div data-testid="testing-div">
                <Character name={character.name} image={character.image} gender={character.gender} profession={character.profession} />
                <Link to={`/`}>Go Back</Link>
            </div>
        )
    }

    export default LastAirbenderDetailsContainer;