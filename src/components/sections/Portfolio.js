import './Portfolio.css';
import portfolioContent from '../../content/portfolioContent';

const Portfolio = ({ handleClick }) => {

    const createPortfolioContent = (project, key) => {
        return  <div key={key} className='portfolio-wrapper__project-wrapper' id={project.id}>
                    <div className='project-wrapper__links-wrapper'>
                        <a className='links-wrapper__link' href={project.code} target="_blank" rel="noreferrer"><span className='links-wrapper__arrow'>{'>>'}</span>CODE</a>
                        <a className={project.demo ? 'links-wrapper__link' : 'links-wrapper__link--no-demo' } href={project.demo} target="_blank" rel="noreferrer"><span className='links-wrapper__arrow'>{'>>'}</span>DEMO</a>
                    </div>
                    <img className='portfolio-wrapper__image' src={project.img} alt={project.alt}></img>
                    <div className='project-wrapper__description'>
                        <p className='description__text-project project-name'>{project.title}</p><p className='description__text-project'>{project.text[0]}<br/><br/>{project.text[1]}</p>
                    </div>
                </div>
    };

    return(
        <section className='portfolio'>
            <h1 className='portfolio__title'>PORTFOLIO</h1>
            <article className='portfolio__portfolio-wrapper'>
                {portfolioContent.map((project, i) => createPortfolioContent(project, i))}
            </article>
            <div className='meny-wrapper'>
                <button onClick={ () => handleClick() }className='portfolio__back-button'>MENU</button>
                <div className='meny-wrapper__dropdown'>
                    <button>PORTFOLIO</button>
                    <button>SKILLS</button>
                    <button>ABOUT</button>
                    <button>CONTACT</button>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;