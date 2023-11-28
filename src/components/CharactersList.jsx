import React from 'react';
import { useState, useEffect } from 'react';

const CharactersList = () => {
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        const fetchCharacters = async () => {
            try {
              
                const baseUrl = 'https://gateway.marvel.com:443/v1/public/characters?';
                const apiKey = '&ts=1700766432&apikey=57c9d9796141a988e96a3390b3b84cb5&hash=184918aed4079cf16b265d2d62fc46a9';
                const apiUrl = baseUrl + apiKey

                console.log(apiUrl)
                const response = await fetch(apiUrl);
                const data = await response.json();

                setCharacters(data.data.results);
            } catch (error) {
                console.error('Error fetching characters: ', error)
            }
        }
        fetchCharacters();
    }, []);
    const loaded = () => {
        return (
            <div className="container1">
               
                <h1>Marvel Characters</h1>
                <ul>
                    {characters.map((character) => (
                        <li className="charlist" key={character.id}>
                            <h3>{character.name}</h3>
                            {/* <h4>{character.description }</h4> */}
                            <img className="imgchar1"
                            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                            alt={character.name} />
                            </li>
                    ))}
                </ul>
            </div>
        );
    }

    const loading = () => {
        return (<h4>Nothing to display</h4>)
    }
    return characters ? loaded() : loading();
};

export default CharactersList;
