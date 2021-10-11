import './Skills.css';
//frontend
import reactLogo from './img/react_logo.png';
import html5Logo from './img/html5_logo.png';
import cssLogo from './img/css_logo.png';
import reduxLogo from './img/redux_logo.png';
import webpackLogo from './img/webpack_logo.png';
import jqueryLogo from './img/jquery_logo.png';
//backend
import nodeLogo from './img/nodejs_logo.png';
import expressLogo from './img/expressjs_logo.png';
import restapiLogo from './img/restapi_logo.png';
import graphqlLogo from './img/graphql_logo.png';
import mongodbLogo from './img/mongodb_logo.png';
import postgresqlLogo from './img/postgresql_logo.webp';
//tools
import vscodeLogo from './img/vscode_logo.png';
import atomLogo from './img/atom_logo.png';
import dockerLogo from './img/docker_logo.webp';
import githubLogo from './img/github_logo.png';
import gitLogo from './img/git_logo.png';

const frontEnd = [
    [reactLogo, 'React logo', 'React JS'],
    [html5Logo, 'Html5 logo', 'HTML5'],
    [cssLogo, 'Css logo', 'CSS'],
    [reduxLogo, 'Redux logo', 'Redux'],
    [webpackLogo, 'Webpack logo', 'Webpack'],
    [jqueryLogo, 'Jquery logo', 'Jquery'],
]

const backEnd = [
    [nodeLogo, 'Node logo', 'Node JS'],
    [expressLogo, 'Express logo', 'Express JS'],
    [restapiLogo, 'Rest API logo', 'Rest API'],
    [graphqlLogo, 'GraphQL logo', 'GraphQL'],
    [mongodbLogo, 'MongoDB logo', 'MongoDB'],
    [postgresqlLogo, 'PostgreSQL logo', 'PostgreSQL'],
]

const tools = [
    [vscodeLogo, 'VS Code logo', 'VS Code'],
    [atomLogo, 'Atom logo', 'Atom'],
    [dockerLogo, 'Docker logo', 'Docker'],
    [githubLogo, 'Github logo', 'Github'],
    [gitLogo, 'Git logo', 'Git'],
]


const Skills = ({ handleClick }) => {

    const createLogoDiv = (logo, key) => {
        return  <div className='skills-wrapper__project-wrapper' key={key}>
                    <img className='skills-wrapper__image' src={logo[0]} alt={logo[1]}></img>
                    <p className='skills-wrapper__text'>{logo[2]}</p>
                </div>
    };

    return(
        <section className='skills'>
            <h1 className='skills__title'>Frontend</h1>
            <article className='skills__skills-wrapper'>
                {frontEnd.map((logo, i) => createLogoDiv(logo, i))}
            </article>
            <h1 className='skills__title'>Backend</h1>
            <article className='skills__skills-wrapper'>
                {backEnd.map((logo, i) => createLogoDiv(logo, i))}
            </article>
            <h1 className='skills__title'>Tools</h1>
            <article className='skills__skills-wrapper'>
                {tools.map((logo, i) => createLogoDiv(logo, i))}
            </article>
            <button onClick={ () => handleClick('menu') } className='skills__back-button'>MENU</button>
        </section>
    );
};

export default Skills;