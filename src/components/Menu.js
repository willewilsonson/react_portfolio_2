import './Menu.css';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import MenuAnimations from '../animations/MenuAnimations';

const Menu = ({ showSection, setShowSection, setColor }) => {
    const menuSection = useRef();
    const menuWrapper = useRef();
    const menuButtonOne = useRef();
    const menuButtonTwo = useRef();
    const menuButtonThree = useRef();
    const menuButtonFour = useRef();
    const menuButtonStart = useRef();

    const clickedButton = (section) => {
        if (section === 'start') {
            gsap.to(menuSection.current, {
                duration: 0.3,
                opacity: 0,
            })
            setTimeout(() => {
                window.location.reload();
            }, 300);
            return;
        }
        return setShowSection(section);
    };


    useEffect(() => {
        MenuAnimations(showSection, menuSection, menuButtonOne, menuButtonTwo, menuButtonThree, menuButtonFour, menuButtonStart, setColor);
    }, [showSection, setColor]);


    return(
        <section className={`menu`} ref={menuSection}>
                <div className='menu__button-wrapper' ref={menuWrapper}>
                    <button id='button-portfolio' onClick={() => clickedButton('portfolio')} ref={ menuButtonOne }>PORTFOLIO</button>
                    <button id='button-skills' onClick={() => clickedButton('skills')} ref={ menuButtonTwo }>SKILLS</button>
                    <button id='button-about' onClick={() => clickedButton('about')} ref={ menuButtonThree }>ABOUT ME</button>
                    <button id='button-contact' onClick={() => clickedButton('contact')} ref={ menuButtonFour }>CONTACT</button>
                </div>
                <button id='button-start' onClick={() => clickedButton('start')} ref={menuButtonStart}>START</button>
        </section>
    );
};

export default Menu;