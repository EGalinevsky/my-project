import React from "react";
import { NavButton } from "./NavButton/NavButton";


export const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <nav className="nav">
          <ul className="nav__wrapper">
            <NavButton navText="Main" link="/main" />
            <NavButton navText="Аrticle" />
            <NavButton navText="About me" link="/aboutme" />
            <NavButton navText="Аdvertisement" link="/search" />
          </ul>
        </nav>
      </div>
      <div className="header__right">
        <nav className="nav">
          <ul className="nav__wrapper">
            <NavButton navText="login" link="/singup" />
          </ul>
        </nav>
        <form className="search" action="/" method="post">
          <input placeholder="search" type="text" />
        </form>
      </div>
    </header>
  );
};
