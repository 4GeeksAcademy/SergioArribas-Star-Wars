import React from 'react';
import { Link } from "react-router-dom";
import { AddContact } from './AddContact.jsx';
import { FaUser, FaGlobe, FaSpaceShuttle, FaAddressBook } from 'react-icons/fa'; // Importa iconos desde react-icons

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">StarWars</Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/characters">
              <FaUser /> Characters
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/planets">
              <FaGlobe /> Planets
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/starships">
              <FaSpaceShuttle /> Starships
            </Link>
          </li>
          <li className="nav-item">
            <AddContact>
              <FaAddressBook /> Contact
            </AddContact>
          </li>
        </ul>
      </div>
    </nav>
  );
};
