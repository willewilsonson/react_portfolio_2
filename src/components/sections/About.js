import './About.css';
import aboutContent from '../../content/aboutContent';
import DropdownMenu from '../DropdownMenu';

const About = ({ showSection, handleClick, setShowSection }) => {

    const createAboutContent = (content, key) => {
        return <div key={key} className={ key % 2 === 0 ? 'about-wrapper__left' : 'about-wrapper__right' } id={content.id}>
                    <p>{content.title}</p>
                    <p className='about__text-project'>{content.text}</p>
                </div>
    };

    return(
        <section className='about'>
            <h1 className='about__title'>ABOUT</h1>
            <article className='about__about-wrapper'>
                {aboutContent.content.map((content, key) => createAboutContent(content, key))}
                <div className='about-wrap-image'>
                <img className='about-wrapper__image' src={aboutContent.img} alt='William Nordenstad'></img>
                </div>
            </article>
            <DropdownMenu handleClick={handleClick} showSection={showSection} setShowSection={setShowSection}/>
        </section>
    );
};

export default About;