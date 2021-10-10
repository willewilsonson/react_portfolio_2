import './Menu.css';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Menu = ({ showSection, setShowSection, setColor }) => {
    const menuSection = useRef();
    const menuWrapper = useRef();
    const menuButtonOne = useRef();
    const menuButtonTwo = useRef();
    const menuButtonThree = useRef();
    const menuButtonFour = useRef();
    const menuButtonStart = useRef();
    const timeline = gsap.timeline();

    const white = '#f5f8eb';
    const pink = '#efe6d6';

    const clickedButton = (section) => {
        if (section === 'start') {
            gsap.to(menuSection.current, {
                duration: 0.3,
                opacity: 0,
            })
            setTimeout(() => {
                window.location.reload();
            }, 300);
            setColor(white);
            return;
        }
        console.log(section);
        return setShowSection(section);
    };


    useEffect(() => {
        if (showSection === 'menu') {
            timeline.to(menuSection.current, {
                delay: 0.5,
                duration: 0.5,
                opacity: 1,
                zIndex: 1,
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
        if (showSection === 'start') {
            setColor(white);
            gsap.to(menuSection.current, {
                opacity: 0,
                zIndex: -1,
            })
            return;
        }
        if (showSection === 'portfolio' || showSection === 'skills' || showSection === 'about' || showSection === 'contact') {
            setColor(pink);
            gsap.to(menuSection.current, {
                opacity: 0,
                zIndex: -1,
            })
            return;
        }
    }, [showSection, timeline, setColor]);


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