import strummrImage from './img/strummr_image.png';
import todoImage from './img/project_todo_image.png';
import hackdayImage from './img/futibol_image.png';
import portfolioImage from './img/portfolio_image.png';

const portfolioContent = [
    {
        id: 'strummr',
        code: 'https://github.com/mobUndefined21/2-week-project',
        demo: 'https://ancient-fjord-02404.herokuapp.com/',
        alt: 'Strummr',
        title: 'Strummr',
        text: ['A MERN-stack social media for musicians project build with my team at Salt bootcamp. Deployed with Heroku.', 'Click the links above to see the code at Github or try out the Demo (It can be slow to start due to Herokus servers).'],
        img: strummrImage,
    },
    {
        id: 'todo',
        code: 'https://github.com/willewilsonson/todo',
        demo: 'https://willewilsonson.github.io/todo/',
        alt: 'Todo',
        title: 'React Todo',
        text: ['Todo list build with React and localstorage. Deployed with Github pages.', 'Click the links above to see the code at Github or try out the Demo.'],
        img: todoImage,
    },
    {
        id: 'fotibol',
        code: 'https://github.com/willewilsonson/hackday',
        demo: '',
        alt: 'Fotibol',
        title: 'Fotibol',
        text: ['A football search engine built with React frontend and express backend. Sending calls to external API football-data.org.', 'Click the link above to see the code at Github'],
        img: hackdayImage,
    },
    {
        id: 'portfolio',
        code: 'https://github.com/willewilsonson/react_portfolio_2',
        demo: '',
        alt: 'Portfolio',
        title: 'Portfolio',
        text: ['My portfolio site built with React and EmailJS to send mail via the contact form.', 'Click the link above to see the code at Github'],
        img: portfolioImage,
    },
]

export default portfolioContent;