import './Projects.css';
import { useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';

function Projects() {

    const [projects, setProjects] = useState([
        {
            id: 1,
            image: 'encriptador',
            title: 'Encriptador de Texto',
            description: 'Desarrollo de un encriptador de texto como desafio del modulo de "Lógica de Programación" de formación ONE.',
            demo: 'https://carlosedm97.github.io/encriptador_de_texto_ONE/',
            code: 'https://github.com/Carlosedm97/encriptador_de_texto_ONE'
        },
        {
            id: 2,
            image: 'quizgame',
            title: 'Quiz Game',
            description: 'Proyecto realizado de manera autodidacta el cual consiste en responder correctamente la mayor cantidad de preguntas de opción multiple.',
            demo: 'https://carlosedm97.github.io/quiz_game/',
            code: 'https://github.com/Carlosedm97/quiz_game'
        },
        {
            id: 3,
            image: 'frutafruto',
            title: 'Fruta & Fruto',
            description: 'Sitio ficticio de recetas de cocina como practica del curso de arquitectura CSS del programa de Oracle Next Education.',
            demo: 'https://carlosedm97.github.io/fruta_fruto_ONE/',
            code: 'https://github.com/Carlosedm97/fruta_fruto_ONE'
        },
        {
            id: 4,
            image: 'apeperia',
            title: 'apeperia',
            description: 'Sitio ficticio para empresa creadora de páginas web como práctica del curso de layouts responsivos del programa de Oracle Next Education.',
            demo: 'https://carlosedm97.github.io/apeperia_ONE/',
            code: 'https://github.com/Carlosedm97/apeperia_ONE'
        }
    ])

    return (
        <section className='projects'>
            <h2 className='skills__title'><span className='quotes'>{'< '}</span>Proyectos<span className='quotes'>{' >'}</span></h2>
            <div className='projects__container'>
            {projects.map((project) => <ProjectCard 
                    data={project}
                />
            
            )}
            </div>
        </section>
    )
}

export default Projects;