// src/front/js/component/Starships.jsx
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { FaTimes } from 'react-icons/fa';

const API_URL = "https://www.swapi.tech/api/starships/";

const getStarshipImage = (id) => `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;

const Starships = () => {
    const [starships, setStarships] = useState([]);
    const { store, actions } = useContext(Context);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();
                setStarships(data.results);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const handleAddFavorite = (starship) => {
        actions.addFavorites(starship);
    };

    return (
        <div style={{ padding: "20px", color: "#fff", background: "#000" }}>
            <h1>Starships</h1>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                {starships.map((starship) => (
                    <div key={starship.uid} style={{ 
                        border: "1px solid #ccc", 
                        borderRadius: "8px", 
                        padding: "10px", 
                        width: "200px",
                        background: "#222",
                        color: "#fff",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                        position: "relative"
                    }}>
                        <Link to={`/starship/${starship.uid}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <img
                                src={getStarshipImage(starship.uid)}
                                alt={starship.name}
                                onError={(e) => e.target.src = "https://via.placeholder.com/200x200?text=No+Image"} // Placeholder for missing images
                                style={{ width: "100%", borderRadius: "8px", objectFit: "cover" }}
                            />
                            <h3 style={{ marginTop: "10px" }}>{starship.name}</h3>
                        </Link>
                        <div style={{ position: "absolute", top: "10px", right: "10px", cursor: 'pointer' }}>
                            <span onClick={() => handleAddFavorite(starship)}>
                                <FaTimes /> {/* Icono para eliminar */}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Starships;
