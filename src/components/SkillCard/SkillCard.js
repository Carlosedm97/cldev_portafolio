import './SkillCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SkillCard(props){
    return <div className='skill__card'>
        <FontAwesomeIcon icon={props.icon} className='card__icon'/>
        <h3 className='card_name'>{props.nombre}</h3>
    </div>
}

export default SkillCard