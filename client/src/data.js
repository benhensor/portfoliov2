// Tech Icons
import auth0 from './assets/icons/tech/tools/auth0.svg'
import babel from './assets/icons/tech/tools/babel.svg'
import bootstrap from './assets/icons/tech/frontend/bootstrap5.svg'
import css from './assets/icons/tech/frontend/css3.svg'
import cypress from './assets/icons/tech/testing/cypress.svg'
import elementUI from './assets/icons/tech/frontend/elementui.svg'
import figma from './assets/icons/tech/design/figma.svg'
import firebase from './assets/icons/tech/backend/firebase.svg'
import flask from './assets/icons/tech/backend/flask.svg'
import framermotion from './assets/icons/tech/frontend/framermotion.svg'
import git from './assets/icons/tech/devops/git.svg'
import github from './assets/icons/tech/devops/github.svg'
import heroku from './assets/icons/tech/devops/heroku.svg'
import html from './assets/icons/tech/frontend/html5.svg'
import jest from './assets/icons/tech/testing/jest.svg'
import javascript from './assets/icons/tech/languages/js.svg'
import mocha from './assets/icons/tech/testing/mochajs.svg'
import mongodb from './assets/icons/tech/backend/mongodb.svg'
import netlify from './assets/icons/tech/devops/netlify.svg'
import node from './assets/icons/tech/backend/nodejs.svg'
import npm from './assets/icons/tech/tools/npm.svg'
import playwright from './assets/icons/tech/testing/playwright.svg'
import postgresql from './assets/icons/tech/backend/postgresql.svg'
import postman from './assets/icons/tech/tools/postman.svg'
import prettier from './assets/icons/tech/tools/prettier.svg'
import ps from './assets/icons/tech/design/ps.svg'
import python from './assets/icons/tech/languages/python.svg'
import react from './assets/icons/tech/frontend/reactjs.svg'
import reactrouter from './assets/icons/tech/tools/reactrouter.svg'
import redux from './assets/icons/tech/frontend/redux.svg'
import sass from './assets/icons/tech/frontend/sass.svg'
import semanticUi from './assets/icons/tech/frontend/semanticui.svg'
import tailwind from './assets/icons/tech/frontend/tailwindcss.svg'
import typescript from './assets/icons/tech/languages/typescript.svg'
import vercel from './assets/icons/tech/devops/vercel.svg'
import vsCode from './assets/icons/tech/tools/vscode.svg'

// Project Images
import paprback1 from './assets/projects/paprback/paprback.webp'
import benhensorsound1 from './assets/projects/benhensorsound/mixingConsole.webp'
import seasonit1 from './assets/projects/seasonit/seasonit.webp'
import sneakers1 from './assets/projects/sneakers/sneakers.webp'
import countries1 from './assets/projects/countries/countries.webp'
import audiophile1 from './assets/projects/audiophile/audiophile.webp'
import designo1 from './assets/projects/designo/designo.webp'
import weather1 from './assets/projects/weatherapp/weather-app-card2.webp'
import kanban1 from './assets/projects/kanbantaskapp/kanban.webp'
import jam1 from './assets/projects/jam/jam1.webp'
import flashcards1 from './assets/projects/flashcards/flashcards.webp'
import reddit1 from './assets/projects/reddit/reddit.webp'

// Tech Icon Data
const backend = [
	{ name: 'Firebase', icon: firebase },
	{ name: 'Flask', icon: flask },
	{ name: 'MongoDB', icon: mongodb },
	{ name: 'Node.js', icon: node },
	{ name: 'PostgreSQL', icon: postgresql },
]

const design = [
	{ name: 'Figma', icon: figma },
	{ name: 'Photoshop', icon: ps },
]

const devops = [
	{ name: 'Git', icon: git },
	{ name: 'GitHub', icon: github },
	{ name: 'Heroku', icon: heroku },
	{ name: 'Netlify', icon: netlify },
	{ name: 'Vercel', icon: vercel },
]

