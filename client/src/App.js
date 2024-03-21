import React from 'react'
import styled from 'styled-components'
import { AnimatePresence } from 'framer-motion'
import Header from './components/header/Header'
import TechStackPage from './pages/TechStackPage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'

export default function App() {
	return (
		<AnimatePresence>
			<Container>
				<Header />
				<Content>
					<TechStackPage />
					<AboutPage />
					<ProjectsPage />
					<ContactPage />
				</Content>
			</Container>
		</AnimatePresence>
	)
}

const Container = styled.main`
	display: flex;
	flex-direction: column;
	height: 1000vh;
	scroll-snap-type: y mandatory;
	overflow-y: scroll;
`

const Content = styled.div`
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
