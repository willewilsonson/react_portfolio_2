import './Skills.css';
import skillsContent from '../../content/skillsContent';
import DropdownMenu from '../DropdownMenu';

const Skills = ({ showSection, handleClick, setShowSection }) => {

    const createLogoDiv = (logo, key) => {
        return  <div className='skills-wrapper__project-wrapper' key={key}>
                    <img className='skills-wrapper__image' src={logo.src} alt={logo.alt}></img>
                    <p className='skills-wrapper__text'>{logo.description}</p>
                </div>
    };

    return(
        <section className='skills'>
            <h1 className='skills__title'>Frontend</h1>
            <article className='skills__skills-wrapper'>
                {skillsContent.frontEnd.map((logo, i) => createLogoDiv(logo, i))}
            </article>
            <h1 className='skills__title'>Backend</h1>
            <article className='skills__skills-wrapper'>
                {skillsContent.backEnd.map((logo, i) => createLogoDiv(logo, i))}
            </article>
            <h1 className='skills__title'>Tools</h1>
            <article className='skills__skills-wrapper'>
                {skillsContent.tools.map((logo, i) => createLogoDiv(logo, i))}
            </article>
            <DropdownMenu handleClick={handleClick} showSection={showSection} setShowSection={setShowSection}/>
        </section>
    );
};

export default Skills;