import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {

    const [clicked, setClicked] = useState(false);
    

    return <header className='header'>
        <h1 className='header__logo'><a className='logo__enlace' href='https://github.com/Carlosedm97' rel='noopener noreferrer'>CLDev<span className='logo__dot'>.</span></a></h1>
        <nav className={`header__nav ${clicked ? "active" : ""}`}>
                <ul className='nav__list'>
                    { clicked ? <FontAwesomeIcon icon={faXmark} onClick={(event) => {
                        setClicked(!clicked);
                    }}/> : <></>}
                    <li className='list__item'><a className='item__link' href='#' rel='noopener noreferrer'>Sobre mi</a></li>
                    <li className='list__item'><a className='item__link' href='#' rel='noopener noreferrer'>Hábilidades</a></li>
                    <li className='list__item'><a className='item__link' href='#' rel='noopener noreferrer'>Formación</a></li>
                    <li className='list__item'><a className='item__link' href='#' rel='noopener noreferrer'>Proyectos</a></li>
                    <li className='list__item'><a className='item__link' href='#' rel='noopener noreferrer'>Contacto</a></li>
                </ul>
            </nav>
            <div className='header__button'>
                <FontAwesomeIcon icon={faBars} onClick={(event) => {
                    setClicked(!clicked);
                }} />
            </div>
            <div className={`header__bg ${clicked ? "active" : ""}`}>

            </div>
    </header>
};

export default Header;