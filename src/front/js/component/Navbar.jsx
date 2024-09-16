import React from 'react';
import { Link } from "react-router-dom";
import { FaUser, FaGlobe, FaSpaceShuttle, FaAddressBook } from 'react-icons/fa'; 
import { BtnFavorites } from './BtnFavorites.jsx';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#000', padding: '10px' }}>
      <Link className="navbar-brand" to="/" style={{ color: '#fff' }}>
        <img 
          src="https://i.pinimg.com/736x/77/23/8d/77238dd7902156c54d898b84bedcea5b.jpg" 
          alt="Logo"
          style={{ height: '40px', marginRight: '10px' }}
        />
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto" style={{ display: 'flex', alignItems: 'center' }}>
          <li className="nav-item">
            <Link className="nav-link" to="/characters" style={{ color: '#fff', marginRight: '15px' }}>
              <FaUser /> Characters
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/planets" style={{ color: '#fff', marginRight: '15px' }}>
              <FaGlobe /> Planets
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/starships" style={{ color: '#fff', marginRight: '15px' }}>
              <FaSpaceShuttle /> Starships
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contacts" style={{ color: '#fff', marginRight: '15px' }}>
              <FaAddressBook /> My Contact List
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/createContact" style={{ color: '#fff', marginRight: '15px' }}>
              Create a Contact
            </Link>
          </li>
        </ul>
      </div>
      <BtnFavorites/>
    </nav>
  );
};
