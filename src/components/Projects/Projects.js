import './Projects.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import alurageek from '../../assets/images/alurageek.png'
import apeperia from '../../assets/images/apeperia.png'

function Projects() {
    return (
        <section className='projects'>
            <h2 className='skills__title'><span className='quotes'>{'< '}</span>Proyectos<span className='quotes'>{' >'}</span></h2>
            <div className='projects__container'>
                <Splide>
                            <SplideSlide>
                                <div className='project'>
                                    <img className='project__image' src={ alurageek } alt='Pantallazo proyecto AluraGeek'/>
                                    <h3 className='project__title'>AluraGeek</h3>
                                    <p className='project__description'>Ecommerce para empresa ficticia.</p>
                                    <div className='project__buttons'>
                                        <button className='project__button'>Ver demo</button>
                                        <button className='project__button'>Ver codigo</button>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='project'>
                                    <img className='project__image' src={ apeperia } alt='Pantallazo proyecto AluraGeek'/>
                                    <h3 className='project__title'>Apeperia</h3>
                                    <p className='project__description'>Ecommerce para empresa ficticia.</p>
                                    <div className='project__buttons'>
                                        <button className='project__button'>Ver demo</button>
                                        <button className='project__button'>Ver codigo</button>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='project'>
                                    <img className='project__image' src={ apeperia } alt='Pantallazo proyecto AluraGeek'/>
                                    <h3 className='project__title'>Apeperia</h3>
                                    <p className='project__description'>Ecommerce para empresa ficticia.</p>
                                    <div className='project__buttons'>
                                        <button className='project__button'>Ver demo</button>
                                        <button className='project__button'>Ver codigo</button>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='project'>
                                    <img className='project__image' src={ apeperia } alt='Pantallazo proyecto AluraGeek'/>
                                    <h3 className='project__title'>Apeperia</h3>
                                    <p className='project__description'>Ecommerce para empresa ficticia.</p>
                                    <div className='project__buttons'>
                                        <button className='project__button'>Ver demo</button>
                                        <button className='project__button'>Ver codigo</button>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='project'>
                                    <img className='project__image' src={ apeperia } alt='Pantallazo proyecto AluraGeek'/>
                                    <h3 className='project__title'>Apeperia</h3>
                                    <p className='project__description'>Ecommerce para empresa ficticia.</p>
                                    <div className='project__buttons'>
                                        <button className='project__button'>Ver demo</button>
                                        <button className='project__button'>Ver codigo</button>
                                    </div>
                                </div>
                            </SplideSlide>
                </Splide>
            </div>

            
        </section>
    )
}

export default Projects;