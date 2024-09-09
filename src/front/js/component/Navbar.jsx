import React from 'react';
import { Link } from "react-router-dom";
import { AddContact } from './AddContact.jsx';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">StarWars</Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/characters">Characters</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/planets">Planets</Link>
          </li>
          <li className="nav-item">
            <AddContact />
          </li>
        </ul>
      </div>
    </nav>
  );
};
