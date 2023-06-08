import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faHouse, faUser, faBrain, faCode, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { BsFillGridFill } from "react-icons/bs";
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
              href="#"
            >
              {clicked && (
                <div>
                  <FontAwesomeIcon icon={faHouse} onClick={() => setClicked(!clicked)}/>
                  <br />
                </div>
              )}
              Inicio
            </a>
          </li>
          <li className="list__item">
            <a
              className="item__link"
              href="#sobre-mi"
            >
              {clicked && (
                <div>
                  <FontAwesomeIcon icon={faUser} onClick={() => setClicked(!clicked)} />
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
            >
              {clicked && (
                <div>
                  <FontAwesomeIcon icon={faBrain} onClick={() => setClicked(!clicked)} />
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
            >
              {clicked && (
                <div>
                  <FontAwesomeIcon icon={faCode} onClick={() => setClicked(!clicked)} />
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
            >
              {clicked && (
                <div>
                  <FontAwesomeIcon icon={faEnvelope} onClick={() => setClicked(!clicked)} />
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
        <BsFillGridFill onClick={() => setClicked(!clicked)}/>
      </div>
    </header>
  );
};

export default Header;
