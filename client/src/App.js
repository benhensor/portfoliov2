import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { AnimatePresence } from 'framer-motion'
import Header from './components/header/Header'
import Hero from './components/heroPage/Hero'
import HeroPage from './pages/HeroPage'
import TechStackPage from './pages/TechStackPage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'

export default function App() {

	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const onScroll = () => {

		if (window.scrollY > 50) {
			console.log('scrolled', scrolled)
				setScrolled(true)
		} else {
				setScrolled(false)
		}
		}
		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [scrolled])

	return (
		<AnimatePresence>
			<AppContainer>
				<Header scrolled={scrolled}/>
				<Hero scrolled={scrolled} />
				<AppContent>
					
					<AboutPage />
					<TechStackPage />
					<ProjectsPage />
					<ContactPage />
				</AppContent>
			</AppContainer>
		</AnimatePresence>
	)
} 

const AppContainer = styled.main`
	display: flex;
	flex-direction: column;
	// height: 100vh; // hero scrolling only works with 1000vh. 100vh makes the page scroll snapping work
	position: relative;
`

const AppContent = styled.div`
	margin-top: 4em;
	scroll-snap-type: y mandatory;
	overflow-y: scroll;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 400vh;
`
