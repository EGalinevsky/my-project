import React from "react";
import { NavLink } from "react-router-dom";

export const NavButton = (props) => {
    debugger
  return (
    <li className="nav__item">
      <NavLink className="nav__link"  to={`${props.link}`}>
        {props.navText}
      </NavLink>
    </li>
  );
};
