import './About.css';

const About = ({ handleClick }) => {

    return(
        <section className='about'>
            <article className='about__about-wrapper'>About</article>
            <button onClick={ () => handleClick('menu') }className='about__back-button'>BACK</button>
        </section>
    );
};

export default About;