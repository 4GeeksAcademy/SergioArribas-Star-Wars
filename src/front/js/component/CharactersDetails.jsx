
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const API_URL = "https://www.swapi.tech/api/people/";

const CharacterDetails = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const response = await fetch(`${API_URL}${id}`);
                const data = await response.json();
                setCharacter(data.result);
            } catch (error) {
                console.error("Error fetching character details:", error);
            }
        };
        fetchCharacter();
    }, [id]);

    if (!character) return <div>Loading...</div>;

    return (
        <div style={{ padding: "20px", color: "#fff", background: "#000" }}>
            <h1>{character.properties.name}</h1>
            <ul>
                <li><strong>Height:</strong> {character.properties.height}</li>
                <li><strong>Mass:</strong> {character.properties.mass}</li>
                <li><strong>Hair Color:</strong> {character.properties.hair_color}</li>
                <li><strong>Skin Color:</strong> {character.properties.skin_color}</li>
                <li><strong>Eye Color:</strong> {character.properties.eye_color}</li>
                <li><strong>Birth Year:</strong> {character.properties.birth_year}</li>
                <li><strong>Gender:</strong> {character.properties.gender}</li>
            </ul>
        </div>
    );
};

export default CharacterDetails;
