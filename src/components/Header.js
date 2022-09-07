import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Personal Information</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Personal List
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Add Personal
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
