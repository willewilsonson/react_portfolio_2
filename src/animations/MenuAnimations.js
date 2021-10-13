import { gsap } from "gsap";

const MenuAnimations = (showSection, menuSection, menuButtonOne, menuButtonTwo, menuButtonThree, menuButtonFour, menuButtonStart, setColor) => {
    const white = '#f5f8eb';
    const pink = '#efe6d6';
    const blue = '#e1e9eb';
    const timeline = gsap.timeline();

    if (showSection === 'menu') {
        setColor(blue);
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
}

export default MenuAnimations;