const frontend = [
	{ name: 'Bootstrap', icon: bootstrap },
	{ name: 'CSS 3', icon: css },
	{ name: 'Framer-Motion', icon: framermotion },
	{ name: 'HTML 5', icon: html },
	{ name: 'React', icon: react },
	{ name: 'Redux', icon: redux },
	{ name: 'Sass', icon: sass },
	{ name: 'Tailwind', icon: tailwind },
]

const languages = [
	{ name: 'JavaScript', icon: javascript },
	{ name: 'Python', icon: python },
	{ name: 'TypeScript', icon: typescript },
]

const testing = [
	{ name: 'Cypress', icon: cypress },
	{ name: 'Jest', icon: jest },
	{ name: 'Mocha', icon: mocha },
	{ name: 'Playwright', icon: playwright },
]

const tools = [
	{ name: 'Auth0', icon: auth0 },
	{ name: 'Babel', icon: babel },
	{ name: 'Postman', icon: postman },
	{ name: 'React Router', icon: reactrouter },
	{ name: 'VS Code', icon: vsCode },
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
	{ name: 'PostgreSQL', icon: postgresql },
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
	{ name: 'VS Code', icon: vsCode },
]

// Hero Phrases
const heroPhrases = [
	{ phrase: 'Frontend Developer' },
	{ phrase: 'Web Designer' },
	{ phrase: 'React Wizard' },
	{ phrase: 'CSS Guru' },
	{ phrase: 'HTML Hero' },
	{ phrase: 'Cat Fanatic!' },
]

// Journey data
const aboutInfo = {
	heading: "Hi, I'm Ben",
	subHeading: 'Welcome to my portfolio!',
	sentences: [
		{ key: 1, text: "I'm a Frontend Developer based in Bristol, UK." },
		{
			key: 2,
			text: 'Following a successful career as a Sound Designer, I decided to pursue a fresh challenge and get into Web Development!',
		},
		{
			key: 3,
			text: 'I am passionate about technology and design, always striving to create engaging user experiences...',
		},
		{
			key: 4,
			text: 'I am actively seeking new opportunities so please get in touch!',
		},
	],
}

