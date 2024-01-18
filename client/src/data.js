import babel from './assets/icons/tech/babel.svg';
import bootstrap from './assets/icons/tech/bootstrap5.svg';
import css from './assets/icons/tech/css.svg';
import figma from './assets/icons/tech/figma.svg';
import git from './assets/icons/tech/git.svg';
import gitlab from './assets/icons/tech/gitlab.svg';
import html from './assets/icons/tech/html5.svg';
import jest from './assets/icons/tech/jest.svg';
import javascript from './assets/icons/tech/js.svg';
import mongodb from './assets/icons/tech/mongodb.svg';
import node from './assets/icons/tech/nodejs.svg';
import npm from './assets/icons/tech/npm.svg';
import postfresql from './assets/icons/tech/postfresql.svg';
import postman from './assets/icons/tech/postman.svg';
import ps from './assets/icons/tech/ps.svg';
import react from './assets/icons/tech/reactjs.svg';
import sass from './assets/icons/tech/sass.svg';
import semanticUi from './assets/icons/tech/semantic-ui.svg';
import tailwind from './assets/icons/tech/tailwind.svg';
import vs from './assets/icons/tech/vs.svg';
import auth0 from './assets/icons/tech/auth0.svg';
import elementUI from './assets/icons/tech/element-ui.svg';
import netlify from './assets/icons/tech/netlify.svg';
import prettier from './assets/icons/tech/prettier.svg';

import paperbackLogo from './assets/img/paprback_logo_books.svg';
import bookShelf from './assets/img/bookshelfHero.png';
import bhSoundLogo from './assets/img/bhsoundLogo.svg';
import mixingDesk from './assets/img/mixingDesk.jpeg';
import seasonItLogo from './assets/img/seasonit-logo.svg';
import seasonItBackground from './assets/img/seasons-banner3.jpeg';
import sneakersLogo from './assets/img/sneakersLogo.svg';
import sneakersBackground from './assets/img/sneakersBackground.jpg';
import countriesBackground from './assets/img/countriesBackground.png';
import audiophileBackground from './assets/img/image-header.jpg';
import designoBackground from './assets/img/designoBackground.jpg';

const tech = [
{
    name: 'HTML 5',
    icon: html
},
{
    name: 'CSS 3',
    icon: css
},
{
    name: 'JavaScript',
    icon: javascript
},
{
    name: 'React',
    icon: react
},
{
    name: 'Node.js',
    icon: node
},
{
    name: 'Auth0',
    icon: auth0
},
{
    name: 'MongoDB',
    icon: mongodb
},
{
    name: 'Elephant SQL',
    icon: postfresql
},
{
    name: 'Git',
    icon: git
},
{
    name: 'GitHub',
    icon: gitlab
},
{
    name: 'VS Code',
    icon: vs
},
{
    name: 'Figma',
    icon: figma
},
{
    name: 'Bootstrap',
    icon: bootstrap
},
{
    name: 'Sass',
    icon: sass
},
{
    name: 'Tailwind',
    icon: tailwind
},
{
    name: 'Jest',
    icon: jest
},
{
    name: 'NPM',
    icon: npm
},
{
    name: 'Postman',
    icon: postman
},
{
    name: 'Photoshop',
    icon: ps
},
{
    name: 'Babel',
    icon: babel
},
{
    name: 'VS Code',
    icon: vs
},
{
    name: 'Semantic UI',
    icon: semanticUi
},
{
    name: 'Element-UI',
    icon: elementUI
},
{
    name: 'Netlify',
    icon: netlify
},
{
    name: 'Prettier',
    icon: prettier
},
]

// Journey data

const journey = [
{
    key: 1,
    text: "Hi, I'm Ben, a Full Stack Developer based in Bristol, UK."
},
{
    key: 2,
    text: "I started out creating music and sound effects for local theatre companies..."
},
{
    key: 3,
    text: "Driven by my love for audio production, I trained at the prestigious National Film & Television School, honed my skills and became a professional Sound Designer, working in Film, Television, and Commercials."
},
{
    key: 4,
    text: "However, following the pandemic, I realised the need to adapt and explore new avenues. It was during this time that I made a bold decision to pursue my other passion: Software Development!"
},
{
    key: 5,
    text: "To kickstart this new chapter, I enrolled onto the School of Code. Through determination and a lot of hard work, I completed the immensely challenging coding bootcamp..."
},
{
    key: 6,
    text: "Throughout this journey, I have embraced the opportunity to acquire a wealth of new knowledge and skills. Building upon my successes in my first role as a Full Stack Developer, I am now looking forward to the next chapter in my career."
},
{
    key: 7,
    text: "Thank you for visiting my portfolio, please check out some of my projects below. I am actively seeking new opportunities, so please feel free to get in touch!"
}
]

    // Projects data

const projects = [
    {
        key: 1,
        title: 'Paprback',
        logo: paperbackLogo,
        image: bookShelf,
        description: 'Connecting people in their local area for the purpose of exchanging and donating unwanted books.',
        live: 'https://bcpaprback.netlify.app/',
        code: 'https://github.com/benhensor/soc_byteclub_paprback'
    },
    {
        key: 2,
        title: 'Ben Hensor Sound',
        logo: bhSoundLogo,
        image: mixingDesk,
        description: 'A recreation of my Sound Design website built in React with an Express mail server.',
        live: 'https://benhensorsound.netlify.app/',
        code: 'https://github.com/benhensor/benhensorsound'
    },
    {
        key: 3,
        title: 'Season It',
        logo: seasonItLogo,
        image: seasonItBackground,
        description: 'Discover seasonal produce throughout the year in the UK.',
        live: 'https://seasonit.netlify.app/',
        code: 'https://github.com/benhensor/season-it'
    },
    {
        key: 4,
        title: 'Sneakers',
        logo: sneakersLogo,
        image: sneakersBackground,
        description: 'A Frontend Mentor e-commerce page built with React.',
        live: 'https://frontendmentor-sneakers.netlify.app/',
        code: 'https://github.com/benhensor/e-commerce_page'
    },
    {
        key: 5,
        title: 'RESTful Countries API',
        logo: null,
        image: countriesBackground,
        description: 'A Frontend Mentor country finder page built with React.',
        live: 'https://fe-country-finder.netlify.app/',
        code: 'https://github.com/benhensor/countries_api.git'
    },
    {
        key: 6,
        title: 'Audiophile',
        logo: null,
        image: audiophileBackground,
        description: 'A Frontend Mentor e-commerce site built with React.',
        live: 'https://fm-audiophile.netlify.app/',
        code: 'https://github.com/benhensor/audiophile.git'
    },
    {
        key: 7,
        title: 'Designo',
        logo: null,
        image: designoBackground,
        description: 'A Frontend Mentor multi-page site built with React and Styled Components.',
        live: 'https://bhfm-designo.netlify.app/',
        code: 'https://github.com/benhensor'
    }
]


export { tech, journey, projects }