import './Menu.css';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Menu = ({ showSection, setShowSection }) => {
    const menuSection = useRef();
    const menuWrapper = useRef();
    const menuButtonOne = useRef();
    const menuButtonTwo = useRef();
    const menuButtonThree = useRef();
    const menuButtonFour = useRef();
    const menuButtonStart = useRef();
    const timeline = gsap.timeline();

    const white = '#f5f8eb';

    const clickedButton = (section) => {
        console.log(section);
        return setShowSection(section);
    };

    useEffect(() => {
        if (showSection === 'menu') {
            timeline.to(menuSection.current, {
                delay: 1,
                duration: 0.5,
                zIndex: 2,
                opacity: 1,
            });
            timeline.to(menuButtonOne.current, {
                duration: 0.3,
                color: '#666235',
            });
            timeline.to(menuButtonTwo.current, {
                duration: 0.3,
                color: '#666235',
            });
            timeline.to(menuButtonThree.current, {
                duration: 0.3,
                color: '#666235',
            });
            timeline.to(menuButtonFour.current, {
                duration: 0.3,
                color: '#666235',
            });
            timeline.to(menuButtonStart.current, {
                duration: 0.3,
                color: '#666235',
            });
            timeline.to(menuButtonOne.current, {
                duration: 1,
                borderRight: `0.1em solid ${white}`,
                borderBottom: `0.1em solid ${white}`,
            });
            timeline.to(menuButtonTwo.current, {
                duration: 1,
                borderLeft: `0.1em solid ${white}`,
                borderBottom: `0.1em solid ${white}`,
            }, '<');
            timeline.to(menuButtonThree.current, {
                duration: 1,
                borderColor: white,
            }, '<');
            timeline.to(menuButtonFour.current, {
                duration: 1,
                borderColor: white,
            }, '<');
            timeline.to(menuButtonStart.current, {
                duration: 1,
                borderColor: white,
            }, '<');
        }
        return;
    }, [showSection, timeline]);


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