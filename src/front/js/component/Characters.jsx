import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API_URL = "https://www.swapi.tech/api/people/";

const getCharacterImage = (id) => `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;

const Characters = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();
                setCharacters(data.results);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h1>Characters</h1>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                {characters.map((character) => (
                    <div key={character.uid} style={{ 
                        border: "1px solid #ccc", 
                        borderRadius: "8px", 
                        padding: "10px", 
                        width: "200px",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.1)" 
                    }}>
                        <Link to={`/character/${character.uid}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <img
                                src={getCharacterImage(character.uid)}
                                alt={character.name}
                                style={{ width: "100%", borderRadius: "8px" }}
                            />
                            <h3 style={{ marginTop: "10px" }}>{character.name}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Characters;
