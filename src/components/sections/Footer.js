import './Footer.css';
import linkedinIcon from './img/linkedin_icon.png';
import githubIcon from './img/github_icon.png';
import gmailIcon from './img/gmail_icon.png';

const Footer = () => {

    return (
        <footer className='footer'>
            <div className='linkedin'>
                <img src={linkedinIcon} alt='Linkedin icon'></img>
            </div>
            <div className='github'>
                <img src={githubIcon} alt='Github icon'></img>
            </div>
            <div className='gmail'>
                <img src={gmailIcon} alt='Gmail icon'></img>
            </div>
        </footer>
    )

};

export default Footer;