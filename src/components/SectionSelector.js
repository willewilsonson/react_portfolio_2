import './SectionSelector.css';
import Portfolio from './sections/Portfolio';
import Skills from './sections/Skills';
import About from './sections/About';
import Contact from './sections/Contact';

const Menu = ({ showSection, setShowSection }) => {

    const getSection = () => {
        if (showSection === 'portfolio') {
            return <Portfolio />
        }
        if (showSection === 'skills') {
            return <Skills />
        }
        if (showSection === 'about') {
            return <About />
        }
        if (showSection === 'contact') {
            return <Contact />
        }
        return;
    };

    return(
        <div className='sectionselector'>
            <article>{ getSection() }</article>
           { showSection !== '' ? <button onClick={ () => setShowSection('') }>BACK</button> : false }
        </div>
    );
};

export default Menu;