import './Header.css';

const Header = () => {
    return <header className='header'>
        <h1 className='header__logo'><a className='logo__enlace' href='https://github.com/Carlosedm97' rel='noopener noreferrer'>CLDev<span className='logo__dot'>.</span></a></h1>
        <nav className='header__nav'>
            <ul className='nav__list'>
                <li className='list__item'><a className='item__link' href='#' rel='noopener noreferrer'>Sobre mi</a></li>
                <li className='list__item'><a className='item__link' href='#' rel='noopener noreferrer'>Hábilidades</a></li>
                <li className='list__item'><a className='item__link' href='#' rel='noopener noreferrer'>Formación</a></li>
                <li className='list__item'><a className='item__link' href='#' rel='noopener noreferrer'>Proyectos</a></li>
                <li className='list__item'><a className='item__link' href='#' rel='noopener noreferrer'>Contacto</a></li>
            </ul>
        </nav>
    </header>
};

export default Header;