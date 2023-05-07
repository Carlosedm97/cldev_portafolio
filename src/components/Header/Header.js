import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <header className='header'>
        <h1 className='header__logo'><a className='logo__enlace' href='https://github.com/Carlosedm97' rel='noopener noreferrer'>CLDev<span className='logo__dot'>.</span></a></h1>
        {window.innerWidth < 892 ? (
            <FontAwesomeIcon icon={faBars}/>
        ) : (
            <nav className='header__nav'>
                <ul className='nav__list'>
                    <li className='list__item'><a className='item__link' href='#' rel='noopener noreferrer'>Sobre mi</a></li>
                    <li className='list__item'><a className='item__link' href='#' rel='noopener noreferrer'>Hábilidades</a></li>
                    <li className='list__item'><a className='item__link' href='#' rel='noopener noreferrer'>Formación</a></li>
                    <li className='list__item'><a className='item__link' href='#' rel='noopener noreferrer'>Proyectos</a></li>
                    <li className='list__item'><a className='item__link' href='#' rel='noopener noreferrer'>Contacto</a></li>
                </ul>
            </nav>
        )}
    </header>
};

export default Header;