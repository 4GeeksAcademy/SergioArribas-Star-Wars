import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const getPlanetImage = (id) => `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;

const Planets = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getPlanets();
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h1>Planets</h1>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                {store.planets.map((planet) => (
                    <div key={planet.uid} style={{ 
                        border: "1px solid #ccc", 
                        borderRadius: "8px", 
                        padding: "10px", 
                        width: "200px",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.1)" 
                    }}>
                        <Link to={`/planet/${planet.uid}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <img
                                src={getPlanetImage(planet.uid)}
                                alt={planet.name}
                                style={{ width: "100%", borderRadius: "8px" }}
                            />
                            <h3 style={{ marginTop: "10px" }}>{planet.name}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Planets;
