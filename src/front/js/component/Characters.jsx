// src/front/js/component/Characters.jsx
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js"; // Corregido el path

const API_URL = "https://www.swapi.tech/api/people/";

const getCharacterImage = (id) => `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const { store, actions } = useContext(Context); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();
                setCharacters(data.results);
            } catch (error) {
                console.error("Error fetching characters:", error);
            }
        };
        fetchData();
    }, []);

    const handleAddFavorite = (character) => {
        actions.addFavorites(character);
    };

    return (
        <div style={{ padding: "20px", background: "#000", color: "#fff" }}>
            <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Characters</h1>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
                {characters.map((character) => (
                    <div key={character.uid} style={{ 
                        border: "1px solid #ccc", 
                        borderRadius: "8px", 
                        padding: "10px", 
                        width: "200px",
                        background: "#222",
                        color: "#fff",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
                        transition: "transform 0.3s, box-shadow 0.3s",
                        cursor: "pointer"
                    }}>
                        <Link to={`/character/${character.uid}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <img
                                src={getCharacterImage(character.uid)}
                                alt={character.name}
                                style={{ width: "100%", borderRadius: "8px" }}
                            />
                            <h3 style={{ marginTop: "10px", textAlign: "center" }}>{character.name}</h3>
                        </Link>
                        <div>
                            <span onClick={() => handleAddFavorite(character)}>
                                <i className="far fa-heart text-danger mx-1"></i>
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Characters;
