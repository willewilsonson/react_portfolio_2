import { gsap } from "gsap";

const SectionSelectorAnimations = (showSection, portfolioSection) => {
    if (showSection === 'menu') {
        gsap.to(portfolioSection.current, {
            duration: 1,
            opacity: 0,
            zIndex: -1,
        })
        return;
    }
    gsap.to(portfolioSection.current, {
        delay: 0.5,
        duration: 1,
        opacity: 1,
        zIndex: 1,
    })
}

export default SectionSelectorAnimations;