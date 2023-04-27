import './Skills.css'
import SkillCard from '../SkillCard/SkillCard'
import { 
        faHtml5, 
        faCss3Alt, 
        faJs, 
        faReact, 
        faNodeJs, 
        faGitAlt 
        } from '@fortawesome/free-brands-svg-icons';

function Skills(){
    return <section className='skills'>
        <h2 className='skills__title'><span className='quotes'>{'< '}</span>Hábilidades<span className='quotes'>{' >'}</span></h2>
        <div className='skills__container'>
            <SkillCard icon={ faHtml5 } nombre='HTML5'/>
            <SkillCard icon={ faCss3Alt } nombre='CSS3'/>
            <SkillCard icon={ faJs } nombre='JavasCript'/>
            <SkillCard icon={ faReact } nombre='React'/>
            <SkillCard icon={ faNodeJs } nombre='Node JS'/>
            <SkillCard icon={ faGitAlt } nombre='Git'/>
        </div>
    </section>
}

export default Skills