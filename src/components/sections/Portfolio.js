import './Portfolio.css';

const Portfolio = ({ handleClick }) => {

    return(
        <section className='portfolio'>
            <article className='portfolio__portfolio-wrapper'>Portfolio</article>
            <button onClick={ () => handleClick() }className='portfolio__back-button'>BACK</button>
        </section>
    );
};

export default Portfolio;