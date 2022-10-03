import React from 'react';
import { NavLink } from 'react-router-dom';
import links from '../utils/links';

const NavLinks = ({ toggleSidebar }) => {
  return (
    <section className="nav-links">
      {links.map((link) => {
        const { text, path, id, icon } = link;
        return (
          <NavLink
            to={path}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
            key={id}
            onClick={toggleSidebar}
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </section>
  );
};

export default NavLinks;
