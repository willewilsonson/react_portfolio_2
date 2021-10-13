import './SectionSelector.css';
import { useEffect, useRef } from 'react';
import Portfolio from './sections/Portfolio';
import Skills from './sections/Skills';
import About from './sections/About';
import Contact from './sections/Contact';
import SectionSelectorAnimations from '../animations/SectionSelectorAnimations';
import gsap from 'gsap/all';


const Menu = ({ showSection, setShowSection, setColor }) => {
    const portfolioSection = useRef();

    const blue = '#e1e9eb';

    const handleClick = () => {
        gsap.to(portfolioSection.current, {
            duration: 0.2,
            opacity: 0,
            zIndex: -1,
        })
        setTimeout(() => {
            setColor(blue);
            setShowSection('menu');
        }, 200);
        return;
    }

    useEffect(() => {
        SectionSelectorAnimations(showSection, portfolioSection);
    }, [showSection]);

    const getSection = () => {
        if (showSection === 'portfolio') {
            return <Portfolio handleClick={handleClick} showSection={showSection} setShowSection={setShowSection} portfolioSection={portfolioSection}/>
        }
        if (showSection === 'skills') {
            return <Skills handleClick={handleClick} showSection={showSection} setShowSection={setShowSection} portfolioSection={portfolioSection}/>
        }
        if (showSection === 'about') {
            return <About handleClick={handleClick} showSection={showSection} setShowSection={setShowSection} portfolioSection={portfolioSection}/>
        }
        if (showSection === 'contact') {
            return <Contact handleClick={handleClick} showSection={showSection} setShowSection={setShowSection} portfolioSection={portfolioSection}/>
        }
    };

    return(
        <div className='sectionselector' ref={portfolioSection}>
            <article>{ getSection() }</article>
        </div>
    );
};

export default Menu;