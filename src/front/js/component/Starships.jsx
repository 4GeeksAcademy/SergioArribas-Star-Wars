
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API_URL = "https://www.swapi.tech/api/starships/";

const getStarshipImage = (id) => `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;

const Starships = () => {
    const [starships, setStarships] = useState([]);

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
                        boxShadow: "0 4px 8px rgba(0,0,0,0.1)" 
                    }}>
                        <Link to={`/starship/${starship.uid}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <img
                                src={getStarshipImage(starship.uid)}
                                alt={starship.name}
                                style={{ width: "100%", borderRadius: "8px" }}
                            />
                            <h3 style={{ marginTop: "10px" }}>{starship.name}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Starships;
