import React, {Component} from 'react';
import { findCharacters, findCharacterById } from '../services/LastAirbenderAPI';
import CharacterList from '../components/characters/CharacterList';

export default class LastAirbenderContainer extends Component  {
    state = {
        loading: true,
        characters: [],
    };

    componentDidMount() {
        findCharacters().then((characters) => this.setState({ characters, loading: false}))

    }

render() {
    const { loading, characters } = this.state;
    console.log(characters, loading);

    return (
        <>
          {loading ? (
            <div>
                <img 
                src="https://powerusers.microsoft.com/t5/image/serverpage/image-id/118082i204C32E01666789C?v=v2"
                alt="loading spinner" />
            </div>
          ) : (
            <CharacterList characters={characters} />
          )}
        </>
      );
    };
    
};

