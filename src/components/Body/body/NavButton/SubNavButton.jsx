import React from "react";
import { NavLink } from "react-router-dom";

export const SubNavButton = (props) => {
  return (
    <li>
      <NavLink className="subnav_link" to="/main">
        {props.subnavLink}
      </NavLink>
    </li>
  );
};
