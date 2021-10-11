import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = ({ handleClick }) => {

    const sendEmail = (e) => {
        e.preventDefault();
        if (e.target[0].value === '') {
            alert('Missing name!');
            return;
        }
        if (e.target[1].value === '') {
            alert("Missing email!");
            return;
        }
        if (e.target[2].value === '') {
            alert("Missing message!");
            return;
        }
        emailjs.sendForm(process.env.REACT_APP_SERVICE, process.env.REACT_APP_TEMPLATE, e.target, process.env.REACT_APP_USER)
          .then((result) => {
              alert('Message sent!')
          }, (error) => {
              console.error(error.text);
              alert('Oops... something went wrong, try again!')
          });
        e.target.reset();
      }

    return(
        <section className='contact'>
            <h1 className="contact-wrapper__title">Contact</h1>
            <article className='contact__contact-wrapper'>
                <form className="contact-wrapper__contact-form" onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder='Name'/>
                    <input type="email" name="email" placeholder='Email'/>
                    <textarea name="message" placeholder='Message...'/>
                    <input type="submit" value="Send" id="submit" />
                </form>
            </article>
            <button onClick={ () => handleClick('menu') }className='contact__back-button'>MENU</button>
        </section>
    );
};

export default Contact;