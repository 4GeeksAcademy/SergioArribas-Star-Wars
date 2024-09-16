import React, { useContext } from "react";
import { Context } from "../store/appContext.js";

const CharactersLS = () => {
    const { store } = useContext(Context);
    return (
        <div className="container">
            <ul className="list-group">
                {store.CharactersLS.map((item) => (
                    <li key={item.uid} className="list-group-item">
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CharactersLS;