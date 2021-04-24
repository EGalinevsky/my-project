import React from "react";
import { NavLink } from "react-router-dom";
import { NavButton } from "../Body/body/NavButton/NavButton";
import { SubNavButton } from "../Body/body/NavButton/SubNavButton";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <nav className="nav">
          <ul className="nav__wrapper">
            <li className="nav__item">
              <a className="nav__link has-subnav" href="#">
                Main
              </a>
              <ul className="subnav">
                <SubNavButton subnavLink='Main'/>
                <SubNavButton subnavLink='Lololol'/>
                <SubNavButton subnavLink='Lololooo'/>
              </ul>
            </li>
            <NavButton navText='Аrticle'/>
            <NavButton navText='About me' link='/aboutme'/>
            <NavButton navText='Аdvertisement' link='/search'/>
            
          </ul>
        </nav>
      </div>
      <div className="header__right">
        <nav className="nav">
          <ul className="nav__wrapper">
          <NavButton navText='Profile' link='/profile'/>
          </ul>
        </nav>
        <form className="search" action="/" method="post">
          <input placeholder="search" type="text" />
        </form>
      </div>
    </header>
  );
};
