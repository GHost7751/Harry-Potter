const fetchCharacters = () => {
    const data = fetch(`http://hp-api.herokuapp.com/api/characters`)
    .then((response) => response.json())
    .then((data) => data)
    return data;
}

export {fetchCharacters}