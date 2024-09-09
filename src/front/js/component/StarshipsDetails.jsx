// src/front/js/component/StarshipDetails.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const API_URL = "https://www.swapi.tech/api/starships/";

const StarshipDetails = () => {
    const { id } = useParams();
    const [starship, setStarship] = useState(null);

    useEffect(() => {
        const fetchStarship = async () => {
            try {
                const response = await fetch(`${API_URL}${id}`);
                const data = await response.json();
                setStarship(data.result);
            } catch (error) {
                console.error("Error fetching starship details:", error);
            }
        };
        fetchStarship();
    }, [id]);

    if (!starship) return <div style={{ padding: "20px", color: "#fff", background: "#000" }}>Loading...</div>;

    return (
        <div style={{ padding: "20px", color: "#fff", background: "#000" }}>
            <h1>{starship.properties.name}</h1>
            <ul style={{ listStyleType: "none", padding: "0" }}>
                <li><strong>Model:</strong> {starship.properties.model}</li>
                <li><strong>Manufacturer:</strong> {starship.properties.manufacturer}</li>
                <li><strong>Cost in Credits:</strong> {starship.properties.cost_in_credits}</li>
                <li><strong>Length:</strong> {starship.properties.length}</li>
                <li><strong>Crew:</strong> {starship.properties.crew}</li>
                <li><strong>Passengers:</strong> {starship.properties.passengers}</li>
                <li><strong>Max Atmosphering Speed:</strong> {starship.properties.max_atmosphering_speed}</li>
                <li><strong>Hyperdrive Rating:</strong> {starship.properties.hyperdrive_rating}</li>
                <li><strong>MGLT:</strong> {starship.properties.MGLT}</li>
                <li><strong>Starship Class:</strong> {starship.properties.starship_class}</li>
            </ul>
        </div>
    );
};

export default StarshipDetails;