// Projects data
const projects = [
	{
		key: 0,
		title: 'Paprback',
		logo: null,
		image: paprback1,
		description:
			'Connecting people in their local area for the purpose of exchanging and donating unwanted books.',
		techStack: [
			{ name: 'React', icon: react },
			{ name: 'Node', icon: node },
			{ name: 'PostgreSQL', icon: postgresql },
			{ name: 'Netlify', icon: netlify },
		],
		live: 'https://bcpaprback.netlify.app/',
		code: 'https://github.com/benhensor/soc_byteclub_paprback',
	},
	{
		key: 1,
		title: 'Ben Hensor Sound',
		logo: null,
		image: benhensorsound1,
		description:
			'A recreation of my Sound Design website built in React with an Express mail server.',
		techStack: [
			{ name: 'React', icon: react },
			{ name: 'Node', icon: node },
			{ name: 'Netlify', icon: netlify },
		],
		live: 'https://benhensorsound.netlify.app/',
		code: 'https://github.com/benhensor/benhensorsound',
	},
	{
		key: 2,
		title: 'SeasonIt 2.0',
		logo: null,
		image: seasonit1,
		description: 'Discover seasonal produce throughout the year in the UK.',
		techStack: [
			{ name: 'React', icon: react },
			{ name: 'Node', icon: node },
			{ name: 'MongoDB', icon: mongodb },
			{ name: 'Netlify', icon: netlify },
		],
		live: 'https://seasonit.netlify.app/',
		code: 'https://github.com/benhensor/season-it',
	},
	{
		key: 3,
		title: 'Sneakers',
		logo: null,
		image: sneakers1,
		description: 'A Frontend Mentor e-commerce page built with React.',
		techStack: [
			{ name: 'React', icon: react },
			{ name: 'Netlify', icon: netlify },
		],
		live: 'https://frontendmentor-sneakers.netlify.app/',
		code: 'https://github.com/benhensor/e-commerce_page',
	},
	{
		key: 4,
		title: 'RESTful Countries API',
		logo: null,
		image: countries1,
		description: 'A Frontend Mentor country finder page built with React.',
		techStack: [
			{ name: 'React', icon: react },
			{ name: 'Netlify', icon: netlify },
		],
		live: 'https://fe-country-finder.netlify.app/',
		code: 'https://github.com/benhensor/countries_api.git',
	},
	{
		key: 5,
		title: 'Audiophile',
		logo: null,
		image: audiophile1,
		description: 'A Frontend Mentor e-commerce site built with React.',
		techStack: [
			{ name: 'React', icon: react },
			{ name: 'Netlify', icon: netlify },
		],
		live: 'https://fm-audiophile.netlify.app/',
		code: 'https://github.com/benhensor/audiophile.git',
	},
	{
		key: 6,
		title: 'Designo',
		logo: null,
		image: designo1,
		description:
			'A Frontend Mentor multi-page site built with React and Styled Components.',
		techStack: [
			{ name: 'React', icon: react },
			{ name: 'Netlify', icon: netlify },
		],
		live: 'https://bhfm-designo.netlify.app/',
		code: 'https://github.com/benhensor/designo.git',
	},
	{
		key: 7,
		title: 'Weather App',
		logo: null,
		image: weather1,
		description: 'A simple React weather app.',
		techStack: [
			{ name: 'React', icon: react },
			{ name: 'Vercel', icon: vercel },
		],
		live: 'https://weather-a0yriosp6-ben-s-projects-3a069c6e.vercel.app/',
		code: 'https://github.com/benhensor/weather-app.git',
	},
	{
		key: 8,
		title: 'Kanban Task Management App',
		logo: null,
		image: kanban1,
		description:
			'A Frontend Mentor PWA challenge built with React and Styled Components.',
		techStack: [
			{ name: 'React', icon: react },
			{ name: 'TypeScript', icon: typescript },
			{ name: 'Taliwind CSS', icon: tailwind },
			{ name: 'Vercel', icon: vercel },
		],
		live: 'https://kanban-pwa-indol.vercel.app/',
		code: 'https://github.com/benhensor/kanban-pwa',
	},
	{
		key: 9,
		title: 'Jam',
		logo: null,
		image: jam1,
		description: 'A playlist generator powered by the Spotify API.',
		techStack: [
			{ name: 'React', icon: react },
			{ name: 'Vercel', icon: vercel },
		],
		live: 'https://jam-client.vercel.app/',
		code: 'https://github.com/benhensor/jam',
	},
	{
		key: 10,
		title: 'Flashcard Quiz App',
		logo: null,
		image: flashcards1,
		description: 'A quiz app making use of the Redux Toolkit in React.',
		techStack: [
			{ name: 'React', icon: react },
			{ name: 'Redux', icon: redux },
			{ name: 'Vercel', icon: vercel },
		],
		live: 'https://bh-flashcards-app.vercel.app/',
		code: 'https://github.com/benhensor/codecademy-react/tree/main/flashcards',
	},
	{
		key: 11,
		title: 'Reddit Clone',
		logo: null,
		image: reddit1,
		description:
			'A Reddit clone built in React with Redux using the Reddit API.',
		techStack: [
			{ name: 'React', icon: react },
			{ name: 'Redux', icon: redux },
			{ name: 'Vercel', icon: vercel },
		],
		live: 'https://reddit-api-bh.vercel.app/',
		code: 'https://github.com/benhensor/reddit-api',
	},
]

export {
	backend,
	design,
	devops,
	frontend,
	languages,
	testing,
	tools,
	tech,
  heroPhrases,
	aboutInfo,
	projects,
}
