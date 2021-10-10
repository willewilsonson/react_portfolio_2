import './Contact.css';

const Contact = ({ handleClick }) => {

    return(
        <section className='contact'>
            <article className='contact__contact-wrapper'>Contact</article>
            <button onClick={ () => handleClick('menu') }className='contact__back-button'>BACK</button>
        </section>
    );
};

export default Contact;