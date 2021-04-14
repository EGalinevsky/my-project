import React from "react";

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
                  <a className='subnav_link' href="#">Creating</a>
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
              <a className="nav__link" href="#">
                Аdvertisement
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header__right">
        <nav className="nav">
          <ul className='nav__wrapper'>
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
