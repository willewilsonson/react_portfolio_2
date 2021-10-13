import './Start.css';
import { useEffect, useRef } from 'react';
import StartAnimations from '../animations/StartAnimations';

const Start = ({ isStarted, setIsStarted, setShowSection, setColor }) => {
    const startSection = useRef();
    const startButton = useRef();
    const welcomeText = useRef();
    const welcomeTextSecond = useRef();
    const welcomeTextName = useRef();
    const blue = '#e1e9eb';

    const handleClick = (boolean, section) => {
        setIsStarted(boolean);
        setShowSection(section);
        setColor(blue);
        return;
    };

    useEffect(() => {
        StartAnimations(isStarted, startButton, startSection, welcomeText, welcomeTextName, welcomeTextSecond);
    }, [isStarted]);

    return(
        <section className={ `start${isStarted ? ' start--fade-out' : '' }`} ref={startSection}>
            <div className='start__welcome-wrapper'>
                <div className="wrapper">
                    <p className="introline" ref={welcomeText}>I am</p>
                    <h1 className="bigline" ref={welcomeTextName}>William</h1>
                </div>
                <p className="outroline" ref={welcomeTextSecond}>a full stack Javacsript developer</p>
            </div>
            <button className='start-button' onClick={ () => handleClick(true, 'menu') } ref={startButton}>Click me!</button>
        </section>
    );
};

export default Start;