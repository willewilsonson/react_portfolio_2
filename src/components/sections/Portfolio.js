import './Portfolio.css';
import strummrImage from './img/strummr_image.png';
import todoImage from './img/project_todo_image.png';
import hackdayImage from './img/futibol_image.png';
import portfolioImage from './img/portfolio_image.png';

const Portfolio = ({ handleClick }) => {

    return(
        <section className='portfolio'>
            <h1 className='portfolio__title'>PORTFOLIO</h1>
            <article className='portfolio__portfolio-wrapper'>
                <div className='portfolio-wrapper__project-wrapper' id='strummr'>
                    <div className='project-wrapper__links-wrapper'>
                        <a className='links-wrapper__link' href="https://github.com/mobUndefined21/2-week-project" target="_blank" rel="noreferrer"><span className='links-wrapper__arrow'>{'>>'}</span>CODE</a>
                        <a className='links-wrapper__link' href="https://ancient-fjord-02404.herokuapp.com/" target="_blank" rel="noreferrer"><span className='links-wrapper__arrow'>{'>>'}</span>DEMO</a>
                    </div>
                    <img className='portfolio-wrapper__image' src={strummrImage} alt='Strummr'></img>
                    <div className='project-wrapper__description'>
                        <p className='description__text-project project-name'>Strummr</p><p className='description__text-project'>A MERN-stack social media for musicians project build with my team at Salt bootcamp. Deployed with Heroku.<br/><br/>Click the links above to see the code at Github or try out the Demo (It can be slow to start due to Herokus servers). </p>
                    </div>
                </div>
                <div className='portfolio-wrapper__project-wrapper' id='todo'>
                    <div className='project-wrapper__links-wrapper'>
                        <a className='links-wrapper__link' href="https://github.com/willewilsonson/todo" target="_blank" rel="noreferrer"><span className='links-wrapper__arrow'>{'>>'}</span>CODE</a>
                        <a className='links-wrapper__link' href="https://willewilsonson.github.io/todo/" target="_blank" rel="noreferrer"><span className='links-wrapper__arrow'>{'>>'}</span>DEMO</a>
                    </div>
                    <img className='portfolio-wrapper__image' src={todoImage} alt='Todo'></img>
                    <div className='project-wrapper__description'>
                        <p className='description__text-project project-name'>React Todo</p><p className='description__text-project'>Todo list build with React and localstorage. Deployed with Github pages.<br/><br/>Click the links above to see the code at Github or try out the Demo.</p>
                    </div>
                </div>
                <div className='portfolio-wrapper__project-wrapper' id='futibol'>
                    <div className='project-wrapper__links-wrapper'>
                        <a className='links-wrapper__link' href="https://github.com/willewilsonson/hackday" target="_blank" rel="noreferrer"><span className='links-wrapper__arrow'>{'>>'}</span>CODE</a>
                        <p className='links-wrapper__link--no-demo' ><span className='links-wrapper__arrow'>{'>>'}</span>DEMO</p>
                    </div>
                    <img className='portfolio-wrapper__image' src={hackdayImage} alt='Fotibol'></img>
                    <div className='project-wrapper__description'>
                        <p className='description__text-project project-name'>Fotibol</p><p className='description__text-project'>A football search engine built with React frontend and express backend. Sending calls to external API football-data.org.<br/><br/>Click the link above to see the code at Github</p>
                    </div>
                </div>
                <div className='portfolio-wrapper__project-wrapper' id='portfolio'>
                    <div className='project-wrapper__links-wrapper'>
                        <a className='links-wrapper__link' href="https://github.com/willewilsonson/react_portfolio_2" target="_blank" rel="noreferrer"><span className='links-wrapper__arrow'>{'>>'}</span>CODE</a>
                        <p className='links-wrapper__link--no-demo' ><span className='links-wrapper__arrow'>{'>>'}</span>DEMO</p>
                    </div>
                    <img className='portfolio-wrapper__image' src={portfolioImage} alt='Portfolio'></img>
                    <div className='project-wrapper__description'>
                        <p className='description__text-project project-name'>Portfolio</p><p className='description__text-project'>My portfolio site built with React and EmailJS to send mail via the contact form.<br/><br/>Click the link above to see the code at Github</p>
                    </div>
                </div>
            </article>
            <button onClick={ () => handleClick() }className='portfolio__back-button'>MENU</button>
        </section>
    );
};

export default Portfolio;