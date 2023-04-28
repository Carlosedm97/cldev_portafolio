import './ProjectCarousel.css';
import React from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const options = {
    type: 'loop',
    perPage: 1,
    rewind: true,
    arrows: true,
    gap: '1rem',
    pagination: true,
    autoplay: true,
    interval: 3000,
    pauseOnHover: true,
};

const ProjectCarousel = ({ projects }) => {
  return (
    <Splide options={options}>
      {
        projects.map((project) => (
          <SplideSlide>
            <div>
              <img className='project__image' src={project.image} alt={project.name} />
              <div className='project__gradient'></div>
              <div className='project__content'>
                <h3 className='project__title'>{project.name}</h3>
                <p className='project__description'>{project.description}</p>
                <div className='project__buttons'>
                  <a className='project__link' href={project.demo} target='_blank' rel='noopener noreferrer'>Ver demo</a>
                  <a className='project__link' href={project.code} target='_blank' rel='noopener noreferrer'>Ver código</a>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))
      }
    </Splide>
  )
};

export default ProjectCarousel;