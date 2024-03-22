import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import { AnimatePresence } from 'framer-motion'
import { Page } from './styles/GlobalStyles'
import Header from './components/header/Header'
import Hero from './components/heroPage/Hero'
import About from './pages/AboutPage'
import TechStack from './pages/TechStackPage'
import Projects from './pages/ProjectsPage'
import Contact from './pages/ContactPage'

export default function App() {
	const aboutRef = useRef(null)
	const techStackRef = useRef(null)
	const projectsRef = useRef(null)
	const contactRef = useRef(null)

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
				<Header 
					scrolled={scrolled}
					scrollToRef={{ about: aboutRef, tech: techStackRef, projects: projectsRef, contact: contactRef }}
					/>
				<Hero scrolled={scrolled} />
				<AppContent>
					<Page>
						<About ref={aboutRef} scrolled={scrolled}/>
					</Page>
					<Page>
						<TechStack ref={techStackRef} />
					</Page>
					<Page>
						<Projects ref={projectsRef} />
					</Page>
					<Page>
						<Contact ref={contactRef} />
					</Page>
				</AppContent>
			</AppContainer>
		</AnimatePresence>
	)
} 

const AppContainer = styled.main`
	display: flex;
	flex-direction: column;
`

const AppContent = styled.div`
	margin-top: 4em;
	scroll-snap-type: y mandatory;
	overflow-y: scroll;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100vh;
`