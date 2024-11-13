import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <h1>Phone Review App</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add-phone">Add Phone</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;