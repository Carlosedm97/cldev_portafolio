import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faUser, faBrain, faCode, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <header className="header">
      <h1 className="header__logo">
        <a
          className="logo__enlace"
          href="https://github.com/Carlosedm97"
          rel="noopener noreferrer"
        >
          CLDev<span className="logo__dot">.</span>
        </a>
      </h1>
      <nav className={`header__nav ${clicked ? "active" : ""}`}>
        <ul className="nav__list">
          <li className="list__item">
            <a
              className="item__link"
              href="#sobre-mi"
              rel="noopener noreferrer"
              onClick={() => setClicked(!clicked)}
            >
              {clicked && (
                <div>
                  <FontAwesomeIcon icon={faUser} />
                  <br />
                </div>
              )}
              Sobre mi
            </a>
          </li>
          <li className="list__item">
            <a
              className="item__link"
              href="#habilidades"
              rel="noopener noreferrer"
              onClick={() => setClicked(!clicked)}
            >
              {clicked && (
                <div>
                  <FontAwesomeIcon icon={faBrain} />
                  <br />
                </div>
              )}
              Hábilidades
            </a>
          </li>
          <li className="list__item">
            <a
              className="item__link"
              href="#proyectos"
              rel="noopener noreferrer"
              onClick={() => setClicked(!clicked)}
            >
              {clicked && (
                <div>
                  <FontAwesomeIcon icon={faCode} />
                  <br />
                </div>
              )}
              Proyectos
            </a>
          </li>
          <li className="list__item">
            <a
              className="item__link"
              href="#contacto"
              rel="noopener noreferrer"
              onClick={() => setClicked(!clicked)}
            >
              {clicked && (
                <div>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <br />
                </div>
              )}
              Contacto
            </a>
          </li>
        </ul>
        <div className="nav__button">
          {clicked ? (
            <FontAwesomeIcon
              icon={faXmark}
              onClick={() => {
                setClicked(!clicked);
              }}
            />
          ) : (
            <></>
          )}
        </div>
      </nav>
      <div className="header__button">
        <FontAwesomeIcon icon={faBars} onClick={() => setClicked(!clicked)} />
      </div>
      <div className={`header__bg ${clicked ? "active" : ""}`}></div>
    </header>
  );
};

export default Header;
