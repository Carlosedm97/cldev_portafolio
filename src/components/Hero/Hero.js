import './Hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons'

function Hero(){
    return <section className='hero'>
        <div className='hero__info'>
            <div className='hero__texts'>
                <p className='texts__paragraph'>Hola, me llamo Carlos, soy</p>
                <h2 className='texts__title'>Desarrollador Front End<span className='texts__underscore'>_</span></h2>
            </div>
            <div className='hero__buttons'>
                <a 
                    className='button__link' 
                    href='https://github.com/Carlosedm97' 
                    target='_blank' 
                    rel='noreferrer'>GitHub<FontAwesomeIcon icon={faGithub} /></a>
                <a 
                    className='button__link' 
                    href='https://www.linkedin.com/in/carlos-antonio-meza-lopez/' 
                    target='_blank' 
                    rel='noreferrer'>LinkedIn<FontAwesomeIcon icon={faLinkedin} /></a>
                <a 
                    className='button__link' 
                    href='https://github.com/Carlosedm97' 
                    target='_blank' 
                    rel='noreferrer'>Curriculum<FontAwesomeIcon icon={faFile} /></a>
            </div>
        </div>
        <div className='hero__image'>
            <img src='https://github.com/Carlosedm97.png' alt='Foto de Carlos'/>
        </div>
    </section>
}

export default Hero