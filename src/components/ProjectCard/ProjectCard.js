import './ProjectCard.css';

function ProjectCard(props){

    const { image, title, description, demo, code } = props.data

    return (
        <div className='project'>
            <img className='project__image' src={ image } alt={ title } />
            <h3 className='project__title'>{ title }</h3>
            <p className='project__description'>{ description }</p>
            <div className='project__buttons'>
                <button className='project__button'><a href={ demo } target='_blank' rel='noreferrer'>Ver demo</a></button>
                <button className='project__button'><a href={ code } target='_blank' rel='noreferrer'>Ver código</a></button>
            </div>
        </div>
    )
}

export default ProjectCard;