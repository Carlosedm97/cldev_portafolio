import "./Projects.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 6000
    };

    return (
        <section className="projects" id="proyectos">
            <h2 className="projects__title">
                <span className="quotes">{"< "}</span>Proyectos
                <span className="quotes">{" >"}</span>
            </h2>
            <Slider {...settings} className="projects__carousel">
                <div>
                    <div className="card">
                        <div className="image__container">
                            <img
                                src="https://i.ibb.co/3BfQBcc/encriptador.jpg"
                                className="card__image"
                            />
                        </div>
                        <div className="data__container">
                            <h2 className="card__title">Encriptador de Texto</h2>
                            <div className="card__description">
                                Desarrollo de un encriptador de texto como desafío de la ruta
                                "Lógica de Programación" de la formación Oracle Next Education.
                            </div>
                            <div className="card__buttons">
                                    <a className="card__button" href="https://carlosedm97.github.io/encriptador_de_texto_ONE/" target="_blank" rel="noopener noreferrer" >
                                        Ver más <FontAwesomeIcon icon={faArrowRight} fade />
                                    </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card">
                        <div className="image__container">
                            <img
                                src="https://i.ibb.co/jR7QqcK/alurageek.jpg"
                                className="card__image"
                            />
                        </div>
                        <div className="data__container">
                            <h2 className="card__title">AluraGeek</h2>
                            <div className="card__description">
                                Desarrollo de un Ecommerce como desafío de la ruta 'Front End' de la formación Oracle Next Education.
                            </div>
                            <div className="card__buttons">
                                    <a className="card__button" href="https://alurageek-one-carlosedm97.vercel.app/" target="_blank" rel="noopener noreferrer">
                                        Ver más <FontAwesomeIcon icon={faArrowRight} fade />
                                    </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card">
                        <div className="image__container">
                            <img
                                src="https://i.ibb.co/fH6Dd2w/image1.jpg"
                                className="card__image"
                            />
                        </div>
                        <div className="data__container">
                            <h2 className="card__title">AluraFlix</h2>
                            <div className="card__description">
                                Desarrollo de una página web de videos como desafío de la ruta "React JS" de la formación Oracle Next Education.
                            </div>
                            <div className="card__buttons">
                                    <a className="card__button" href="https://aluraflix-one-alpha.vercel.app/" target="_blank" rel="noopener noreferrer">
                                        Ver más <FontAwesomeIcon icon={faArrowRight} fade />
                                    </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </section>
    );
};

export default Projects;
