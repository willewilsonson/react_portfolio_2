import './About.css';
import profileImage from './img/william_profile_image.png';

const About = ({ handleClick }) => {

    return(
        <section className='about'>
            <h1 className='about__title'>ABOUT</h1>
            <article className='about__about-wrapper'>
                <div className='about-wrapper__left' id='frontend'>
                    <p>Frontend</p>
                </div>
                <div className='about-wrapper__right'>
                    <p>Backend</p>
                </div>
                <div className='about-wrapper__left'>
                    <p>Personal</p>
                </div>
                <div className='about-wrap-image'>
                <img className='about-wrapper__image' src={profileImage} alt='William Nordenstad'></img>
                </div>
            </article>
            <button onClick={ () => handleClick('menu') }className='about__back-button'>MENU</button>
        </section>
    );
};

export default About;