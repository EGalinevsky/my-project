import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <nav className="nav">
          <ul className='nav__wrapper'>
            <li className='nav__item'>
              <a className="nav__link has-subnav" href="#">
                Main
              </a>
              <ul className="subnav">
                <li>
                  <NavLink className='subnav_link' to='/main'>Main</NavLink>
                </li>
                <li>
                  <a className='subnav_link' href="#">Lololol</a>
                </li>
                <li>
                  <a className='subnav_link' href="#">Lololooo</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="nav__link" href="#">
                Аrticle
              </a>
            </li>
            <li>
              <a className="nav__link" href="#">
                About me
              </a>
            </li>
            <li>
              <NavLink className="nav__link" to="/search">
                Аdvertisement
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header__right">
        <nav className="nav">
          <ul className='nav__wrapper'>
            <li>
              <NavLink className="nav__link" to="/profile">
                Profile
              </NavLink>
            </li>
          </ul>
        </nav>
        <form className="search" action="/" method="post">
          <input placeholder="search" type="text" />
        </form>
      </div>
    </header>
  );
};
