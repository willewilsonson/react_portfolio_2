import './DropdownMenu.css';

const DropdownMenu = ({ showSection, setShowSection, handleClick }) => {

    return (
        <div className='menu-wrapper'>
        <button onClick={ () => handleClick() } className='menu-wrapper__back-button'>MENU</button>
        <div className='menu-wrapper__dropdown'>
            { showSection !== 'portfolio' ? <button onClick={ () => setShowSection('portfolio') }>PORTFOLIO</button> : '' }
            { showSection !== 'skills' ? <button onClick={ () => setShowSection('skills') }>SKILLS</button> : '' }
            { showSection !== 'about' ? <button onClick={ () => setShowSection('about') }>ABOUT</button> : '' }
            { showSection !== 'contact' ? <button onClick={ () => setShowSection('contact') }>CONTACT</button> : '' }
            <button onClick={ () => handleClick() }>BACK</button>
        </div>
        </div>
    );
};

export default DropdownMenu;
