import './About.css';
import profileImage from './img/william_profile_image.png';

const About = ({ handleClick }) => {

    return(
        <section className='about'>
            <h1 className='about__title'>ABOUT</h1>
            <article className='about__about-wrapper'>
                <div className='about-wrapper__left' id='frontend'>
                    <p>Design</p>
                    <p className='about__text-project'>Always staying up to date with new technologies to make modern designed and user friendly applications.</p>
                </div>
                <div className='about-wrapper__right'>
                    <p>Problem solving</p>
                    <p className='about__text-project'>Love to challenge myself to constantly gain a better knowledge and solve bigger and greater problems.</p>
                </div>
                <div className='about-wrapper__left'>
                    <p>Personal</p>
                    <p className='about__text-project'>In addition to development, I play football and golf, make my own music and travel.</p>
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