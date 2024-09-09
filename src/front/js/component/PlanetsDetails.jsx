
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const API_URL = "https://www.swapi.tech/api/planets/";

const PlanetsDetails = () => {
    const { id } = useParams();
    const [planet, setPlanet] = useState(null);

    useEffect(() => {
        const fetchPlanet = async () => {
            try {
                const response = await fetch(`${API_URL}${id}`);
                const data = await response.json();
                setPlanet(data.result);
            } catch (error) {
                console.error("Error fetching planet details:", error);
            }
        };
        fetchPlanet();
    }, [id]);

    if (!planet) return <div>Loading...</div>;

    return (
        <div style={{ padding: "20px" }}>
            <h1>{planet.properties.name}</h1>
            <ul>
                <li><strong>Diameter:</strong> {planet.properties.diameter}</li>
                <li><strong>Climate:</strong> {planet.properties.climate}</li>
                <li><strong>Terrain:</strong> {planet.properties.terrain}</li>
                <li><strong>Population:</strong> {planet.properties.population}</li>
                <li><strong>Orbital Period:</strong> {planet.properties.orbital_period}</li>
                <li><strong>Rotation Period:</strong> {planet.properties.rotation_period}</li>
                <li><strong>Gravity:</strong> {planet.properties.gravity}</li>
            </ul>
        </div>
    );
};

export default PlanetsDetails;
