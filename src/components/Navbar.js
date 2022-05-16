import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  const routLinks = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/Categories',
      text: 'Categories',
    },
  ];

  return (
    <nav>
      <div className="left-nav">
        <h1>Bookstore CMS</h1>
        <ul>
          {routLinks.map((rout) => (
            <li key={rout.id}>
              <NavLink to={rout.path}>{rout.text}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="right-nav">
        <FontAwesomeIcon icon="fa-solid fa-user" />
      </div>
    </nav>
  );
};

export default Navbar;
