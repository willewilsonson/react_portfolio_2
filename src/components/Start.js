import './Start.css';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Start = ({ isStarted, setIsStarted, setShowSection, setColor }) => {
    const startSection = useRef();
    const startButton = useRef();
    const welcomeText = useRef();
    const welcomeTextSecond = useRef();
    const welcomeTextName = useRef();
    const blue = '#e1e9eb';
    const timeLine = gsap.timeline();

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
            // gsap.to(welcomeText.current, {
            //     delay: 0.2,
            //     duration: 1.5,
            //     opacity: 0.2,
            //     x: '101%',
            //     display: 'none',
            //     ease: 'expo',
            // });
            gsap.to(startSection.current, {
                zIndex: -1,
                opacity: 0,
            })
        }
        if (!isStarted) {
            // gsap.to(startButton.current, {
            //     duration: 0.1,
            //     opacity: 1,
            // });
            gsap.to(startSection.current, {
                zIndex: 1,
            })
            gsap.to(startSection.current, {
                duration: 1,
                opacity: 1,
            })
            timeLine.to(welcomeText.current, {
                delay: 0.2,
                duration: 1,
                left: '25%',
            });
            timeLine.to(welcomeTextName.current, {
                duration: 1,
                left: '25%',
            }, '-=0.3');
            timeLine.to(welcomeTextSecond.current, {
                duration: 8,
                opacity: 1,
            });
            timeLine.to(startButton.current, {
                duration: 1,
                opacity: 1,
            }, '-=7');
            timeLine.to(startButton.current, {
                repeat: 10,
                duration: 3,
                borderColor: blue,
            }, '-=6');
        }
    }, [isStarted, timeLine]);

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