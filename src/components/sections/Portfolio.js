import './Portfolio.css';
import strummrImage from './img/strummr_image.png';
import todoImage from './img/project_todo_image.png';
import hackdayImage from './img/hackday.png';

const Portfolio = ({ handleClick }) => {

    return(
        <section className='portfolio'>
            <h1 className='portfolio__title'>PORTFOLIO</h1>
            <article className='portfolio__portfolio-wrapper'>
                <div className='portfolio-wrapper__project-wrapper'>
                    <div className='project-wrapper__links-wrapper'>
                        <a className='links-wrapper__link' href="https://github.com/mobUndefined21/2-week-project" target="_blank" rel="noreferrer"><span className='links-wrapper__arrow'>{'>>'}</span>CODE</a>
                        <a className='links-wrapper__link' href="https://ancient-fjord-02404.herokuapp.com/" target="_blank" rel="noreferrer"><span className='links-wrapper__arrow'>{'>>'}</span>DEMO</a>
                    </div>
                    <img className='project-wrapper__image' src={strummrImage} alt='Strummr'></img>
                    <div className='project-wrapper__description'>
                        <p className='description__text'>Strummr</p><p className='description__text'>is a MERN-stack project build with my team at Salt bootcamp.</p>
                    </div>
                </div>
                <div className='portfolio-wrapper__project-wrapper'>
                    <div className='project-wrapper__links-wrapper'>
                        <a className='links-wrapper__link' href="https://github.com/willewilsonson/todo" target="_blank" rel="noreferrer"><span className='links-wrapper__arrow'>{'>>'}</span>CODE</a>
                        <a className='links-wrapper__link' href="https://willewilsonson.github.io/todo/" target="_blank" rel="noreferrer"><span className='links-wrapper__arrow'>{'>>'}</span>DEMO</a>
                    </div>
                    <img className='project-wrapper__image' src={todoImage} alt='Todo'></img>
                    <div className='project-wrapper__description'>
                        <p className='description__text'>Strummr</p><p className='description__text'>is a MERN-stack project build with my team at Salt bootcamp.</p>
                    </div>
                </div>
                <div className='portfolio-wrapper__project-wrapper'>
                    <div className='project-wrapper__links-wrapper'>
                        <a className='links-wrapper__link' href="https://github.com/willewilsonson/hackday" target="_blank" rel="noreferrer"><span className='links-wrapper__arrow'>{'>>'}</span>CODE</a>
                        <p className='links-wrapper__link--no-demo' ><span className='links-wrapper__arrow'>{'>>'}</span>DEMO</p>
                    </div>
                    <img className='project-wrapper__image' src={hackdayImage} alt='Todo'></img>
                    <div className='project-wrapper__description'>
                        <p className='description__text'>Strummr</p><p className='description__text'>is a MERN-stack project build with my team at Salt bootcamp.</p>
                    </div>
                </div>
            </article>
            <button onClick={ () => handleClick() }className='portfolio__back-button'>BACK</button>
        </section>
    );
};

export default Portfolio;