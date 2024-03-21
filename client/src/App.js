import React from 'react'
import styled from 'styled-components'
import { AnimatePresence } from 'framer-motion'
import Header from './components/header/Header'
import About from './components/about/About'
import TechStack from './components/tech/TechStack'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'

export default function App() {
	return (
		<AnimatePresence>
			<AppContainer>
				<Header />
				<AppContent>
					<About />
					<TechStack />
					<Projects />
					<Contact />
				</AppContent>
			</AppContainer>
		</AnimatePresence>
	)
}

const AppContainer = styled.main`
	display: flex;
	flex-direction: column;
	height: 1000vh;
	scroll-snap-type: y mandatory;
	overflow-y: scroll;
`

const AppContent = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	overflow-y: scroll;
	padding-top: 96px;
`
