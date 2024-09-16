import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { FaTimes } from 'react-icons/fa';

export const BtnFavorites = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="dropdown">
            <button
                className="btn btn-warning dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
            >
                Favorites
                <span className="badge badge-light">{store.favorites.length}</span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {store.favorites.map((item, index) => (
                    <li key={index} className="dropdown-item d-flex justify-content-between">
                        {item.name} - {item.type}
                        <span
                            onClick={() => actions.removeFavorites(item)}
                            style={{ cursor: 'pointer' }}
                        >
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
