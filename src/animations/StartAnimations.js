import { gsap } from "gsap";

const StartAnimation = (isStarted, startButton, startSection, welcomeText, welcomeTextName, welcomeTextSecond, blue) => {
    const timeLine = gsap.timeline();

    if (isStarted) {
        gsap.to(startButton.current, {
            duration: 0.1,
            opacity: 0,
        });
        gsap.to(startSection.current, {
            zIndex: -1,
            opacity: 0,
        })
    }

    if (!isStarted) {
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
}

export default StartAnimation;