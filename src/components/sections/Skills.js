import './Skills.css';

const Skills = ({ handleClick }) => {

    return(
        <section className='skills'>
            <article className='skills__skills-wrapper'>Skills</article>
            <button onClick={ () => handleClick('menu') }className='skills__back-button'>BACK</button>
        </section>
    );
};

export default Skills;