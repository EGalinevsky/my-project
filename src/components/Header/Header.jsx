import React from "react";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <nav className="nav">
          <ul>
            <li>
              <a className="nav__link has-subnav" href="#">
                Main
              </a>
              <ul className="subnav">
                <li>
                  <a href="">creating websites</a>
                </li>
                <li>
                  <a href="">Lololol websites</a>
                </li>
                <li>
                  <a href="">lololoooolololos</a>
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
              <a className="nav__link" href="#">
                Аdvertisement
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header__right">
        <nav className="nav">
          <ul>
            <li>
              <a className="nav__link" href="#">
                Profile
              </a>
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
