// src/front/js/component/Planets.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API_URL = "https://www.swapi.tech/api/planets/";

const getPlanetImage = (id) => `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;

const Planets = () => {
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();
                setPlanets(data.results);
            } catch (error) {
                console.error("Error fetching planets:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div style={{ padding: "20px", background: "#000", color: "#fff" }}>
            <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Planets</h1>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
                {planets.map((planet) => (
                    <div key={planet.uid} style={{ 
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
                        <Link to={`/planet/${planet.uid}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <img
                                src={getPlanetImage(planet.uid)}
                                alt={planet.name}
                                onError={(e) => e.target.src = "https://via.placeholder.com/200x200?text=No+Image"} // Placeholder for missing images
                                style={{ width: "100%", borderRadius: "8px", objectFit: "cover" }}
                            />
                            <h3 style={{ marginTop: "10px", textAlign: "center" }}>{planet.name}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Planets;
