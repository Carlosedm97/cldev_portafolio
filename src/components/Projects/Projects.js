import './Projects.css';
import ProjectCarousel from '../ProjectCarousel/ProjectCarousel';

const projects = [
    {
        id: 1,
        image: '../../assets/images/encriptador-desencriptador.png',
        name: 'Encriptador de Texto',
        description: 'Desarrollo de un encriptador de texto como desafío del módulo de "Lógica de Programación" en formación ONE.',
        demo: 'https://carlosedm97.github.io/encriptador_de_texto_ONE/',
        code: 'https://github.com/Carlosedm97/encriptador_de_texto_ONE'
    },
    {
        id: 2,
        image: '../../assets/images/quiz-game.png',
        name: 'Quiz Game',
        description: 'Proyecto autodidacta de responder preguntas de opción múltiple correctamente.',
        demo: 'https://carlosedm97.github.io/quiz_game/',
        code: 'https://github.com/Carlosedm97/quiz_game'
    },
    {
        id: 3,
        image: '../../assets/images/frutafruto.png',
        name: 'Fruta & Fruto',
        description: 'Sitio ficticio de recetas de cocina como práctica del curso de arquitectura CSS en Oracle Next Education.',
        demo: 'https://carlosedm97.github.io/fruta_fruto_ONE/',
        code: 'https://github.com/Carlosedm97/fruta_fruto_ONE'
    },
    {
        id: 4,
        image: '../../assets/images/apeperia.png',
        name: 'apeperia',
        description: 'Sitio ficticio de empresa creadora de páginas como práctica de curso de layouts responsivos en Oracle Next Education.',
        demo: 'https://carlosedm97.github.io/apeperia_ONE/',
        code: 'https://github.com/Carlosedm97/apeperia_ONE'
    },
    {
        id: 5,
        image: '../../assets/images/org.png',
        name: 'Org',
        description: 'Maquetación de sitio web para gestionar equipos de trabajo como práctica en la ruta React de Oracle Next Education.',
        demo: 'https://org-one-ebon.vercel.app/',
        code: 'https://github.com/Carlosedm97/org_ONE'
    }
]

const Projects = () => {
    return (
        <section className='projects'>
            <h2 className='projects__title'><span className='quotes'>{'< '}</span>Proyectos<span className='quotes'>{' >'}</span></h2>
            <ProjectCarousel projects={projects} />
        </section>
    )
};

export default Projects;