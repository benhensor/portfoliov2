// Tech Icons
import auth0 from './assets/icons/tech/tools/auth0.svg';
import babel from './assets/icons/tech/tools/babel.svg';
import bootstrap from './assets/icons/tech/frontend/bootstrap5.svg';
import css from './assets/icons/tech/frontend/css3.svg';
import cypress from './assets/icons/tech/testing/cypress.svg';
import elementUI from './assets/icons/tech/frontend/elementui.svg';
import figma from './assets/icons/tech/design/figma.svg';
import firebase from './assets/icons/tech/backend/firebase.svg';
import flask from './assets/icons/tech/backend/flask.svg';
import git from './assets/icons/tech/devops/git.svg';
import github from './assets/icons/tech/devops/github.svg';
import heroku from './assets/icons/tech/devops/heroku.svg';
import html from './assets/icons/tech/frontend/html5.svg';
import jest from './assets/icons/tech/testing/jest.svg';
import javascript from './assets/icons/tech/languages/js.svg';
import mongodb from './assets/icons/tech/backend/mongodb.svg';
import netlify from './assets/icons/tech/devops/netlify.svg';
import node from './assets/icons/tech/backend/nodejs.svg';
import npm from './assets/icons/tech/tools/npm.svg';
import playwright from './assets/icons/tech/testing/playwright.svg';
import postfresql from './assets/icons/tech/backend/postgresql.svg';
import postman from './assets/icons/tech/tools/postman.svg';
import prettier from './assets/icons/tech/tools/prettier.svg';
import ps from './assets/icons/tech/design/ps.svg';
import python from './assets/icons/tech/languages/python.svg';
import react from './assets/icons/tech/frontend/reactjs.svg';
import reactrouter from './assets/icons/tech/tools/reactrouter.svg';
import redux from './assets/icons/tech/frontend/redux.svg';
import sass from './assets/icons/tech/frontend/sass.svg';
import semanticUi from './assets/icons/tech/frontend/semanticui.svg';
import tailwind from './assets/icons/tech/frontend/tailwindcss.svg';
import typescript from './assets/icons/tech/languages/typescript.svg';
import vsCode from './assets/icons/tech/tools/vscode.svg';


// Project Images
import paperbackLogo from './assets/projects/paprback_logo_books.svg';
import bookShelf from './assets/projects/bookshelfHero.png';
import bhSoundLogo from './assets/projects/bhsoundLogo.svg';
import mixingDesk from './assets/projects/mixingDesk.jpeg';
import seasonItLogo from './assets/projects/seasonit-logo.svg';
import seasonItBackground from './assets/projects/seasons-banner3.png';
import sneakersLogo from './assets/projects/sneakersLogo.svg';
import sneakersBackground from './assets/projects/sneakersBackground.jpg';
import countriesBackground from './assets/projects/countriesBackground.png';
import audiophileBackground from './assets/projects/image-header.jpg';
import designoBackground from './assets/projects/designoBackground.jpg';
import weatherAppBackground from './assets/projects/weather-app.png';


// Tech Icon Data
const backend = [
    { name: 'Firebase', icon: firebase },
    { name: 'Flask', icon: flask },
    { name: 'MongoDB', icon: mongodb },
    { name: 'Node.js', icon: node },
    { name: 'PostgreSQL', icon: postfresql }
]

const design = [
    { name: 'Figma', icon: figma },
    { name: 'Photoshop', icon: ps }
]

const devops = [
    { name: 'Git', icon: git },
    { name: 'GitHub', icon: github },
    { name: 'Heroku', icon: heroku },
    { name: 'Netlify', icon: netlify },
]

const frontend = [
    { name: 'Bootstrap', icon: bootstrap }, 
    { name: 'CSS 3', icon: css },
    { name: 'Element-UI', icon: elementUI },
    { name: 'HTML 5', icon: html },
    { name: 'React', icon: react },
    { name: 'Redux', icon: redux},
    { name: 'Sass', icon: sass },
    { name: 'Semantic UI', icon: semanticUi },
    { name: 'Tailwind', icon: tailwind }
]

const languages = [
    { name: 'JavaScript', icon: javascript },
    { name: 'Python', icon: python },
    { name: 'TypeScript', icon: typescript }
]

const testing = [
    { name: 'Cypress', icon: cypress },
    { name: 'Jest', icon: jest },
    { name: 'Playwright', icon: playwright }
]

const tools = [
    { name: 'Auth0', icon: auth0 },
    { name: 'Babel', icon: babel },
    { name: 'NPM', icon: npm },
    { name: 'Postman', icon: postman },
    { name: 'Prettier', icon: prettier },
    { name: 'React Router', icon: reactrouter },
    { name: 'VS Code', icon: vsCode }
]

const tech = [
    { name: 'Auth0', icon: auth0 },
    { name: 'Babel', icon: babel },
    { name: 'Bootstrap', icon: bootstrap },
    { name: 'CSS 3', icon: css },
    { name: 'Cypress', icon: cypress },
    { name: 'Element-UI', icon: elementUI },
    { name: 'Figma', icon: figma },
    { name: 'Firebase', icon: firebase },
    { name: 'Flask', icon: flask },
    { name: 'Git', icon: git },
    { name: 'GitHub', icon: github },
    { name: 'Heroku', icon: heroku },
    { name: 'HTML 5', icon: html },
    { name: 'Jest', icon: jest },
    { name: 'JavaScript', icon: javascript },
    { name: 'MongoDB', icon: mongodb },
    { name: 'Netlify', icon: netlify },
    { name: 'Node.js', icon: node },
    { name: 'NPM', icon: npm },
    { name: 'Photoshop', icon: ps },
    { name: 'Playwright', icon: playwright },
    { name: 'PostgreSQL', icon: postfresql },
    { name: 'Postman', icon: postman },
    { name: 'Prettier', icon: prettier },
    { name: 'Python', icon: python },
    { name: 'React', icon: react },
    { name: 'React Router', icon: reactrouter },
    { name: 'Redux', icon: redux },
    { name: 'Sass', icon: sass },
    { name: 'Semantic UI', icon: semanticUi },
    { name: 'Tailwind', icon: tailwind },
    { name: 'TypeScript', icon: typescript },
    { name: 'VS Code', icon: vsCode }
]


// Journey data
const aboutInfo = [
{ key: 1,
    text: "I'm a Frontend React Developer based in Bristol, UK." },
{ key: 2,
    text: "Following a successful career as an award-winning Sound Designer, I decided to break into web development." },
{ key: 3,
    text: "Thank you for visiting my portfolio, you can check out some of my projects below." },
{ key: 4,
    text: "I am actively seeking new opportunities so please get in touch!" },
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
        title: 'SeasonIt 2.0',
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
        code: 'https://github.com/benhensor/designo.git'
    },
    {
        key: 8,
        title: 'Weather App',
        logo: null,
        image: weatherAppBackground,
        description: 'A simple React weather app.',
        live: 'https://weather-a0yriosp6-ben-s-projects-3a069c6e.vercel.app/',
        code: 'https://github.com/benhensor/weather-app.git'
    }
]


export { backend, design, devops, frontend, languages, testing, tools, tech, aboutInfo, projects }