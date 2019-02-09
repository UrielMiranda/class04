import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="container">
      <div className="container__logo">
        <Link to="/"><div className="container__logo__img"></div></Link>
      </div>
      <div className="container__nav">
        <ul className="container__nav__items">
          <li>
            <Link to="/premium">Premium</Link>
          </li>
          <li>
            <Link to="/help">Ayuda</Link>
          </li>
          <li>
            <Link to="/download">Descargar</Link>
          </li>
          <span className="container__nav__items__separator"></span>
          <li>
            <Link to="/about">Perfil</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
