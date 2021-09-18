export const findCharacters = () => {
    return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
        .then((res) => res.json())
        .then((json) => {
           return (json.map((character) => ({
                id: character._id,
                name: character.name,
                image: character.photoUrl,
            }))
        )}
    );
}

export const findCharacterById = (id) => {
    return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${id}`)
        .then((res) => res.json())
        .then((character) =>  ({
            id: character._id,
            name: character.name,
            gender: character.gender,
            profession: character.profession,
            image: character.photoUrl,
        }));
    
}