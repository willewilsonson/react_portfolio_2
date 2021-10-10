import './Start.css';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Start = ({ isStarted, setIsStarted, setShowSection, setColor }) => {
    const startSection = useRef();
    const startButton = useRef();
    const welcomeText = useRef();
    const blue = '#e1e9eb';

    const handleClick = (boolean, section) => {
        setIsStarted(boolean);
        setShowSection(section);
        setColor(blue);
        return;
    };

    useEffect(() => {
        if (isStarted) {
            gsap.to(startButton.current, {
                duration: 0.1,
                opacity: 0,
            });
            gsap.to(welcomeText.current, {
                delay: 0.2,
                duration: 1.5,
                opacity: 0.2,
                x: '101%',
                ease: 'expo',
            });
            gsap.to(startSection.current, {
                zIndex: -1,
            })
        }
        if (!isStarted) {
            gsap.to(startButton.current, {
                duration: 0.1,
                opacity: 1,
            });
            gsap.to(welcomeText.current, {
                delay: 0.2,
                duration: 1.5,
                opacity: 1,
                x: '0%',
                ease: 'expo',
            });
            gsap.to(startSection.current, {
                zIndex: 1,
            })
        }
        return;
    }, [isStarted]);

    return(
        <section className={ `start${isStarted ? ' start--fade-out' : '' }`} ref={startSection}>
            <div className='start__welcome-wrapper'>
                <p className='start__welcome-text' ref={welcomeText}>Welcome to my page</p>
                <button onClick={ () => handleClick(true, 'menu') } ref={startButton}>Get started!</button>
            </div>
        </section>
    );
};

export default Start;