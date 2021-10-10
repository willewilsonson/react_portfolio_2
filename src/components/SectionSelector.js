import './SectionSelector.css';
import { useEffect, useRef } from 'react';
import Portfolio from './sections/Portfolio';
import Skills from './sections/Skills';
import About from './sections/About';
import Contact from './sections/Contact';
import gsap from 'gsap/all';


const Menu = ({ showSection, setShowSection }) => {
    const portfolioSection = useRef();

    const handleClick = () => {
        gsap.to(portfolioSection.current, {
            duration: 0.2,
            opacity: 0,
            zIndex: -1,
        })
        setTimeout(() => {
            setShowSection('menu');
        }, 200);
        return;
    }

    useEffect(() => {
        if (showSection === 'menu') {
            gsap.to(portfolioSection.current, {
                duration: 1,
                opacity: 0,
                zIndex: -1,
            })
            return;
        }
        gsap.to(portfolioSection.current, {
            duration: 1,
            opacity: 1,
            zIndex: 1,
        })
    }, [showSection]);

    const getSection = () => {
        if (showSection === 'portfolio') {
            return <Portfolio handleClick={handleClick}/>
        }
        if (showSection === 'skills') {
            return <Skills handleClick={handleClick}/>
        }
        if (showSection === 'about') {
            return <About handleClick={handleClick}/>
        }
        if (showSection === 'contact') {
            return <Contact handleClick={handleClick}/>
        }
    };

    return(
        <div className='sectionselector' ref={portfolioSection}>
            <article>{ getSection() }</article>
        </div>
    );
};

export default Menu;