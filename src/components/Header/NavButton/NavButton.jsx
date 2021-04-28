import React from "react";
import { NavLink } from "react-router-dom";

export const NavButton = (props) => {
  return (
    <li className="nav__item">
      <NavLink className="nav__link"  to={`${props.link}`}>
        {props.navText}
      </NavLink>
    </li>
  );
};
