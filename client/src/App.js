import React from 'react'
import styled from 'styled-components'
import { AnimatePresence } from 'framer-motion'
import Header from './components/header/Header'
import TechStack from './components/tech/TechStack'
import Projects from './components/projects/Projects'
import About from './components/about/About'
import Contact from './components/contact/Contact'

export default function App() {
	return (
		<AnimatePresence>
			<Container>
				<Header />
				<Main>
					<TechStack />
					<About />
					<Projects />
					<Contact />
				</Main>
			</Container>
		</AnimatePresence>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 1200vh;
	scroll-snap-type: y mandatory;
`

const Main = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	position: relative;
`
